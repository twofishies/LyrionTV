#!/usr/bin/env python3
import argparse
from pathlib import Path
import re
import shutil
p=argparse.ArgumentParser(description='Add reversible on-screen LyrionJS TV audio diagnostics.')
p.add_argument('html',type=Path)
p.add_argument('--restore',action='store_true')
a=p.parse_args()
b=a.html.with_name(a.html.name+'.before-tv-audio-diagnostics')
if a.restore:
    if not b.exists():p.error('No backup found')
    shutil.copy2(b,a.html)
    print('Restored pre-audio-diagnostic HTML')
    raise SystemExit
html=a.html.read_bytes().decode('utf-8')
if 'LYRION-TV-COMPAT:START' not in html:p.error('Apply TV compatibility 1.0.1 first; no changes written')
source=(Path(__file__).resolve().parent.parent/'server/audio-diagnostics.js').read_text()
start,end='<!-- TV-AUDIO-DIAG:START -->','<!-- TV-AUDIO-DIAG:END -->'
block=start+'\n<script>\n'+source+'\n</script>\n'+end
pattern=re.compile(re.escape(start)+r'.*?'+re.escape(end),re.S)
if start in html:
    if not pattern.search(html):p.error('Incomplete diagnostic marker; no changes written')
    html=pattern.sub(lambda m:block,html)
else:
    # Register Blue before the other navigation listeners, and retain early UTF-8 detection.
    head=re.search(r'<head\b[^>]*>',html,re.I)
    if not head:p.error('No head element')
    html=html[:head.end()]+'\n<meta charset="utf-8">\n'+block+html[head.end():]
if not b.exists():shutil.copy2(a.html,b)
a.html.write_bytes(html.encode('utf-8'))
print('Installed. Restart LMS, fully relaunch TV app, then press Blue while silently playing.')
