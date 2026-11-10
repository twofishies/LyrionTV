# Lyrion TV Scheduled PCM headroom

This hosted-page patch defaults to a one-second scheduling window. It upgrades the earlier opt-in patch in place. Use `tvschedheadroom=0` to select the original 650 ms window. The scheduler fills in blocks of up to 180 ms, so Blue can report more than the configured window. The change applies to Scheduled PCM output in that page session, regardless of the input codec.

## Install and test

Copy this folder to the LMS host and run the following from the extracted folder.

```sh
PAGE=/path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html
python3 install.py "$PAGE" --check
python3 install.py "$PAGE"
```

Fully close and relaunch Lyrion TV. The existing `tvschedheadroom=1` flag can be left in place or removed. If Blue still reports the old scheduling window after relaunching, restart LMS and relaunch the TV app again.

Start with the same WAVs, playing on the TV by itself. Check that Blue shows format `p` and that **Scheduled ahead** is roughly a second during steady playback. Compare starvation counts over similar listening windows and check pause, resume, seek and a track change. Use `tvschedheadroom=0` for synced playback if you want the original timing while testing the larger window.

## Tradeoffs and rollback

More audio is scheduled on the same Web Audio context. At 48 kHz stereo, about 350 ms of extra Float32 audio is 131 KiB per copy. The scheduler and AudioBuffer each hold a copy, with some rounding to buffer boundaries and native overhead. The scheduler still disconnects completed nodes and prunes their records. Pause and seek still cancel scheduled audio. A correction or seek can discard or requeue a slightly longer tail.

The patch does not create decoder contexts, threads or timers. It does not fix the MP3 fallback's thread growth. A stall longer than the audio already scheduled ahead can still produce a gap.

Set `tvschedheadroom=0` and relaunch to return to the original window. To remove the installed code as well, run `python3 install.py "$PAGE" --restore`. This removes only the intact patch and preserves edits elsewhere on the page.
