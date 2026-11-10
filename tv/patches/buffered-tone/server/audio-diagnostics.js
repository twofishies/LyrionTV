/* LyrionJS TV audio diagnostics 1.0.3. No automatic tones or setting changes. */
(function () {
  'use strict';
  if (!/(?:\?|&)tvnav=1(?:&|$)/.test(location.search) || window.lyrionTVAudio) { return; }
  var panel, text, timer, lastFocus, message = '', audio, testContext;
  var state = window.lyrionTVAudio = { callbacks: 0, peak: 0, nonFinite: 0, playbackTime: null };
  function app() { return window.LyrionJS && window.LyrionJS.S; }
  function tell(s) { message = s; paint(); }
  function number(n) { return typeof n === 'number' && isFinite(n) ? n.toFixed(3) : String(n); }
  function observe(o) {
    var sp = o && o.node && o.node.sp;
    if (!sp || sp._tvAudioObserved) { return; }
    var original = sp.onaudioprocess;
    sp._tvAudioObserved = true;
    sp.onaudioprocess = function (e) {
      state.callbacks++; state.playbackTime = e.playbackTime;
      try { if (original) { original.call(this, e); } }
      catch (err) { message = 'Output callback error: ' + err.message; throw err; }
      var channel = e.outputBuffer.getChannelData(0), peak = 0, bad = 0;
      for (var i = 0; i < channel.length; i++) {
        if (!isFinite(channel[i])) { bad++; } else { peak = Math.max(peak, Math.abs(channel[i])); }
      }
      state.peak = peak; state.nonFinite = bad;
    };
  }
  function paint() {
    if (!text) { return; }
    var s = app(), o = s && s.output, p = s && s.local, lines = [];
    observe(o);
    lines.push('LyrionJS TV audio diagnostic 1.0.3 — Blue closes');
    lines.push('Output: ' + (s && s.outputMode || 'not selected') + ' / ' + (o && o.engine || 'not opened'));
    if (p) { lines.push('Player: ' + p.state + ' | connected ' + p.connected + ' | enabled ' + p.enabled + ' | error ' + (p.lastError || 'none')); }
    if (s) { lines.push('Local ID: ' + s.localId + ' | controlled ID: ' + s.target); }
    if (o) {
      lines.push('Gain ' + number(o.gain) + ' | output level ' + number(o.level) + ' | muted ' + o.muted + ' | needs gesture ' + o.needsGesture);
      if (o.ctx) { lines.push('Context ' + o.ctx.state + ' | clock ' + number(o.ctx.currentTime) + ' s | ' + o.ctx.sampleRate + ' Hz | source ' + o.srcRate); }
      else { lines.push('No Web Audio context'); }
      try { lines.push('Queued ' + number(o.queuedSeconds()) + ' s | pending ' + (o.pending && o.pending.length) + ' | posts ' + (o.posts && o.posts.length)); } catch (ignore) {}
      if (o.rep) { lines.push('Core: playing ' + o.rep.playing + ' | queued ' + o.rep.queued + ' | pos ' + o.rep.pos + ' | under ' + o.rep.under); }
      if (o.el) { lines.push('Media: paused ' + o.el.paused + ' | time ' + number(o.el.currentTime) + ' | muted ' + o.el.muted + ' | volume ' + number(o.el.volume) + ' | error ' + (o.el.error && o.el.error.code)); }
    }
    lines.push('ScriptProcessor callbacks: ' + state.callbacks + ' | peak: ' + number(state.peak) + ' | bad samples: ' + state.nonFinite + ' | playbackTime: ' + number(state.playbackTime));
    if (p && p.tracks && p.tracks.length) {
      var t = p.tracks[p.tracks.length - 1];
      lines.push('Track: ' + t.format + ' | bytes ' + t.bytes + ' | decoded ' + t.decoded + ' | stream open ' + t.streamOpen);
    }
    if (message) { lines.push(message); }
    text.textContent = lines.join('\n');
  }
  function resume() {
    try {
      var s = app(), o = s && s.output;
      if (!o) { tell('Player output has not been created.'); return; }
      o.unlock();
      if (o.ctx && o.ctx.resume) { Promise.resolve(o.ctx.resume()).then(function () { tell('Resume completed: ' + o.ctx.state); }, function (e) { tell('Resume failed: ' + e.message); }); }
      else { tell('Unlock requested.'); }
    } catch (e) { tell('Unlock failed: ' + e.message); }
  }
  var toneSource;
  function tone() {
    try {
      if (toneSource) { try { toneSource.stop(); } catch (ignore) {} }
      var s = app(), context = s && s.output && s.output.ctx;
      var path = context ? 'player context' : 'fresh context';
      if (!context) { context = testContext || (testContext = new (window.AudioContext || window.webkitAudioContext)()); }
      var buffer = context.createBuffer(2, 2 * context.sampleRate, context.sampleRate);
      for (var c = 0; c < 2; c++) {
        var data = buffer.getChannelData(c);
        for (var i = 0; i < data.length; i++) {
          data[i] = 0.04 * Math.sin(2 * Math.PI * 440 * i / context.sampleRate) * Math.min(1, i / 500, (data.length - i) / 500);
        }
      }
      var resumed = context.resume();
      var source = toneSource = context.createBufferSource();
      source.buffer = buffer; source.connect(context.destination);
      source.onended = function () {
        source.disconnect();
        if (toneSource !== source) { return; }
        toneSource = null;
        tell('Buffered tone finished: ' + path + ' at ' + context.sampleRate + ' Hz');
        if (testContext === context) { testContext = null; context.close(); }
      };
      source.start();
      tell('Buffered tone started: ' + path + ' at ' + context.sampleRate + ' Hz');
      if (resumed && resumed.catch) { resumed.catch(function (e) { if (toneSource === source) { tell('Tone resume failed: ' + e.message); } }); }
    } catch (e) { tell('Buffered tone failed: ' + e.message); }
  }
  function wav() {
    // A low-level 440 Hz PCM WAV, 0.3 seconds. No network or LMS dependency.
    var rate = 44100, length = Math.floor(rate * 0.3), bytes = new Uint8Array(44 + length * 2), view = new DataView(bytes.buffer);
    function word(at, value) { for (var j = 0; j < value.length; j++) { bytes[at + j] = value.charCodeAt(j); } }
    word(0,'RIFF'); view.setUint32(4,36 + length * 2,true); word(8,'WAVE'); word(12,'fmt ');
    view.setUint32(16,16,true); view.setUint16(20,1,true); view.setUint16(22,1,true); view.setUint32(24,rate,true); view.setUint32(28,rate * 2,true); view.setUint16(32,2,true); view.setUint16(34,16,true); word(36,'data'); view.setUint32(40,length * 2,true);
    for (var i = 0; i < length; i++) { var fade = Math.min(1,i/400,(length-i)/400); view.setInt16(44+i*2,Math.round(950 * fade * Math.sin(2*Math.PI*440*i/rate)),true); }
    var binary = ''; for (i = 0; i < bytes.length; i++) { binary += String.fromCharCode(bytes[i]); }
    if (!audio) { audio = document.createElement('audio'); audio.style.display='none'; document.body.appendChild(audio); }
    audio.src = 'data:audio/wav;base64,' + btoa(binary); audio.volume = 1;
    audio.onerror = function () { tell('Native WAV error: ' + (audio.error && audio.error.code)); };
    try { var result = audio.play(); if (result && result.then) { result.then(function () { tell('Native WAV play accepted. Did you hear the tone?'); }, function (e) { tell('Native WAV play failed: ' + e.message); }); } else { tell('Native WAV play requested. Did you hear the tone?'); } }
    catch (e) { tell('Native WAV failed: ' + e.message); }
  }
  function close() {
    clearInterval(timer);
    if (panel) { panel.parentNode.removeChild(panel); panel = text = null; }
    if (lastFocus && document.documentElement.contains(lastFocus)) { lastFocus.focus(); }
  }
  function open() {
    if (!document.body) { return; }
    lastFocus = document.activeElement;
    panel = document.createElement('section'); panel.setAttribute('role','dialog'); panel.setAttribute('aria-modal','true'); panel.setAttribute('aria-label','Audio diagnostics');
    panel.style.cssText='position:fixed;left:3%;right:3%;top:5%;bottom:12%;overflow:auto;background:#101828;color:white;border:4px solid #48baff;padding:22px;z-index:2147483647;font:23px sans-serif';
    text = document.createElement('pre'); text.style.cssText='white-space:pre-wrap;font:20px monospace'; panel.appendChild(text);
    var first;
    [['Resume / enable sound',resume],['Buffered Web Audio tone',tone],['Native WAV test tone',wav],['Close',close]].forEach(function (spec) {
      var b = document.createElement('button'); b.textContent=spec[0]; b.style.cssText='font:22px sans-serif;padding:14px;margin:8px;background:#29374e;color:white'; b.onclick=spec[1]; panel.appendChild(b); if (!first) { first=b; }
    });
    document.body.appendChild(panel); paint(); first.focus(); timer=setInterval(paint,1000);
  }
  window.addEventListener('keydown',function(e) {
    // Preserve the app's document-level unlock handler before TV navigation consumes the key.
    var s = app(), output = s && s.output;
    if (output && output.unlock) { try { output.unlock(); } catch (err) { message = 'Key unlock failed: ' + err.message; } }
    if (e.keyCode===406 || (panel && e.keyCode===461)) { e.preventDefault();e.stopImmediatePropagation();if(panel){close();}else{open();} }
  },true);
}());
