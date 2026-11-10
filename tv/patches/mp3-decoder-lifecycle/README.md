# Lyrion TV MP3 decoder lifecycle

Install this patch on the LMS-hosted LyrionJS page. The browser MP3 fallback previously created an offline audio context for every chunk. Offline contexts have no explicit close method, and TV monitoring showed two renderer processes reaching roughly 175 threads before they disappeared.

The fallback now lazily reuses one offline audio context per MPEG source sample rate for the lifetime of the page. A typical 44.1 kHz stream uses one context across chunks, tracks and seeks. The MP3 parser supplies one of nine rates, so changing rates cannot cause unbounded context allocation. Decoding still uses the input rate and channel count. The installer supports both the original input copy and the TV Focus direct-buffer path. It composes with the reservoir and exact-duration patches.

## Install on LMS

Copy this directory to the server and run these commands from it.

```sh
page=/path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html
python3 install.py "$page" --check
python3 install.py "$page"
```

Restart LMS and fully close and relaunch Lyrion TV to replace the old page and its contexts. Roll back with `python3 install.py "$page" --restore`, then restart and relaunch. Rollback replaces just the decoder function and preserves other page patches.

For on-TV verification, use Blue diagnostics to confirm track format `m`, play MP3 for at least 30 minutes, and compare the renderer's thread count over time. Include a track change or seek. If available, play a 48 kHz track after a 44.1 kHz track to exercise rate changes.

## Local verification

Run `node tests/lifecycle.cjs` in the original workspace with Node and Python 3. It verifies both hosted-page variants, 3,600 simulated decode calls covering all MPEG sample rates, mono and stereo output, recovery after a decode error, and surgical rollback.
