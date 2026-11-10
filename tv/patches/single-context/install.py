import argparse, hashlib, json, re, os, shutil, tempfile
from pathlib import Path
p = argparse.ArgumentParser()
p.add_argument('html', type=Path)
p.add_argument('--restore', action='store_true')
args = p.parse_args()
path = args.html
backup = path.with_name(path.name + '.before-single-context')
marker = 'LYRION-TV-SINGLE-CONTEXT-1'
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
    print('Single-context test already installed')
    raise SystemExit
manifest = json.loads(Path(__file__).with_name('manifest.json').read_text())
def once(s, old, new):
    if s.count(old) != 1: p.error('Unexpected script layout; no changes written')
    return s.replace(old,new,1)
def patch_script(html, name, transform):
    pattern = re.compile(r'(<script id="' + name + r'">)(.*?)(</script>)', re.S)
    hits = list(pattern.finditer(html))
    if len(hits) != 1 or hashlib.sha256(hits[0][2].encode()).hexdigest() != manifest['scripts'][name]['outputSha256']:
        p.error(name + ' does not match compatibility build 1.0.1; no changes written')
    return pattern.sub(lambda m: m[1] + transform(m[2]) + m[3], html)
def library(s):
    flag = '''/* LYRION-TV-SINGLE-CONTEXT-1 */
window.lyrionTVSingleContext = /[?&]tvnav=1(?:&|$)/.test(location.search) && /[?&]tvsingle=1(?:&|$)/.test(location.search);
'''
    s = once(s, 'try {\n            ctx = new AudioContext({', 'try {\n            if (window.lyrionTVSingleContext) ctx = new AudioContext();\n            else ctx = new AudioContext({')
    return flag + s
def application(s):
    s = once(s, "const want = store.get('outputMode', S.config && S.config.defaultOutput || 'auto');", "const want = window.lyrionTVSingleContext ? 'webaudio' : store.get('outputMode', S.config && S.config.defaultOutput || 'auto');")
    s = once(s, 'singleContext: isIOS()', 'singleContext: window.lyrionTVSingleContext || isIOS()')
    return once(s, "S.outputMode === 'media' ? Promise.resolve(192000) : LJ.detectMaxRate()", "window.lyrionTVSingleContext ? Promise.resolve(48000) : S.outputMode === 'media' ? Promise.resolve(192000) : LJ.detectMaxRate()")
html = patch_script(html, 'lj-lib', library)
html = patch_script(html, 'lj-app', application)
if "'Output: ' + (s && s.outputMode" in html:
    html = once(html, "'Output: ' + (s && s.outputMode", "'Output: ' + (window.lyrionTVSingleContext ? '[single context] ' : '') + (s && s.outputMode")
if not backup.exists(): shutil.copy2(path, backup)
write(html.encode('utf-8'))
print('Installed. Add ?tvsingle=1 to the LyrionJS URL in the TV launcher.')
