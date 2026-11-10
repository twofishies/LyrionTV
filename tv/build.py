#!/usr/bin/env python3
"""Build the LMS plugin and webOS launcher from the pinned local source."""
import argparse
import gzip
import hashlib
import io
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tarfile
import tempfile
from xml.etree import ElementTree
import zipfile

ROOT = Path(__file__).resolve().parent
LYRIONJS_VERSION = "0.2.34"
BASE_SHA256 = "ae5e8a7451710d5b1de2b720b2dce757be385200968caf684e967c247cda7ecd"

PATCHES = (
    "webos-fix-1.0.1/tools/apply-tv-compat.py",
    "tv-audio-diagnostics/tools/install.py",
    "buffered-tone/tools/install.py",
    "single-context/install.py",
    "tv-smoother/install.py",
    "scheduled-audio/install.py",
    "sync-timing/install.py",
    "living-room-ui/install.py",
    "tv-focus/install.py",
    "playback-diagnostics-v2/install.py",
    "mp3-chunk-fix-v2/install.py",
    "mp3-decoder-lifecycle/install.py",
    "scheduled-headroom/install.py",
)
LIFECYCLE = "page-lifecycle/install.py"


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def build_page(work, include_page_recorder):
    base = ROOT / "base" / f"lyrionjs-{LYRIONJS_VERSION}.html"
    if sha256(base.read_bytes()) != BASE_SHA256:
        raise SystemExit("The pinned LMS baseline has changed.")
    page = work / "lyrionjs.html"
    shutil.copyfile(base, page)
    for patch in PATCHES:
        if include_page_recorder and patch == "mp3-decoder-lifecycle/install.py":
            subprocess.run([sys.executable, ROOT / "patches" / LIFECYCLE, page], check=True)
        subprocess.run([sys.executable, ROOT / "patches" / patch, page], check=True)
    return page.read_bytes()


def build_plugin(page):
    plugin = ROOT.parent / "plugin/LyrionJS"
    manifest = plugin / "install.xml"
    if not manifest.is_file():
        raise SystemExit("Build from a complete LyrionTV checkout. Missing plugin/LyrionJS/install.xml.")
    version = ElementTree.parse(manifest).findtext("version")
    if version != LYRIONJS_VERSION:
        raise SystemExit(f"Expected LyrionJS {LYRIONJS_VERSION} server files, found {version}.")

    files = {"HTML/lyrionjs.html": page}
    for path in sorted(plugin.rglob("*")):
        relative = path.relative_to(plugin)
        if any(part.startswith(".") for part in relative.parts):
            continue
        if path.is_symlink() or not path.is_file() or path.name.endswith(("~", ".swp", ".bak", ".orig")):
            continue
        name = relative.as_posix()
        if name != "HTML/lyrionjs.html":
            files[name] = path.read_bytes()

    payload = io.BytesIO()
    with zipfile.ZipFile(payload, "w") as archive:
        for name, data in sorted(files.items()):
            entry = zipfile.ZipInfo(name)
            entry.create_system = 3
            entry.external_attr = 0o644 << 16
            archive.writestr(entry, data, compress_type=zipfile.ZIP_DEFLATED)
    return f"LyrionJS-{version}-tv.zip", payload.getvalue()


def tar_gzip(entries):
    payload = io.BytesIO()
    with tarfile.open(fileobj=payload, mode="w", format=tarfile.USTAR_FORMAT) as archive:
        for name, data in sorted(entries.items()):
            entry = tarfile.TarInfo("./" + name)
            entry.size = len(data)
            entry.mode = 0o644
            archive.addfile(entry, io.BytesIO(data))
    compressed = io.BytesIO()
    with gzip.GzipFile(fileobj=compressed, mode="wb", mtime=0) as stream:
        stream.write(payload.getvalue())
    return compressed.getvalue()


def ar_member(name, data):
    header = f"{name:<16}{0:<12}{0:<6}{0:<6}{'100644':<8}{len(data):<10}`\n"
    return header.encode("ascii") + data + (b"\n" if len(data) % 2 else b"")


def build_ipk():
    app = ROOT / "launcher/app"
    info = json.loads((app / "appinfo.json").read_text(encoding="utf-8"))
    app_id = info["id"]
    version = info["version"]
    files = {
        f"usr/palm/applications/{app_id}/{name}": (app / name).read_bytes()
        for name in ("appinfo.json", "config.js", "icon.png", "index.html", "largeIcon.png", "launcher.js")
    }
    package = {"id": app_id, "version": version, "app": app_id}
    files[f"usr/palm/packages/{app_id}/packageinfo.json"] = (json.dumps(package, indent=2) + "\n").encode()
    control = (
        f"Package: {app_id}\nVersion: {version}\nSection: misc\nPriority: optional\n"
        f"Architecture: all\nInstalled-Size: {sum(map(len, files.values()))}\n"
        "Maintainer: N/A <nobody@example.com>\nDescription: This is a webOS application.\n"
        "webOS-Package-Format-Version: 2\nwebOS-Packager-Version: x.y.x\n"
    ).encode("ascii")
    contents = b"!<arch>\n" + b"".join((
        ar_member("debian-binary", b"2.0\n"),
        ar_member("control.tar.gz", tar_gzip({"control": control})),
        ar_member("data.tar.gz", tar_gzip(files)),
    ))
    return f"{app_id}_{version}_all.ipk", contents


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--out", type=Path, default=ROOT / "dist")
    parser.add_argument("--include-page-recorder", action="store_true",
                        help="Include the optional page lifecycle diagnostics")
    args = parser.parse_args()
    with tempfile.TemporaryDirectory(prefix="lyrion-tv-") as temp:
        page = build_page(Path(temp), args.include_page_recorder)
    plugin_name, plugin_zip = build_plugin(page)
    name, ipk = build_ipk()
    args.out.mkdir(parents=True, exist_ok=True)
    artifacts = {plugin_name: plugin_zip, name: ipk, "lyrionjs.html": page}
    for filename, data in artifacts.items():
        (args.out / filename).write_bytes(data)
    checksums = "".join(f"{sha256(data)}  {filename}\n" for filename, data in artifacts.items())
    (args.out / "SHA256SUMS").write_bytes(checksums.encode("ascii"))
    print(f"Built {args.out}")


if __name__ == "__main__":
    main()
