import argparse, hashlib, json, re, os, shutil, tempfile
from pathlib import Path
p = argparse.ArgumentParser()
p.add_argument('html', type=Path)
p.add_argument('--restore', action='store_true')
args = p.parse_args()
path = args.html
backup = path.with_name(path.name + '.before-scheduled-audio')
marker = 'LYRION-TV-SCHEDULED-1'
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
    print('Scheduled audio test already installed')
    raise SystemExit
def once(s, old, new):
    if s.count(old) != 1: p.error('Unexpected script layout; no changes written')
    return s.replace(old,new,1)
if 'LYRION-TV-SINGLE-CONTEXT-1' not in html or 'TV-AUDIO-DIAG:START' not in html:
    p.error('Install single-context mode and Blue diagnostics first')
pattern = re.compile(r'(<script id="lj-lib">)(.*?)(</script>)', re.S)
def library(m):
    lib = m[2]
    source = Path(__file__).with_name('scheduled.js').read_text(encoding='utf-8')
    if re.search(r'</script', source, re.I): p.error('Invalid scheduler script')
    entry = re.search(r'  function mainThreadOutput\(ctx, size = [^\n]+\) \{', lib)
    if not entry: p.error('Expected LyrionJS compatibility output function')
    old = entry[0]
    lib = once(lib, old, '/* LYRION-TV-SCHEDULED-1 */\n' + source + '\n' + old + "\n    if (window.lyrionTVSingleContext && /[?&]tvschedule=1(?:&|$)/.test(location.search)) { return tvScheduledOutput(ctx); }")
    lib = once(lib, "_this.engine = 'ScriptProcessor';", "_this.engine = node.scheduleInfo ? 'Scheduled PCM' : 'ScriptProcessor';")
    lib = once(lib, '      const fa = t * this.rate;', '      const fa = t * this.rate;\n      if (this.node && this.node.audible) { return this.node.audible(fa); }')
    lib = once(lib, '      if (this.node) this.node.port.onmessage = null;', '      if (this.node) { this.node.port.onmessage = null; if (this.node.scheduleInfo) { this.node.disconnect(); } }')
    return m[1] + lib + m[3]
if len(list(pattern.finditer(html))) != 1: p.error('Expected exactly one lj-lib script')
html = pattern.sub(library, html)
html = once(html, "    if (p && p.tracks && p.tracks.length) {", """    if (o && o.node && o.node.scheduleInfo) {
      var schedule = o.node.scheduleInfo();
      lines.push('Scheduled ahead: ' + number(schedule.ahead) + ' s | schedule gaps: ' + schedule.gaps + ' | error: ' + (schedule.error || 'none'));
    }
    if (p && p.tracks && p.tracks.length) {""")
if not backup.exists(): shutil.copy2(path, backup)
write(html.encode('utf-8'))
print('Installed. Add ?tvsingle=1&tvschedule=1 to the TV launcher URL.')
