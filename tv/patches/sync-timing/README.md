# Scheduled PCM sync timing update

Keep the current IPK and Scheduled PCM patch. This LMS add-on preserves audio already scheduled near the playback clock when LMS asks to skip or pause briefly. It applies the requested correction at a future audio boundary, without adding a restart gap to each correction.

Extract this folder on LMS and run:

    python3 install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html

Restart LMS and fully relaunch the TV app. Keep the usual URL:

    http://lms.example:9000/plugins/LyrionJS/?tvsingle=1&tvschedule=1

Test one TV with one other player first. Start them together and listen after a minute and across a track transition. Blue now shows Sync corrections, the last correction, API latency, and whether an output timestamp API exists. Note whether the correction count climbs while the timing swings and which player leads. Repeat with TV-to-TV once the simpler pair is stable.

If the TV consistently trails the reference player, and Blue shows zero API latency and no timestamp API, try an explicit latency estimate on the trailing TV:

    http://lms.example:9000/plugins/LyrionJS/?tvsingle=1&tvschedule=1&tvsynclat=500

This tells LMS timing logic to estimate that audio reaches the TV output 500 ms after the context clock. It is not an added playback delay. It replaces the clock's automatic output-latency mapping in Scheduled PCM mode. LG documents about 500 ms for Web Audio generally; this is a trial value, not a measurement of your TV or sound output. If it worsens sync, remove the parameter. Do not tune multiple players simultaneously.

Restore the previous scheduler by running the install command with --restore and restarting LMS. Restoring discards later HTML edits. Mock tests passed for timed pause/skip splicing, preserving PCM across repeated corrections, and clock offset calculation. Audible alignment still needs testing on hardware.
