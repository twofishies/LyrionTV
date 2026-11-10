# Lyrion TV source

Lyrion TV has two components. The webOS 1.1.0 launcher saves the LMS URL and opens it with TV defaults. LMS serves the player, a locally modified LyrionJS 0.2.34 HTML bundle. Both are built here.

## Build

From this directory, run:

```sh
python3 build.py
node launcher/tests/launcher.cjs
```

The build uses Python 3.9 or later and runs offline. It writes `dist/lyrionjs.html`, `dist/org.lyrionjs.tv_1.1.0_all.ipk`, and `dist/SHA256SUMS`. Use `--out DIRECTORY` to build elsewhere. The build starts from the pinned HTML each time and replays the patches in a scratch directory. It does not need any of the sibling `outputs/` or `work/` directories. The IPK normalizes archive timestamps and ownership. Use the same Python/zlib versions for byte-identical compressed output across hosts.

To include the optional page lifecycle recorder:

```sh
python3 build.py --include-page-recorder --out dist/diagnostics
```

The recorder logs page events and reports them to LMS. Both builds leave the Yellow key available to the runtime.

## Patch decisions

| Area | Included in the default build |
| --- | --- |
| Startup | Chrome 53 script conversion and polyfills. It replaces the first launcher-era navigation block and guards the older navigation already present in the LMS snapshot. |
| TV controls | Living-room CSS, current focus and media-key handling, and the opt-in smoother and alternate buffer settings. |
| Audio | Single-context playback, Scheduled PCM, sync timing and the one-second scheduling default. The previous 650 ms window is selectable with `tvschedheadroom=0`. |
| MP3 | Focus release's direct-buffer and join-search changes, chunk fix v2 (which includes reservoir history and exact-duration headers), and offline decoder context reuse. |
| Diagnostics | Blue panel and buffered-tone code are inputs to later audio patches. Playback diagnostics v2 replaces v1 and supplies the current playback trace. Use `tvperf=0` to disable that trace for a session. |
| Temporary diagnostics | The page lifecycle recorder and its heartbeat and automatic LMS reports are included only with `--include-page-recorder`. The standalone audio-check apps and experimental launcher builds are omitted. |

The older playback diagnostics installer and standalone reservoir fix are superseded by their v2 installers. The staged installers retain their original source-matching checks. Their individual READMEs document the original releases. Use the combined build above for this source tree.

## Deploy

- On LMS, back up the current `Plugins/LyrionJS/HTML/lyrionjs.html` from the installed plugin and replace it with the generated `lyrionjs.html`, preserving ownership and permissions. Restart LMS, fully close and relaunch the TV app, and check that the served page matches the built HTML. Restore the backup and restart LMS to roll back. This replacement is tied to the captured 0.2.34 build. Rebase and review the patches before applying them to a newer LyrionJS release.
- For a TV that needs the launcher, install the IPK through Glasshouse. Install over an existing launcher to preserve its saved URL. The package uses app ID `org.lyrionjs.tv` and the existing 1.1.0 version. The app payload matches the previous 1.1.0 package. The package file itself has different archive metadata. The launcher has no bundled LMS address.

## Source provenance

`base/lyrionjs-0.2.34.html` is the workspace's archived LMS page from before the Chrome 53 conversion, including pre-existing TV navigation and DOM changes. The archived page was sanitized for publication and the retired key overlay was removed from its older navigation block. The patch directory for the conversion contains the original script blocks, transformed scripts, polyfills and license notices.

To regenerate the compatibility inputs, use Node 26 and the included npm lockfile:

```sh
cd patches/webos-fix-1.0.1
npm ci
node tools/rebuild.mjs
```

The later audio patches match specific converted script hashes. If the compatibility inputs change, review and rebase those patches together.

Check the contents of this directory into source control. `dist/` is generated and ignored.
