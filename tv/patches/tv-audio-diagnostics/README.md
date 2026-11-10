# LyrionJS TV audio unlock correction and diagnostics — 1.0.2

This is a small server add-on to the working **TV compatibility 1.0.1** patch. Keep the installed IPK and that compatibility patch. Apply this once on LMS for both TVs.

A concrete wrapper bug was found: TV navigation consumes keydown events at the window before LyrionJS's document-level keydown handler can unlock its audio output. This add-on calls the same output.unlock method synchronously at the original remote keypress, before navigation handles it. It also provides optional, local audio diagnostics. The unlock correction may resolve the reported silence; physical TV validation is required.

## Install

Extract this ZIP on the LMS host and open a terminal inside the extracted `lyrionjs-tv-audio-diagnostics` folder. Run with the same permissions used for the earlier HTML patch:

```sh
python3 tools/install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html
```

The installer checks for compatibility 1.0.1 and creates `lyrionjs.html.before-tv-audio-diagnostics`. It does not change player identity, output choice, volume, or LMS settings.

Restart LMS, fully close/relaunch the TV app, and open the normal LyrionJS URL. Select the TV's own player, start a track, and press a remote arrow or OK. That keypress now reaches the audio unlock path synchronously. Test whether music starts.

## If still silent

While playing, press **Blue**. A panel shows the active output, local/controlled player IDs, AudioContext state and clock, gain/output level, buffering, ScriptProcessor callback counts and sample peaks. It updates once per second. Use D-pad/OK on its buttons:

1. **Resume / enable sound**: explicitly unlock and resume the existing output.
2. **Web Audio test tone**: a brief low-level 440 Hz tone through the current AudioContext, bypassing LyrionJS decoding and its output gain. If there is no player context, a temporary one is used and closed after the test.
3. **Native WAV test tone**: the same kind of short tone through an HTML audio element, independently of LMS and Web Audio.
4. **Close**, Blue, or Back closes the panel. No tone plays unless its test button is selected.

Send a photo of the panel after 5–10 seconds of silent playback, and say which tone(s) you heard. Useful distinctions:

- Suspended context or a non-advancing clock points toward activation/context behavior.
- Increasing callbacks with a nonzero peak means the ScriptProcessor is producing sample data; silence is farther along the output path.
- Advancing context with zero callbacks points toward ScriptProcessor scheduling.
- Callbacks with zero peaks, empty buffers, or bad samples point toward decoding, gain, or the output core.
- A working Web Audio tone narrows the issue to the music pipeline. A working native WAV tone but silent Web Audio tone narrows it toward Web Audio. A failed WAV test may also mean that playback method/format was rejected; it does not alone prove a system audio fault.

The status panel from compatibility 1.0.1 can still show uncaught errors. LyrionJS Settings → Audio output also shows its engine, output state, buffered time and local output level; these are useful if Blue is unavailable.

## Restore

This restores the HTML as it was before this add-on, discarding later HTML edits:

```sh
python3 tools/install.py /path/to/InstalledPlugins/Plugins/LyrionJS/HTML/lyrionjs.html --restore
```

Restart LMS and fully relaunch the app. Reapply this add-on after reinstalling compatibility 1.0.1 if needed.

## Checks performed

ES5 syntax check; mocked tests of keypress audio unlock, the panel, resume, callback/sample observation, both tone paths and focus restoration; repeated installer application and exact rollback against the currently served HTML. No physical TV or audible-output test was performed here. Diagnostic counters describe the JavaScript buffers, not the TV's speaker output.
