# Lyrion TV remote controls and playback

The TV launcher opens the LyrionJS page hosted by LMS. This update installs on that page, alongside the existing compatibility, Scheduled PCM, sync timing and living-room layout patches for LyrionJS 0.2.34. Use the existing Lyrion TV 1.1.0 IPK.

## Install

Extract the folder on LMS. Use the same permissions and path as for the living-room layout.

```sh
python3 install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html --check
python3 install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html
```

Restart LMS and fully close and relaunch Lyrion TV. The saved URL enables the new navigation through `tvnav=1`. The existing `tvui=1` and `tvui=large` modes apply the simpler TV layout.

- Up and Down stay in the current pane while it has items in that direction. Rows move normally through the visible area. When the selection moves past the middle third, the pane starts to follow it. Left and Right can move between panes using visible controls.
- Focus stays in the same pane after a list redraw, preferring the previous row if it is still visible. Back dismisses the app's open sheet or navigation drawer. OK activates controls, and on a slider or text control, OK enters editing and Back exits.
- Now Playing has one set of transport controls. Queue remains in navigation. Cover art stays on the page and the Material skin's full-screen blur is gone. Row menus are quieter until focused. Playback polling retains icon and status nodes when their values stay the same.

## Remote playback controls

The media keys control the LMS player selected in LyrionJS from anywhere in the app.

| Remote button | Key code | Action |
| --- | --- | --- |
| Rewind | 412 | Tap for previous track, hold to seek back |
| Play | 415 | Start or resume playback |
| Pause | 19 | Pause playback |
| Fast Forward | 417 | Tap for next track, hold to seek forward |
| Stop | 413 | Stop playback |

A tap skips on release. Holding for half a second seeks by 10 seconds. Continued remote repeat events can trigger further seeks until release. Seeking applies to tracks with a known duration that LMS allows the player to seek. Use the LG volume and mute buttons for the TV. LyrionJS hides its playback volume sliders and mute buttons, the TV's own player-card slider, and the browser output-level setting. The Players screen still offers the per-device sliders for other LMS players.

If an earlier focus, MP3, or remote control update is already installed, run the same installer to update the remote controls. It keeps the original rollback backup.

To roll back, repeat the installation command with `--restore`, restart LMS and relaunch. This restores the exact pre-update page, including its audio patches. Reapply any later edits separately.

## MP3 playback performance

**The existing MP3 path already uses the browser decoder.** On webOS 4.x, LyrionJS normally passes overlapping MP3 chunks to `OfflineAudioContext.decodeAudioData()` when the TV receives MP3. Web Audio runs the decode on a separate thread. Scheduled PCM handles rendering on the audio clock. JavaScript still frames the MP3 stream, matches the decoded chunks at their joins, resamples when the output clock uses a different rate, and fills the scheduled buffers. [Web Audio decoding](https://www.w3.org/TR/webaudio/#dom-baseaudiocontext-decodeaudiodata) · [LG web engine versions](https://webostv.developer.lge.com/develop/specifications/web-api-and-web-engine)

**This update cuts two costs on that path.** It passes the owned compressed chunk straight to the browser decoder and starts the join search at its predicted position. The search can reject poor matches earlier while selecting the same winning offset, including ties. If the focus update is already installed, rerun the updated installer to add these changes. It reuses the original rollback backup.

**Use a real album for the TV test.** Play MP3s you normally listen to, starting outside a sync group. In Blue, check for Track `m` and Scheduled PCM. If the format is `f` or `p`, LMS is sending FLAC or PCM, so that session exercises a different path. Close Blue while browsing a long queue, then reopen it to compare the increase in schedule gaps. Check a long track across several chunk joins, a track transition, seeking and multiroom sync. Compare 44.1 and 48 kHz MP3s if both are available to help isolate resampling costs. Chromium 53 also ignores native lazy image loading, so deferring off-screen covers is a separate candidate if stalls correlate with browsing. [Chrome native lazy loading](https://developer.chrome.com/blog/new-in-chrome-77)

The optional `tvpcm=1` comparison remains available for FLAC files. It removes FLAC from this player's SlimProto capabilities and leaves its MP3 capability in place. It is useful if Blue reports `f` and LMS has a PCM conversion enabled. [LMS conversion rules](https://github.com/LMS-Community/slimserver/blob/public/9.2/convert.conf)

## Verification

The installer was checked against the previous living-room HTML snapshot for dry run, repeat installation and byte-exact rollback. Media-key tests cover all five codes, the selected player, tap versus hold, seek boundaries, and key repeat. Automated navigation checks cover scroll positioning, ignored legacy focus options, pane boundaries, list redraws, dialog scope, editing and opt-in behavior. Desktop Edge also passed a 60-row fixture at two window sizes with the legacy CSS positioning and legacy focus behavior exercised. MP3 tests compare the old and new join selection and exercise buffer detachment. Desktop Edge decoded a 44.1 kHz stereo VBR MP3 and a 48 kHz mono CBR MP3 through both implementations. Each emitted three chunks with identical PCM samples. Physical TV behavior, audio output, sync and server transcoding still need an on-device comparison.

To run the navigation tests from this directory with the bundled local test runtime:

```sh
NODE_PATH=../../work/test-runtime/node_modules node tests/navigation.cjs
NODE_PATH=../../work/test-runtime/node_modules node tests/media-keys.cjs
```

To compare MP3 chunk joins, pass the original page and a patched copy to `node tests/mp3.cjs ORIGINAL.html PATCHED.html`.
