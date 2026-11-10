"""Add bounded playback traces to the existing Scheduled PCM / Blue diagnostics page."""
import argparse
import os
from pathlib import Path
import re
import shutil
import tempfile

BASE_MARKER = 'LYRION-TV-PERF-1'
MARKER = 'LYRION-TV-PERF-2'
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('html', type=Path)
mode = parser.add_mutually_exclusive_group()
mode.add_argument('--check', action='store_true')
mode.add_argument('--restore', action='store_true')
args = parser.parse_args()
path = args.html.resolve(strict=True)
backup = path.with_name(path.name + '.before-playback-diagnostics-v2')


def once(page, old, new):
    if page.count(old) != 1:
        parser.error('Unexpected LyrionJS layout near ' + repr(old[:90]) + '; no changes written')
    return page.replace(old, new, 1)


def atomic_write(data):
    with tempfile.NamedTemporaryFile(dir=path.parent, delete=False) as handle:
        temp = Path(handle.name)
    try:
        temp.write_bytes(data)
        shutil.copystat(path, temp)
        os.replace(temp, path)
    finally:
        if temp.exists():
            temp.unlink()


def install_base(page):
    if not all(x in page for x in ('TV-AUDIO-DIAG:START', 'LYRION-TV-SYNC-TIMING-1')):
        parser.error('Expected existing Blue diagnostics and sync-timing Scheduled PCM update')
    source = Path(__file__).with_name('performance.js').read_text(encoding='utf-8')
    if re.search(r'</script', source, re.I):
        parser.error('Invalid diagnostics script')
    page = once(page, '<!-- TV-AUDIO-DIAG:START -->', '<script>\n' + source + '\n</script>\n<!-- TV-AUDIO-DIAG:START -->')
    # The hooks use the existing scheduler tick, with no added polling timer.
    page = once(page, 'function tvScheduledOutput(ctx) {', '''function tvScheduledOutput(ctx) {
  var tvProbe = window.lyrionTVPerf && window.lyrionTVPerf.scheduler(ctx);''')
    page = once(page, '''    var now = frame();
    prune(now);''', '''    var now = frame();
    if (tvProbe) tvProbe.before(now,next,queued,playing,earliest,gaps,epoch);
    prune(now);''')
    page = once(page, '''    report(now);
  }
  function command(m) {''', '''    if (tvProbe) tvProbe.after(next,gaps);
    report(now);
  }
  function command(m) {''')
    page = once(page, '      scheduled.push(x); next = x.end;', '      if (tvProbe) tvProbe.recoveryStart(x.start);\n      scheduled.push(x); next = x.end;')
    page = once(page, '''    prune(now);
    try { fill(now); }
    catch (e) { error = e.message; failed = true; }
    if (tvProbe)''', '''    prune(now);
    var tvFill = tvProbe && window.lyrionTVPerf.begin('scheduler-fill');
    try { fill(now); }
    catch (e) { error = e.message; failed = true; }
    finally { if (tvProbe) window.lyrionTVPerf.end(tvFill); }
    if (tvProbe)''')
    page = once(page, '''    var now = frame();
    switch (m.t) {''', '''    var now = frame();
    if (tvProbe) tvProbe.command(m);
    switch (m.t) {''')
    page = once(page, 'disposed = true; clearInterval(timer); halt(frame());', 'if (tvProbe) tvProbe.close();\n    disposed = true; clearInterval(timer); halt(frame());')
    # Track which decoder belongs to each sequence; no URLs, audio samples, or headers logged.
    page = once(page, '      this.decoder = decoder;', '      this.decoder = decoder;\n      if (decoder) decoder._tvSeq = seq;')
    page = once(page, '''    _streamData(track, d) {
''', '''    _streamData(track, d) {
      if (window.lyrionTVPerf) window.lyrionTVPerf.receive(track,d.length);
''')
    page = once(page, '''        track.streamOpen = false;
        this._send(clientFrame('DSCO',''', '''        track.streamOpen = false;
        if (window.lyrionTVPerf) window.lyrionTVPerf.event('stream-close',{seq:track.seq,clean:clean});
        this._send(clientFrame('DSCO',''')
    page = once(page, '''    _failTrack(track, why) {
''', '''    _failTrack(track, why) {
      if (window.lyrionTVPerf) window.lyrionTVPerf.event('track-error',{seq:track.seq,error:String(why).slice(0,200)});
''')
    # Distinguish browser decode promise latency from synchronous join, pump and resample work.
    page = once(page, '''      this.decode(bytes, rate, this.hdr.channels).then(chans => {
        if (this.aborted) return;''', '''      const tvPerf = window.lyrionTVPerf;
      const tvDecode = this._tvDecode = tvPerf && tvPerf.begin('mp3-decode',this._tvSeq);
      this.decode(bytes, rate, this.hdr.channels).then(chans => {
        if (tvPerf) tvPerf.end(tvDecode,{aborted:this.aborted,rate:rate});
        if (this._tvDecode === tvDecode) this._tvDecode = null;
        if (this.aborted) return;''')
    page = once(page, '''      }, () => {
        this.ref = null;
        done();
      }); // a chunk the browser can't decode: skip it''', '''      }, () => {
        if (tvPerf) { tvPerf.end(tvDecode,{error:true}); tvPerf.decodeError(this._tvSeq); }
        if (this._tvDecode === tvDecode) this._tvDecode = null;
        this.ref = null;
        done();
      }); // a chunk the browser can't decode: skip it''')
    page = once(page, '''    _align(x, expect, spf) {
''', '''    _align(x, expect, spf) {
      const tvPerf = window.lyrionTVPerf, tvJoin = tvPerf && tvPerf.begin('mp3-join',this._tvSeq);
      try {
''')
    page = once(page, '''      return best;
    }
  }
  Object.assign(LJ, {
    mp3Header,''', '''      return best;
      } finally { if (tvPerf) tvPerf.end(tvJoin); }
    }
  }
  Object.assign(LJ, {
    mp3Header,''')
    page = once(page, '''      this.pumping = true;
      let again = false;''', '''      this.pumping = true;
      const tvPerf = window.lyrionTVPerf, tvPump = tvPerf && tvPerf.begin('pump');
      let again = false;''')
    page = once(page, '''      } finally {
        this.pumping = false;''', '''      } finally {
        if (tvPerf) tvPerf.end(tvPump);
        this.pumping = false;''')
    page = once(page, '''      if (this.rate !== this.srcRate) chans = resampleCubic(chans, this.srcRate, this.rate, this.rs);''', '''      if (this.rate !== this.srcRate) {
        const tvPerf = window.lyrionTVPerf, tvResample = tvPerf && tvPerf.begin('resample',seq);
        try { chans = resampleCubic(chans, this.srcRate, this.rate, this.rs); }
        finally { if (tvPerf) tvPerf.end(tvResample); }
      }''')
    page = once(page, '''    if (message) { lines.push(message); }''', '''    if (window.lyrionTVPerf) lines = lines.concat(window.lyrionTVPerf.lines());
    if (message) { lines.push(message); }''')
    page = once(page, '''  function close() {
    clearInterval(timer);''', '''  function showPlaybackReport() {
    if (!window.lyrionTVPerf) { tell('Playback trace disabled (tvperf=0).'); return; }
    var existing = panel.querySelector('textarea');
    if (existing) { existing.parentNode.removeChild(existing); return; }
    var box = document.createElement('textarea');
    box.setAttribute('aria-label','Playback diagnostic report'); box.readOnly = true;
    box.style.cssText = 'width:98%;height:220px;font:16px monospace;color:white;background:#101828';
    box.value = JSON.stringify(window.lyrionTVPerf.report(),null,2);
    panel.appendChild(box); box.focus(); box.select();
  }
  function close() {
    clearInterval(timer);''')
    page = once(page, "['Close',close]].forEach(function (spec) {", "['Show playback report',showPlaybackReport],['Close',close]].forEach(function (spec) {")
    page = once(page, '''  function open() {
    if (!document.body) { return; }''', '''  function open() {
    if (!document.body) { return; }
    if (window.lyrionTVPerf) window.lyrionTVPerf.event('diagnostics-panel',{open:true});''')
    page = once(page, '''  function close() {
    clearInterval(timer);''', '''  function close() {
    if (window.lyrionTVPerf) window.lyrionTVPerf.event('diagnostics-panel',{open:false});
    clearInterval(timer);''')
    return page


def update(page):
    source = Path(__file__).with_name('performance.js').read_text(encoding='utf-8')
    if re.search(r'</script', source, re.I):
        parser.error('Invalid diagnostics script')
    if BASE_MARKER not in page:
        page = install_base(page)
    else:
        helper = re.compile(r'<script>\s*/\* LYRION-TV-PERF-1\..*?</script>', re.S)
        if len(list(helper.finditer(page))) != 1:
            parser.error('Expected exactly one v1 playback telemetry script; no changes written')
        page = helper.sub(lambda m: '<script>\n' + source + '\n</script>', page)
    # Observe all join return paths without changing the offset or search algorithm.
    page = once(page, "      const tvPerf = window.lyrionTVPerf, tvJoin = tvPerf && tvPerf.begin('mp3-join',this._tvSeq);", """      const tvPerf = window.lyrionTVPerf, tvJoin = tvPerf && tvPerf.begin('mp3-join',this._tvSeq);
      const tvMatch = (offset, mode, error, energy) => {
        if (tvPerf) this._tvJoinChoice = {offset,expect,mode,error,energy};
        return offset;
      };""")
    page = once(page, '      if (!ref || ref.length < 512) return Math.max(0, expect);',
                "      if (!ref || ref.length < 512) return tvMatch(Math.max(0, expect),'no-reference',null,null);")
    page = once(page, '      if (energy < 1e-6) return Math.max(0, expect);',
                "      if (energy < 1e-6) return tvMatch(Math.max(0, expect),'silence',null,energy);")
    if '      if (lo > hi) return best;' in page:
        page = once(page, '      if (lo > hi) return best;',
                    "      if (lo > hi) return tvMatch(best,'empty-window',null,energy);")
    page = once(page, '''      return best;
      } finally { if (tvPerf) tvPerf.end(tvJoin); }''', '''      return tvMatch(best,'matched',bestErr,energy);
      } finally { if (tvPerf) tvPerf.end(tvJoin); }''')
    page = once(page, '''        chans = chans.slice(0, 2);
        const start = wasFirst ?''', '''        chans = chans.slice(0, 2);
        this._tvJoinChoice = null;
        const start = wasFirst ?''')
    page = once(page, '''          this.ref = out[0].slice(Math.max(0, out[0].length - 512));
          this._emit(rate, out);''', '''          this.ref = out[0].slice(Math.max(0, out[0].length - 512));
          if (tvPerf) tvPerf.chunk(this,{rate:rate,first:wasFirst,final:final,decodedFrames:chans[0].length,
            trimStart:start,trimEnd:chans[0].length-end,newFrames:take.length*spf,
            overlapFrames:overlapFrames,samplesPerFrame:spf},out);
          this._emit(rate, out);''')
    page = once(page, '''      if (tvProbe) tvProbe.recoveryStart(x.start);''', '''      if (tvProbe) { tvProbe.recoveryStart(x.start); tvProbe.buffer(x.start,x.end,x.seq,x.pos); }''')
    page = once(page, "        const tvPerf = window.lyrionTVPerf, tvResample = tvPerf && tvPerf.begin('resample',seq);",
                """        const tvPerf = window.lyrionTVPerf, tvResample = tvPerf && tvPerf.begin('resample',seq);
        const tvInputFrames = chans[0].length, tvPhase = this.rs.pos;""")
    page = once(page, '        finally { if (tvPerf) tvPerf.end(tvResample); }', '''        finally { if (tvPerf) tvPerf.end(tvResample,{inputFrames:tvInputFrames,outputFrames:chans[0].length,
          sourceRate:this.srcRate,outputRate:this.rate,phaseBefore:tvPhase,phaseAfter:this.rs.pos}); }''')
    page = once(page, '''  function showPlaybackReport() {''', '''  function markPlaybackStumble() {
    if (window.lyrionTVPerf) {
      var at = window.lyrionTVPerf.mark();
      tell('Heard stumble marked @' + (at/1000).toFixed(1) + 's since launch. Recent history retained.');
    }
  }
  function showPlaybackReport() {''')
    page = once(page, "['Show playback report',showPlaybackReport]", "['Mark heard stumble',markPlaybackStumble],['Show playback report',showPlaybackReport]")
    return page


if args.restore:
    if not backup.is_file():
        parser.error('No playback diagnostics backup found')
    atomic_write(backup.read_bytes())
    print('Restored the exact pre-diagnostics page')
else:
    page = path.read_bytes().decode('utf-8')
    if MARKER in page:
        print('Playback diagnostics v2 already installed')
    else:
        updated = update(page)
        if args.check:
            print('Page matches. No changes written')
        else:
            if not backup.exists():
                shutil.copy2(path, backup)
            atomic_write(updated.encode('utf-8'))
            print('Installed playback diagnostics v2. Restart LMS and fully relaunch Lyrion TV')
