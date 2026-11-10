# LyrionJS TV single-context test

Keep the current IPK, compatibility patch and Blue diagnostics. This server add-on tests whether opening and closing multiple Web Audio contexts causes silence on this TV. It is opt-in and has not been tested on physical hardware.

From this extracted folder on the LMS host:

    python3 install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html

The installer checks the two compiled scripts against compatibility build 1.0.1 and preserves a backup. Restart LMS and fully close the TV app and TV browser. Relaunch the TV app and enter:

    http://lms.example:9000/plugins/LyrionJS/?tvsingle=1

Keep local playback enabled. In this mode LyrionJS skips the temporary sample-rate probes, opens one default Web Audio context for the player, and reuses it when the source rate changes. The app advertises 48 kHz as its maximum in this test. The Blue output line should say [single context]. The diagnostic tone still uses the player context when present.

Try the Blue tone with the player enabled, then play the 48 kHz and 44.1 kHz test tracks. Report which are audible. If sound returns, also test switching rates in the queue and multiroom sync. If everything is still silent, the next isolation step is the player's ScriptProcessor graph versus a buffer-source output.

Remove the URL parameter to leave test mode. To restore the previous HTML, run the same install command with --restore and restart LMS. Restoring discards later HTML edits.
