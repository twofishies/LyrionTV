# LyrionJS TV scheduled audio prototype

Keep the current TV IPK, single-context patch and Blue diagnostics. The smoother patch is optional.

This output queues decoded PCM ahead using AudioBufferSourceNode on the Web Audio clock. The browser renders scheduled buffers without a ScriptProcessor callback filling each block. FLAC/MP3 decoding and LMS sync control still run in JavaScript. This is a change to the rendering path, not hardware decoding.

Extract the ZIP on LMS, open the extracted folder, and run:

    python3 install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html

Restart LMS and fully relaunch the TV app. Connect to:

    http://lms.example:9000/plugins/LyrionJS/?tvsingle=1&tvschedule=1

In Blue, look for **Scheduled PCM** and **Scheduled ahead**. ScriptProcessor counters do not apply in this mode. The scheduler normally keeps around 0.65 seconds queued on the audio clock; a count of schedule gaps indicates it ran out of scheduled audio before it could queue more.

First test on the TV outside any sync group:

1. Loop the 48 kHz FLAC several times with Blue closed.
2. Play a normal album and try a track boundary, pause/resume, seek and next track.
3. If the audio is clean, join your usual sync group and check initial alignment, drift and the next track boundary.

If there is jitter, note whether the schedule gap count rises and whether the glitch happens mid-track or at the boundary. The prototype implements playback position, timed starts and sync corrections, but alignment and audible behavior have not been validated on the TV.

Remove only tvschedule=1 from the URL to return to the known single-context ScriptProcessor path. To uninstall the change, rerun the installer with --restore and restart LMS. The backup restore discards any later edits to that HTML.

Local validation covered old-engine syntax and mocked scheduling, consecutive tracks, mono-to-stereo output, pause/requeue, trimming, timed start, flush and disposal.
