Keep the existing TV IPK. This updates the Blue panel on LMS to use the same two-second buffered Web Audio tone as TV Audio Check.

From this extracted folder on the LMS host:

    python3 tools/install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html

Restart LMS and fully relaunch the app. Close TV Audio Check and the regular TV browser before testing.

1. In LyrionJS Settings, switch off “Play music in this browser.” Press Blue and select “Buffered Web Audio tone.” It should report “fresh context.” Note whether it is audible.
2. Close the panel, re-enable the local player, select it and start a track. While it is silently playing, repeat the tone. It should report “player context.” Note whether it is audible and report the status line.

Restore the preceding diagnostic by running the installer with --restore.
