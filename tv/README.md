# Lyrion TV source

Lyrion TV has two components. The webOS 1.1.0 launcher saves the LMS URL and opens it with TV defaults. The LMS package bundles the LyrionJS 0.2.34 server files from this fork with the modified TV page. Both packages are built here.

## Build

From this directory, run:

```sh
python3 build.py
node launcher/tests/launcher.cjs
```

The build uses Python 3.9 or later and runs offline. It writes the complete `dist/LyrionJS-0.2.34-tv.zip` LMS plugin, `dist/org.lyrionjs.tv_1.1.0_all.ipk`, a standalone `dist/lyrionjs.html` for inspection, and `dist/SHA256SUMS`. Use `--out DIRECTORY` to build elsewhere. The build starts from the pinned HTML each time and replays the patches in a scratch directory. It does not need any of the sibling `outputs/` or `work/` directories. The ZIP and IPK use normalized archive metadata. Use the same Python/zlib versions for byte-identical compressed output across hosts.

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

- Follow the [installation steps](../README.md#install-and-connect) for the ZIP and IPK. The ZIP contains the contents of the plugin directory, with `install.xml` at its root. Extract it into `Plugins/LyrionJS/`. The resulting plugin uses the existing `LyrionJS` name and URL, so keep a single installed copy.
- Use this ZIP for the TV installation and skip upstream LyrionJS updates for that copy. The inherited root `repo.xml` describes the upstream distribution and is separate from this fork's manual ZIP install.
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

Build from the full fork checkout so the adjacent `plugin/LyrionJS/` source is available. `dist/` is generated and ignored.
