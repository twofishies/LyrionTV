import hashlib, argparse, hashlib, json, re, os, shutil, tempfile
from pathlib import Path
p = argparse.ArgumentParser()
p.add_argument('html', type=Path)
p.add_argument('--restore', action='store_true')
args = p.parse_args()
path = args.html
backup = path.with_name(path.name + '.before-living-room-ui')
marker = 'LYRION-TV-LIVING-ROOM-UI-1'
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
    print('Living room layout already installed')
    raise SystemExit
def once(s, old, new):
    if s.count(old) != 1: p.error('Unexpected script layout; no changes written')
    return s.replace(old,new,1)
if 'LYRION-TV-COMPAT:START' not in html:
    p.error('Install the TV compatibility patch first')
css = Path(__file__).with_name('tv-ui.css').read_text(encoding='utf-8')
if re.search(r'</style', css, re.I): p.error('Invalid layout stylesheet')
if len(re.findall(r'</head\s*>', html, re.I)) != 1: p.error('Expected one HTML head')
block = """<!-- LYRION-TV-LIVING-ROOM-UI-1 -->
<script>
(function () {
  var q = location.search;
  if (/[?&]tvui=0(?:&|$)/.test(q)) { return; }
  var mode = /[?&]tvui=(1|large)(?:&|$)/.exec(q);
  if (!mode && (!/[?&]tvnav=1(?:&|$)/.test(q) || !/WebAppManager/i.test(navigator.userAgent))) { return; }
  document.documentElement.setAttribute('data-lyrion-tv', mode && mode[1] === 'large' ? 'large' : 'normal');
}());
</script>
<style id="lyrion-tv-living-room">
""" + css + "\n</style>\n"
html = re.sub(r'</head\s*>', lambda m: block + m[0], html, count=1, flags=re.I)
if not backup.exists(): shutil.copy2(path, backup)
write(html.encode('utf-8'))
print('Installed. Keep the existing Scheduled PCM URL and fully relaunch the TV app.')
