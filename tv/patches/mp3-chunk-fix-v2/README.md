# Lyrion TV MP3 chunk fix v2

Adds exact durations to browser-decoded MP3 chunks, alongside the previous reservoir-history fix. This addresses a second VBR defect in Chromium 53's `decodeAudioData` path: an underestimated duration can truncate otherwise valid decoded audio. Apply to the LMS-hosted LyrionJS page; keep the existing launcher/IPK, saved URL and Blue diagnostics.

## Install or upgrade on LMS

Extract the directory on LMS and run from it with the same permissions as previous patches:

```sh
python3 install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html --check
python3 install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html
```

The installer upgrades the reservoir fix if present and includes it if absent. It preserves diagnostics v1/v2 and the TV focus/MP3 optimization. Restart LMS, fully close and relaunch Lyrion TV, then check Blue for:

```text
MP3 chunk fix v2: ... decodes | short 0 | long 0 | last delta 0f
```

Replay the supplied track from the beginning, especially 00:55–01:05. Compare `short`, `long`, join errors and `output-new` values. Middle chunks should return their exact sample counts; first/final chunks still have the existing track delay/padding trims. If stumbles persist, capture the new footer and join lines or the JSON report. Seeking changes chunk boundaries, so begin with a full playback from the start.

The installer validates all replacements before writing, preserves file permissions, supports a write-free `--check`, and is idempotent. It creates a separate `.before-mp3-chunk-v2` backup. Use the same command with `--restore` to restore the exact page present immediately before this upgrade, then restart/relaunch. Rollback also removes subsequent edits to that page; existing earlier backups are retained.

## Reproduced cause

The supplied file is stereo 44.1 kHz MP3 at approximately 265.5 kb/s average audio bitrate. The photo reports zero starvations, late starts, scheduler source jumps and clock gaps. Those counters can remain zero when samples disappear inside decoding: the scheduler receives an already-shortened PCM stream.

The Chromium 53 source allocates the Web Audio decode destination using the demuxer's estimated duration, then truncates output if it exceeds that destination. A raw VBR chunk without duration metadata can therefore lose samples despite a successful decode.

For the affected chunk near 62 seconds, the actual content is 389 frames, or 448,128 samples. FFmpeg estimates its raw duration as 10.065436 seconds. Applying Chromium 53's allocation rule gives 443,886 samples of capacity: **4,242 samples short**, exactly the deficit in the supplied photo (96.19 ms at 44.1 kHz).

A full-track model using that historical allocation rule, FFmpeg's seekable-input duration estimate and the real app's chunk decoder reproduces the screenshot's three joins:

| Source position before upgrade | Join shift | Normalized match error | Decoded samples lost in this chunk |
| --- | --- | --- | --- |
| 52.2756 s | −481 | 0.695773 | 0 |
| 62.3176 s | 0 | 0 | 4,242 |
| 72.2524 s | −1 | 0.661446 | 0 |

The weak joins follow truncation of preceding chunks: the retained reference is no longer where the next join expects it. This explains why the prior reservoir fix helped but did not remove these stumbles. The model has seven truncated chunks over the supplied track. With this update it has none, all tested joins align correctly, and every emitted sample matches continuous decoding.

The historical model uses the documented Chromium 53 allocation rule and local FFmpeg; it is not an executable copy of the TV's browser. Its reproduced positions, shifts, errors and 4,242-sample deficit match the photo. A modern desktop Edge test also decodes the supplied track using the new headers with identical sample count and PCM to continuous native decoding, including 00:55–01:05. Physical-TV playback still needs confirmation.

Primary source: [Chromium 53 decode destination allocation](https://github.com/chromium/chromium/blob/53.0.2785.143/content/renderer/media/audio_decoder.cc) and [read/truncation and duration calculation](https://github.com/chromium/chromium/blob/53.0.2785.143/media/filters/audio_file_reader.cc).

## Change

Each independent Layer III decode chunk receives a synthesized Xing metadata frame containing its exact compressed-frame count and byte count. The demuxer skips this metadata frame; the original compressed audio frames are copied unchanged. No encoder delay/padding metadata is added because the player already applies the real track's trimming. Reservoir-aware look-behind is retained. MP3 data is not re-encoded, and the resampler, scheduler, sync behavior and scheduling horizon are unchanged.

Blue's new footer compares each raw decode result with the exact expected sample count before track trimming. Nonzero size differences also appear as `mp3-decode-size` JSON events when performance tracing is enabled. This allows checking whether the TV honors the exact-duration metadata. The existing `output-new` join field remains useful but is not itself an independent decode-size measurement.

This patch does not repair the separate existing EOF case where a stream ends exactly on a full chunk and the old decoder fails to release its final held frames. The regression suite characterizes that final loss without misreporting it as repaired. It also does not change main-thread resampling costs or prove that every earlier scheduler stall shared this cause.

## Local tests

From the repository root, with Node, Python 3, FFmpeg and ffprobe installed:

```sh
node 'lyrion tv/outputs/lyrionjs-mp3-chunk-fix-v2/tests/chunks.cjs'
```

This checks installation/rollback, malformed layouts, metadata fields, byte-exact preservation of the original audio frames, metadata-frame removal, decoded sample preservation, reservoir budgeting, and full chunk decoding against continuous PCM. Generated fixtures cover VBR, low/high CBR, MPEG-1/2/2.5, stereo/mono, 44.1/48/22.05/11.025 kHz and the known separate EOF behavior. The same suite passes when upgrading a page containing the reservoir fix, TV focus/MP3 optimization and diagnostics v2.

The supplied track is not bundled. To reproduce the historical allocation failure using a local MP3 and a pre-v2 page containing the first reservoir fix:

```sh
node 'lyrion tv/outputs/lyrionjs-mp3-chunk-fix-v2/tests/legacy-duration.cjs' TRACK.mp3 PRE_V2_PAGE.html
```

It writes a JSON result in a task-specific temporary directory, checks that old allocation truncates affected VBR chunks, then verifies that exact durations prevent truncation and preserve the full continuous PCM. Optional native FFmpeg regression against a user-supplied track uses `node tests/chunks.cjs BASE_PAGE.html TRACK.mp3` from this package directory. Tests produce no upload or shared music artifact.
