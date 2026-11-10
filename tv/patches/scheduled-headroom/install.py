"""Default to a one-second scheduling window to the LyrionJS TV player."""
import argparse
import os
from pathlib import Path
import shutil
import tempfile

ORIGINAL = b"  var horizon = Math.ceil(rate * 0.65), block = Math.ceil(rate * 0.18);"
OPT_IN = (
    b"  /* LYRION-TV-SCHEDULED-HEADROOM-1 */\n"
    b"  var horizonSeconds = /[?&]tvschedheadroom=1(?:&|$)/.test(location.search) ? 1.0 : 0.65;\n"
    b"  var horizon = Math.ceil(rate * horizonSeconds), block = Math.ceil(rate * 0.18);"
)

DEFAULT = OPT_IN.replace(
    b"tvschedheadroom=1(?:&|$)/.test(location.search) ? 1.0 : 0.65",
    b"tvschedheadroom=0(?:&|$)/.test(location.search) ? 0.65 : 1.0",
).replace(b"HEADROOM-1", b"HEADROOM-2")

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("html", type=Path)
mode = parser.add_mutually_exclusive_group()
mode.add_argument("--check", action="store_true")
mode.add_argument("--restore", action="store_true")
args = parser.parse_args()

path = args.html.resolve(strict=True)
page = path.read_bytes()

variants = (ORIGINAL, OPT_IN, DEFAULT)
matches = [variant for variant in variants if variant in page]
if (
    b"LYRION-TV-SYNC-TIMING-1" not in page
    or len(matches) != 1
    or page.count(matches[0]) != 1
    or page.count(b"LYRION-TV-SCHEDULED-HEADROOM-") != int(matches[0] != ORIGINAL)
):
    parser.error("Expected one intact Scheduled PCM scheduler. No changes written.")

current = matches[0]
if args.restore and current == ORIGINAL:
    print("Original scheduling window already restored")
    raise SystemExit(0)
if not args.restore and current == DEFAULT:
    print("Default headroom patch already installed")
    raise SystemExit(0)

updated = page.replace(current, ORIGINAL if args.restore else DEFAULT, 1)

if args.check:
    print("Page is compatible. No changes written.")
    raise SystemExit(0)

original = path.stat()
with tempfile.NamedTemporaryFile(dir=path.parent, delete=False) as handle:
    temp = Path(handle.name)
try:
    temp.write_bytes(updated)
    current = temp.stat()
    if (current.st_uid, current.st_gid) != (original.st_uid, original.st_gid):
        os.chown(temp, original.st_uid, original.st_gid)
    shutil.copystat(path, temp)
    os.utime(temp, None)
    os.replace(temp, path)
finally:
    temp.unlink(missing_ok=True)

print("Restored the original scheduling window" if args.restore else "Installed one-second Scheduled PCM default")
