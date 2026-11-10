#!/usr/bin/env python3
"""Apply a verified Chrome 53 compatibility build to LyrionJS 0.2.34."""
import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import shutil
import tempfile

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('html', type=Path)
parser.add_argument('--check', action='store_true', help='Validate source without changing anything')
parser.add_argument('--restore', action='store_true', help='Restore pre-compatibility backup, discarding later changes')
a = parser.parse_args()
p = a.html
backup = p.with_name(p.name + '.before-tv-compat-1.0.1')
if a.restore:
    if not backup.exists(): parser.error('No compatibility backup exists')
    if not a.check: shutil.copy2(backup, p)
    print('Backup available' if a.check else 'Restored: ' + str(p))
    raise SystemExit
base = Path(__file__).resolve().parent.parent
manifest = json.loads((base / 'compat/manifest.json').read_text())
html = p.read_bytes().decode('utf-8')
def digest(s): return hashlib.sha256(s.encode('utf-8')).hexdigest()
for script_id, info in manifest['scripts'].items():
    pattern = re.compile(r'(<script\b[^>]*\bid=["\']' + re.escape(script_id) + r'["\'][^>]*>)(.*?)(</script\s*>)', re.S | re.I)
    matches = list(pattern.finditer(html))
    if len(matches) != 1: parser.error('Expected exactly one script: ' + script_id + '; no changes written')
    source_hash = digest(matches[0].group(2))
    if source_hash not in (info['sourceSha256'], info['outputSha256']):
        parser.error(script_id + ' differs from the LMS version used for this build; no changes written. Supply the current HTML for a matching build.')
    replacement = (base / ('compat/' + script_id + '.js')).read_text(encoding='utf-8')
    if digest(replacement) != info['outputSha256']: parser.error('Damaged compatibility bundle: ' + script_id)
    html = pattern.sub(lambda m: m.group(1) + replacement + m.group(3), html)
# Supersede the older, always-on navigation script found on this LMS server.
legacy = '// WEBOS_TV_SPATIAL_NAV_V1'
guard = "\n  if (/[?&]tvnav=[01](?:&|$)/.test(location.search)) { return; } // TV_COMPAT_GUARD"
if legacy in html and 'TV_COMPAT_GUARD' not in html:
    html = html.replace(legacy, legacy + guard)
# Replace the first wrapper's navigation block, keeping its backup/polyfill intact.
old = re.compile(r'<!-- LYRION-TV-NAV:START -->.*?<!-- LYRION-TV-NAV:END -->', re.S)
html = old.sub('', html)
start, end = '<!-- LYRION-TV-COMPAT:START -->', '<!-- LYRION-TV-COMPAT:END -->'
polyfills = (base / 'compat/polyfills.js').read_text(encoding='utf-8')
diag = (base / 'server/tv-diagnostics.js').read_text(encoding='utf-8')
nav = (base / 'server/tv-navigation.js').read_text(encoding='utf-8')
css = (base / 'server/tv-layout.css').read_text(encoding='utf-8')
bootstrap = "(function(){if (!/(?:\\?|&)tvnav=[01](?:&|$)/.test(location.search)) return; document.documentElement.setAttribute('data-tv-compat','1.0.1');\n" + polyfills + '\n}());\n'
script = diag + '\n' + bootstrap + '\n' + nav
if re.search(r'</script', script, re.I): parser.error('Unexpected script terminator in bundle')
block = start + '\n<meta charset="utf-8">\n<script>\n' + script + '\n</script>\n' + end
existing = re.compile(re.escape(start) + r'.*?' + re.escape(end), re.S)
if start in html:
    if not existing.search(html): parser.error('Incomplete compatibility patch marker')
    html = existing.sub(lambda m: block, html)
else:
    head = re.search(r'<head\b[^>]*>', html, re.I)
    if not head: parser.error('No HTML head found')
    html = html[:head.end()] + '\n' + block + html[head.end():]
# CSS must come after the application's styles to override them.
style_id = 'lyrion-tv-compat-layout'
html = re.sub(r'<style id="' + style_id + r'">.*?</style>', '', html, flags=re.S)
# Remove only our own separator newline on repeat application.
html = html.replace('\n\n</head>', '\n</head>')
html = re.sub(r'</head\s*>', lambda m: '<style id="' + style_id + '">\n' + css + '</style>\n' + m.group(0), html, count=1, flags=re.I)
if a.check:
    print('Source matches: LyrionJS ' + manifest['lyrionVersion'] + '; safe to apply this compatibility build')
    raise SystemExit
if not backup.exists(): shutil.copy2(p, backup)
fd, temp = tempfile.mkstemp(prefix='.lyrion-tv-', dir=str(p.parent))
try:
    with os.fdopen(fd, 'wb') as out: out.write(html.encode('utf-8'))
    shutil.copystat(p, temp)
    os.replace(temp, p)
finally:
    if os.path.exists(temp): os.unlink(temp)
print('Applied TV compatibility 1.0.1:', p)
print('Backup:', backup)
