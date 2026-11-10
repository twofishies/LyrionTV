/* Experimental Web Audio output: schedule PCM ahead on the audio clock. */
function tvScheduledOutput(ctx) {
  var rate = ctx.sampleRate, lead = Math.ceil(rate * 0.060);
  var horizon = Math.ceil(rate * 0.65), block = Math.ceil(rate * 0.18);
  var gain = ctx.createGain();
  gain.connect(ctx.destination);
  var port = {onmessage:null, postMessage:command};
  var queue = [], scheduled = [], queued = 0, next = 0, earliest = 0, epoch = 0, id = 0;
  var playing = false, anchor = null, disposed = false, error = '', gaps = 0, failed = false;
  var corrections = 0, lastCorrection = 'none';
  var latencyParam = /[?&]tvsynclat=(\d{1,4})(?:&|$)/.exec(location.search);
  var latency = latencyParam && +latencyParam[1] <= 1500 ? +latencyParam[1] : null;
  function clockAt(ms) {
    if (latency === null) { return null; }
    return ctx.currentTime + (ms - performance.now() - latency) / 1000;
  }
  var offsets = Object.create(null);
  function frame() { return Math.floor(ctx.currentTime * rate); }
  function position(x, at) {
    return {seq:x.seq, ms:(x.pos + Math.max(0, Math.min(x.n, at - x.start))) * 1000 / rate};
  }
  function audible(at) {
    for (var i = scheduled.length - 1; i >= 0; i--) {
      if (scheduled[i].start <= at) { return position(scheduled[i], at); }
    }
    return anchor;
  }
  function prune(now) {
    while (scheduled.length && scheduled[0].end < now - rate) {
      var x = scheduled.shift();
      anchor = position(x, x.end);
    }
  }
  function halt(now) {
    anchor = audible(now);
    var remaining = [];
    for (var i = 0; i < scheduled.length; i++) {
      var x = scheduled[i], used = Math.max(0, now - x.start);
      if (used >= x.n) { continue; }
      x.source.stop();
      x.source.disconnect();
      remaining.push({seq:x.seq, pos:x.pos, i:used, l:x.l.subarray(0,x.n), r:x.r.subarray(0,x.n)});
      queued += x.n - used;
    }
    queue = remaining.concat(queue);
    scheduled = [];
    next = now;
  }
  // Keep sound already committed near the audio clock. Replace only the later tail.
  function cutAt(cut) {
    var kept = [], remaining = [];
    for (var i = 0; i < scheduled.length; i++) {
      var x = scheduled[i];
      if (x.end <= cut) { kept.push(x); continue; }
      var used = Math.max(0, cut - x.start);
      x.source.stop(cut / rate);
      remaining.push({seq:x.seq, pos:x.pos, i:used, l:x.l.subarray(0,x.n), r:x.r.subarray(0,x.n)});
      queued += x.n - used;
      if (used) { x.n = used; x.end = cut; kept.push(x); }
    }
    queue = remaining.concat(queue);
    scheduled = kept;
    next = cut;
  }
  function correct(m, now) {
    if (!playing || !(m.frames > 0)) { return; }
    corrections++;
    lastCorrection = m.t + ' ' + Math.round(m.frames * 1000 / rate) + ' ms';
    var cut = now + lead;
    cutAt(cut);
    if (m.t === 'pauseFor') {
      earliest = Math.max(cut, earliest) + m.frames;
    } else {
      var n = m.frames;
      while (n && queue.length) {
        var x = queue[0], count = Math.min(n, x.l.length - x.i);
        x.i += count; n -= count; queued -= count;
        if (x.i === x.l.length) { queue.shift(); }
      }
    }
    // Schedule the replacement immediately; the next JS tick need not arrive at the cut.
    try { fill(now); }
    catch (e) { error = e.message; failed = true; }
  }
  function make(n) {
    var first = queue[0], pos = first.pos + first.i, seq = first.seq;
    var l = new Float32Array(n), r = new Float32Array(n), filled = 0;
    // Coalesce decoder chunks of the same track; keep separate timeline entries at boundaries.
    while (filled < n && queue.length && queue[0].seq === seq) {
      var x = queue[0], count = Math.min(n - filled, x.l.length - x.i);
      l.set(x.l.subarray(x.i, x.i + count), filled);
      r.set((x.r || x.l).subarray(x.i, x.i + count), filled);
      x.i += count; filled += count; queued -= count;
      if (x.i === x.l.length) { queue.shift(); }
    }
    return {seq:seq, pos:pos, n:filled, l:l.subarray(0,filled), r:r.subarray(0,filled)};
  }
  function fill(now) {
    if (!playing || failed || ctx.state !== 'running') { return; }
    var limit = now + horizon;
    if (!queue.length || earliest >= limit) { return; }
    if (next < now && next > 0 && earliest <= now && scheduled.length) { gaps++; }
    // Keep adjacent buffers contiguous even when the next timer comes close to the boundary.
    if (next <= now) { next = now + lead; }
    next = Math.max(next, earliest);
    for (var i = 0; i < 8 && queue.length && next < limit; i++) {
      var x = make(Math.min(block, queued));
      var buffer = ctx.createBuffer(2, x.n, rate);
      buffer.getChannelData(0).set(x.l); buffer.getChannelData(1).set(x.r);
      var source = ctx.createBufferSource();
      source.buffer = buffer; source.connect(gain);
      source.onended = function () { this.disconnect(); };
      x.source = source; x.start = next; x.end = next + x.n;
      try { source.start(x.start / rate); }
      catch (e) { source.disconnect(); queue.unshift({seq:x.seq,pos:x.pos,i:0,l:x.l,r:x.r}); queued += x.n; throw e; }
      scheduled.push(x); next = x.end;
    }
  }
  function report(now) {
    if (!port.onmessage) { return; }
    var total = queued;
    for (var i = 0; i < scheduled.length; i++) {
      var x = scheduled[i];
      total += Math.max(0, x.end - Math.max(now, x.start));
    }
    var a = audible(now);
    port.onmessage({data:{t:'pos', frame:now, seq:a ? a.seq : null, pos:a ? Math.round(a.ms * rate / 1000) : 0,
      queued:total, playing:playing && now >= earliest, under:playing && total === 0, lastId:id, epoch:epoch}});
  }
  function tick() {
    if (disposed) { return; }
    var now = frame();
    prune(now);
    try { fill(now); }
    catch (e) { error = e.message; failed = true; }
    report(now);
  }
  function command(m) {
    if (disposed) { return; }
    var now = frame();
    switch (m.t) {
      case 'push':
        if (m.l.length) {
          var pos = offsets[m.seq] || 0;
          queue.push({seq:m.seq,pos:pos,i:0,l:m.l,r:m.r});
          offsets[m.seq] = pos + m.l.length;
          queued += m.l.length;
          // Track sequence numbers are increasing; old offsets are not needed for late reports.
          delete offsets[m.seq - 16];
        }
        id = m.id; break;
      case 'gain':
        if (m.now) { gain.gain.value = m.g; }
        else {
          gain.gain.cancelScheduledValues(ctx.currentTime);
          gain.gain.setTargetAtTime(m.g, ctx.currentTime, 0.01);
        }
        break;
      case 'play': playing = true; earliest = 0; break;
      case 'pause': halt(now); playing = false; earliest = 0; break;
      case 'startAt': halt(now); playing = true; earliest = Math.max(0, m.frame); break;
      case 'pauseFor':
      case 'skip': correct(m, now); break;
      case 'trim':
        halt(now);
        queue = queue.filter(function (x) { return x.seq <= m.keep; });
        queued = queue.reduce(function (sum,x) { return sum + x.l.length - x.i; }, 0);
        Object.keys(offsets).forEach(function (k) { if (+k > m.keep) { delete offsets[k]; } });
        break;
      case 'flush':
        halt(now); playing = false; earliest = 0; queue = []; queued = 0;
        epoch = m.epoch; offsets = Object.create(null); anchor = null; failed = false; error = '';
        break;
    }
  }
  var timer = setInterval(tick, 40);
  return {port:port, audible:audible, clockAt:clockAt, scheduleInfo:function () {
    return {ahead:Math.max(0,next-frame())/rate, gaps:gaps, error:error, corrections:corrections, lastCorrection:lastCorrection, latency:latency, apiLatency:Math.round(1000*((ctx.baseLatency||0)+(ctx.outputLatency||0))), timestamp:typeof ctx.getOutputTimestamp === 'function'};
  }, disconnect:function () {
    if (disposed) { return; }
    disposed = true; clearInterval(timer); halt(frame()); queue = []; gain.disconnect();
  }};
}
