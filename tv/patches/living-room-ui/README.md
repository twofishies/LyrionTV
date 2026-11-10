# LyrionJS living-room layout

This LMS-side update makes LyrionJS's own interface readable from the sofa: larger typography, navigation rows, artwork, transport controls, dialogs, sliders and focus rings. It adjusts the layout rather than zooming the whole page. At 1920×1080 the default text is 24 px and navigation rows are about 59 px tall.

Keep the current IPK and your working Scheduled PCM/sync settings. Extract this folder on LMS and run:

    python3 install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html

Restart LMS and fully relaunch the TV app with your existing URL. The layout automatically activates in WebAppManager when the wrapper adds tvnav=1. If you want larger text, add &tvui=large to your current URL (or ?tvui=large if there are no parameters yet). Add tvui=0 to compare with the previous layout without uninstalling.

Direct links can use `tvui=1` or `tvui=large` to enable TV sizing. The layout stays unchanged in regular browser sessions without these flags. The stylesheet applies to LyrionJS's own screens, including its Material look. A separate LMS skin in a frame has its own sizing.

On the TV, check Now Playing, a long list, Search, Settings, player selection and a menu. Check that focus stays visible while the sidebar or content scrolls. The representative Now Playing layout passed desktop rendering checks at 1920×1080 and 1280×720, with the legacy positioning fallback enabled. Physical TV layout and overscan still need checking.

For rollback, run the same command with --restore and restart LMS. This restores the previous HTML and discards later edits.
