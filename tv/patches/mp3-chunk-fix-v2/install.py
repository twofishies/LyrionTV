"""Add reservoir-aware MP3 history and exact chunk durations for Chromium 53."""
import argparse
import os
from pathlib import Path
import re
import shutil
import tempfile

MARKER = 'LYRION-TV-MP3-CHUNK-2'
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('html', type=Path)
mode = parser.add_mutually_exclusive_group()
mode.add_argument('--check', action='store_true')
mode.add_argument('--restore', action='store_true')
args = parser.parse_args()
path = args.html.resolve(strict=True)
backup = path.with_name(path.name + '.before-mp3-chunk-v2')


def once(page, before, after):
    if page.count(before) != 1:
        parser.error('Unexpected MP3 layout near ' + repr(before[:70]) + '; no changes written')
    return page.replace(before, after, 1)


def asset(name):
    source = Path(__file__).with_name(name).read_text(encoding='utf-8')
    if re.search(r'</script', source, re.I):
        parser.error('Invalid MP3 helper')
    return source


def update(page):
    if 'LYRION-TV-MP3-RESERVOIR-1' not in page:
        page = once(page, '  class Mp3ChunkDecoder extends LJ.Decoder {', asset('history.js') + '\n  class Mp3ChunkDecoder extends LJ.Decoder {')
        page = once(page, '      const OVERLAP = 4,\n        HOLD = 2;', '      const HOLD = 2;')
        page = once(page, '      this.prevTail = take.slice(-OVERLAP);', '      this.prevTail = mp3ReservoirHistory(all, HOLD);')
    page = once(page, '  class Mp3ChunkDecoder extends LJ.Decoder {', asset('duration.js') + '\n  class Mp3ChunkDecoder extends LJ.Decoder {')
    page = once(page, '      const bytes = LJ.concatAll(all.map(f => f.frame));', '      const bytes = mp3DecodeInput(all);')
    page = once(page, '''        if (this.aborted) return;
        chans = chans.slice(0, 2);''', '''        if (this.aborted) return;
        mp3CheckDecodedLength(all.length * spf, chans[0].length, rate);
        chans = chans.slice(0, 2);''')
    if 'TV-AUDIO-DIAG:START' in page:
        page = once(page, '    if (message) { lines.push(message); }', '''    if (window.lyrionTVMp3Fix) {
      var mf = window.lyrionTVMp3Fix;
      lines.push('MP3 chunk fix v2: ' + mf.chunks + ' decodes | short ' + mf.short + ' | long ' + mf.long +
        ' | last delta ' + mf.lastDelta + 'f | max short ' + Math.round(mf.maxShortMs) + 'ms');
    }
    if (message) { lines.push(message); }''')
    return page


def write_atomic(data):
    with tempfile.NamedTemporaryFile(dir=path.parent, delete=False) as handle:
        temp = Path(handle.name)
    try:
        temp.write_bytes(data)
        shutil.copystat(path, temp)
        os.replace(temp, path)
    finally:
        if temp.exists():
            temp.unlink()


if args.restore:
    if not backup.is_file():
        parser.error('No MP3 chunk v2 backup found')
    write_atomic(backup.read_bytes())
    print('Restored the exact pre-update page')
else:
    page = path.read_bytes().decode('utf-8')
    if MARKER in page:
        print('MP3 chunk fix v2 already installed')
    else:
        updated = update(page)
        if args.check:
            print('Page matches MP3 chunk fix v2. No changes written')
        else:
            if not backup.exists():
                shutil.copy2(path, backup)
            write_atomic(updated.encode('utf-8'))
            print('Installed MP3 chunk fix v2. Restart LMS and fully relaunch Lyrion TV')
