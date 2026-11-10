"""Bound browser MP3 decoder context creation in the hosted LyrionJS page."""
import argparse
import os
from pathlib import Path
import shutil
import tempfile

ORIGINAL = b"""  function decodeWithBrowser(bytes, rate, channels) {
    const ctx = new OfflineAudioContext(channels, 1, rate);
    const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
    return ctx.decodeAudioData(buf).then(b => {
      const out = [];
      for (let c = 0; c < b.numberOfChannels; c++) out.push(b.getChannelData(c));
      return out;
    });
  }
"""
MARKER = b"LYRION-TV-MP3-DECODER-LIFECYCLE-1"

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("html", type=Path)
mode = parser.add_mutually_exclusive_group()
mode.add_argument("--check", action="store_true")
mode.add_argument("--restore", action="store_true")
args = parser.parse_args()

path = args.html.resolve(strict=True)
page = path.read_bytes()
helper = Path(__file__).with_name("decoder.js").read_bytes()
COPY = b"    const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);\n"
variants = (
    (ORIGINAL, helper),
    (ORIGINAL.replace(COPY + b"    return ctx.decodeAudioData(buf)",
                      b"    return ctx.decodeAudioData(bytes.buffer)"),
     helper.replace(b"  " + COPY + b"      return ctx.decodeAudioData(buf)",
                    b"      return ctx.decodeAudioData(bytes.buffer)")),
)
originals = [(before, after) for before, after in variants if before in page]
installed = [(before, after) for before, after in variants if after in page]

if args.restore:
    if len(installed) != 1 or page.count(MARKER) != 1 or originals:
        parser.error("Expected one intact decoder patch. No changes written.")
    before, after = installed[0]
    updated = page.replace(after, before, 1)
elif len(installed) == 1 and page.count(MARKER) == 1 and not originals:
    print("MP3 decoder lifecycle patch already installed.")
    raise SystemExit(0)
else:
    if MARKER in page or len(originals) != 1 or page.count(originals[0][0]) != 1:
        parser.error("Unexpected LyrionJS decoder layout. No changes written.")
    before, after = originals[0]
    updated = page.replace(before, after, 1)

if args.check:
    print("Page matches the MP3 decoder patch. No changes written.")
    raise SystemExit(0)

original_stat = path.stat()
with tempfile.NamedTemporaryFile(dir=path.parent, delete=False) as handle:
    temp = Path(handle.name)
try:
    temp.write_bytes(updated)
    if (temp.stat().st_uid, temp.stat().st_gid) != (original_stat.st_uid, original_stat.st_gid):
        os.chown(temp, original_stat.st_uid, original_stat.st_gid)
    shutil.copymode(path, temp)
    os.replace(temp, path)
finally:
    temp.unlink(missing_ok=True)

print("MP3 decoder lifecycle patch removed." if args.restore else
      "MP3 decoder lifecycle patch installed. Restart LMS and fully relaunch Lyrion TV.")
