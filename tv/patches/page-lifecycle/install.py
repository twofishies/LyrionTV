"""Install or remove a bounded page lifecycle recorder in the hosted LyrionJS page."""
import argparse
import os
from pathlib import Path
import shutil
import tempfile

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("html", type=Path)
mode = parser.add_mutually_exclusive_group()
mode.add_argument("--check", action="store_true")
mode.add_argument("--restore", action="store_true")
args = parser.parse_args()

path = args.html.resolve(strict=True)
page = path.read_bytes()
helper = Path(__file__).with_name("lifecycle.js").read_bytes()
block = b"<script>\n" + helper + b"</script>\n"
marker = b"LYRION-TV-PAGE-LIFECYCLE-1"

if args.restore:
    if page.count(block) != 1:
        parser.error("Expected one intact recorder block. No changes written.")
    updated = page.replace(block, b"", 1)
elif block in page:
    print("Recorder already installed")
    raise SystemExit(0)
else:
    if marker in page or page.count(b"</head>") != 1 or b"/plugins/LyrionJS/log" not in page:
        parser.error("Unexpected LyrionJS page layout. No changes written.")
    updated = page.replace(b"</head>", block + b"</head>", 1)

if args.check:
    print("Page is compatible. No changes written.")
    raise SystemExit(0)

with tempfile.NamedTemporaryFile(dir=path.parent, delete=False) as handle:
    temp = Path(handle.name)
try:
    temp.write_bytes(updated)
    shutil.copystat(path, temp)
    original = path.stat()
    if (temp.stat().st_uid, temp.stat().st_gid) != (original.st_uid, original.st_gid):
        os.chown(temp, original.st_uid, original.st_gid)
    # Use a fresh mtime so LMS can notice the page changed.
    os.utime(temp, None)
    os.replace(temp, path)
finally:
    temp.unlink(missing_ok=True)

print("Recorder removed" if args.restore else "Recorder installed")
