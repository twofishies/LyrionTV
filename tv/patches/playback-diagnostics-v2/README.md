# Lyrion TV playback diagnostics v2

Extends Blue's starvation trace to investigate audible skips, repeats and rhythmic stumbles while audio remains buffered. Upgrades an installed v1 trace or installs on the existing Scheduled PCM / sync-timing page. Keep the existing Lyrion TV IPK and saved URL. This is instrumentation, not a playback fix.

## Install or upgrade on LMS

Extract the package on LMS and run from this directory with the same permissions as previous updates:

```sh
python3 install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html --check
python3 install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html
```

Restart LMS and fully close and relaunch Lyrion TV. Blue should show **Playback trace v2**. Collection continues with Blue closed. The decoder, selected join offsets, resampling algorithm, buffer horizon and sync behavior are retained.

The installer validates all replacements before writing and preserves file permissions. An upgrade replaces the v1 helper and retains its existing hooks, adding the new hooks once. Repeat installation is a no-op. The new `.before-playback-diagnostics-v2` backup is separate from v1's backup. To restore the exact page present before installing v2, run the same command with `--restore`, then restart LMS and relaunch. As with the other installers, rollback also removes any edits made to the page after this installation.

## Capturing an irregular stumble

1. Play the same MP3 with Blue closed. Note the playback position when a stumble is heard.
2. Open Blue and select **Mark heard stumble**. This preserves recent event, buffer, decode and sample history in a separate marker record. The timestamp is when you press the button, so allow for reaction/navigation delay; it is not an automatic measurement of the sound.
3. Capture the Blue trace, especially the new join and scheduler continuity lines. **Show playback report** exposes frozen JSON in a selectable text box. Select it again to hide it. The TV's ability to copy text depends on its browser. With developer tools, use `JSON.stringify(window.lyrionTVPerf.report(), null, 2)`.

Full JSON is more informative than a photo because it preserves timestamps, rates, frame counts, source positions and surrounding events. No additional server endpoint or upload is used.

## New measurements

**MP3 joins.** Each emitted chunk records decoded length, trim positions, newly supplied compressed-frame sample count and emitted PCM count. Later chunks record the chosen join offset relative to the prediction, its change from the preceding matched join, and squared match error divided by reference energy. Silence and missing-reference fallbacks are identified explicitly.

Blue's `Join ... @track ...` position is cumulative emitted PCM time at the native source rate, before resampling and transitions. It is approximate relative to UI track time, especially with crossfades or sync corrections. The chunk is decoded ahead of playback: its event timestamp is not when that join is heard. Compare its track position with the position of the stumble.

A nonzero offset can be normal decoder alignment. Offset changes or increased match error are evidence to compare, not proof of a bad join. `output-new` compares emitted PCM frames with the sample count represented by newly supplied compressed frames; trimming, priming and final padding can produce legitimate differences. First/final chunks are tagged in JSON. Endpoint values and slopes are recorded without scanning/copying the waveform. A waveform step can also be normal musical content.

**Scheduler continuity.** For adjacent buffers of the same track, the trace compares the next source sample position with the preceding buffer's end, and compares scheduled audio-clock positions. `scheduler source jumps` counts a source-frame gap or repeated region; `clock gaps` counts a noncontiguous scheduled boundary. Pause, seek/trim, flush and sync commands reset this comparison. A clock gap with contiguous source frames indicates a delay rather than missing PCM content. This checks scheduler frame accounting; it cannot prove MP3 chunks contained the right musical samples.

**Resampling.** Events include input/output frame counts, rates, and fractional input phase before/after conversion, alongside duration. This allows checking sample accounting across chunks. Browser MP3 decode duration includes the wait for its promise callback; main-thread stalls can inflate it.

**Manual markers.** Up to 16 markers retain nearby history for reported stumbles even if no automatic starvation/jump detector fired.

V1 measurements remain: scheduler intervals over 80 ms, maximum interval, late starts, decode rejections, queue snapshots, sync/control events and pump/join/resample/fill durations. The original `schedule gaps` counter is unchanged. The starvation trace can also record a normal final timeline drain that never recovers; an unrecovered drain alone is not an audible fault.

## What the supplied photo establishes

At about 64.3 seconds after launch, the trace records a 1,399.4 ms scheduler interval, 717.3 ms of prior headroom and 12,631.8 ms of PCM already waiting. The recovery gap is 750.7 ms. This identifies late scheduler execution rather than a decoded-audio shortage for that incident; it does not identify which operation or OS/browser activity prevented the scheduler from running.

The session shows 41 intervals over 80 ms, zero sync corrections, zero late starts and zero rejected MP3 chunks. Source audio is 44.1 kHz and output is 48 kHz. Resampling averages 150.2 ms and peaks at 257.2 ms; join search peaks at 150.7 ms. Those costs are significant relative to the roughly 650 ms scheduling horizon, but the photo does not show they caused each stumble. The reported irregular timing does not establish a regular once-per-chunk fault. V1 measured join duration, not correctness; v2 fills that gap.

The displayed `API latency: 0` is the existing diagnostic's fallback when latency properties are unavailable; it does not establish physically zero output latency. These traces cannot directly measure the native renderer, CPU scheduling or garbage collection.

## Retention, overhead and verification

Uses the existing scheduler tick with no added polling timer, PCM scans, audio copies or per-tick console output. Retains 120 approximately one-second snapshots, 240 recent events, 40 starvation incidents, 48 chunk summaries, 64 scheduled-buffer summaries, 40 discontinuity records and 16 manual markers. Markers/incidents preserve bounded nearby history. Reports contain a few endpoint sample values but no audio clips, titles, URLs or request headers. They remain in memory and disappear on reload. Append `&tvperf=0` to the saved URL and fully relaunch for comparison with telemetry disabled.

From the repository root:

```sh
NODE_PATH='lyrion tv/work/test-runtime/node_modules' node 'lyrion tv/outputs/lyrionjs-playback-diagnostics-v2/tests/playback.cjs'
```

Local tests cover fresh installation and v1 upgrade, idempotence and separate exact rollback, syntax, bounded reports, starvation timing, intentional-control suppression, unchanged source start times/position reports, PCM preservation, injected source-jump detection, MP3 success/rejection paths, known join offsets/errors, resampler continuity across chunk splits, and Blue's marker/report controls. The suite also passes with the TV focus/MP3 patch. The existing MP3 regression preserves join offsets, ties and buffer ownership. Physical-TV audio, overhead and correlation still require another listening run.
