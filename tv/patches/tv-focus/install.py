"""Apply the TV focus and display changes to the patched LyrionJS 0.2.34 page."""
import argparse
import os
from pathlib import Path
import re
import shutil
import tempfile


def replace_once(page, before, after):
    if page.count(before) != 1:
        parser.error("Unexpected LyrionJS script layout. No changes written.")
    return page.replace(before, after, 1)


def write_atomic(path, data):
    with tempfile.NamedTemporaryFile(dir=path.parent, delete=False) as handle:
        temp = Path(handle.name)
    try:
        temp.write_bytes(data)
        shutil.copystat(path, temp)
        os.replace(temp, path)
    finally:
        if temp.exists():
            temp.unlink()


def update(page):
    start = "/* LyrionJS TV navigation v1.0.1. ES5 syntax for older webOS engines. */"
    end = "<!-- LYRION-TV-COMPAT:END -->"
    if page.count(start) != 1 or page.count(end) != 1 or page.index(start) >= page.index(end):
        parser.error("Expected one TV compatibility navigation block. No changes written.")
    script_end = page.index("</script>", page.index(start))
    if script_end >= page.index(end):
        parser.error("Unexpected TV compatibility navigation block. No changes written.")
    nav = Path(__file__).with_name("navigation.js").read_text(encoding="utf-8")
    css = Path(__file__).with_name("tv-focus.css").read_text(encoding="utf-8")
    if re.search(r"</script", nav, re.I) or re.search(r"</style", css, re.I):
        parser.error("Invalid TV focus assets.")
    page = page[:page.index(start)] + nav + "\n" + page[script_end:]
    page = replace_once(page, "</head>", '<style id="' + MARKER + '">\n' + css + "</style>\n</head>")

    # The queue can center its currently playing row on first open. Limit it to the queue pane.
    page = replace_once(page, """            curEl.scrollIntoView({
              block: 'center'
            });""", """            if (window.lyrionTVNav) window.lyrionTVNav.centerQueueRow(curEl);
            else curEl.scrollIntoView({ block: 'center' });""")
    # These updates are shared by the browse bar and Now Playing. Keep the icon nodes and
    # local status button intact when playback polling reports the same values.
    page = replace_once(page, """    b.replaceChildren(icon(name));
    if (label) {""", """    if (b._lyrionIcon !== name) {
      b.replaceChildren(icon(name));
      b._lyrionIcon = name;
    }
    if (label && b.title !== label) {""")
    badges = re.findall(r"^  function renderLocalBadge\(\) \{.*?^  \}\n\n", page, re.M | re.S)
    if len(badges) != 1:
        parser.error("Unexpected LyrionJS badge layout. No changes written.")
    page = replace_once(page, badges[0], """  function renderLocalBadge() {
    const el = document.getElementById('localBadge');
    if (!el) return;
    const snap = S.local && S.local.snapshot();
    const style = 'badge ' + (!snap ? 'off' : snap.connected ? 'on' : 'warn');
    const label = !snap ? tr('Browser player off') : snap.connected
      ? S.local.name + ' · ' + stateWord(snap.state) : tr('Connecting to LMS…');
    const title = snap ? tr('Rename this player') : '';
    if (el.className !== style) el.className = style;
    if (el.textContent !== label) el.textContent = label;
    if (el.title !== title) el.title = title;
    if (el.disabled !== !snap) el.disabled = !snap;
  }

""")
    page = replace_once(page, """      updateBar();
      if (npEls) updateNowPlaying();""", """      if (npEls) updateNowPlaying();
      else updateBar();""")
    # Keep the TV on the same player and scheduler for a server-decoded PCM comparison.
    return replace_once(page, """      const caps = ['flc', 'pcm'].concat(mp3 ? ['mp3'] : []);""",
                        """      const serverPcm = window.lyrionTVSingleContext &&
        /[?&]tvpcm=1(?:&|$)/.test(location.search);
      const caps = (serverPcm ? ['pcm'] : ['flc', 'pcm']).concat(mp3 ? ['mp3'] : []);""")


def update_mp3(page):
    # Try the predicted join first to bound the search. Keep the lowest offset on ties.
    page = replace_once(page, """      for (let o = lo; o <= hi; o++) {
        let e = 0;
        for (let k = 0; k < 512 && e < bestErr; k++) {
          const d = x[o - 512 + k] - ref[k];
          e += d * d;
        }
        if (e < bestErr) {
          bestErr = e;
          best = o;
        }
      }""", """      /* LYRION-TV-MP3-1 */
      if (lo > hi) return best;
      const predicted = Math.min(hi, Math.max(lo, expect));
      let error = 0;
      for (let k = 0; k < 512; k++) {
        const d = x[predicted - 512 + k] - ref[k];
        error += d * d;
      }
      if (error < bestErr) {
        bestErr = error;
        best = predicted;
      }
      for (let o = lo; o <= hi; o++) {
        if (o === predicted) continue;
        if (bestErr === 0 && o > best) break;
        let e = 0;
        for (let k = 0; k < 512 && e <= bestErr; k++) {
          const d = x[o - 512 + k] - ref[k];
          e += d * d;
        }
        if (e < bestErr || (e === bestErr && e < Infinity && o < best)) {
          bestErr = e;
          best = o;
        }
      }""")
    # The chunk decoder creates an owned, tightly sized buffer with concatAll.
    # decodeAudioData detaches it. The individual frames for the overlap are separate.
    return replace_once(page, """    const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
    return ctx.decodeAudioData(buf)""", """    return ctx.decodeAudioData(bytes.buffer)""")


def update_media_keys(page):
    keys = Path(__file__).with_name("media-keys.js").read_text(encoding="utf-8")
    if re.search(r"</script", keys, re.I):
        parser.error("Invalid TV media key script.")
    if OLD_MEDIA_MARKER in page:
        old_block = re.findall(r"^  /\* LYRION-TV-MEDIA-1 \*/\n.*?(?=^  // Safari 17\+:)", page, re.M | re.S)
        if len(old_block) != 1:
            parser.error("Unexpected TV media key script. No changes written.")
        page = replace_once(page, old_block[0], keys.rstrip() + "\n")
        return replace_once(page, "if (window.lyrionTVNav) d.addEventListener('keydown', tvMediaKey, true);",
                            "if (window.lyrionTVNav) bindTVMediaKeys(d);")
    unlock = "  for (const ev of ['touchend', 'click', 'keydown']) document.addEventListener(ev, unlock, true);"
    page = replace_once(page, unlock, unlock + "\n" + keys.rstrip())
    frame_unlock = "      for (const ev of ['touchend', 'click', 'keydown']) d.addEventListener(ev, unlock, true);"
    page = replace_once(page, frame_unlock, frame_unlock + """
      if (window.lyrionTVNav) bindTVMediaKeys(d);""")
    # Other LMS players can still be adjusted from their individual player cards.
    page = replace_once(page, """.then(render)), vol, h('button', {
              class: 'btn ghost sm',
              onclick: () => {
                setTarget(p.playerid);""", """.then(render)), window.lyrionTVNav && isLocal(p.playerid) ? null : vol, h('button', {
              class: 'btn ghost sm',
              onclick: () => {
                setTarget(p.playerid);""")
    page = replace_once(page, """        })), S.output && !S.output.volumeLocked ? h('label', {""",
                        """        })), !window.lyrionTVNav && S.output && !S.output.volumeLocked ? h('label', {""")
    return replace_once(page, "</head>", """<style>
html[data-lyrion-tv-remote] #topVol,
html[data-lyrion-tv-remote] .bar-vol,
html[data-lyrion-tv-remote] .np-vol { display:none!important; }
</style>
</head>""")


MARKER = "lyrion-tv-focus-1"
MP3_MARKER = "LYRION-TV-MP3-1"
OLD_MEDIA_MARKER = "LYRION-TV-MEDIA-1"
MEDIA_MARKER = "LYRION-TV-MEDIA-2"
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("html", type=Path)
mode = parser.add_mutually_exclusive_group()
mode.add_argument("--check", action="store_true")
mode.add_argument("--restore", action="store_true")
args = parser.parse_args()
path = args.html.resolve(strict=True)
backup = path.with_name(path.name + ".before-tv-focus")

if args.restore:
    if not backup.is_file():
        parser.error("No TV focus backup found.")
    write_atomic(path, backup.read_bytes())
    print("Restored the pre-update LyrionJS page.")
else:
    page = path.read_bytes().decode("utf-8")
    if all(marker in page for marker in (MARKER, MP3_MARKER, MEDIA_MARKER)):
        print("TV focus update already installed.")
    else:
        if "LYRION-TV-LIVING-ROOM-UI-1" not in page:
            parser.error("Install the existing living-room layout before this update.")
        updated = page if MARKER in page else update(page)
        if MP3_MARKER not in updated:
            updated = update_mp3(updated)
        if MEDIA_MARKER not in updated:
            updated = update_media_keys(updated)
        if args.check:
            print("The page matches the TV focus update. No changes written.")
        else:
            if not backup.exists():
                shutil.copy2(path, backup)
            write_atomic(path, updated.encode("utf-8"))
            print("Installed. Restart LMS and fully relaunch Lyrion TV.")
