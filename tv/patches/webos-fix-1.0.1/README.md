# LyrionJS TV startup correction 1.0.1

Keep the installed `org.lyrionjs.tv` IPK. This is a **server-side correction**, applied once for both TVs.

The served LMS page at `/plugins/LyrionJS/` was retrieved read-only and identified as LyrionJS 0.2.34. Both main scripts contain async functions that the webOS 4.x Chromium 53 app engine cannot parse. The page also requires later APIs (Intl.PluralRules, Array.flat, Object.entries/fromEntries, DOM append/replace methods, AbortController) and CSS Grid. The original navigation patch is present, explaining why Yellow diagnostics work while the app itself does not start. Another older navigation script was also found; this correction disables it when TV mode is requested.

## Apply

Extract this ZIP on the LMS host. Open a terminal **inside the extracted `lyrionjs-webos-fix-1.0.1` folder**. Python 3 is the only runtime needed to apply it; Node/npm are not required on LMS.

First verify that the installed HTML matches this build:

```sh
python3 tools/apply-tv-compat.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html --check
```

Then apply:

```sh
python3 tools/apply-tv-compat.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html
```

Use the same file location and write permissions you used for the earlier server patch. The tool refuses a different LyrionJS source version without writing changes. If it refuses, provide the current installed HTML so a matching build can be made; do not bypass its source check.

It backs up the current HTML as `lyrionjs.html.before-tv-compat-1.0.1`, converts the three named LyrionJS script blocks, replaces the wrapper navigation block, and adds conditional polyfills, startup diagnostics and a CSS Grid fallback. Your replaceChildren polyfill is retained. This is a modified compatibility build, not a new upstream release. Normal browser sessions use the converted scripts too; the extra API shims and layout fallback activate only for the TV URL parameter. Dates use AM/PM if formatToParts is unavailable. Advanced layouts may need further TV testing.

Restart LMS to clear any template cache. Fully close and relaunch LyrionJS TV on each TV. Enter:

```text
http://lms.example:9000/plugins/LyrionJS/?tvdebug=1
```

The existing launcher adds `tvnav=1`. A status panel should show **TV compatibility 1.0.1**, the runtime's user-agent, and either **app ready** or an actual startup error. If the old screen persists without this status panel, the new HTML is not being served, or the TV is still using a cached page. Confirm the served source contains `LYRION-TV-COMPAT:START`.

Once it works, omit `?tvdebug=1` to hide the status panel. Uncaught errors still display automatically in TV mode.

## Test

- Confirm the status says **app ready** and the library/player controls appear.
- Test all four arrows and OK.
- Open search, OK to edit, Back to return to navigation. Open/close a menu and scroll a long list.
- Enable/select the app's local player if necessary, then test audio, seek, pause/resume and multiroom sync. App storage/player identity can differ from the TV browser.
- If startup still fails, send the exact error text shown in the status panel. The converted page has passed a mocked startup test, but has not yet been validated on physical TVs.

Opening the base LMS page or standalone Material Skin directly will still not install our navigation code there. That behavior is expected: the patch is in LyrionJS, and the launcher redirects rather than injecting code into arbitrary sites. Skin pages hosted inside LyrionJS frames also require separate navigation support.

## Restore

This restores the exact pre-correction HTML, discarding edits made after its backup:

```sh
python3 tools/apply-tv-compat.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html --restore
```

Restart LMS and fully relaunch the TV app. Plugin updates may overwrite this correction. This bundle deliberately refuses other script versions.

## Verification and source

- All six inline scripts in the patched page parse using the ES2016 grammar; both original main scripts fail on async syntax.
- Mocked DOM startup with newer APIs removed reaches ready and renders navigation controls; the error overlay catches a deliberately injected failure. No live player was registered during testing.
- Spatial focus, OK repeat suppression, native editing, Back, asynchronous focus recovery, modal scope, opt-in and a semantic ArrowDown with raw code 41 pass local tests.
- Reapplication produces identical bytes; rollback is byte-exact; changed source is refused before writes.
- No physical TV, CSS rendering, audio or sync test has been performed here.

The original script sources are in `compat/original`; converted scripts and source/output checksums are in `compat/`. LyrionJS scripts remain GPL-2.0-or-later, with the upstream exception and third-party notices in `licenses/`. Modified 2 November 2026 for Chrome 53 compatibility. There is no warranty.

For rebuilding (optional, on a development computer with Node 22+), from this folder:

```sh
npm install --prefix .build-tools @babel/core@8.1.0 @babel/preset-env@8.0.7 core-js-bundle@3.51.0 abortcontroller-polyfill@1.7.8 intersection-observer@0.12.2 intl-pluralrules@2.0.1
node tools/rebuild.mjs
```

For DOM tests, install jsdom 22 in a local test folder and point NODE_PATH at its node_modules. Run `tests/navigation.cjs`, or `tests/startup.cjs /path/to/a/patched/HTML-copy`. Startup uses mocked responses and disables player registration.

References: [LG web engine versions](https://webostv.developer.lge.com/develop/specifications/web-api-and-web-engine), [LyrionJS upstream](https://github.com/JameZUK/LyrionJS).
