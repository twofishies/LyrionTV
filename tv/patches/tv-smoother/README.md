# LyrionJS TV playback jitter test

Keep the current TV IPK and the working single-context patch. This opt-in LMS add-on reduces repeated focus scans during UI updates and stops the Blue diagnostic from scanning samples when closed. A separate option tests a larger audio processing block.

From the extracted folder on the LMS host:

    python3 install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html

Restart LMS and fully relaunch the TV app. Use this URL for the first pass:

    http://lms.example:9000/plugins/LyrionJS/?tvsingle=1&tvsmooth=1

Play the 48 kHz FLAC on repeat for several loops, ideally with the TV player temporarily outside any sync group. Keep Blue closed while listening. Compare jitter in the middle of a track versus right at the restart, and try a longer track too.

If it still jitters, fully relaunch and try:

    http://lms.example:9000/plugins/LyrionJS/?tvsingle=1&tvsmooth=1&tvbuffer=16384

This doubles the processing block from 8192 to 16384 frames (about 171 to 341 ms per block at 48 kHz). It can help with scheduling stalls, but can also increase latency. If you prefer the larger block, check multiroom sync again before adopting it.

Blue shows the actual block size and a count of unusually long gaps between observed callbacks. Open Blue once, close it while reproducing the jitter, then reopen it to read the count. It starts observing when first opened and resets if the audio processor is replaced. A late callback is a clue, not proof of a dropout; a zero count does not rule out a track-boundary issue.

If only the repeat boundary still garbles in both modes, report that separately from mid-track jitter. This points the next investigation toward the repeat/track handoff rather than increasing the buffer further.

To leave the test, connect with only ?tvsingle=1. To remove it, rerun the install command with --restore and restart LMS. This restores the HTML backup, discarding later HTML edits.

Local checks covered old-engine JavaScript syntax, both buffer settings, repeatable installation and exact rollback. Audible playback and sync still require the TV test.
