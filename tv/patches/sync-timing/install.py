import hashlib, argparse, hashlib, json, re, os, shutil, tempfile
from pathlib import Path
p = argparse.ArgumentParser()
p.add_argument('html', type=Path)
p.add_argument('--restore', action='store_true')
args = p.parse_args()
path = args.html
backup = path.with_name(path.name + '.before-sync-timing')
marker = 'LYRION-TV-SYNC-TIMING-1'
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
    print('Sync timing update already installed')
    raise SystemExit
def once(s, old, new):
    if s.count(old) != 1: p.error('Unexpected script layout; no changes written')
    return s.replace(old,new,1)
if 'LYRION-TV-SCHEDULED-1' not in html:
    p.error('Install the Scheduled PCM prototype first')
pattern = re.compile(r'(\/\* LYRION-TV-SCHEDULED-1 \*\/\n)(.*?)(\n  function mainThreadOutput\()', re.S)
hits = list(pattern.finditer(html))
if len(hits) != 1 or hashlib.sha256(hits[0][2].encode()).hexdigest() != '0f74d92eb16fb918e304b28d846eb05d9268ee64b5e6f4729d79abf5bd293ad2':
    p.error('Expected the original Scheduled PCM prototype; no changes written')
source = Path(__file__).with_name('scheduled.js').read_text(encoding='utf-8')
if re.search(r'</script', source, re.I): p.error('Invalid scheduler script')
html = pattern.sub(lambda m: m[1] + '/* LYRION-TV-SYNC-TIMING-1 */\n' + source + m[3], html)
html = once(html, '    _ctxTimeAt(ms) {\n      const c = this.ctx;', """    _ctxTimeAt(ms) {
      const c = this.ctx;
      if (this.node && this.node.clockAt) {
        const calibrated = this.node.clockAt(ms);
        if (calibrated !== null) { return calibrated; }
      }""")
html = once(html, "      var schedule = o.node.scheduleInfo();", """      var schedule = o.node.scheduleInfo();
      lines.push('Sync corrections: ' + schedule.corrections + ' | last: ' + schedule.lastCorrection);
      lines.push('Output timing: ' + (schedule.latency === null ? 'auto' : schedule.latency + ' ms override') + ' | API latency: ' + schedule.apiLatency + ' ms | timestamp API: ' + schedule.timestamp);""")
if not backup.exists(): shutil.copy2(path, backup)
write(html.encode('utf-8'))
print('Installed. Keep the existing Scheduled PCM URL.')
