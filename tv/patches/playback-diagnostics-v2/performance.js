/* LYRION-TV-PERF-1. Bounded playback telemetry; ES5 for webOS 4.x. */
/* LYRION-TV-PERF-2. MP3 join and scheduled-source continuity. */
(function () {
  'use strict';
  if (!/[?&]tvnav=1(?:&|$)/.test(location.search) || /[?&]tvperf=0(?:&|$)/.test(location.search) || window.lyrionTVPerf) return;
  var events = [], samples = [], incidents = [], stats = {}, serial = 0;
  var chunks = [], buffers = [], discontinuities = [], marks = [];
  var started = new Date().toISOString(), origin = performance.now(), lastSample = -1000;
  var totals = {starvations:0, lateTicks:0, maxTickMs:0, decodeErrors:0, lateStarts:0};
  totals.mp3Chunks = 0; totals.joinOffsetChanges = 0; totals.sourceJumps = 0; totals.clockGaps = 0;
  function now() { return performance.now(); }
  function round(n) { return Math.round(n * 10) / 10; }
  function bounded(a, x, n) { a.push(x); if (a.length > n) a.shift(); }
  function age(at, time) { return time == null ? null : round(at - time); }
  function snapshot() {
    var at = now(), s = window.LyrionJS && window.LyrionJS.S, p = s && s.local, o = s && s.output;
    var result = {hidden:!!document.hidden};
    try {
      if (p) {
        result.player = {state:p.state, connected:p.connected, decodeAhead:p.decodeAhead,
          heldSeconds:p.tx && p.tx.heldSeconds(), error:String(p.lastError || '').slice(0,200)};
        result.tracks = (p.tracks || []).slice(-4).map(function (t) {
          var d = t.decoder, rx = t._tvRx;
          return {seq:t.seq, format:t.format, bytes:t.bytes, acked:t.acked, frames:t.frames,
            decoded:t.decoded, dead:t.dead, streamOpen:t.streamOpen,
            rxAgeMs:age(at,rx && rx.at), rxMaxIntervalMs:rx && rx.max,
            decoderBytes:d && d.buffered, busy:d && d.busy,
            decodeAgeMs:age(at,d && d._tvDecode && d._tvDecode.at),
            mp3Frames:d && d.frames && d.frames.length, ended:d && d.ended};
        });
      }
      if (o) {
        result.output = {engine:o.engine, queuedSeconds:o.queuedSeconds(), pending:o.pending.length,
          posts:o.posts.length, sourceRate:o.srcRate, outputRate:o.rate, epoch:o.epoch,
          context:o.ctx && o.ctx.state, clock:o.ctx && o.ctx.currentTime};
        if (o.node && o.node.scheduleInfo) result.output.schedule = o.node.scheduleInfo();
        if (o.node && o.node.audible && o.ctx) result.audible = o.node.audible(Math.floor(o.ctx.currentTime * o.rate));
      }
    } catch (e) { result.snapshotError = String(e.message).slice(0,200); }
    return result;
  }
  function event(type, data) {
    var e = {atMs:round(now()-origin), type:type, data:data};
    bounded(events,e,240); return e;
  }
  function begin(kind, seq) { return {kind:kind,seq:seq,at:now()}; }
  function end(token, detail) {
    if (!token) return;
    var ms = round(now()-token.at), st = stats[token.kind] || (stats[token.kind] = {count:0,totalMs:0,maxMs:0,lastMs:0});
    st.count++; st.totalMs += ms; st.lastMs = ms; st.maxMs = Math.max(st.maxMs,ms);
    if (ms >= 20 || token.kind === 'mp3-decode' || token.kind === 'resample') event(token.kind,{ms:ms,seq:token.seq,detail:detail});
  }
  function chunk(decoder, info, chans) {
    var first = chans[0], count = first.length, prior = decoder._tvJoinPrior, choice = decoder._tvJoinChoice;
    var atFrame = decoder._tvEmitted || 0;
    info.seq = decoder._tvSeq; info.atMs = round(now()-origin);
    info.sourceFrame = atFrame; info.sourcePositionMs = round(atFrame*1000/info.rate);
    info.emittedFrames = count; info.emittedMinusNewFrames = count-info.newFrames;
    if (choice) {
      info.join = {mode:choice.mode,offset:choice.offset,expect:choice.expect,
        shiftFrames:choice.offset-choice.expect,shiftMs:round((choice.offset-choice.expect)*1000/info.rate),
        normalizedError:choice.energy > 0 && choice.error != null ? choice.error/choice.energy : null};
      if (choice.mode === 'matched') {
        info.join.changeFrames = prior == null ? null : info.join.shiftFrames-prior;
        if (prior != null && info.join.shiftFrames !== prior) totals.joinOffsetChanges++;
        decoder._tvJoinPrior = info.join.shiftFrames;
      } else decoder._tvJoinPrior = null;
    }
    // Inspect only endpoints, before gain/transition processing can mutate the decoder's arrays.
    // A waveform step can be musical content. This is evidence for comparison, not an error flag.
    info.waveform = chans.map(function (c, index) {
      var tail = decoder._tvChunkTail && decoder._tvChunkTail[index];
      return {first:c[0],last:c[c.length-1],step:tail ? c[0]-tail.last : null,
        previousSlope:tail && tail.slope,nextSlope:c.length > 1 ? c[1]-c[0] : null};
    });
    decoder._tvChunkTail = chans.map(function (c) { return {last:c[c.length-1],slope:c.length > 1 ? c[c.length-1]-c[c.length-2] : null}; });
    decoder._tvEmitted = atFrame+count; totals.mp3Chunks++;
    bounded(chunks,info,48); event('mp3-chunk',info);
  }
  function receive(track, bytes) {
    var at = now(), old = track._tvRx;
    track._tvRx = {at:at,max:Math.max(old ? old.max : 0,old ? round(at-old.at) : 0)};
    // Delivery intervals alone are not evidence of a network fault: LMS flow-controls the stream.
    if (old && at-old.at >= 500) event('stream-delivery',{seq:track.seq,intervalMs:round(at-old.at),bytes:bytes});
  }
  function scheduler(ctx) {
    var id = ++serial, lastTick = null, previous = null, current = null, gap = null, armed = false;
    var contextState = ctx.state;
    var previousBuffer = null;
    event('scheduler-created',{id:id,rate:ctx.sampleRate});
    return {
      before:function (frame,next,queued,playing,earliest,gaps,epoch) {
        var at = now(), dt = lastTick === null ? 0 : at-lastTick;
        lastTick = at;
        current = {atMs:round(at-origin),scheduler:id,epoch:epoch,context:ctx.state,playing:playing,
          aheadMs:round(Math.max(0,next-frame)*1000/ctx.sampleRate),pcmMs:round(queued*1000/ctx.sampleRate),
          tickMs:round(dt),scheduleGaps:gaps};
        if (contextState !== ctx.state) {
          event('context-state',{from:contextState,to:ctx.state}); contextState = ctx.state;
        }
        if (playing && ctx.state === 'running') {
          totals.maxTickMs = Math.max(totals.maxTickMs,round(dt));
          if (dt > 80) { totals.lateTicks++; event('late-tick',{tick:current,previous:previous}); }
          if (!gap && armed && next > 0 && frame > next && earliest <= frame) {
            gap = {atMs:current.atMs,scheduler:id,epoch:epoch,startFrame:next,
              detectedLateMs:round((frame-next)*1000/ctx.sampleRate),tick:current,previous:previous,
              snapshot:snapshot(),stats:JSON.parse(JSON.stringify(stats)),recent:events.slice(-12),recovered:false};
            totals.starvations++; bounded(incidents,gap,40);
            gap.recentChunks = chunks.slice(-3); gap.recentBuffers = buffers.slice(-6);
            event('audio-starved',{incident:totals.starvations,scheduler:id,lateMs:gap.detectedLateMs});
          }
        }
        if (at-lastSample >= 1000) {
          lastSample = at; bounded(samples,{tick:current,snapshot:snapshot()},120);
        }
      },
      after:function (next,gaps) {
        if (!current) return;
        if (gap && next > ctx.currentTime*ctx.sampleRate) {
          gap.recovered = true;
          gap.scheduleGaps = gaps;
          event('audio-recovered',{scheduler:id,detectedAtMs:gap.atMs}); gap = null;
        }
        previous = current;
      },
      recoveryStart:function (frame) {
        armed = true;
        if (gap && gap.resumeFrame == null) { gap.silenceMs = round((frame-gap.startFrame)*1000/ctx.sampleRate); gap.resumeFrame = frame; }
        var leadMs = round((frame-ctx.currentTime*ctx.sampleRate)*1000/ctx.sampleRate);
        if (leadMs < 0) { totals.lateStarts++; event('late-source-start',{scheduler:id,lateMs:-leadMs,snapshot:snapshot()}); }
      },
      buffer:function (start,end,seq,pos) {
        var b = {atMs:round(now()-origin),scheduler:id,seq:seq,startFrame:start,endFrame:end,
          sourceFrame:pos,frames:end-start,rate:ctx.sampleRate};
        if (previousBuffer && previousBuffer.seq === seq) {
          b.sourceDeltaFrames = pos-(previousBuffer.sourceFrame+previousBuffer.frames);
          b.clockDeltaFrames = start-previousBuffer.endFrame;
          if (b.sourceDeltaFrames !== 0 || b.clockDeltaFrames !== 0) {
            if (b.sourceDeltaFrames !== 0) totals.sourceJumps++;
            if (b.clockDeltaFrames !== 0) totals.clockGaps++;
            var boundary = {previous:previousBuffer,current:b,recentChunks:chunks.slice(-3)};
            bounded(discontinuities,boundary,40); event('scheduled-boundary',boundary);
          }
        }
        bounded(buffers,b,64); previousBuffer = b;
      },
      command:function (m) {
        if (m.t === 'push' || m.t === 'gain') return;
        event('output-command',{scheduler:id,command:m.t,frames:m.frames,frame:m.frame,epoch:m.epoch});
        if (gap) { gap.interruptedBy = m.t; gap = null; }
        armed = false; previous = null; lastTick = null; previousBuffer = null;
      },
      close:function () { if (gap) gap.interruptedBy = 'disposed'; event('scheduler-disposed',{id:id}); }
    };
  }
  function report() {
    // Detach the exported report from the live mutable rings.
    return JSON.parse(JSON.stringify({version:2,started:started,elapsedMs:round(now()-origin),
      userAgent:navigator.userAgent,totals:totals,stats:stats,current:snapshot(),incidents:incidents,samples:samples,events:events,
      mp3Chunks:chunks,scheduledBuffers:buffers,discontinuities:discontinuities,marks:marks}));
  }
  function mark() {
    var m = {atMs:round(now()-origin),snapshot:snapshot(),recent:events.slice(-24),
      chunks:chunks.slice(-6),buffers:buffers.slice(-12),samples:samples.slice(-6)};
    bounded(marks,m,16); event('heard-stumble',{mark:marks.length,atMs:m.atMs});
    return m.atMs;
  }
  function lines() {
    var out = ['Playback trace v2 (since launch): starvations ' + totals.starvations +
      ' | ticks >80ms ' + totals.lateTicks + ' | max tick ' + totals.maxTickMs + 'ms'];
    out.push('Late buffer starts ' + totals.lateStarts + ' | MP3 decode errors ' + totals.decodeErrors);
    if (marks.length) out.push('Heard-stumble markers ' + marks.length + ' | last @' + (marks[marks.length-1].atMs/1000).toFixed(1) + 's');
    Object.keys(stats).forEach(function (kind) {
      var x = stats[kind];
      out.push(kind + ': last/max/avg ' + x.lastMs + '/' + x.maxMs + '/' + round(x.totalMs/x.count) + 'ms (' + x.count + ')');
    });
    out.push('MP3 chunks ' + totals.mp3Chunks + ' | join offset changes ' + totals.joinOffsetChanges +
      ' | scheduler source jumps ' + totals.sourceJumps + ' | clock gaps ' + totals.clockGaps);
    chunks.filter(function (c) { return c.join; }).slice(-3).forEach(function (c) {
      var j = c.join, change = j.changeFrames == null ? '?' : j.changeFrames;
      out.push('Join seq ' + c.seq + ' @track ' + (c.sourcePositionMs/1000).toFixed(3) + 's: ' + j.mode +
        ' offset ' + j.shiftFrames + 'f (' + j.shiftMs + 'ms), change ' + change + 'f | match error ' +
        (j.normalizedError == null ? 'n/a' : j.normalizedError.toExponential(2)) + ' | output-new ' + c.emittedMinusNewFrames + 'f');
    });
    incidents.slice(-3).forEach(function (g) {
      var t = g.snapshot.tracks || [], active = t.filter(function (x) { return !x.decoded && !x.dead; })[0] || t[t.length-1];
      out.push('@' + (g.atMs/1000).toFixed(1) + 's starvation: ' + (g.resumeFrame != null ? g.silenceMs + 'ms' : g.interruptedBy || 'awaiting PCM / end of track') +
        ' | tick ' + g.tick.tickMs + 'ms | PCM ' + g.tick.pcmMs + 'ms | prior ahead ' + (g.previous ? g.previous.aheadMs : '?') + 'ms');
      if (active) out.push('  seq ' + active.seq + ' ' + active.format + ' | stream ' + active.streamOpen +
        ' rx age ' + active.rxAgeMs + 'ms | decoder ' + active.decoderBytes + 'B | busy ' + active.busy + ' (' + active.decodeAgeMs + 'ms)');
    });
    return out;
  }
  window.lyrionTVPerf = {begin:begin,end:end,event:event,receive:receive,scheduler:scheduler,report:report,lines:lines,chunk:chunk,mark:mark,
    decodeError:function (seq) { totals.decodeErrors++; event('mp3-decode-error',{seq:seq}); }};
  document.addEventListener('visibilitychange',function () { event('visibility',{hidden:!!document.hidden}); });
}());
