import argparse, hashlib, json, re, os, shutil, tempfile
from pathlib import Path
p = argparse.ArgumentParser()
p.add_argument('html', type=Path)
p.add_argument('--restore', action='store_true')
args = p.parse_args()
path = args.html
backup = path.with_name(path.name + '.before-tv-smoother')
marker = 'LYRION-TV-SMOOTHER-1'
def write(data):
    with tempfile.NamedTemporaryFile(dir=path.parent, delete=False) as f:
        temp = Path(f.name)
        f.write(data)
    try:
        shutil.copystat(path, temp)
        os.replace(temp, path)
    finally:
        if temp.exists(): temp.unlink()
if args.restore:
    if not backup.is_file(): p.error('No backup found')
    write(backup.read_bytes())
    print('Restored previous HTML')
    raise SystemExit
html = path.read_bytes().decode('utf-8')
if marker in html:
    print('Smoother test already installed')
    raise SystemExit
def once(s, old, new):
    if s.count(old) != 1: p.error('Unexpected script layout; no changes written')
    return s.replace(old,new,1)
if 'LYRION-TV-SINGLE-CONTEXT-1' not in html or 'TV-AUDIO-DIAG:START' not in html:
    p.error('Install the single-context patch and Blue diagnostics first')
old = 'function mainThreadOutput(ctx, size = 8192) {'
html = once(html, old, """/* LYRION-TV-SMOOTHER-1 */
  window.lyrionTVSmooth = window.lyrionTVSingleContext && /[?&]tvsmooth=1(?:&|$)/.test(location.search);
  window.lyrionTVLargeBuffer = window.lyrionTVSmooth && /[?&]tvbuffer=16384(?:&|$)/.test(location.search);
  function mainThreadOutput(ctx, size = window.lyrionTVLargeBuffer ? 16384 : 8192) {""")
html = once(html, '        var list = candidates();\n        if (list.indexOf(current) < 0)', """        if (window.lyrionTVSmooth && current && current.getAttribute('tabindex') !== '-1' && visible(current) && scope().contains(current)) { return; }
        var list = candidates();
        if (list.indexOf(current) < 0)""")
html = once(html, '    sp._tvAudioObserved = true;', """    sp._tvAudioObserved = true;
    var last = null;
    state.delayed = 0;
    state.maxGap = 0;""")
html = once(html, '      var channel = e.outputBuffer.getChannelData(0)', """      if (window.lyrionTVSmooth) {
        var now = performance.now();
        var period = 1000 * e.outputBuffer.length / e.outputBuffer.sampleRate;
        if (last !== null && o.node && o.node.core && o.node.core.playing && !document.hidden) {
          var gap = now - last;
          if (gap > period * 1.5) { state.delayed++; state.maxGap = Math.max(state.maxGap, gap); }
        }
        last = now;
        if (!panel) { return; }
      }
      var channel = e.outputBuffer.getChannelData(0)""")
html = once(html, "    if (p && p.tracks && p.tracks.length) {", """    if (window.lyrionTVSmooth && o && o.node && o.node.sp) {
      lines.push('Smooth mode: ' + o.node.sp.bufferSize + ' frames | late callbacks: ' + state.delayed + ' | largest late gap: ' + Math.round(state.maxGap) + ' ms');
    }
    if (p && p.tracks && p.tracks.length) {""")
html = once(html, "    text.textContent = lines.join('\\n');", """    var report = lines.join('\\n');
    if (text.textContent !== report) { text.textContent = report; }""")
if not backup.exists(): shutil.copy2(path, backup)
write(html.encode('utf-8'))
print('Installed. Use ?tvsingle=1&tvsmooth=1 in the TV launcher.')
