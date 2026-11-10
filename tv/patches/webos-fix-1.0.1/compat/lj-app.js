/* LyrionJS 0.2.34; modified 2 November 2026 for Chrome 53. GPL-2.0-or-later; see licenses and compat/original. */
'use strict';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(r) { for (var t = 1; t < arguments.length; t++) { var o = null != arguments[t] ? arguments[t] : {}; t % 2 ? ownKeys(Object(o), !0).forEach(function (t) { _defineProperty(r, t, o[t]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(o)) : ownKeys(Object(o)).forEach(function (e) { Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(o, e)); }); } return r; }
function _defineProperty(r, t, o) { return (t = _toPropertyKey(t)) in r ? Object.defineProperty(r, t, { value: o, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = o, r; }
function _toPropertyKey(r) { var o = _toPrimitive(r, "string"); return "symbol" == typeof o ? o : o + ""; }
function _toPrimitive(t, e) { if ("object" != typeof t || !t) return t; var r; if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) { var i = r.call(t, e || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === e ? String : Number)(t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
(function () {
  const LJ = window.LJ;
  const VERSION = '0.2.34';
  const I18N = {
    "cs": {
      "(plain http page)": "(obyčejná stránka http)",
      "(the first {shown} shown)": "(zobrazeno prvních {shown})",
      "1, and we’d like to keep it that way": "1 a rádi bychom, aby to tak zůstalo",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "Přehrávač Slimproto a dálkové ovládání pro Lyrion Music Server, které běží celé na této stránce.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "Přehrávač Slimproto a ovladač pro Lyrion Music Server na jedné stránce. Klávesnice: mezerník přehrát/pozastavit, ←/→ předchozí/další, ↑/↓ hlasitost, M ztlumit.",
      "A new version of LyrionJS is ready — reload": "Je připravena nová verze LyrionJS — načíst znovu",
      "A remote control (not a player)": "Dálkové ovládání (ne přehrávač)",
      "About": "O aplikaci",
      "About LyrionJS": "O LyrionJS",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Úspěch odemčen: Uroboros. A teď si běž pustit nějakou hudbu.",
      "Actions to show": "Zobrazené akce",
      "Add alarm": "Přidat budík",
      "Add album to playlist…": "Přidat album do seznamu skladeb…",
      "Add to favourites": "Přidat do oblíbených",
      "Add to it": "Přidat do něj",
      "Add to playlist": "Přidat do seznamu skladeb",
      "Add to playlist…": "Přidat do seznamu skladeb…",
      "Add to queue": "Přidat do fronty",
      "Added to favourites": "Přidáno do oblíbených",
      "Added to the queue": "Přidáno do fronty",
      "Added to {name}": "Přidáno do seznamu {name}",
      "Alarm deleted": "Budík odstraněn",
      "Alarm set": "Budík nastaven",
      "Alarms": "Budíky",
      "Alarms enabled": "Budíky zapnuty",
      "Alarms enabled on this player": "Budíky zapnuty na tomto přehrávači",
      "Alarms off": "Budíky vypnuty",
      "Alarms on": "Budíky zapnuty",
      "Album": "Album",
      "Album artists": "Interpreti alba",
      "Album gain": "Zesílení alba",
      "Albums": "Alba",
      "Albums ({count})": "Alba ({count})",
      "All artists": "Všichni interpreti",
      "All options…": "Všechny možnosti…",
      "All players": "Všechny přehrávače",
      "Already moving playback…": "Přehrávání se už přesouvá…",
      "Android: keeps playing with the screen locked": "Android: hraje i se zamčenou obrazovkou",
      "Another tab is this browser's player; this one is a remote control.": "Přehrávačem tohoto prohlížeče je jiná karta; tato slouží jako dálkové ovládání.",
      "Appearance": "Vzhled",
      "Apps": "Aplikace",
      "Artist": "Interpret",
      "Artists": "Interpreti",
      "Artists ({count})": "Interpreti ({count})",
      "Artists, albums, tracks, playlists": "Interpreti, alba, skladby, seznamy skladeb",
      "As Lyrion Music Server ({language})": "Podle Lyrion Music Server ({language})",
      "At the end of this track": "Na konci této skladby",
      "Audio": "Zvuk",
      "Audio engine": "Zvukové jádro",
      "Audio output": "Zvukový výstup",
      "Automatic": "Automaticky",
      "Back": "Zpět",
      "Back to the skin": "Zpět na skin",
      "Back to {skin}": "Zpět na {skin}",
      "Blue": "Modrá",
      "Browser player off": "Přehrávač v prohlížeči vypnut",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "Přehrávače v prohlížeči jsou v LMS vypnuté (Nastavení › Zásuvné moduly › LyrionJS). Tato stránka ovládá tvoje ostatní přehrávače.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "Přehrávače v prohlížeči jsou v LMS vypnuté (Nastavení › Zásuvné moduly › LyrionJS); tato stránka je teď dálkové ovládání.",
      "Buffered": "Ve vyrovnávací paměti",
      "By artist": "Podle interpreta",
      "By title": "Podle názvu",
      "By year": "Podle roku",
      "Cancel": "Zrušit",
      "Cancel ({time} left)": "Zrušit (zbývá {time})",
      "Choose a player": "Vyber přehrávač",
      "Clear": "Vyčistit",
      "Clear queue": "Vyčistit frontu",
      "Clear the queue?": "Vyčistit frontu?",
      "Click to enable sound in this browser": "Klikni pro zapnutí zvuku v tomto prohlížeči",
      "Close": "Zavřít",
      "Close now playing": "Zavřít „Právě hraje“",
      "Composers": "Skladatelé",
      "Connected (Slimproto over a WebSocket to LMS)": "Připojeno (Slimproto přes WebSocket k LMS)",
      "Connecting to LMS…": "Připojování k LMS…",
      "Connecting…": "Připojování…",
      "Connection": "Připojení",
      "Control": "Ovládat",
      "Controlling": "Ovládáno",
      "Create": "Vytvořit",
      "Crossfade": "Prolínání",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "Prolínání vyžaduje, aby obě skladby měly stejnou vzorkovací frekvenci; jinak je tento prohlížeč přehraje bez mezery.",
      "Dark": "Tmavý",
      "Delete": "Odstranit",
      "Delete alarm": "Odstranit budík",
      "Delete playlist": "Odstranit seznam skladeb",
      "Delete this alarm?": "Odstranit tento budík?",
      "Delete “{name}”?": "Odstranit „{name}“?",
      "Deleted": "Odstraněno",
      "Disc {n}": "Disk {n}",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Zapnuto",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Všechny přehrávače, které LMS zná, včetně tohoto prohlížeče. Synchronizuj přehrávače, aby hrály stejnou hudbu současně.",
      "Every time you do that, a call stack loses its wings.": "Pokaždé, když to uděláš, někde zapláče jeden zásobník volání.",
      "Everything LMS can search: your library, radio and installed apps": "Vše, co LMS umí prohledat: tvoje knihovna, rádio a nainstalované aplikace",
      "Fade in": "Postupné zesílení",
      "Fade in and out": "Postupné zesílení a zeslabení",
      "Fade out": "Postupné zeslabení",
      "Favourites": "Oblíbené",
      "Formats": "Formáty",
      "From the cover art (as Material Skin)": "Podle obalu alba (jako Material Skin)",
      "Genres": "Žánry",
      "Give this player a name": "Pojmenuj tento přehrávač",
      "Go to album": "Přejít na album",
      "Go to artist": "Přejít na interpreta",
      "Gold": "Zlatá",
      "Green": "Zelená",
      "Highest sample rate": "Nejvyšší vzorkovací frekvence",
      "Highlight colour": "Barva zvýraznění",
      "Home": "Domů",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "Takto se tento prohlížeč zobrazí v LMS a v tvých dalších ovladačích. Změnit to můžeš kdykoli v nastavení.",
      "LMS answered {status}": "LMS odpověděl: {status}",
      "LMS did not answer in time": "LMS neodpověděl včas",
      "LMS keeps the queue topped up with random picks from your library.": "LMS průběžně doplňuje frontu náhodně vybranými skladbami z tvé knihovny.",
      "Language": "Jazyk",
      "Last scan": "Poslední prohledání",
      "Leave the group": "Opustit skupinu",
      "Library": "Knihovna",
      "Library scan started": "Prohledávání knihovny zahájeno",
      "Light": "Světlý",
      "Live": "Živě",
      "Lost contact with the server: {error} — retrying…": "Spojení se serverem ztraceno: {error} — zkouším znovu…",
      "Lyrion Music Server is not answering at {host}.": "Lyrion Music Server na adrese {host} neodpovídá.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "LyrionJS hraje nejlépe ve vlastní kartě: v tomto okně přestane hrát, jakmile se okno zavře.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} na {os}",
      "Main": "Hlavní",
      "Match the system": "Podle systému",
      "Media element (plays with the screen locked)": "Mediální prvek (hraje i se zamčenou obrazovkou)",
      "Menu": "Nabídka",
      "More": "Více",
      "More about LyrionJS…": "Více o LyrionJS…",
      "More…": "Více…",
      "Move down": "Posunout dolů",
      "Move playback to {name} from…": "Přesunout přehrávání na přehrávač {name} z…",
      "Move up": "Posunout nahoru",
      "Moved": "Přesunuto",
      "Moved playback to {name}": "Přehrávání přesunuto na přehrávač {name}",
      "Moving playback stopped part-way ({name} carries on): {error}": "Přesun přehrávání se zastavil v půli cesty ({name} hraje dál): {error}",
      "Moving {n} tracks (the first {max})…": {
        "few": "Přesouvám {n} skladby (prvních {max})…",
        "many": "Přesouvám {n} skladby (prvních {max})…",
        "one": "Přesouvám jednu skladbu (prvních {max})…",
        "other": "Přesouvám {n} skladeb (prvních {max})…"
      },
      "Moving {n} tracks…": {
        "few": "Přesouvám {n} skladby…",
        "many": "Přesouvám {n} skladby…",
        "one": "Přesouvám jednu skladbu…",
        "other": "Přesouvám {n} skladeb…"
      },
      "Music folder": "Složka hudby",
      "Mute": "Ztlumit",
      "Name": "Název",
      "Name this player": "Pojmenovat tento přehrávač",
      "Never": "Nikdy",
      "New alarm on {name}": "Nový budík na přehrávači {name}",
      "New music": "Nová hudba",
      "New playlist": "Nový seznam skladeb",
      "New playlist…": "Nový seznam skladeb…",
      "Next": "Další",
      "Nice try.": "Pěkný pokus.",
      "No alarms on {name}.": "Přehrávač {name} nemá žádné budíky.",
      "No albums.": "Žádná alba.",
      "No apps are installed on the server.": "Na serveru nejsou nainstalované žádné aplikace.",
      "No player": "Žádný přehrávač",
      "No player selected.": "Není vybrán žádný přehrávač.",
      "No players are connected to the server.": "K serveru nejsou připojeny žádné přehrávače.",
      "No radio services are installed on the server.": "Na serveru nejsou nainstalované žádné rozhlasové služby.",
      "No saved playlists.": "Žádné uložené seznamy skladeb.",
      "None (gapless)": "Žádný (bez mezer)",
      "Nothing here.": "Nic tu není.",
      "Nothing in the library matches “{query}”.": "Výrazu „{query}“ v knihovně nic neodpovídá.",
      "Nothing playing": "Nic nehraje",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "Nic nehraje. Vyber něco z knihovny, oblíbených, rádia nebo aplikací.",
      "Nothing to add": "Není co přidat",
      "Nothing to move: {name}'s queue is empty": "Není co přesunout: fronta přehrávače {name} je prázdná",
      "Now playing": "Právě hraje",
      "OK": "OK",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "Dobře, máš vyhráno: teď posloucháš LyrionJS v LyrionJS v LyrionJS. (Neposloucháš.)",
      "Off": "Vypnuto",
      "Open LyrionJS inside LyrionJS (please don’t)": "Otevřít LyrionJS v LyrionJS (prosím ne)",
      "Open in a new tab": "Otevřít v nové kartě",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "Otevření LyrionJS v LyrionJS by otevřelo LyrionJS v LyrionJS v LyrionJS… a tak dále, dokud tvému prohlížeči nedojde trpělivost, paměť nebo obojí. Přestaň se prosím snažit vyvolat nekonečnou rekurzi.",
      "Opens when music starts": "Spustí se, až začne hrát hudba",
      "Orange": "Oranžová",
      "Other random albums": "Jiná náhodná alba",
      "Output": "Výstup",
      "Output level": "Úroveň výstupu",
      "Output level in this browser (on top of the LMS volume)": "Úroveň výstupu v tomto prohlížeči (navíc k hlasitosti LMS)",
      "Pause": "Pozastavit",
      "Pick a colour": "Vyber barvu",
      "Pink": "Růžová",
      "Play": "Přehrát",
      "Play folder": "Přehrát složku",
      "Play music in this browser (a real Slimproto player in LMS)": "Přehrávat hudbu v tomto prohlížeči (skutečný přehrávač Slimproto v LMS)",
      "Play next": "Přehrát další",
      "Play now": "Přehrát nyní",
      "Play now, keep the queue": "Přehrát nyní, ponechat frontu",
      "Play/pause": "Přehrát/pozastavit",
      "Player ID": "ID přehrávače",
      "Player controls": "Ovládání přehrávače",
      "Player: {name}": "Přehrávač: {name}",
      "Players": "Přehrávače",
      "Playing": "Přehrává se",
      "Playing next": "Bude hrát jako další",
      "Playing shuffled": "Přehrává se náhodně",
      "Playlist name": "Název seznamu skladeb",
      "Playlists": "Seznamy skladeb",
      "Plays it now (keeps the queue)": "Přehraje ji hned (ponechá frontu)",
      "Plays it now (replaces the queue)": "Přehraje ji hned (nahradí frontu)",
      "Position": "Pozice",
      "Previous": "Předchozí",
      "Purple": "Fialová",
      "Queue": "Fronta",
      "Queue cleared": "Fronta vyčištěna",
      "Queue folder": "Přidat složku do fronty",
      "Radio": "Rádio",
      "Random": "Náhodně",
      "Random album mix started": "Spuštěn náhodný mix alb",
      "Random albums": "Náhodná alba",
      "Random artist mix started": "Spuštěn náhodný mix interpretů",
      "Random mix": "Náhodný mix",
      "Random mix stopped": "Náhodný mix zastaven",
      "Random song mix started": "Spuštěn náhodný mix skladeb",
      "Random year mix started": "Spuštěn náhodný mix podle roku",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. Tak co, stálo to za to?",
      "Recently added": "Nedávno přidané",
      "Recursion depth": "Hloubka rekurze",
      "Refresh": "Obnovit",
      "Reloading to switch the output…": "Načítám znovu kvůli přepnutí výstupu…",
      "Remove": "Odebrat",
      "Remove from favourites": "Odebrat z oblíbených",
      "Remove from playlist": "Odebrat ze seznamu skladeb",
      "Remove from queue": "Odebrat z fronty",
      "Remove “{name}” from favourites?": "Odebrat „{name}“ z oblíbených?",
      "Removed": "Odebráno",
      "Rename": "Přejmenovat",
      "Rename favourite": "Přejmenovat oblíbenou položku",
      "Rename playlist": "Přejmenovat seznam skladeb",
      "Rename this browser…": "Přejmenovat tento prohlížeč…",
      "Rename this player": "Přejmenovat tento přehrávač",
      "Renamed": "Přejmenováno",
      "Rename…": "Přejmenovat…",
      "Repeat": "Opakovat",
      "Repeat off": "Opakování vypnuto",
      "Repeat queue": "Opakovat frontu",
      "Repeat song": "Opakovat skladbu",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Uložit",
      "Save as playlist": "Uložit jako seznam skladeb",
      "Save queue as playlist": "Uložit frontu jako seznam skladeb",
      "Saved": "Uloženo",
      "Saved as {name}": "Uloženo jako {name}",
      "Scan": "Prohledávání",
      "Scan for new music": "Vyhledat novou hudbu",
      "Scanning: {step} {done}/{total}": "Prohledávání: {step} {done}/{total}",
      "Search": "Vyhledat",
      "Search apps and services for “{query}”": "Vyhledat „{query}“ v aplikacích a službách",
      "Search: {query}": "Hledání: {query}",
      "Searching…": "Vyhledávání…",
      "Seek": "Posun",
      "Send diagnostics": "Odesílat diagnostiku",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Odesílat diagnostiku přehrávání do protokolu serveru LMS (pomáhá řešit problémy na telefonech a tabletech)",
      "Server": "Server",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Nastavuje se tlačítky tohoto zařízení (stránka ji tu nastavit nemůže); hlasitost LMS zůstává na 100 %",
      "Settings": "Nastavení",
      "Show LyrionJS": "Zobrazit LyrionJS",
      "Show the queue": "Zobrazit frontu",
      "Showing {skin}": "Zobrazeno: {skin}",
      "Shows actions under it": "Zobrazí pod ní akce",
      "Shuffle": "Náhodně",
      "Shuffle albums": "Náhodně podle alb",
      "Shuffle off": "Náhodné pořadí vypnuto",
      "Shuffle songs": "Náhodně podle skladeb",
      "Skin": "Skin",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Skin: vlastní skin LyrionJS nebo kterýkoli skin nainstalovaný na tvém Lyrion Music Server, přičemž přehrávačem zůstává tento prohlížeč",
      "Sleep timer": "Časovač usnutí",
      "Sleep timer off": "Časovač usnutí vypnut",
      "Sleeping after this track": "Usnutí po této skladbě",
      "Sleeping in {n} minutes": {
        "few": "Usnutí za {n} minuty",
        "many": "Usnutí za {n} minuty",
        "one": "Usnutí za minutu",
        "other": "Usnutí za {n} minut"
      },
      "Smart gain": "Inteligentní zesílení",
      "Something went wrong": "Něco se pokazilo",
      "Songs": "Skladby",
      "Sort albums": "Řadit alba",
      "State": "Stav",
      "Still no. One of us is enough.": "Pořád ne. Jeden z nás stačí.",
      "Stop mix": "Zastavit mix",
      "Switch off": "Vypnout",
      "Switch on": "Zapnout",
      "Sync this player…": "Synchronizovat tento přehrávač…",
      "Sync {name} with…": "Synchronizovat přehrávač {name} s…",
      "Synced {name}": "Synchronizováno: {name}",
      "Sync…": "Synchronizovat…",
      "Take me back to the music": "Zpátky k hudbě",
      "Tapping a track": "Klepnutí na skladbu",
      "Tapping a track (search, albums, playlists, folders)": "Klepnutí na skladbu (hledání, alba, seznamy skladeb, složky)",
      "Teal": "Modrozelená",
      "The alarm plays the current queue (or LMS's default alarm sound).": "Budík přehraje aktuální frontu (nebo výchozí zvuk budíku LMS).",
      "The browser has started muttering about “maximum call stack size”.": "Prohlížeč si začal mumlat něco o „maximum call stack size“.",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "Mediální prvek tu nemůže hrát: vyber Web Audio v Nastavení › Zvukový výstup.",
      "The queue is empty.": "Fronta je prázdná.",
      "The search failed: {error}": "Vyhledávání selhalo: {error}",
      "Theme": "Motiv",
      "This browser": "Tento prohlížeč",
      "This browser as a player": "Tento prohlížeč jako přehrávač",
      "This browser can't play through the media element: switching to Web Audio…": "Tento prohlížeč nemůže hrát přes mediální prvek: přepínám na Web Audio…",
      "This folder is empty.": "Tato složka je prázdná.",
      "This page could not be shown: {error}": "Tuto stránku nelze zobrazit: {error}",
      "This player is now “{name}”": "Tento přehrávač se teď jmenuje „{name}“",
      "This player was taken over by another session; this page is now a remote control.": "Tento přehrávač převzala jiná relace; tato stránka je teď dálkové ovládání.",
      "This playlist is empty.": "Tento seznam skladeb je prázdný.",
      "This tab is already playing with LyrionJS.": "Tato karta už hraje přes LyrionJS.",
      "Time": "Čas",
      "Track gain": "Zesílení skladby",
      "Track {n} of {total}": "Skladba {n} z {total}",
      "Tracks ({count})": "Skladby ({count})",
      "Transfer playback here from…": "Přesunout sem přehrávání z…",
      "Transition between tracks": "Přechod mezi skladbami",
      "Transition length": "Délka přechodu",
      "Try again": "Zkusit znovu",
      "Trying again every few seconds…": "Zkouším to znovu každých pár sekund…",
      "Type at least two letters.": "Napiš aspoň dvě písmena.",
      "Unknown": "Neznámé",
      "Unmute": "Zrušit ztlumení",
      "Unsynced": "Synchronizace zrušena",
      "Unsynced {name}": "Synchronizace zrušena: {name}",
      "Use it here": "Použít tady",
      "Use this browser as a player": "Použít tento prohlížeč jako přehrávač",
      "Version": "Verze",
      "Volume": "Hlasitost",
      "Volume levelling (ReplayGain)": "Vyrovnávání hlasitosti (ReplayGain)",
      "Volume of {name}": "Hlasitost: {name}",
      "Web Audio (lowest latency)": "Web Audio (nejnižší zpoždění)",
      "Web Audio (opens when music starts)": "Web Audio (spustí se, až začne hrát hudba)",
      "Web Audio, opens when music starts": "Web Audio, spustí se, až začne hrát hudba",
      "We’ve told LMS. It isn’t angry, just disappointed.": "Řekli jsme to LMS. Nezlobí se, je jen zklamaný.",
      "What it is": "Co to je",
      "When the queue ends (Don't Stop The Music)": "Až fronta skončí (Don't Stop The Music)",
      "Which artists": "Kteří interpreti",
      "Whoa there. You’re already in LyrionJS.": "Hola, hola. V LyrionJS už jsi.",
      "Why": "Proč",
      "Years": "Roky",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "Tvůj prohlížeč jako skutečný přehrávač Lyrion. Klepni na zrcadlo, když to jinak nejde.",
      "Your own colour": "Vlastní barva",
      "by": "od",
      "chosen in Settings": "zvoleno v nastavení",
      "closed": "zavřeno",
      "decoding {format}": "dekódování {format}",
      "desktop browser": "prohlížeč na počítači",
      "disconnected": "odpojeno",
      "e.g. Kitchen tablet": "např. Tablet v kuchyni",
      "from": "z",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad: hraje i se zamčenou obrazovkou",
      "interrupted": "přerušeno",
      "loaded": "načteno",
      "off": "vypnuto",
      "once": "jednou",
      "paused": "pozastaveno",
      "playing": "hraje",
      "repeats": "opakuje se",
      "running": "běží",
      "stopped": "zastaveno",
      "suspended": "pozastaveno",
      "synced with {names}": "synchronizováno s: {names}",
      "the media element failed here before": "mediální prvek tu už dříve selhal",
      "this browser cannot play FLAC through a media element": "tento prohlížeč neumí přehrát FLAC přes mediální prvek",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "tento prohlížeč neumí přehrát FLAC přes mediální prvek (je potřeba iOS 17.1 nebo novější); nech obrazovku zapnutou",
      "volume {volume}": "hlasitost {volume}",
      "waiting": "čeká",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (vše ostatní LMS převádí na FLAC)",
      "{name} (this browser)": "{name} (tento prohlížeč)",
      "{n} albums": {
        "few": "{n} alba",
        "many": "{n} alba",
        "one": "{n} album",
        "other": "{n} alb"
      },
      "{n} artists": {
        "few": "{n} interpreti",
        "many": "{n} interpreta",
        "one": "{n} interpret",
        "other": "{n} interpretů"
      },
      "{n} minutes": {
        "few": "{n} minuty",
        "many": "{n} minuty",
        "one": "{n} minuta",
        "other": "{n} minut"
      },
      "{n} of {total}": "{n} z {total}",
      "{n} tracks": {
        "few": "{n} skladby",
        "many": "{n} skladby",
        "one": "{n} skladba",
        "other": "{n} skladeb"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, zpoždění ~{latency} ms",
      "{seconds} s decoded ahead": "{seconds} s dekódováno dopředu",
      "{setting} saved": "Uloženo: {setting}",
      "{skin} (the server's)": "{skin} (serveru)",
      "“{name}” already exists. Add to it?": "„{name}“ už existuje. Přidat do něj?"
    },
    "da": {
      "(plain http page)": "(almindelig http-side)",
      "(the first {shown} shown)": "(de første {shown} vises)",
      "1, and we’d like to keep it that way": "1, og sådan skal det helst blive ved med at være",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "En Slimproto-afspiller og en fjernbetjening til Lyrion Music Server, der kører helt i denne side.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "En Slimproto-afspiller og fjernbetjening til Lyrion Music Server på én side. Tastatur: Mellemrum afspil/pause, ←/→ forrige/næste, ↑/↓ lydstyrke, M lyd fra.",
      "A new version of LyrionJS is ready — reload": "En ny version af LyrionJS er klar — genindlæs",
      "A remote control (not a player)": "En fjernbetjening (ikke en afspiller)",
      "About": "Om",
      "About LyrionJS": "Om LyrionJS",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Præstation låst op: Ouroboros. Gå nu hen og spil noget musik.",
      "Actions to show": "Handlinger der vises",
      "Add alarm": "Tilføj vækkeur",
      "Add album to playlist…": "Føj album til afspilningsliste…",
      "Add to favourites": "Føj til favoritter",
      "Add to it": "Føj til den",
      "Add to playlist": "Føj til afspilningsliste",
      "Add to playlist…": "Føj til afspilningsliste…",
      "Add to queue": "Føj til køen",
      "Added to favourites": "Føjet til favoritter",
      "Added to the queue": "Føjet til køen",
      "Added to {name}": "Føjet til {name}",
      "Alarm deleted": "Vækkeur slettet",
      "Alarm set": "Vækkeur indstillet",
      "Alarms": "Vækkeure",
      "Alarms enabled": "Vækkeure slået til",
      "Alarms enabled on this player": "Vækkeure slået til på denne afspiller",
      "Alarms off": "Vækkeure fra",
      "Alarms on": "Vækkeure til",
      "Album": "Album",
      "Album artists": "Albumkunstnere",
      "Album gain": "Forstærkning af album",
      "Albums": "Album",
      "Albums ({count})": "Album ({count})",
      "All artists": "Alle kunstnere",
      "All options…": "Alle muligheder…",
      "All players": "Alle afspillere",
      "Already moving playback…": "Flytter allerede afspilningen…",
      "Android: keeps playing with the screen locked": "Android: spiller videre med skærmen låst",
      "Another tab is this browser's player; this one is a remote control.": "En anden fane er denne browsers afspiller; denne her er en fjernbetjening.",
      "Appearance": "Udseende",
      "Apps": "Programmer",
      "Artist": "Kunstner",
      "Artists": "Kunstnere",
      "Artists ({count})": "Kunstnere ({count})",
      "Artists, albums, tracks, playlists": "Kunstnere, album, numre, afspilningslister",
      "As Lyrion Music Server ({language})": "Som Lyrion Music Server ({language})",
      "At the end of this track": "Når dette nummer er slut",
      "Audio": "Lyd",
      "Audio engine": "Lydmotor",
      "Audio output": "Lydudgang",
      "Automatic": "Automatisk",
      "Back": "Tilbage",
      "Back to the skin": "Tilbage til skinnet",
      "Back to {skin}": "Tilbage til {skin}",
      "Blue": "Blå",
      "Browser player off": "Browserafspiller fra",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "Browserafspillere er slået fra i LMS (Indstillinger › Plugins › LyrionJS). Denne side styrer dine andre afspillere.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "Browserafspillere er slået fra i LMS (Indstillinger › Plugins › LyrionJS); denne side er nu en fjernbetjening.",
      "Buffered": "Bufferet",
      "By artist": "Efter kunstner",
      "By title": "Efter titel",
      "By year": "Efter år",
      "Cancel": "Annuller",
      "Cancel ({time} left)": "Annuller ({time} tilbage)",
      "Choose a player": "Vælg en afspiller",
      "Clear": "Ryd",
      "Clear queue": "Ryd køen",
      "Clear the queue?": "Vil du rydde køen?",
      "Click to enable sound in this browser": "Klik for at slå lyd til i denne browser",
      "Close": "Luk",
      "Close now playing": "Luk Nu spiller",
      "Composers": "Komponister",
      "Connected (Slimproto over a WebSocket to LMS)": "Forbundet (Slimproto over en WebSocket til LMS)",
      "Connecting to LMS…": "Forbinder til LMS…",
      "Connecting…": "Forbinder…",
      "Connection": "Forbindelse",
      "Control": "Styr",
      "Controlling": "Styrer",
      "Create": "Opret",
      "Crossfade": "Blød overgang",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "Bløde overgange kræver, at begge numre har samme samplingfrekvens; ellers afspiller denne browser dem uden pause.",
      "Dark": "Mørkt",
      "Delete": "Slet",
      "Delete alarm": "Slet vækkeur",
      "Delete playlist": "Slet afspilningsliste",
      "Delete this alarm?": "Vil du slette dette vækkeur?",
      "Delete “{name}”?": "Vil du slette »{name}«?",
      "Deleted": "Slettet",
      "Disc {n}": "Disk {n}",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Slået til",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Alle afspillere, LMS kender, også denne browser. Synkroniser afspillere for at spille den samme musik i takt.",
      "Every time you do that, a call stack loses its wings.": "Hver gang du gør det, mister en kaldstak sine vinger.",
      "Everything LMS can search: your library, radio and installed apps": "Alt, LMS kan søge i: dit bibliotek, radio og installerede programmer",
      "Fade in": "Fade ind",
      "Fade in and out": "Fade ind og ud",
      "Fade out": "Fade ud",
      "Favourites": "Favoritter",
      "Formats": "Formater",
      "From the cover art (as Material Skin)": "Fra albumcoveret (som Material Skin)",
      "Genres": "Genrer",
      "Give this player a name": "Giv denne afspiller et navn",
      "Go to album": "Gå til album",
      "Go to artist": "Gå til kunstner",
      "Gold": "Guld",
      "Green": "Grøn",
      "Highest sample rate": "Højeste samplingfrekvens",
      "Highlight colour": "Fremhævningsfarve",
      "Home": "Hjem",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "Sådan vises denne browser i LMS og dine andre fjernbetjeninger. Du kan altid ændre det i Indstillinger.",
      "LMS answered {status}": "LMS svarede {status}",
      "LMS did not answer in time": "LMS svarede ikke i tide",
      "LMS keeps the queue topped up with random picks from your library.": "LMS fylder løbende køen op med tilfældige valg fra dit bibliotek.",
      "Language": "Sprog",
      "Last scan": "Seneste skanning",
      "Leave the group": "Forlad gruppen",
      "Library": "Bibliotek",
      "Library scan started": "Skanning af biblioteket startet",
      "Light": "Lyst",
      "Live": "Live",
      "Lost contact with the server: {error} — retrying…": "Mistede forbindelsen til serveren: {error} — prøver igen…",
      "Lyrion Music Server is not answering at {host}.": "Lyrion Music Server svarer ikke på {host}.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "LyrionJS spiller bedst i sin egen fane: i dette vindue stopper den, når vinduet lukkes.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} på {os}",
      "Main": "Hovedmenu",
      "Match the system": "Følg systemet",
      "Media element (plays with the screen locked)": "Medieelement (spiller med skærmen låst)",
      "Menu": "Menu",
      "More": "Mere",
      "More about LyrionJS…": "Mere om LyrionJS…",
      "More…": "Mere…",
      "Move down": "Flyt ned",
      "Move playback to {name} from…": "Flyt afspilningen til {name} fra…",
      "Move up": "Flyt op",
      "Moved": "Flyttet",
      "Moved playback to {name}": "Afspilningen er flyttet til {name}",
      "Moving playback stopped part-way ({name} carries on): {error}": "Flytningen af afspilningen stoppede halvvejs ({name} spiller videre): {error}",
      "Moving {n} tracks (the first {max})…": {
        "one": "Flytter {n} nummer (de første {max})…",
        "other": "Flytter {n} numre (de første {max})…"
      },
      "Moving {n} tracks…": {
        "one": "Flytter {n} nummer…",
        "other": "Flytter {n} numre…"
      },
      "Music folder": "Musikmappe",
      "Mute": "Lyd fra",
      "Name": "Navn",
      "Name this player": "Navngiv denne afspiller",
      "Never": "Aldrig",
      "New alarm on {name}": "Nyt vækkeur på {name}",
      "New music": "Ny musik",
      "New playlist": "Ny afspilningsliste",
      "New playlist…": "Ny afspilningsliste…",
      "Next": "Næste",
      "Nice try.": "Godt forsøgt.",
      "No alarms on {name}.": "Ingen vækkeure på {name}.",
      "No albums.": "Ingen album.",
      "No apps are installed on the server.": "Der er ingen programmer installeret på serveren.",
      "No player": "Ingen afspiller",
      "No player selected.": "Ingen afspiller valgt.",
      "No players are connected to the server.": "Der er ingen afspillere forbundet til serveren.",
      "No radio services are installed on the server.": "Der er ingen radiotjenester installeret på serveren.",
      "No saved playlists.": "Ingen gemte afspilningslister.",
      "None (gapless)": "Ingen (uden pause)",
      "Nothing here.": "Her er ingenting.",
      "Nothing in the library matches “{query}”.": "Intet i biblioteket matcher »{query}«.",
      "Nothing playing": "Intet spiller",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "Intet spiller. Vælg noget fra biblioteket, favoritter, radio eller programmer.",
      "Nothing to add": "Intet at tilføje",
      "Nothing to move: {name}'s queue is empty": "Intet at flytte: køen på {name} er tom",
      "Now playing": "Nu spiller",
      "OK": "OK",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "OK, du vinder: du lytter nu til LyrionJS inde i LyrionJS inde i LyrionJS. (Det gør du ikke.)",
      "Off": "Fra",
      "Open LyrionJS inside LyrionJS (please don’t)": "Åbn LyrionJS inde i LyrionJS (lad nu være)",
      "Open in a new tab": "Åbn i en ny fane",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "Hvis du åbner LyrionJS inde i LyrionJS, åbner du LyrionJS inde i LyrionJS inde i LyrionJS… og så videre, indtil din browser løber tør for tålmodighed, hukommelse eller begge dele. Hold nu op med at prøve at lave en rekursionsløkke.",
      "Opens when music starts": "Åbnes, når musikken starter",
      "Orange": "Orange",
      "Other random albums": "Andre tilfældige album",
      "Output": "Udgang",
      "Output level": "Udgangsniveau",
      "Output level in this browser (on top of the LMS volume)": "Udgangsniveau i denne browser (oven i lydstyrken i LMS)",
      "Pause": "Pause",
      "Pick a colour": "Vælg en farve",
      "Pink": "Lyserød",
      "Play": "Afspil",
      "Play folder": "Afspil mappe",
      "Play music in this browser (a real Slimproto player in LMS)": "Spil musik i denne browser (en rigtig Slimproto-afspiller i LMS)",
      "Play next": "Spil næste",
      "Play now": "Afspil nu",
      "Play now, keep the queue": "Afspil nu, behold køen",
      "Play/pause": "Afspil/pause",
      "Player ID": "Afspiller-id",
      "Player controls": "Afspillerknapper",
      "Player: {name}": "Afspiller: {name}",
      "Players": "Afspillere",
      "Playing": "Spiller",
      "Playing next": "Spiller som det næste",
      "Playing shuffled": "Spiller i vilkårlig rækkefølge",
      "Playlist name": "Navn på afspilningsliste",
      "Playlists": "Afspilningslister",
      "Plays it now (keeps the queue)": "Afspiller det nu (beholder køen)",
      "Plays it now (replaces the queue)": "Afspiller det nu (erstatter køen)",
      "Position": "Position",
      "Previous": "Forrige",
      "Purple": "Lilla",
      "Queue": "Kø",
      "Queue cleared": "Køen er ryddet",
      "Queue folder": "Føj mappe til køen",
      "Radio": "Radio",
      "Random": "Tilfældig",
      "Random album mix started": "Miks baseret på tilfældigt album startet",
      "Random albums": "Tilfældige album",
      "Random artist mix started": "Miks baseret på tilfældig kunstner startet",
      "Random mix": "Tilfældigt miks",
      "Random mix stopped": "Tilfældigt miks stoppet",
      "Random song mix started": "Miks baseret på tilfældige numre startet",
      "Random year mix started": "Miks baseret på tilfældigt årstal startet",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. Er du så glad nu?",
      "Recently added": "Senest tilføjet",
      "Recursion depth": "Rekursionsdybde",
      "Refresh": "Opdater",
      "Reloading to switch the output…": "Genindlæser for at skifte udgang…",
      "Remove": "Fjern",
      "Remove from favourites": "Fjern fra favoritter",
      "Remove from playlist": "Fjern fra afspilningsliste",
      "Remove from queue": "Fjern fra køen",
      "Remove “{name}” from favourites?": "Vil du fjerne »{name}« fra favoritter?",
      "Removed": "Fjernet",
      "Rename": "Omdøb",
      "Rename favourite": "Omdøb favorit",
      "Rename playlist": "Omdøb afspilningsliste",
      "Rename this browser…": "Omdøb denne browser…",
      "Rename this player": "Omdøb denne afspiller",
      "Renamed": "Omdøbt",
      "Rename…": "Omdøb…",
      "Repeat": "Gentag",
      "Repeat off": "Gentag ikke",
      "Repeat queue": "Gentag køen",
      "Repeat song": "Gentag nummer",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Gem",
      "Save as playlist": "Gem som afspilningsliste",
      "Save queue as playlist": "Gem køen som afspilningsliste",
      "Saved": "Gemt",
      "Saved as {name}": "Gemt som {name}",
      "Scan": "Skan",
      "Scan for new music": "Skan efter ny musik",
      "Scanning: {step} {done}/{total}": "Skanner: {step} {done}/{total}",
      "Search": "Søg",
      "Search apps and services for “{query}”": "Søg efter »{query}« i programmer og tjenester",
      "Search: {query}": "Søg: {query}",
      "Searching…": "Søger…",
      "Seek": "Spol",
      "Send diagnostics": "Send diagnosticering",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Send diagnosticering af afspilningen til serverloggen i LMS (hjælper med at løse problemer på telefoner og tablets)",
      "Server": "Server",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Indstilles med enhedens egne knapper (siden kan ikke indstille den her); lydstyrken i LMS holdes på 100 %",
      "Settings": "Indstillinger",
      "Show LyrionJS": "Vis LyrionJS",
      "Show the queue": "Vis køen",
      "Showing {skin}": "Viser {skin}",
      "Shows actions under it": "Viser handlinger under det",
      "Shuffle": "Bland",
      "Shuffle albums": "Bland album",
      "Shuffle off": "Bland ikke",
      "Shuffle songs": "Bland numre",
      "Skin": "Skin",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Skin: LyrionJS' eget eller et hvilket som helst skin installeret på din Lyrion Music Server, mens denne browser stadig er afspilleren",
      "Sleep timer": "Slumretimer",
      "Sleep timer off": "Slumretimer fra",
      "Sleeping after this track": "Slumrer efter dette nummer",
      "Sleeping in {n} minutes": {
        "one": "Slumrer om {n} minut",
        "other": "Slumrer om {n} minutter"
      },
      "Smart gain": "Dynamisk forstærkning",
      "Something went wrong": "Noget gik galt",
      "Songs": "Numre",
      "Sort albums": "Sorter album",
      "State": "Tilstand",
      "Still no. One of us is enough.": "Stadig nej. Én af os er nok.",
      "Stop mix": "Stop miks",
      "Switch off": "Sluk",
      "Switch on": "Tænd",
      "Sync this player…": "Synkroniser denne afspiller…",
      "Sync {name} with…": "Synkroniser {name} med…",
      "Synced {name}": "{name} synkroniseret",
      "Sync…": "Synkroniser…",
      "Take me back to the music": "Tag mig tilbage til musikken",
      "Tapping a track": "Tryk på et nummer",
      "Tapping a track (search, albums, playlists, folders)": "Tryk på et nummer (søgning, album, playlister, mapper)",
      "Teal": "Blågrøn",
      "The alarm plays the current queue (or LMS's default alarm sound).": "Vækkeuret spiller den aktuelle kø (eller standardalarmlyden i LMS).",
      "The browser has started muttering about “maximum call stack size”.": "Browseren er begyndt at mumle noget om »maximum call stack size«.",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "Medieelementet kan ikke spille her: vælg Web Audio i Indstillinger › Lydudgang.",
      "The queue is empty.": "Køen er tom.",
      "The search failed: {error}": "Søgningen mislykkedes: {error}",
      "Theme": "Tema",
      "This browser": "Denne browser",
      "This browser as a player": "Denne browser som afspiller",
      "This browser can't play through the media element: switching to Web Audio…": "Denne browser kan ikke spille gennem medieelementet: skifter til Web Audio…",
      "This folder is empty.": "Denne mappe er tom.",
      "This page could not be shown: {error}": "Denne side kunne ikke vises: {error}",
      "This player is now “{name}”": "Denne afspiller hedder nu »{name}«",
      "This player was taken over by another session; this page is now a remote control.": "Denne afspiller er overtaget af en anden session; denne side er nu en fjernbetjening.",
      "This playlist is empty.": "Denne afspilningsliste er tom.",
      "This tab is already playing with LyrionJS.": "Denne fane spiller allerede med LyrionJS.",
      "Time": "Tidspunkt",
      "Track gain": "Forstærkning af nummer",
      "Track {n} of {total}": "Nummer {n} af {total}",
      "Tracks ({count})": "Numre ({count})",
      "Transfer playback here from…": "Overfør afspilningen hertil fra…",
      "Transition between tracks": "Overgang mellem numre",
      "Transition length": "Overgangens længde",
      "Try again": "Prøv igen",
      "Trying again every few seconds…": "Prøver igen med få sekunders mellemrum…",
      "Type at least two letters.": "Skriv mindst to bogstaver.",
      "Unknown": "Ukendt",
      "Unmute": "Lyd til",
      "Unsynced": "Synkronisering ophævet",
      "Unsynced {name}": "Synkronisering af {name} ophævet",
      "Use it here": "Brug den her",
      "Use this browser as a player": "Brug denne browser som afspiller",
      "Version": "Version",
      "Volume": "Lydstyrke",
      "Volume levelling (ReplayGain)": "Justering af lydstyrken (ReplayGain)",
      "Volume of {name}": "Lydstyrke for {name}",
      "Web Audio (lowest latency)": "Web Audio (mindst forsinkelse)",
      "Web Audio (opens when music starts)": "Web Audio (åbnes, når musikken starter)",
      "Web Audio, opens when music starts": "Web Audio, åbnes, når musikken starter",
      "We’ve told LMS. It isn’t angry, just disappointed.": "Vi har sagt det til LMS. Den er ikke vred, bare skuffet.",
      "What it is": "Hvad det er",
      "When the queue ends (Don't Stop The Music)": "Når køen slutter (Don't Stop The Music)",
      "Which artists": "Hvilke kunstnere",
      "Whoa there. You’re already in LyrionJS.": "Hov hov. Du er allerede i LyrionJS.",
      "Why": "Hvorfor",
      "Years": "År",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "Din browser som en rigtig Lyrion-afspiller. Tryk på spejlet, hvis du absolut må.",
      "Your own colour": "Din egen farve",
      "by": "af",
      "chosen in Settings": "valgt i Indstillinger",
      "closed": "lukket",
      "decoding {format}": "afkoder {format}",
      "desktop browser": "computerbrowser",
      "disconnected": "afbrudt",
      "e.g. Kitchen tablet": "f.eks. Køkkentablet",
      "from": "fra",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad: spiller videre med skærmen låst",
      "interrupted": "afbrudt",
      "loaded": "indlæst",
      "off": "slukket",
      "once": "én gang",
      "paused": "på pause",
      "playing": "spiller",
      "repeats": "gentages",
      "running": "kører",
      "stopped": "stoppet",
      "suspended": "sat på pause",
      "synced with {names}": "synkroniseret med {names}",
      "the media element failed here before": "medieelementet har fejlet her før",
      "this browser cannot play FLAC through a media element": "denne browser kan ikke spille FLAC gennem et medieelement",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "denne browser kan ikke spille FLAC gennem et medieelement (kræver iOS 17.1 eller nyere); hold skærmen tændt",
      "volume {volume}": "lydstyrke {volume}",
      "waiting": "venter",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (LMS konverterer alt andet til FLAC)",
      "{name} (this browser)": "{name} (denne browser)",
      "{n} albums": {
        "one": "{n} album",
        "other": "{n} album"
      },
      "{n} artists": {
        "one": "{n} kunstner",
        "other": "{n} kunstnere"
      },
      "{n} minutes": {
        "one": "{n} minut",
        "other": "{n} minutter"
      },
      "{n} of {total}": "{n} af {total}",
      "{n} tracks": {
        "one": "{n} nummer",
        "other": "{n} numre"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, ~{latency} ms forsinkelse",
      "{seconds} s decoded ahead": "{seconds} s afkodet forud",
      "{setting} saved": "{setting} gemt",
      "{skin} (the server's)": "{skin} (serverens)",
      "“{name}” already exists. Add to it?": "»{name}« findes allerede. Vil du føje til den?"
    },
    "de": {
      "(plain http page)": "(einfache http-Seite)",
      "(the first {shown} shown)": "(die ersten {shown} werden angezeigt)",
      "1, and we’d like to keep it that way": "1, und dabei soll es bitte bleiben",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "Ein Slimproto-Player und eine Fernbedienung für Lyrion Music Server, komplett in dieser Seite.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "Ein Slimproto-Player und eine Steuerung für Lyrion Music Server in einer Seite. Tastatur: Leertaste Wiedergabe/Pause, ←/→ zurück/weiter, ↑/↓ Lautstärke, M stumm.",
      "A new version of LyrionJS is ready — reload": "Eine neue Version von LyrionJS ist da – neu laden",
      "A remote control (not a player)": "Eine Fernbedienung (kein Player)",
      "About": "Info",
      "About LyrionJS": "Über LyrionJS",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Erfolg freigeschaltet: Ouroboros. Und jetzt hör endlich Musik.",
      "Actions to show": "Angezeigte Aktionen",
      "Add alarm": "Wecker hinzufügen",
      "Add album to playlist…": "Album zur Wiedergabeliste hinzufügen…",
      "Add to favourites": "Zu Favoriten hinzufügen",
      "Add to it": "Hinzufügen",
      "Add to playlist": "Zur Wiedergabeliste hinzufügen",
      "Add to playlist…": "Zur Wiedergabeliste hinzufügen…",
      "Add to queue": "Zur Warteschlange hinzufügen",
      "Added to favourites": "Zu Favoriten hinzugefügt",
      "Added to the queue": "Zur Warteschlange hinzugefügt",
      "Added to {name}": "Zu {name} hinzugefügt",
      "Alarm deleted": "Wecker gelöscht",
      "Alarm set": "Wecker gestellt",
      "Alarms": "Wecker",
      "Alarms enabled": "Wecker aktiviert",
      "Alarms enabled on this player": "Wecker auf diesem Player aktiviert",
      "Alarms off": "Wecker aus",
      "Alarms on": "Wecker an",
      "Album": "Album",
      "Album artists": "Album-Interpreten",
      "Album gain": "Album-Normalisierung",
      "Albums": "Alben",
      "Albums ({count})": "Alben ({count})",
      "All artists": "Alle Interpreten",
      "All options…": "Alle Optionen…",
      "All players": "Alle Player",
      "Already moving playback…": "Wiedergabe wird bereits verschoben…",
      "Android: keeps playing with the screen locked": "Android: spielt bei gesperrtem Bildschirm weiter",
      "Another tab is this browser's player; this one is a remote control.": "Ein anderer Tab ist der Player dieses Browsers; dieser hier ist eine Fernbedienung.",
      "Appearance": "Darstellung",
      "Apps": "Apps",
      "Artist": "Interpret",
      "Artists": "Interpreten",
      "Artists ({count})": "Interpreten ({count})",
      "Artists, albums, tracks, playlists": "Interpreten, Alben, Titel, Wiedergabelisten",
      "As Lyrion Music Server ({language})": "Wie Lyrion Music Server ({language})",
      "At the end of this track": "Am Ende dieses Titels",
      "Audio": "Audio",
      "Audio engine": "Audio-Engine",
      "Audio output": "Audioausgabe",
      "Automatic": "Automatisch",
      "Back": "Zurück",
      "Back to the skin": "Zurück zur Oberfläche",
      "Back to {skin}": "Zurück zu {skin}",
      "Blue": "Blau",
      "Browser player off": "Browser-Player aus",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "Browser-Player sind in LMS ausgeschaltet (Einstellungen › Plugins › LyrionJS). Diese Seite steuert deine anderen Player.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "Browser-Player sind in LMS ausgeschaltet (Einstellungen › Plugins › LyrionJS); diese Seite ist jetzt eine Fernbedienung.",
      "Buffered": "Gepuffert",
      "By artist": "Nach Interpret",
      "By title": "Nach Titel",
      "By year": "Nach Jahr",
      "Cancel": "Abbrechen",
      "Cancel ({time} left)": "Abbrechen (noch {time})",
      "Choose a player": "Player wählen",
      "Clear": "Leeren",
      "Clear queue": "Warteschlange leeren",
      "Clear the queue?": "Warteschlange leeren?",
      "Click to enable sound in this browser": "Klicken, um den Ton in diesem Browser einzuschalten",
      "Close": "Schließen",
      "Close now playing": "Aktuellen Titel schließen",
      "Composers": "Komponisten",
      "Connected (Slimproto over a WebSocket to LMS)": "Verbunden (Slimproto über einen WebSocket zu LMS)",
      "Connecting to LMS…": "Verbindung zu LMS wird hergestellt…",
      "Connecting…": "Verbinden…",
      "Connection": "Verbindung",
      "Control": "Steuern",
      "Controlling": "Steuert",
      "Create": "Erstellen",
      "Crossfade": "Überblendung",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "Überblendungen brauchen bei beiden Titeln dieselbe Abtastrate; sonst spielt dieser Browser sie lückenlos.",
      "Dark": "Dunkel",
      "Delete": "Löschen",
      "Delete alarm": "Wecker löschen",
      "Delete playlist": "Wiedergabeliste löschen",
      "Delete this alarm?": "Diesen Wecker löschen?",
      "Delete “{name}”?": "„{name}“ löschen?",
      "Deleted": "Gelöscht",
      "Disc {n}": "Disk {n}",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Aktiviert",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Alle Player, die LMS kennt, auch dieser Browser. Synchronisiere Player, damit sie dieselbe Musik gleichzeitig spielen.",
      "Every time you do that, a call stack loses its wings.": "Jedes Mal, wenn du das tust, stirbt irgendwo ein kleiner Call-Stack.",
      "Everything LMS can search: your library, radio and installed apps": "Alles, was LMS durchsuchen kann: deine Musiksammlung, Radio und installierte Apps",
      "Fade in": "Einblenden",
      "Fade in and out": "Ein- und ausblenden",
      "Fade out": "Ausblenden",
      "Favourites": "Favoriten",
      "Formats": "Formate",
      "From the cover art (as Material Skin)": "Aus dem Cover (wie Material Skin)",
      "Genres": "Stilrichtungen",
      "Give this player a name": "Gib diesem Player einen Namen",
      "Go to album": "Zum Album",
      "Go to artist": "Zum Interpreten",
      "Gold": "Gold",
      "Green": "Grün",
      "Highest sample rate": "Höchste Abtastrate",
      "Highlight colour": "Akzentfarbe",
      "Home": "Start",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "So erscheint dieser Browser in LMS und deinen anderen Steuerungen. Du kannst das jederzeit in den Einstellungen ändern.",
      "LMS answered {status}": "LMS antwortete {status}",
      "LMS did not answer in time": "LMS hat nicht rechtzeitig geantwortet",
      "LMS keeps the queue topped up with random picks from your library.": "LMS füllt die Warteschlange laufend mit zufälliger Musik aus deiner Sammlung auf.",
      "Language": "Sprache",
      "Last scan": "Letzter Scan",
      "Leave the group": "Gruppe verlassen",
      "Library": "Musiksammlung",
      "Library scan started": "Durchsuchen der Musiksammlung gestartet",
      "Light": "Hell",
      "Live": "Live",
      "Lost contact with the server: {error} — retrying…": "Verbindung zum Server verloren: {error} – neuer Versuch…",
      "Lyrion Music Server is not answering at {host}.": "Lyrion Music Server antwortet nicht unter {host}.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "LyrionJS spielt am besten in einem eigenen Tab: in diesem Fenster stoppt es, wenn das Fenster geschlossen wird.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} auf {os}",
      "Main": "Hauptmenü",
      "Match the system": "Wie das System",
      "Media element (plays with the screen locked)": "Media-Element (spielt bei gesperrtem Bildschirm)",
      "Menu": "Menü",
      "More": "Mehr",
      "More about LyrionJS…": "Mehr über LyrionJS…",
      "More…": "Mehr…",
      "Move down": "Nach unten",
      "Move playback to {name} from…": "Wiedergabe nach {name} verschieben von…",
      "Move up": "Nach oben",
      "Moved": "Verschoben",
      "Moved playback to {name}": "Wiedergabe nach {name} verschoben",
      "Moving playback stopped part-way ({name} carries on): {error}": "Verschieben der Wiedergabe unterwegs abgebrochen ({name} spielt weiter): {error}",
      "Moving {n} tracks (the first {max})…": {
        "one": "{n} Titel wird verschoben (die ersten {max})…",
        "other": "{n} Titel werden verschoben (die ersten {max})…"
      },
      "Moving {n} tracks…": {
        "one": "{n} Titel wird verschoben…",
        "other": "{n} Titel werden verschoben…"
      },
      "Music folder": "Musikordner",
      "Mute": "Stumm",
      "Name": "Name",
      "Name this player": "Player benennen",
      "Never": "Nie",
      "New alarm on {name}": "Neuer Wecker auf {name}",
      "New music": "Neue Musik",
      "New playlist": "Neue Wiedergabeliste",
      "New playlist…": "Neue Wiedergabeliste…",
      "Next": "Nächster Titel",
      "Nice try.": "Netter Versuch.",
      "No alarms on {name}.": "Keine Wecker auf {name}.",
      "No albums.": "Keine Alben.",
      "No apps are installed on the server.": "Auf dem Server sind keine Apps installiert.",
      "No player": "Kein Player",
      "No player selected.": "Kein Player ausgewählt.",
      "No players are connected to the server.": "Mit dem Server sind keine Player verbunden.",
      "No radio services are installed on the server.": "Auf dem Server sind keine Radiodienste installiert.",
      "No saved playlists.": "Keine gespeicherten Wiedergabelisten.",
      "None (gapless)": "Keine (lückenlos)",
      "Nothing here.": "Hier ist nichts.",
      "Nothing in the library matches “{query}”.": "Nichts in der Musiksammlung passt zu „{query}“.",
      "Nothing playing": "Keine Wiedergabe",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "Keine Wiedergabe. Wähle etwas aus der Musiksammlung, den Favoriten, Radio oder Apps.",
      "Nothing to add": "Nichts hinzuzufügen",
      "Nothing to move: {name}'s queue is empty": "Nichts zu verschieben: die Warteschlange von {name} ist leer",
      "Now playing": "Aktueller Titel",
      "OK": "OK",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "Na gut, du hast gewonnen: Du hörst jetzt LyrionJS in LyrionJS in LyrionJS. (Tust du nicht.)",
      "Off": "Aus",
      "Open LyrionJS inside LyrionJS (please don’t)": "LyrionJS in LyrionJS öffnen (bitte nicht)",
      "Open in a new tab": "In neuem Tab öffnen",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "LyrionJS in LyrionJS zu öffnen würde LyrionJS in LyrionJS in LyrionJS öffnen… und so weiter, bis deinem Browser die Geduld, der Speicher oder beides ausgeht. Bitte hör auf, eine Endlosrekursion auszulösen.",
      "Opens when music starts": "Startet, wenn Musik beginnt",
      "Orange": "Orange",
      "Other random albums": "Andere zufällige Alben",
      "Output": "Ausgabe",
      "Output level": "Ausgabepegel",
      "Output level in this browser (on top of the LMS volume)": "Ausgabepegel in diesem Browser (zusätzlich zur LMS-Lautstärke)",
      "Pause": "Pause",
      "Pick a colour": "Farbe wählen",
      "Pink": "Rosa",
      "Play": "Wiedergabe",
      "Play folder": "Ordner wiedergeben",
      "Play music in this browser (a real Slimproto player in LMS)": "Musik in diesem Browser abspielen (ein echter Slimproto-Player in LMS)",
      "Play next": "Als nächstes wiedergeben",
      "Play now": "Jetzt wiedergeben",
      "Play now, keep the queue": "Jetzt wiedergeben, Warteschlange behalten",
      "Play/pause": "Wiedergabe/Pause",
      "Player ID": "Player-ID",
      "Player controls": "Player-Steuerung",
      "Player: {name}": "Player: {name}",
      "Players": "Player",
      "Playing": "Wiedergabe",
      "Playing next": "Als Nächstes",
      "Playing shuffled": "Zufällige Wiedergabe",
      "Playlist name": "Name der Wiedergabeliste",
      "Playlists": "Wiedergabelisten",
      "Plays it now (keeps the queue)": "Spielt ihn sofort (Warteschlange bleibt)",
      "Plays it now (replaces the queue)": "Spielt ihn sofort (ersetzt die Warteschlange)",
      "Position": "Position",
      "Previous": "Vorheriger Titel",
      "Purple": "Lila",
      "Queue": "Warteschlange",
      "Queue cleared": "Warteschlange geleert",
      "Queue folder": "Ordner einreihen",
      "Radio": "Radio",
      "Random": "Zufällig",
      "Random album mix started": "Zufälliger Albummix gestartet",
      "Random albums": "Zufällige Alben",
      "Random artist mix started": "Zufälliger Interpretenmix gestartet",
      "Random mix": "Zufallsmix",
      "Random mix stopped": "Zufallsmix gestoppt",
      "Random song mix started": "Zufälliger Titelmix gestartet",
      "Random year mix started": "Zufälliger Jahrgangsmix gestartet",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. Zufrieden?",
      "Recently added": "Kürzlich hinzugefügt",
      "Recursion depth": "Rekursionstiefe",
      "Refresh": "Aktualisieren",
      "Reloading to switch the output…": "Wird neu geladen, um die Ausgabe zu wechseln…",
      "Remove": "Entfernen",
      "Remove from favourites": "Aus Favoriten entfernen",
      "Remove from playlist": "Aus Wiedergabeliste entfernen",
      "Remove from queue": "Aus Warteschlange entfernen",
      "Remove “{name}” from favourites?": "„{name}“ aus den Favoriten entfernen?",
      "Removed": "Entfernt",
      "Rename": "Umbenennen",
      "Rename favourite": "Favorit umbenennen",
      "Rename playlist": "Wiedergabeliste umbenennen",
      "Rename this browser…": "Diesen Browser umbenennen…",
      "Rename this player": "Diesen Player umbenennen",
      "Renamed": "Umbenannt",
      "Rename…": "Umbenennen…",
      "Repeat": "Wiederholen",
      "Repeat off": "Wiederholung aus",
      "Repeat queue": "Warteschlange wiederholen",
      "Repeat song": "Titel wiederholen",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Speichern",
      "Save as playlist": "Als Wiedergabeliste speichern",
      "Save queue as playlist": "Warteschlange als Wiedergabeliste speichern",
      "Saved": "Gespeichert",
      "Saved as {name}": "Als {name} gespeichert",
      "Scan": "Durchsuchen",
      "Scan for new music": "Nach neuer Musik durchsuchen",
      "Scanning: {step} {done}/{total}": "Durchsuchen: {step} {done}/{total}",
      "Search": "Suchen",
      "Search apps and services for “{query}”": "Apps und Dienste nach „{query}“ durchsuchen",
      "Search: {query}": "Suche: {query}",
      "Searching…": "Suche läuft…",
      "Seek": "Springen",
      "Send diagnostics": "Diagnosedaten senden",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Wiedergabe-Diagnosedaten ins LMS-Serverprotokoll schreiben (hilft bei Problemen auf Handys und Tablets)",
      "Server": "Server",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Über die Tasten des Geräts einstellen (die Seite kann das hier nicht); die LMS-Lautstärke bleibt bei 100 %",
      "Settings": "Einstellungen",
      "Show LyrionJS": "LyrionJS anzeigen",
      "Show the queue": "Warteschlange anzeigen",
      "Showing {skin}": "{skin} wird angezeigt",
      "Shows actions under it": "Zeigt Aktionen darunter",
      "Shuffle": "Zufall",
      "Shuffle albums": "Zufällige Albumreihenfolge",
      "Shuffle off": "Zufall aus",
      "Shuffle songs": "Zufällige Titelreihenfolge",
      "Skin": "Oberfläche",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Oberfläche: die von LyrionJS oder jede auf deinem Lyrion Music Server installierte, wobei dieser Browser weiter der Player bleibt",
      "Sleep timer": "Schlafmodus",
      "Sleep timer off": "Schlafmodus aus",
      "Sleeping after this track": "Schlafmodus nach diesem Titel",
      "Sleeping in {n} minutes": {
        "one": "Schlafmodus in {n} Minute",
        "other": "Schlafmodus in {n} Minuten"
      },
      "Smart gain": "Intelligente Normalisierung",
      "Something went wrong": "Etwas ist schiefgelaufen",
      "Songs": "Titel",
      "Sort albums": "Alben sortieren",
      "State": "Status",
      "Still no. One of us is enough.": "Immer noch nein. Einer von uns reicht.",
      "Stop mix": "Mix beenden",
      "Switch off": "Ausschalten",
      "Switch on": "Einschalten",
      "Sync this player…": "Diesen Player synchronisieren…",
      "Sync {name} with…": "{name} synchronisieren mit…",
      "Synced {name}": "{name} synchronisiert",
      "Sync…": "Synchronisieren…",
      "Take me back to the music": "Bring mich zurück zur Musik",
      "Tapping a track": "Tippen auf einen Titel",
      "Tapping a track (search, albums, playlists, folders)": "Tippen auf einen Titel (Suche, Alben, Wiedergabelisten, Ordner)",
      "Teal": "Petrol",
      "The alarm plays the current queue (or LMS's default alarm sound).": "Der Wecker spielt die aktuelle Warteschlange (oder den Standard-Weckton von LMS).",
      "The browser has started muttering about “maximum call stack size”.": "Der Browser murmelt schon etwas von „maximum call stack size“.",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "Das Media-Element kann hier nicht abspielen: wähle Web Audio unter Einstellungen › Audioausgabe.",
      "The queue is empty.": "Die Warteschlange ist leer.",
      "The search failed: {error}": "Die Suche ist fehlgeschlagen: {error}",
      "Theme": "Design",
      "This browser": "Dieser Browser",
      "This browser as a player": "Dieser Browser als Player",
      "This browser can't play through the media element: switching to Web Audio…": "Dieser Browser kann nicht über das Media-Element abspielen: Wechsel zu Web Audio…",
      "This folder is empty.": "Dieser Ordner ist leer.",
      "This page could not be shown: {error}": "Diese Seite konnte nicht angezeigt werden: {error}",
      "This player is now “{name}”": "Dieser Player heißt jetzt „{name}“",
      "This player was taken over by another session; this page is now a remote control.": "Dieser Player wurde von einer anderen Sitzung übernommen; diese Seite ist jetzt eine Fernbedienung.",
      "This playlist is empty.": "Diese Wiedergabeliste ist leer.",
      "This tab is already playing with LyrionJS.": "Dieser Tab spielt bereits mit LyrionJS.",
      "Time": "Zeit",
      "Track gain": "Titel-Normalisierung",
      "Track {n} of {total}": "Titel {n} von {total}",
      "Tracks ({count})": "Titel ({count})",
      "Transfer playback here from…": "Wiedergabe hierher holen von…",
      "Transition between tracks": "Übergang zwischen Titeln",
      "Transition length": "Übergangsdauer",
      "Try again": "Erneut versuchen",
      "Trying again every few seconds…": "Neuer Versuch alle paar Sekunden…",
      "Type at least two letters.": "Gib mindestens zwei Buchstaben ein.",
      "Unknown": "Unbekannt",
      "Unmute": "Ton an",
      "Unsynced": "Synchronisierung aufgehoben",
      "Unsynced {name}": "Synchronisierung von {name} aufgehoben",
      "Use it here": "Hier verwenden",
      "Use this browser as a player": "Diesen Browser als Player verwenden",
      "Version": "Version",
      "Volume": "Lautstärke",
      "Volume levelling (ReplayGain)": "Lautstärken-Normalisierung (ReplayGain)",
      "Volume of {name}": "Lautstärke von {name}",
      "Web Audio (lowest latency)": "Web Audio (geringste Latenz)",
      "Web Audio (opens when music starts)": "Web Audio (startet, wenn Musik beginnt)",
      "Web Audio, opens when music starts": "Web Audio, startet, wenn Musik beginnt",
      "We’ve told LMS. It isn’t angry, just disappointed.": "Wir haben es LMS erzählt. LMS ist nicht böse, nur enttäuscht.",
      "What it is": "Was es ist",
      "When the queue ends (Don't Stop The Music)": "Wenn die Warteschlange endet (Don't Stop The Music)",
      "Which artists": "Welche Interpreten",
      "Whoa there. You’re already in LyrionJS.": "Moment mal. Du bist doch schon in LyrionJS.",
      "Why": "Grund",
      "Years": "Jahrgänge",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "Dein Browser als echter Lyrion-Player. Tipp auf den Spiegel, wenn’s unbedingt sein muss.",
      "Your own colour": "Eigene Farbe",
      "by": "von",
      "chosen in Settings": "in den Einstellungen gewählt",
      "closed": "geschlossen",
      "decoding {format}": "dekodiert {format}",
      "desktop browser": "Desktop-Browser",
      "disconnected": "getrennt",
      "e.g. Kitchen tablet": "z. B. Küchen-Tablet",
      "from": "aus",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad: spielt bei gesperrtem Bildschirm weiter",
      "interrupted": "unterbrochen",
      "loaded": "geladen",
      "off": "aus",
      "once": "einmalig",
      "paused": "pausiert",
      "playing": "spielt",
      "repeats": "wiederholt",
      "running": "läuft",
      "stopped": "gestoppt",
      "suspended": "angehalten",
      "synced with {names}": "synchronisiert mit {names}",
      "the media element failed here before": "das Media-Element ist hier schon einmal gescheitert",
      "this browser cannot play FLAC through a media element": "dieser Browser kann FLAC nicht über ein Media-Element abspielen",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "dieser Browser kann FLAC nicht über ein Media-Element abspielen (iOS 17.1 oder neuer nötig); lass den Bildschirm an",
      "volume {volume}": "Lautstärke {volume}",
      "waiting": "wartet",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (alles andere wandelt LMS in FLAC um)",
      "{name} (this browser)": "{name} (dieser Browser)",
      "{n} albums": {
        "one": "{n} Album",
        "other": "{n} Alben"
      },
      "{n} artists": {
        "one": "{n} Interpret",
        "other": "{n} Interpreten"
      },
      "{n} minutes": {
        "one": "{n} Minute",
        "other": "{n} Minuten"
      },
      "{n} of {total}": "{n} von {total}",
      "{n} tracks": {
        "one": "{n} Titel",
        "other": "{n} Titel"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, ~{latency} ms Latenz",
      "{seconds} s decoded ahead": "{seconds} s im Voraus dekodiert",
      "{setting} saved": "{setting} gespeichert",
      "{skin} (the server's)": "{skin} (die des Servers)",
      "“{name}” already exists. Add to it?": "„{name}“ gibt es schon. Hinzufügen?"
    },
    "es": {
      "(plain http page)": "(página http simple)",
      "(the first {shown} shown)": "(se muestran los primeros {shown})",
      "1, and we’d like to keep it that way": "1, y nos gustaría que siguiera así",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "Un reproductor Slimproto y un mando a distancia para Lyrion Music Server, que funcionan por completo en esta página.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "Un reproductor Slimproto y un control para Lyrion Music Server en una sola página. Teclado: Espacio reproducir/pausa, ←/→ anterior/siguiente, ↑/↓ volumen, M silenciar.",
      "A new version of LyrionJS is ready — reload": "Hay una nueva versión de LyrionJS lista — recargar",
      "A remote control (not a player)": "Un mando a distancia (no un reproductor)",
      "About": "Acerca de",
      "About LyrionJS": "Acerca de LyrionJS",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Logro desbloqueado: Uróboros. Ahora ve a poner algo de música.",
      "Actions to show": "Acciones que se muestran",
      "Add alarm": "Añadir alarma",
      "Add album to playlist…": "Añadir el álbum a una lista de reproducción…",
      "Add to favourites": "Añadir a favoritos",
      "Add to it": "Añadir a ella",
      "Add to playlist": "Añadir a una lista de reproducción",
      "Add to playlist…": "Añadir a una lista de reproducción…",
      "Add to queue": "Añadir a la cola",
      "Added to favourites": "Añadido a favoritos",
      "Added to the queue": "Añadido a la cola",
      "Added to {name}": "Añadido a {name}",
      "Alarm deleted": "Alarma eliminada",
      "Alarm set": "Alarma configurada",
      "Alarms": "Alarmas",
      "Alarms enabled": "Alarmas activadas",
      "Alarms enabled on this player": "Alarmas activadas en este reproductor",
      "Alarms off": "Alarmas desactivadas",
      "Alarms on": "Alarmas activadas",
      "Album": "Álbum",
      "Album artists": "Artistas de álbum",
      "Album gain": "Ganancia de álbum",
      "Albums": "Álbumes",
      "Albums ({count})": "Álbumes ({count})",
      "All artists": "Todos los artistas",
      "All options…": "Todas las opciones…",
      "All players": "Todos los reproductores",
      "Already moving playback…": "Ya se está moviendo la reproducción…",
      "Android: keeps playing with the screen locked": "Android: sigue sonando con la pantalla bloqueada",
      "Another tab is this browser's player; this one is a remote control.": "Otra pestaña es el reproductor de este navegador; esta es un mando a distancia.",
      "Appearance": "Apariencia",
      "Apps": "Aplicaciones",
      "Artist": "Artista",
      "Artists": "Artistas",
      "Artists ({count})": "Artistas ({count})",
      "Artists, albums, tracks, playlists": "Artistas, álbumes, pistas, listas de reproducción",
      "As Lyrion Music Server ({language})": "Como Lyrion Music Server ({language})",
      "At the end of this track": "Al final de esta pista",
      "Audio": "Audio",
      "Audio engine": "Motor de audio",
      "Audio output": "Salida de audio",
      "Automatic": "Automática",
      "Back": "Atrás",
      "Back to the skin": "Volver a la interfaz Web",
      "Back to {skin}": "Volver a {skin}",
      "Blue": "Azul",
      "Browser player off": "Reproductor del navegador desactivado",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "Los reproductores del navegador están desactivados en LMS (Configuración › Plugins › LyrionJS). Esta página controla tus otros reproductores.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "Los reproductores del navegador están desactivados en LMS (Configuración › Plugins › LyrionJS); esta página es ahora un mando a distancia.",
      "Buffered": "En búfer",
      "By artist": "Por artista",
      "By title": "Por título",
      "By year": "Por año",
      "Cancel": "Cancelar",
      "Cancel ({time} left)": "Cancelar (quedan {time})",
      "Choose a player": "Elige un reproductor",
      "Clear": "Borrar",
      "Clear queue": "Borrar la cola",
      "Clear the queue?": "¿Borrar la cola?",
      "Click to enable sound in this browser": "Haz clic para activar el sonido en este navegador",
      "Close": "Cerrar",
      "Close now playing": "Cerrar Reproduciendo",
      "Composers": "Compositores",
      "Connected (Slimproto over a WebSocket to LMS)": "Conectado (Slimproto sobre un WebSocket a LMS)",
      "Connecting to LMS…": "Conectando con LMS…",
      "Connecting…": "Conectando…",
      "Connection": "Conexión",
      "Control": "Controlar",
      "Controlling": "Controlando",
      "Create": "Crear",
      "Crossfade": "Encadenado",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "El encadenado necesita que ambas pistas tengan la misma frecuencia de muestreo; si no, este navegador las reproduce sin pausas.",
      "Dark": "Oscuro",
      "Delete": "Eliminar",
      "Delete alarm": "Eliminar alarma",
      "Delete playlist": "Eliminar lista de reproducción",
      "Delete this alarm?": "¿Eliminar esta alarma?",
      "Delete “{name}”?": "¿Eliminar “{name}”?",
      "Deleted": "Eliminado",
      "Disc {n}": "Disco {n}",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Activada",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Todos los reproductores que conoce LMS, incluido este navegador. Sincroniza reproductores para que suene la misma música a la vez.",
      "Every time you do that, a call stack loses its wings.": "Cada vez que haces eso, una pila de llamadas pierde sus alas.",
      "Everything LMS can search: your library, radio and installed apps": "Todo lo que LMS puede buscar: tu biblioteca, la radio y las aplicaciones instaladas",
      "Fade in": "Fundido de entrada",
      "Fade in and out": "Fundido de entrada y salida",
      "Fade out": "Fundido de salida",
      "Favourites": "Favoritos",
      "Formats": "Formatos",
      "From the cover art (as Material Skin)": "Según la carátula (como Material Skin)",
      "Genres": "Géneros",
      "Give this player a name": "Ponle un nombre a este reproductor",
      "Go to album": "Ir al álbum",
      "Go to artist": "Ir al artista",
      "Gold": "Dorado",
      "Green": "Verde",
      "Highest sample rate": "Frecuencia de muestreo máxima",
      "Highlight colour": "Color de resalte",
      "Home": "Inicio",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "Cómo aparece este navegador en LMS y en tus otros controles. Puedes cambiarlo cuando quieras en Configuración.",
      "LMS answered {status}": "LMS respondió {status}",
      "LMS did not answer in time": "LMS no respondió a tiempo",
      "LMS keeps the queue topped up with random picks from your library.": "LMS mantiene la cola llena con selecciones aleatorias de tu biblioteca.",
      "Language": "Idioma",
      "Last scan": "Último examen",
      "Leave the group": "Salir del grupo",
      "Library": "Biblioteca",
      "Library scan started": "Examen de la biblioteca iniciado",
      "Light": "Claro",
      "Live": "En directo",
      "Lost contact with the server: {error} — retrying…": "Se perdió el contacto con el servidor: {error} — reintentando…",
      "Lyrion Music Server is not answering at {host}.": "Lyrion Music Server no responde en {host}.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "LyrionJS funciona mejor en su propia pestaña: en esta ventana se detiene al cerrarla.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} en {os}",
      "Main": "Navegación principal",
      "Match the system": "Igual que el sistema",
      "Media element (plays with the screen locked)": "Elemento multimedia (suena con la pantalla bloqueada)",
      "Menu": "Menú",
      "More": "Más",
      "More about LyrionJS…": "Más sobre LyrionJS…",
      "More…": "Más…",
      "Move down": "Bajar",
      "Move playback to {name} from…": "Mover la reproducción a {name} desde…",
      "Move up": "Subir",
      "Moved": "Movido",
      "Moved playback to {name}": "Reproducción movida a {name}",
      "Moving playback stopped part-way ({name} carries on): {error}": "El movimiento de la reproducción se detuvo a medias ({name} sigue sonando): {error}",
      "Moving {n} tracks (the first {max})…": {
        "many": "Moviendo {n} pistas (las primeras {max})…",
        "one": "Moviendo {n} pista (las primeras {max})…",
        "other": "Moviendo {n} pistas (las primeras {max})…"
      },
      "Moving {n} tracks…": {
        "many": "Moviendo {n} pistas…",
        "one": "Moviendo {n} pista…",
        "other": "Moviendo {n} pistas…"
      },
      "Music folder": "Carpeta de música",
      "Mute": "Silenciar",
      "Name": "Nombre",
      "Name this player": "Nombra este reproductor",
      "Never": "Nunca",
      "New alarm on {name}": "Nueva alarma en {name}",
      "New music": "Música nueva",
      "New playlist": "Nueva lista de reproducción",
      "New playlist…": "Nueva lista de reproducción…",
      "Next": "Siguiente",
      "Nice try.": "Buen intento.",
      "No alarms on {name}.": "No hay alarmas en {name}.",
      "No albums.": "No hay álbumes.",
      "No apps are installed on the server.": "No hay aplicaciones instaladas en el servidor.",
      "No player": "Ningún reproductor",
      "No player selected.": "No hay ningún reproductor seleccionado.",
      "No players are connected to the server.": "No hay reproductores conectados al servidor.",
      "No radio services are installed on the server.": "No hay servicios de radio instalados en el servidor.",
      "No saved playlists.": "No hay listas de reproducción guardadas.",
      "None (gapless)": "Ninguna (sin pausas)",
      "Nothing here.": "Aquí no hay nada.",
      "Nothing in the library matches “{query}”.": "Nada en la biblioteca coincide con “{query}”.",
      "Nothing playing": "No se reproduce nada",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "No se reproduce nada. Elige algo de la biblioteca, los favoritos, la radio o las aplicaciones.",
      "Nothing to add": "Nada que añadir",
      "Nothing to move: {name}'s queue is empty": "Nada que mover: la cola de {name} está vacía",
      "Now playing": "Reproduciendo",
      "OK": "Aceptar",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "Vale, tú ganas: ahora estás escuchando LyrionJS dentro de LyrionJS dentro de LyrionJS. (Que no.)",
      "Off": "Desactivado",
      "Open LyrionJS inside LyrionJS (please don’t)": "Abrir LyrionJS dentro de LyrionJS (por favor, no)",
      "Open in a new tab": "Abrir en una pestaña nueva",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "Abrir LyrionJS dentro de LyrionJS abriría LyrionJS dentro de LyrionJS dentro de LyrionJS… y así sucesivamente, hasta que tu navegador se quede sin paciencia, sin memoria o sin ambas. Deja de intentar provocar un bucle recursivo, por favor.",
      "Opens when music starts": "Se abre cuando empieza la música",
      "Orange": "Naranja",
      "Other random albums": "Otros álbumes aleatorios",
      "Output": "Salida",
      "Output level": "Nivel de salida",
      "Output level in this browser (on top of the LMS volume)": "Nivel de salida en este navegador (además del volumen de LMS)",
      "Pause": "Pausa",
      "Pick a colour": "Elige un color",
      "Pink": "Rosa",
      "Play": "Reproducir",
      "Play folder": "Reproducir carpeta",
      "Play music in this browser (a real Slimproto player in LMS)": "Reproduce música en este navegador (un reproductor Slimproto real en LMS)",
      "Play next": "Reproducir a continuación",
      "Play now": "Reproducir ahora",
      "Play now, keep the queue": "Reproducir ahora, conservar la cola",
      "Play/pause": "Reproducir/pausa",
      "Player ID": "ID del reproductor",
      "Player controls": "Controles del reproductor",
      "Player: {name}": "Reproductor: {name}",
      "Players": "Reproductores",
      "Playing": "Reproduciendo",
      "Playing next": "Se reproducirá a continuación",
      "Playing shuffled": "Reproduciendo en orden aleatorio",
      "Playlist name": "Nombre de la lista de reproducción",
      "Playlists": "Listas de reproducción",
      "Plays it now (keeps the queue)": "La reproduce ya (conserva la cola)",
      "Plays it now (replaces the queue)": "La reproduce ya (sustituye la cola)",
      "Position": "Posición",
      "Previous": "Anterior",
      "Purple": "Morado",
      "Queue": "Cola",
      "Queue cleared": "Cola borrada",
      "Queue folder": "Añadir carpeta a la cola",
      "Radio": "Radio",
      "Random": "Aleatorio",
      "Random album mix started": "Mezcla de álbumes iniciada",
      "Random albums": "Álbumes aleatorios",
      "Random artist mix started": "Mezcla de artistas iniciada",
      "Random mix": "Mezcla aleatoria",
      "Random mix stopped": "Mezcla aleatoria detenida",
      "Random song mix started": "Mezcla de canciones iniciada",
      "Random year mix started": "Mezcla de años iniciada",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. ¿Contento?",
      "Recently added": "Añadidos recientemente",
      "Recursion depth": "Profundidad de recursión",
      "Refresh": "Actualizar",
      "Reloading to switch the output…": "Recargando para cambiar la salida…",
      "Remove": "Quitar",
      "Remove from favourites": "Quitar de favoritos",
      "Remove from playlist": "Quitar de la lista de reproducción",
      "Remove from queue": "Quitar de la cola",
      "Remove “{name}” from favourites?": "¿Quitar “{name}” de favoritos?",
      "Removed": "Quitado",
      "Rename": "Cambiar nombre",
      "Rename favourite": "Cambiar nombre del favorito",
      "Rename playlist": "Cambiar nombre de la lista de reproducción",
      "Rename this browser…": "Cambiar nombre de este navegador…",
      "Rename this player": "Cambiar nombre de este reproductor",
      "Renamed": "Nombre cambiado",
      "Rename…": "Cambiar nombre…",
      "Repeat": "Repetir",
      "Repeat off": "No repetir",
      "Repeat queue": "Repetir cola",
      "Repeat song": "Repetir canción",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Guardar",
      "Save as playlist": "Guardar como lista de reproducción",
      "Save queue as playlist": "Guardar la cola como lista de reproducción",
      "Saved": "Guardado",
      "Saved as {name}": "Guardada como {name}",
      "Scan": "Examen",
      "Scan for new music": "Buscar música nueva",
      "Scanning: {step} {done}/{total}": "Examinando: {step} {done}/{total}",
      "Search": "Buscar",
      "Search apps and services for “{query}”": "Buscar “{query}” en aplicaciones y servicios",
      "Search: {query}": "Búsqueda: {query}",
      "Searching…": "Buscando…",
      "Seek": "Buscar posición",
      "Send diagnostics": "Enviar diagnósticos",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Enviar diagnósticos de reproducción al registro del servidor LMS (ayuda a resolver problemas en teléfonos y tabletas)",
      "Server": "Servidor",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Se ajusta con los botones del propio dispositivo (la página no puede ajustarlo aquí); el volumen de LMS se mantiene al 100 %",
      "Settings": "Configuración",
      "Show LyrionJS": "Mostrar LyrionJS",
      "Show the queue": "Mostrar la cola",
      "Showing {skin}": "Mostrando {skin}",
      "Shows actions under it": "Muestra acciones debajo",
      "Shuffle": "Orden aleatorio",
      "Shuffle albums": "Orden aleatorio por álbum",
      "Shuffle off": "Sin orden aleatorio",
      "Shuffle songs": "Orden aleatorio por canción",
      "Skin": "Interfaz Web",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Interfaz Web: la propia de LyrionJS o cualquiera instalada en tu Lyrion Music Server, y este navegador sigue siendo el reproductor",
      "Sleep timer": "Temporizador de suspensión",
      "Sleep timer off": "Temporizador de suspensión desactivado",
      "Sleeping after this track": "Suspensión al final de esta pista",
      "Sleeping in {n} minutes": {
        "many": "Suspensión en {n} minutos",
        "one": "Suspensión en {n} minuto",
        "other": "Suspensión en {n} minutos"
      },
      "Smart gain": "Ganancia inteligente",
      "Something went wrong": "Algo ha salido mal",
      "Songs": "Canciones",
      "Sort albums": "Ordenar álbumes",
      "State": "Estado",
      "Still no. One of us is enough.": "Que no. Con uno de nosotros basta.",
      "Stop mix": "Detener la mezcla",
      "Switch off": "Apagar",
      "Switch on": "Encender",
      "Sync this player…": "Sincronizar este reproductor…",
      "Sync {name} with…": "Sincronizar {name} con…",
      "Synced {name}": "{name} sincronizado",
      "Sync…": "Sincronizar…",
      "Take me back to the music": "Llévame de vuelta a la música",
      "Tapping a track": "Tocar una pista",
      "Tapping a track (search, albums, playlists, folders)": "Tocar una pista (búsqueda, álbumes, listas, carpetas)",
      "Teal": "Verde azulado",
      "The alarm plays the current queue (or LMS's default alarm sound).": "La alarma reproduce la cola actual (o el sonido de alarma predeterminado de LMS).",
      "The browser has started muttering about “maximum call stack size”.": "El navegador ha empezado a murmurar algo sobre “maximum call stack size”.",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "El elemento multimedia no puede reproducir aquí: elige Web Audio en Configuración › Salida de audio.",
      "The queue is empty.": "La cola está vacía.",
      "The search failed: {error}": "La búsqueda falló: {error}",
      "Theme": "Tema",
      "This browser": "Este navegador",
      "This browser as a player": "Este navegador como reproductor",
      "This browser can't play through the media element: switching to Web Audio…": "Este navegador no puede reproducir con el elemento multimedia: cambiando a Web Audio…",
      "This folder is empty.": "Esta carpeta está vacía.",
      "This page could not be shown: {error}": "No se pudo mostrar esta página: {error}",
      "This player is now “{name}”": "Este reproductor ahora se llama “{name}”",
      "This player was taken over by another session; this page is now a remote control.": "Otra sesión ha tomado el control de este reproductor; esta página es ahora un mando a distancia.",
      "This playlist is empty.": "Esta lista de reproducción está vacía.",
      "This tab is already playing with LyrionJS.": "Esta pestaña ya está reproduciendo con LyrionJS.",
      "Time": "Hora",
      "Track gain": "Ganancia de pista",
      "Track {n} of {total}": "Pista {n} de {total}",
      "Tracks ({count})": "Pistas ({count})",
      "Transfer playback here from…": "Pasar la reproducción aquí desde…",
      "Transition between tracks": "Transición entre pistas",
      "Transition length": "Duración de la transición",
      "Try again": "Reintentar",
      "Trying again every few seconds…": "Reintentando cada pocos segundos…",
      "Type at least two letters.": "Escribe al menos dos letras.",
      "Unknown": "Desconocido",
      "Unmute": "Activar sonido",
      "Unsynced": "Desincronizado",
      "Unsynced {name}": "{name} desincronizado",
      "Use it here": "Usarlo aquí",
      "Use this browser as a player": "Usar este navegador como reproductor",
      "Version": "Versión",
      "Volume": "Volumen",
      "Volume levelling (ReplayGain)": "Ajuste de volumen (ReplayGain)",
      "Volume of {name}": "Volumen de {name}",
      "Web Audio (lowest latency)": "Web Audio (latencia mínima)",
      "Web Audio (opens when music starts)": "Web Audio (se abre cuando empieza la música)",
      "Web Audio, opens when music starts": "Web Audio, se abre cuando empieza la música",
      "We’ve told LMS. It isn’t angry, just disappointed.": "Se lo hemos contado a LMS. No está enfadado, solo decepcionado.",
      "What it is": "Qué es",
      "When the queue ends (Don't Stop The Music)": "Cuando se acabe la cola (Don't Stop The Music)",
      "Which artists": "Qué artistas",
      "Whoa there. You’re already in LyrionJS.": "Eh, para el carro. Ya estás en LyrionJS.",
      "Why": "Por qué",
      "Years": "Años",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "Tu navegador, como un reproductor Lyrion de verdad. Toca el espejo si no puedes evitarlo.",
      "Your own colour": "Tu propio color",
      "by": "de",
      "chosen in Settings": "elegido en Configuración",
      "closed": "cerrado",
      "decoding {format}": "decodificando {format}",
      "desktop browser": "navegador de escritorio",
      "disconnected": "desconectado",
      "e.g. Kitchen tablet": "p. ej. Tableta de la cocina",
      "from": "de",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad: sigue sonando con la pantalla bloqueada",
      "interrupted": "interrumpido",
      "loaded": "cargado",
      "off": "apagado",
      "once": "una vez",
      "paused": "en pausa",
      "playing": "reproduciendo",
      "repeats": "se repite",
      "running": "en marcha",
      "stopped": "detenido",
      "suspended": "en pausa",
      "synced with {names}": "sincronizado con {names}",
      "the media element failed here before": "el elemento multimedia ya falló aquí",
      "this browser cannot play FLAC through a media element": "este navegador no puede reproducir FLAC con un elemento multimedia",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "este navegador no puede reproducir FLAC con un elemento multimedia (se necesita iOS 17.1 o posterior); mantén la pantalla encendida",
      "volume {volume}": "volumen {volume}",
      "waiting": "en espera",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (LMS convierte todo lo demás a FLAC)",
      "{name} (this browser)": "{name} (este navegador)",
      "{n} albums": {
        "many": "{n} álbumes",
        "one": "{n} álbum",
        "other": "{n} álbumes"
      },
      "{n} artists": {
        "many": "{n} artistas",
        "one": "{n} artista",
        "other": "{n} artistas"
      },
      "{n} minutes": {
        "many": "{n} minutos",
        "one": "{n} minuto",
        "other": "{n} minutos"
      },
      "{n} of {total}": "{n} de {total}",
      "{n} tracks": {
        "many": "{n} pistas",
        "one": "{n} pista",
        "other": "{n} pistas"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, latencia ~{latency} ms",
      "{seconds} s decoded ahead": "{seconds} s decodificados por adelantado",
      "{setting} saved": "{setting} guardado",
      "{skin} (the server's)": "{skin} (la del servidor)",
      "“{name}” already exists. Add to it?": "“{name}” ya existe. ¿Añadir a ella?"
    },
    "fi": {
      "(plain http page)": "(tavallinen http-sivu)",
      "(the first {shown} shown)": "(näytetään ensimmäiset {shown})",
      "1, and we’d like to keep it that way": "1, ja haluamme pitää sen sellaisena",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "Slimproto-soitin ja kaukosäädin Lyrion Music Serverille, kokonaan tällä sivulla.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "Slimproto-soitin ja ohjain Lyrion Music Serverille yhdellä sivulla. Näppäimistö: välilyönti toisto/tauko, ←/→ edellinen/seuraava, ↑/↓ äänenvoimakkuus, M mykistys.",
      "A new version of LyrionJS is ready — reload": "LyrionJS:n uusi versio on valmis — lataa sivu uudelleen",
      "A remote control (not a player)": "Kaukosäädin (ei soitin)",
      "About": "Tietoja",
      "About LyrionJS": "Tietoja LyrionJS:stä",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Saavutus avattu: Ouroboros. Mene nyt soittamaan musiikkia.",
      "Actions to show": "Näytettävät toiminnot",
      "Add alarm": "Lisää herätys",
      "Add album to playlist…": "Lisää levy soittoluetteloon…",
      "Add to favourites": "Lisää suosikkeihin",
      "Add to it": "Lisää siihen",
      "Add to playlist": "Lisää soittoluetteloon",
      "Add to playlist…": "Lisää soittoluetteloon…",
      "Add to queue": "Lisää jonoon",
      "Added to favourites": "Lisätty suosikkeihin",
      "Added to the queue": "Lisätty jonoon",
      "Added to {name}": "Lisätty: {name}",
      "Alarm deleted": "Herätys poistettu",
      "Alarm set": "Herätys asetettu",
      "Alarms": "Herätykset",
      "Alarms enabled": "Herätykset käytössä",
      "Alarms enabled on this player": "Herätykset käytössä tässä soittimessa",
      "Alarms off": "Herätykset pois",
      "Alarms on": "Herätykset päällä",
      "Album": "Levy",
      "Album artists": "Levyartistit",
      "Album gain": "Levyn äänenvoimakkuus",
      "Albums": "Levyt",
      "Albums ({count})": "Levyt ({count})",
      "All artists": "Kaikki artistit",
      "All options…": "Kaikki vaihtoehdot…",
      "All players": "Kaikki soittimet",
      "Already moving playback…": "Toistoa siirretään jo…",
      "Android: keeps playing with the screen locked": "Android: soi myös näytön ollessa lukittuna",
      "Another tab is this browser's player; this one is a remote control.": "Toinen välilehti on tämän selaimen soitin; tämä on kaukosäädin.",
      "Appearance": "Ulkoasu",
      "Apps": "Sovellukset",
      "Artist": "Artisti",
      "Artists": "Artistit",
      "Artists ({count})": "Artistit ({count})",
      "Artists, albums, tracks, playlists": "Artistit, levyt, raidat, soittoluettelot",
      "As Lyrion Music Server ({language})": "Kuten Lyrion Music Server ({language})",
      "At the end of this track": "Tämän raidan lopussa",
      "Audio": "Ääni",
      "Audio engine": "Äänimoottori",
      "Audio output": "Äänilähtö",
      "Automatic": "Automaattinen",
      "Back": "Takaisin",
      "Back to the skin": "Takaisin skiniin",
      "Back to {skin}": "Takaisin: {skin}",
      "Blue": "Sininen",
      "Browser player off": "Selainsoitin pois",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "Selainsoittimet on poistettu käytöstä LMS:ssä (Asetukset › Laajennukset › LyrionJS). Tällä sivulla voit ohjata muita soittimiasi.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "Selainsoittimet on poistettu käytöstä LMS:ssä (Asetukset › Laajennukset › LyrionJS); tämä sivu on nyt kaukosäädin.",
      "Buffered": "Puskuroitu",
      "By artist": "Artistin mukaan",
      "By title": "Nimen mukaan",
      "By year": "Vuoden mukaan",
      "Cancel": "Peruuta",
      "Cancel ({time} left)": "Peruuta ({time} jäljellä)",
      "Choose a player": "Valitse soitin",
      "Clear": "Tyhjennä",
      "Clear queue": "Tyhjennä jono",
      "Clear the queue?": "Tyhjennetäänkö jono?",
      "Click to enable sound in this browser": "Napsauta ottaaksesi äänen käyttöön tässä selaimessa",
      "Close": "Sulje",
      "Close now playing": "Sulje Nyt soi",
      "Composers": "Säveltäjät",
      "Connected (Slimproto over a WebSocket to LMS)": "Yhdistetty (Slimproto WebSocketin kautta LMS:ään)",
      "Connecting to LMS…": "Yhdistetään LMS:ään…",
      "Connecting…": "Yhdistetään…",
      "Connection": "Yhteys",
      "Control": "Ohjaa",
      "Controlling": "Ohjataan",
      "Create": "Luo",
      "Crossfade": "Ristihäivytys",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "Ristihäivytys vaatii, että molemmilla raidoilla on sama näytteenottotaajuus; muuten tämä selain soittaa ne ilman taukoa.",
      "Dark": "Tumma",
      "Delete": "Poista",
      "Delete alarm": "Poista herätys",
      "Delete playlist": "Poista soittoluettelo",
      "Delete this alarm?": "Poistetaanko tämä herätys?",
      "Delete “{name}”?": "Poistetaanko ”{name}”?",
      "Deleted": "Poistettu",
      "Disc {n}": "Levy {n}",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Käytössä",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Kaikki LMS:n tuntemat soittimet, myös tämä selain. Synkronoi soittimet soittamaan samaa musiikkia samaan tahtiin.",
      "Every time you do that, a call stack loses its wings.": "Aina kun teet noin, yksi kutsupino menettää siipensä.",
      "Everything LMS can search: your library, radio and installed apps": "Kaikki, mistä LMS voi hakea: kirjastosi, radio ja asennetut sovellukset",
      "Fade in": "Häivytä sisään",
      "Fade in and out": "Häivytä sisään ja ulos",
      "Fade out": "Häivytä ulos",
      "Favourites": "Suosikit",
      "Formats": "Muodot",
      "From the cover art (as Material Skin)": "Kansikuvasta (kuten Material Skin)",
      "Genres": "Genret",
      "Give this player a name": "Anna tälle soittimelle nimi",
      "Go to album": "Siirry levyyn",
      "Go to artist": "Siirry artistiin",
      "Gold": "Kulta",
      "Green": "Vihreä",
      "Highest sample rate": "Suurin näytteenottotaajuus",
      "Highlight colour": "Korostusväri",
      "Home": "Koti",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "Näin tämä selain näkyy LMS:ssä ja muissa ohjaimissasi. Voit muuttaa sitä milloin tahansa asetuksissa.",
      "LMS answered {status}": "LMS vastasi {status}",
      "LMS did not answer in time": "LMS ei vastannut ajoissa",
      "LMS keeps the queue topped up with random picks from your library.": "LMS täydentää jonoa jatkuvasti satunnaisilla valinnoilla kirjastostasi.",
      "Language": "Kieli",
      "Last scan": "Viimeisin tarkistus",
      "Leave the group": "Poistu ryhmästä",
      "Library": "Kirjasto",
      "Library scan started": "Kirjaston tarkistus aloitettu",
      "Light": "Vaalea",
      "Live": "Suora",
      "Lost contact with the server: {error} — retrying…": "Yhteys palvelimeen katkesi: {error} — yritetään uudelleen…",
      "Lyrion Music Server is not answering at {host}.": "Lyrion Music Server ei vastaa osoitteessa {host}.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "LyrionJS toimii parhaiten omalla välilehdellään: tässä ikkunassa toisto loppuu, kun ikkuna suljetaan.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} ({os})",
      "Main": "Päävalikko",
      "Match the system": "Järjestelmän mukaan",
      "Media element (plays with the screen locked)": "Mediaelementti (soi näytön ollessa lukittuna)",
      "Menu": "Valikko",
      "More": "Lisää",
      "More about LyrionJS…": "Lisää LyrionJS:stä…",
      "More…": "Lisää…",
      "Move down": "Siirrä alas",
      "Move playback to {name} from…": "Siirrä toisto soittimeen {name} soittimesta…",
      "Move up": "Siirrä ylös",
      "Moved": "Siirretty",
      "Moved playback to {name}": "Toisto siirretty soittimeen {name}",
      "Moving playback stopped part-way ({name} carries on): {error}": "Toiston siirto keskeytyi kesken ({name} jatkaa soittamista): {error}",
      "Moving {n} tracks (the first {max})…": {
        "one": "Siirretään {n} raita (ensimmäiset {max})…",
        "other": "Siirretään {n} raitaa (ensimmäiset {max})…"
      },
      "Moving {n} tracks…": {
        "one": "Siirretään {n} raita…",
        "other": "Siirretään {n} raitaa…"
      },
      "Music folder": "Musiikkikansio",
      "Mute": "Mykistä",
      "Name": "Nimi",
      "Name this player": "Nimeä tämä soitin",
      "Never": "Ei koskaan",
      "New alarm on {name}": "Uusi herätys: {name}",
      "New music": "Uusi musiikki",
      "New playlist": "Uusi soittoluettelo",
      "New playlist…": "Uusi soittoluettelo…",
      "Next": "Seuraava",
      "Nice try.": "Hyvä yritys.",
      "No alarms on {name}.": "Soittimessa {name} ei ole herätyksiä.",
      "No albums.": "Ei levyjä.",
      "No apps are installed on the server.": "Palvelimelle ei ole asennettu sovelluksia.",
      "No player": "Ei soitinta",
      "No player selected.": "Soitinta ei ole valittu.",
      "No players are connected to the server.": "Palvelimeen ei ole yhdistetty soittimia.",
      "No radio services are installed on the server.": "Palvelimelle ei ole asennettu radiopalveluja.",
      "No saved playlists.": "Ei tallennettuja soittoluetteloita.",
      "None (gapless)": "Ei mitään (ilman taukoa)",
      "Nothing here.": "Täällä ei ole mitään.",
      "Nothing in the library matches “{query}”.": "Kirjastosta ei löytynyt mitään haulla ”{query}”.",
      "Nothing playing": "Mitään ei soi",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "Mitään ei soi. Valitse jotain kirjastosta, suosikeista, radiosta tai sovelluksista.",
      "Nothing to add": "Ei lisättävää",
      "Nothing to move: {name}'s queue is empty": "Ei siirrettävää: soittimen {name} jono on tyhjä",
      "Now playing": "Nyt soi",
      "OK": "OK",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "Okei, voitit: kuuntelet nyt LyrionJS:ää LyrionJS:n sisällä LyrionJS:n sisällä. (Et kuuntele.)",
      "Off": "Pois",
      "Open LyrionJS inside LyrionJS (please don’t)": "Avaa LyrionJS LyrionJS:n sisällä (älä ihmeessä)",
      "Open in a new tab": "Avaa uudessa välilehdessä",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "LyrionJS:n avaaminen LyrionJS:n sisällä avaisi LyrionJS:n LyrionJS:n sisällä LyrionJS:n sisällä… ja niin edelleen, kunnes selaimeltasi loppuu kärsivällisyys, muisti tai molemmat. Lopeta jo rekursiosilmukan yrittäminen.",
      "Opens when music starts": "Avautuu, kun musiikki alkaa",
      "Orange": "Oranssi",
      "Other random albums": "Muita satunnaisia albumeja",
      "Output": "Lähtö",
      "Output level": "Lähtötaso",
      "Output level in this browser (on top of the LMS volume)": "Lähtötaso tässä selaimessa (LMS:n äänenvoimakkuuden lisäksi)",
      "Pause": "Tauko",
      "Pick a colour": "Valitse väri",
      "Pink": "Vaaleanpunainen",
      "Play": "Toista",
      "Play folder": "Toista kansio",
      "Play music in this browser (a real Slimproto player in LMS)": "Soita musiikkia tässä selaimessa (oikea Slimproto-soitin LMS:ssä)",
      "Play next": "Soita seuraavaksi",
      "Play now": "Soita nyt",
      "Play now, keep the queue": "Soita nyt, säilytä jono",
      "Play/pause": "Toisto/tauko",
      "Player ID": "Soittimen tunnus",
      "Player controls": "Soittimen säätimet",
      "Player: {name}": "Soitin: {name}",
      "Players": "Soittimet",
      "Playing": "Soitetaan",
      "Playing next": "Soitetaan seuraavaksi",
      "Playing shuffled": "Soitetaan sekoitettuna",
      "Playlist name": "Soittoluettelon nimi",
      "Playlists": "Soittoluettelot",
      "Plays it now (keeps the queue)": "Soittaa sen heti (jono säilyy)",
      "Plays it now (replaces the queue)": "Soittaa sen heti (korvaa jonon)",
      "Position": "Kohta",
      "Previous": "Edellinen",
      "Purple": "Violetti",
      "Queue": "Jono",
      "Queue cleared": "Jono tyhjennetty",
      "Queue folder": "Lisää kansio jonoon",
      "Radio": "Radio",
      "Random": "Satunnainen",
      "Random album mix started": "Satunnainen levyvalikoima aloitettu",
      "Random albums": "Satunnaiset albumit",
      "Random artist mix started": "Satunnainen artistivalikoima aloitettu",
      "Random mix": "Satunnainen valikoima",
      "Random mix stopped": "Satunnainen valikoima pysäytetty",
      "Random song mix started": "Satunnainen kappalevalikoima aloitettu",
      "Random year mix started": "Satunnainen vuosivalikoima aloitettu",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. Tyytyväinen nyt?",
      "Recently added": "Viimeksi lisätyt",
      "Recursion depth": "Rekursiosyvyys",
      "Refresh": "Päivitä",
      "Reloading to switch the output…": "Ladataan uudelleen äänilähdön vaihtamiseksi…",
      "Remove": "Poista",
      "Remove from favourites": "Poista suosikeista",
      "Remove from playlist": "Poista soittoluettelosta",
      "Remove from queue": "Poista jonosta",
      "Remove “{name}” from favourites?": "Poistetaanko ”{name}” suosikeista?",
      "Removed": "Poistettu",
      "Rename": "Nimeä uudelleen",
      "Rename favourite": "Nimeä suosikki uudelleen",
      "Rename playlist": "Nimeä soittoluettelo uudelleen",
      "Rename this browser…": "Nimeä tämä selain uudelleen…",
      "Rename this player": "Nimeä tämä soitin uudelleen",
      "Renamed": "Nimetty uudelleen",
      "Rename…": "Nimeä uudelleen…",
      "Repeat": "Toista",
      "Repeat off": "Toisto ei käytössä",
      "Repeat queue": "Toista jono",
      "Repeat song": "Toista kappale",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Tallenna",
      "Save as playlist": "Tallenna soittoluettelona",
      "Save queue as playlist": "Tallenna jono soittoluettelona",
      "Saved": "Tallennettu",
      "Saved as {name}": "Tallennettu nimellä {name}",
      "Scan": "Tarkistus",
      "Scan for new music": "Etsi uutta musiikkia",
      "Scanning: {step} {done}/{total}": "Tarkistetaan: {step} {done}/{total}",
      "Search": "Etsi",
      "Search apps and services for “{query}”": "Etsi ”{query}” sovelluksista ja palveluista",
      "Search: {query}": "Haku: {query}",
      "Searching…": "Haetaan…",
      "Seek": "Siirry kohtaan",
      "Send diagnostics": "Lähetä diagnostiikkatiedot",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Lähetä toiston diagnostiikkatiedot LMS-palvelimen lokiin (auttaa korjaamaan ongelmia puhelimissa ja tableteissa)",
      "Server": "Palvelin",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Säädä laitteen omilla painikkeilla (sivu ei voi säätää sitä tässä); LMS:n äänenvoimakkuus pidetään 100 %:ssa",
      "Settings": "Asetukset",
      "Show LyrionJS": "Näytä LyrionJS",
      "Show the queue": "Näytä jono",
      "Showing {skin}": "Näytetään {skin}",
      "Shows actions under it": "Näyttää toiminnot sen alla",
      "Shuffle": "Sekoitus",
      "Shuffle albums": "Sekoita levyt",
      "Shuffle off": "Ei sekoitusta",
      "Shuffle songs": "Sekoita kappaleet",
      "Skin": "Skini",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Skini: LyrionJS:n oma tai mikä tahansa Lyrion Music Serveriin asennettu skini, ja tämä selain toimii edelleen soittimena",
      "Sleep timer": "Lepotila",
      "Sleep timer off": "Lepotila pois",
      "Sleeping after this track": "Lepotila tämän raidan jälkeen",
      "Sleeping in {n} minutes": {
        "one": "Lepotila {n} minuutin kuluttua",
        "other": "Lepotila {n} minuutin kuluttua"
      },
      "Smart gain": "Älykäs äänenvoimakkuus",
      "Something went wrong": "Jokin meni vikaan",
      "Songs": "Kappaleet",
      "Sort albums": "Lajittele levyt",
      "State": "Tila",
      "Still no. One of us is enough.": "Ei vieläkään. Yksi meistä riittää.",
      "Stop mix": "Pysäytä valikoima",
      "Switch off": "Sammuta",
      "Switch on": "Käynnistä",
      "Sync this player…": "Synkronoi tämä soitin…",
      "Sync {name} with…": "Synkronoi {name} seuraavan kanssa…",
      "Synced {name}": "{name} synkronoitu",
      "Sync…": "Synkronoi…",
      "Take me back to the music": "Vie minut takaisin musiikin pariin",
      "Tapping a track": "Kappaleen napautus",
      "Tapping a track (search, albums, playlists, folders)": "Kappaleen napautus (haku, albumit, soittolistat, kansiot)",
      "Teal": "Sinivihreä",
      "The alarm plays the current queue (or LMS's default alarm sound).": "Herätys soittaa nykyisen jonon (tai LMS:n oletusherätysäänen).",
      "The browser has started muttering about “maximum call stack size”.": "Selain on alkanut mutista jotain ”maximum call stack size” -jutusta.",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "Mediaelementti ei voi soittaa täällä: valitse Web Audio kohdasta Asetukset › Äänilähtö.",
      "The queue is empty.": "Jono on tyhjä.",
      "The search failed: {error}": "Haku epäonnistui: {error}",
      "Theme": "Teema",
      "This browser": "Tämä selain",
      "This browser as a player": "Tämä selain soittimena",
      "This browser can't play through the media element: switching to Web Audio…": "Tämä selain ei voi soittaa mediaelementin kautta: vaihdetaan Web Audioon…",
      "This folder is empty.": "Tämä kansio on tyhjä.",
      "This page could not be shown: {error}": "Sivua ei voitu näyttää: {error}",
      "This player is now “{name}”": "Tämän soittimen nimi on nyt ”{name}”",
      "This player was taken over by another session; this page is now a remote control.": "Toinen istunto otti tämän soittimen käyttöönsä; tämä sivu on nyt kaukosäädin.",
      "This playlist is empty.": "Tämä soittoluettelo on tyhjä.",
      "This tab is already playing with LyrionJS.": "Tämä välilehti soittaa jo LyrionJS:llä.",
      "Time": "Aika",
      "Track gain": "Raidan äänenvoimakkuus",
      "Track {n} of {total}": "Raita {n}/{total}",
      "Tracks ({count})": "Raidat ({count})",
      "Transfer playback here from…": "Siirrä toisto tänne soittimesta…",
      "Transition between tracks": "Siirtymä raitojen välillä",
      "Transition length": "Siirtymän pituus",
      "Try again": "Yritä uudelleen",
      "Trying again every few seconds…": "Yritetään uudelleen muutaman sekunnin välein…",
      "Type at least two letters.": "Kirjoita vähintään kaksi kirjainta.",
      "Unknown": "Tuntematon",
      "Unmute": "Poista mykistys",
      "Unsynced": "Synkronointi purettu",
      "Unsynced {name}": "{name}: synkronointi purettu",
      "Use it here": "Käytä tässä",
      "Use this browser as a player": "Käytä tätä selainta soittimena",
      "Version": "Versio",
      "Volume": "Äänenvoimakkuus",
      "Volume levelling (ReplayGain)": "Äänenvoimakkuuden säätö (ReplayGain)",
      "Volume of {name}": "Äänenvoimakkuus: {name}",
      "Web Audio (lowest latency)": "Web Audio (pienin viive)",
      "Web Audio (opens when music starts)": "Web Audio (avautuu, kun musiikki alkaa)",
      "Web Audio, opens when music starts": "Web Audio, avautuu, kun musiikki alkaa",
      "We’ve told LMS. It isn’t angry, just disappointed.": "Kerroimme LMS:lle. Se ei ole vihainen, vain pettynyt.",
      "What it is": "Mikä se on",
      "When the queue ends (Don't Stop The Music)": "Kun jono loppuu (Don't Stop The Music)",
      "Which artists": "Mitkä artistit",
      "Whoa there. You’re already in LyrionJS.": "Hoplaa, rauhassa. Olet jo LyrionJS:ssä.",
      "Why": "Miksi",
      "Years": "Vuodet",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "Selaimesi oikeana Lyrion-soittimena. Napauta peiliä, jos on pakko.",
      "Your own colour": "Oma väri",
      "by": "esittäjä",
      "chosen in Settings": "valittu asetuksissa",
      "closed": "suljettu",
      "decoding {format}": "puretaan {format}",
      "desktop browser": "tietokoneen selain",
      "disconnected": "ei yhteyttä",
      "e.g. Kitchen tablet": "esim. Keittiön tabletti",
      "from": "levyltä",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad: soi myös näytön ollessa lukittuna",
      "interrupted": "katkaistu",
      "loaded": "ladattu",
      "off": "pois päältä",
      "once": "kerran",
      "paused": "tauolla",
      "playing": "soi",
      "repeats": "toistuu",
      "running": "käynnissä",
      "stopped": "pysäytetty",
      "suspended": "keskeytetty",
      "synced with {names}": "synkronoitu: {names}",
      "the media element failed here before": "mediaelementti epäonnistui täällä aiemmin",
      "this browser cannot play FLAC through a media element": "tämä selain ei voi soittaa FLACia mediaelementin kautta",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "tämä selain ei voi soittaa FLACia mediaelementin kautta (vaatii iOS 17.1:n tai uudemman); pidä näyttö päällä",
      "volume {volume}": "äänenvoimakkuus {volume}",
      "waiting": "odottaa",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (LMS muuntaa kaiken muun FLAC-muotoon)",
      "{name} (this browser)": "{name} (tämä selain)",
      "{n} albums": {
        "one": "{n} levy",
        "other": "{n} levyä"
      },
      "{n} artists": {
        "one": "{n} artisti",
        "other": "{n} artistia"
      },
      "{n} minutes": {
        "one": "{n} minuutti",
        "other": "{n} minuuttia"
      },
      "{n} of {total}": "{n}/{total}",
      "{n} tracks": {
        "one": "{n} raita",
        "other": "{n} raitaa"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, viive ~{latency} ms",
      "{seconds} s decoded ahead": "{seconds} s purettu valmiiksi",
      "{setting} saved": "{setting} tallennettu",
      "{skin} (the server's)": "{skin} (palvelimen)",
      "“{name}” already exists. Add to it?": "”{name}” on jo olemassa. Lisätäänkö siihen?"
    },
    "fr": {
      "(plain http page)": "(page http simple)",
      "(the first {shown} shown)": "({shown} premiers affichés)",
      "1, and we’d like to keep it that way": "1, et on aimerait que ça reste comme ça",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "Une platine Slimproto et une télécommande pour Lyrion Music Server, entièrement dans cette page.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "Une platine Slimproto et une télécommande pour Lyrion Music Server dans une seule page. Clavier : Espace lecture/pause, ←/→ précédent/suivant, ↑/↓ volume, M sourdine.",
      "A new version of LyrionJS is ready — reload": "Une nouvelle version de LyrionJS est prête — recharger",
      "A remote control (not a player)": "Une télécommande (pas une platine)",
      "About": "À propos",
      "About LyrionJS": "À propos de LyrionJS",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Succès débloqué : Ouroboros. Maintenant, allez écouter de la musique.",
      "Actions to show": "Actions affichées",
      "Add alarm": "Ajouter un réveil",
      "Add album to playlist…": "Ajouter l'album à une liste de lecture…",
      "Add to favourites": "Ajouter aux favoris",
      "Add to it": "Y ajouter",
      "Add to playlist": "Ajouter à une liste de lecture",
      "Add to playlist…": "Ajouter à une liste de lecture…",
      "Add to queue": "Ajouter à la file d'attente",
      "Added to favourites": "Ajouté aux favoris",
      "Added to the queue": "Ajouté à la file d'attente",
      "Added to {name}": "Ajouté à {name}",
      "Alarm deleted": "Réveil supprimé",
      "Alarm set": "Réveil réglé",
      "Alarms": "Réveils",
      "Alarms enabled": "Réveils activés",
      "Alarms enabled on this player": "Réveils activés sur cette platine",
      "Alarms off": "Réveils désactivés",
      "Alarms on": "Réveils activés",
      "Album": "Album",
      "Album artists": "Artistes des albums",
      "Album gain": "Gain album",
      "Albums": "Albums",
      "Albums ({count})": "Albums ({count})",
      "All artists": "Tous les artistes",
      "All options…": "Toutes les options…",
      "All players": "Toutes les platines",
      "Already moving playback…": "Transfert de la lecture déjà en cours…",
      "Android: keeps playing with the screen locked": "Android : la lecture continue écran verrouillé",
      "Another tab is this browser's player; this one is a remote control.": "Un autre onglet est la platine de ce navigateur ; celui-ci est une télécommande.",
      "Appearance": "Apparence",
      "Apps": "Applications",
      "Artist": "Artiste",
      "Artists": "Artistes",
      "Artists ({count})": "Artistes ({count})",
      "Artists, albums, tracks, playlists": "Artistes, albums, morceaux, listes de lecture",
      "As Lyrion Music Server ({language})": "Comme Lyrion Music Server ({language})",
      "At the end of this track": "À la fin de ce morceau",
      "Audio": "Audio",
      "Audio engine": "Moteur audio",
      "Audio output": "Sortie audio",
      "Automatic": "Automatique",
      "Back": "Retour",
      "Back to the skin": "Retour à l'interface Web",
      "Back to {skin}": "Retour à {skin}",
      "Blue": "Bleu",
      "Browser player off": "Platine navigateur désactivée",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "Les platines navigateur sont désactivées dans LMS (Paramètres › Plugins › LyrionJS). Cette page commande vos autres platines.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "Les platines navigateur sont désactivées dans LMS (Paramètres › Plugins › LyrionJS) ; cette page est maintenant une télécommande.",
      "Buffered": "En mémoire tampon",
      "By artist": "Par artiste",
      "By title": "Par titre",
      "By year": "Par année",
      "Cancel": "Annuler",
      "Cancel ({time} left)": "Annuler ({time} restant)",
      "Choose a player": "Choisir une platine",
      "Clear": "Vider",
      "Clear queue": "Vider la file d'attente",
      "Clear the queue?": "Vider la file d'attente ?",
      "Click to enable sound in this browser": "Cliquez pour activer le son dans ce navigateur",
      "Close": "Fermer",
      "Close now playing": "Fermer la lecture en cours",
      "Composers": "Compositeurs",
      "Connected (Slimproto over a WebSocket to LMS)": "Connecté (Slimproto sur WebSocket vers LMS)",
      "Connecting to LMS…": "Connexion à LMS…",
      "Connecting…": "Connexion…",
      "Connection": "Connexion",
      "Control": "Commander",
      "Controlling": "Commandée",
      "Create": "Créer",
      "Crossfade": "Fondu enchaîné",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "Les fondus enchaînés exigent que les deux morceaux aient la même fréquence d'échantillonnage ; sinon, ce navigateur les enchaîne sans blanc.",
      "Dark": "Sombre",
      "Delete": "Supprimer",
      "Delete alarm": "Supprimer le réveil",
      "Delete playlist": "Supprimer la liste de lecture",
      "Delete this alarm?": "Supprimer ce réveil ?",
      "Delete “{name}”?": "Supprimer « {name} » ?",
      "Deleted": "Supprimé",
      "Disc {n}": "Disque {n}",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Activé",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Toutes les platines connues de LMS, y compris ce navigateur. Synchronisez des platines pour qu'elles jouent la même musique en même temps.",
      "Every time you do that, a call stack loses its wings.": "Chaque fois que vous faites ça, une pile d'appels meurt quelque part.",
      "Everything LMS can search: your library, radio and installed apps": "Tout ce que LMS peut rechercher : votre bibliothèque, la radio et les applications installées",
      "Fade in": "Fondu en entrée",
      "Fade in and out": "Fondu en entrée et en sortie",
      "Fade out": "Fondu en sortie",
      "Favourites": "Favoris",
      "Formats": "Formats",
      "From the cover art (as Material Skin)": "D'après la pochette (comme Material Skin)",
      "Genres": "Genres",
      "Give this player a name": "Donnez un nom à cette platine",
      "Go to album": "Aller à l'album",
      "Go to artist": "Aller à l'artiste",
      "Gold": "Or",
      "Green": "Vert",
      "Highest sample rate": "Fréquence d'échantillonnage maximale",
      "Highlight colour": "Couleur d'accentuation",
      "Home": "Accueil",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "Le nom de ce navigateur dans LMS et vos autres télécommandes. Modifiable à tout moment dans les paramètres.",
      "LMS answered {status}": "LMS a répondu {status}",
      "LMS did not answer in time": "LMS n'a pas répondu à temps",
      "LMS keeps the queue topped up with random picks from your library.": "LMS alimente la file d'attente avec des choix aléatoires dans votre bibliothèque.",
      "Language": "Langue",
      "Last scan": "Dernière analyse",
      "Leave the group": "Quitter le groupe",
      "Library": "Bibliothèque",
      "Library scan started": "Analyse de la bibliothèque lancée",
      "Light": "Clair",
      "Live": "En direct",
      "Lost contact with the server: {error} — retrying…": "Contact perdu avec le serveur : {error} — nouvel essai…",
      "Lyrion Music Server is not answering at {host}.": "Lyrion Music Server ne répond pas à l'adresse {host}.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "LyrionJS fonctionne mieux dans son propre onglet : dans cette fenêtre, la lecture s'arrête quand la fenêtre se ferme.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} sur {os}",
      "Main": "Navigation principale",
      "Match the system": "Comme le système",
      "Media element (plays with the screen locked)": "Élément média (lecture écran verrouillé)",
      "Menu": "Menu",
      "More": "Plus",
      "More about LyrionJS…": "En savoir plus sur LyrionJS…",
      "More…": "Plus…",
      "Move down": "Descendre",
      "Move playback to {name} from…": "Transférer la lecture vers {name} depuis…",
      "Move up": "Monter",
      "Moved": "Déplacé",
      "Moved playback to {name}": "Lecture transférée vers {name}",
      "Moving playback stopped part-way ({name} carries on): {error}": "Le transfert de la lecture s'est arrêté en cours de route ({name} continue) : {error}",
      "Moving {n} tracks (the first {max})…": {
        "many": "Transfert de {n} morceaux (les {max} premiers)…",
        "one": "Transfert de {n} morceau (les {max} premiers)…",
        "other": "Transfert de {n} morceaux (les {max} premiers)…"
      },
      "Moving {n} tracks…": {
        "many": "Transfert de {n} morceaux…",
        "one": "Transfert d'un morceau…",
        "other": "Transfert de {n} morceaux…"
      },
      "Music folder": "Dossier de musique",
      "Mute": "Sourdine",
      "Name": "Nom",
      "Name this player": "Nommer cette platine",
      "Never": "Jamais",
      "New alarm on {name}": "Nouveau réveil sur {name}",
      "New music": "Nouveautés",
      "New playlist": "Nouvelle liste de lecture",
      "New playlist…": "Nouvelle liste de lecture…",
      "Next": "Suivant",
      "Nice try.": "Bien essayé.",
      "No alarms on {name}.": "Aucun réveil sur {name}.",
      "No albums.": "Aucun album.",
      "No apps are installed on the server.": "Aucune application n'est installée sur le serveur.",
      "No player": "Aucune platine",
      "No player selected.": "Aucune platine sélectionnée.",
      "No players are connected to the server.": "Aucune platine n'est connectée au serveur.",
      "No radio services are installed on the server.": "Aucun service de radio n'est installé sur le serveur.",
      "No saved playlists.": "Aucune liste de lecture enregistrée.",
      "None (gapless)": "Aucune (sans blanc)",
      "Nothing here.": "Rien ici.",
      "Nothing in the library matches “{query}”.": "Rien dans la bibliothèque ne correspond à « {query} ».",
      "Nothing playing": "Aucune lecture",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "Aucune lecture. Choisissez quelque chose dans la bibliothèque, les favoris, la radio ou les applications.",
      "Nothing to add": "Rien à ajouter",
      "Nothing to move: {name}'s queue is empty": "Rien à transférer : la file d'attente de {name} est vide",
      "Now playing": "Lecture en cours",
      "OK": "OK",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "D'accord, vous avez gagné : vous écoutez maintenant LyrionJS dans LyrionJS dans LyrionJS. (Mais non.)",
      "Off": "Désactivé",
      "Open LyrionJS inside LyrionJS (please don’t)": "Ouvrir LyrionJS dans LyrionJS (s'il vous plaît, non)",
      "Open in a new tab": "Ouvrir dans un nouvel onglet",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "Ouvrir LyrionJS dans LyrionJS ouvrirait LyrionJS dans LyrionJS dans LyrionJS… et ainsi de suite, jusqu'à ce que votre navigateur soit à court de patience, de mémoire, ou des deux. Merci d'arrêter d'essayer de provoquer une récursion infinie.",
      "Opens when music starts": "S'ouvre quand la musique démarre",
      "Orange": "Orange",
      "Other random albums": "D’autres albums au hasard",
      "Output": "Sortie",
      "Output level": "Niveau de sortie",
      "Output level in this browser (on top of the LMS volume)": "Niveau de sortie dans ce navigateur (en plus du volume LMS)",
      "Pause": "Pause",
      "Pick a colour": "Choisir une couleur",
      "Pink": "Rose",
      "Play": "Lecture",
      "Play folder": "Lire le dossier",
      "Play music in this browser (a real Slimproto player in LMS)": "Écouter de la musique dans ce navigateur (une vraie platine Slimproto dans LMS)",
      "Play next": "Lire à la suite",
      "Play now": "Lire maintenant",
      "Play now, keep the queue": "Lire maintenant, garder la file d'attente",
      "Play/pause": "Lecture/pause",
      "Player ID": "ID de la platine",
      "Player controls": "Commandes de la platine",
      "Player: {name}": "Platine : {name}",
      "Players": "Platines",
      "Playing": "Lecture",
      "Playing next": "Sera lu ensuite",
      "Playing shuffled": "Lecture en mode aléatoire",
      "Playlist name": "Nom de la liste de lecture",
      "Playlists": "Listes de lecture",
      "Plays it now (keeps the queue)": "La lit tout de suite (garde la file d'attente)",
      "Plays it now (replaces the queue)": "La lit tout de suite (remplace la file d'attente)",
      "Position": "Position",
      "Previous": "Précédent",
      "Purple": "Violet",
      "Queue": "File d'attente",
      "Queue cleared": "File d'attente vidée",
      "Queue folder": "Ajouter le dossier à la file d'attente",
      "Radio": "Radio",
      "Random": "Aléatoire",
      "Random album mix started": "Albums aléatoires lancés",
      "Random albums": "Albums au hasard",
      "Random artist mix started": "Artistes aléatoires lancés",
      "Random mix": "Mix aléatoire",
      "Random mix stopped": "Mix aléatoire arrêté",
      "Random song mix started": "Morceaux aléatoires lancés",
      "Random year mix started": "Années aléatoires lancées",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. Content ?",
      "Recently added": "Ajoutés récemment",
      "Recursion depth": "Profondeur de récursion",
      "Refresh": "Actualiser",
      "Reloading to switch the output…": "Rechargement pour changer de sortie…",
      "Remove": "Retirer",
      "Remove from favourites": "Retirer des favoris",
      "Remove from playlist": "Retirer de la liste de lecture",
      "Remove from queue": "Retirer de la file d'attente",
      "Remove “{name}” from favourites?": "Retirer « {name} » des favoris ?",
      "Removed": "Retiré",
      "Rename": "Renommer",
      "Rename favourite": "Renommer le favori",
      "Rename playlist": "Renommer la liste de lecture",
      "Rename this browser…": "Renommer ce navigateur…",
      "Rename this player": "Renommer cette platine",
      "Renamed": "Renommé",
      "Rename…": "Renommer…",
      "Repeat": "Répéter",
      "Repeat off": "Répétition désactivée",
      "Repeat queue": "Répéter la file d'attente",
      "Repeat song": "Répéter le morceau",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Enregistrer",
      "Save as playlist": "Enregistrer comme liste de lecture",
      "Save queue as playlist": "Enregistrer la file d'attente comme liste de lecture",
      "Saved": "Enregistré",
      "Saved as {name}": "Enregistrée sous {name}",
      "Scan": "Analyse",
      "Scan for new music": "Rechercher de la nouvelle musique",
      "Scanning: {step} {done}/{total}": "Analyse : {step} {done}/{total}",
      "Search": "Recherche",
      "Search apps and services for “{query}”": "Rechercher « {query} » dans les applications et services",
      "Search: {query}": "Recherche : {query}",
      "Searching…": "Recherche…",
      "Seek": "Se déplacer",
      "Send diagnostics": "Envoyer les diagnostics",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Envoyer les diagnostics de lecture au journal du serveur LMS (aide à résoudre les problèmes sur téléphones et tablettes)",
      "Server": "Serveur",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Se règle avec les boutons de l'appareil (la page ne peut pas le régler ici) ; le volume LMS est maintenu à 100 %",
      "Settings": "Paramètres",
      "Show LyrionJS": "Afficher LyrionJS",
      "Show the queue": "Afficher la file d'attente",
      "Showing {skin}": "Affichage de {skin}",
      "Shows actions under it": "Affiche des actions en dessous",
      "Shuffle": "Mélanger",
      "Shuffle albums": "Mélanger par album",
      "Shuffle off": "Ne pas mélanger",
      "Shuffle songs": "Mélanger par morceau",
      "Skin": "Interface Web",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Interface Web : celle de LyrionJS, ou toute interface installée sur votre Lyrion Music Server, ce navigateur restant la platine",
      "Sleep timer": "Minuterie de veille",
      "Sleep timer off": "Minuterie de veille désactivée",
      "Sleeping after this track": "Mise en veille après ce morceau",
      "Sleeping in {n} minutes": {
        "many": "Mise en veille dans {n} minutes",
        "one": "Mise en veille dans {n} minute",
        "other": "Mise en veille dans {n} minutes"
      },
      "Smart gain": "Gain intelligent",
      "Something went wrong": "Un problème est survenu",
      "Songs": "Morceaux",
      "Sort albums": "Trier les albums",
      "State": "État",
      "Still no. One of us is enough.": "Toujours non. Un seul LyrionJS, ça suffit.",
      "Stop mix": "Arrêter le mix",
      "Switch off": "Éteindre",
      "Switch on": "Allumer",
      "Sync this player…": "Synchroniser cette platine…",
      "Sync {name} with…": "Synchroniser {name} avec…",
      "Synced {name}": "{name} synchronisée",
      "Sync…": "Synchroniser…",
      "Take me back to the music": "Ramenez-moi à la musique",
      "Tapping a track": "Toucher un morceau",
      "Tapping a track (search, albums, playlists, folders)": "Toucher un morceau (recherche, albums, listes de lecture, dossiers)",
      "Teal": "Bleu canard",
      "The alarm plays the current queue (or LMS's default alarm sound).": "Le réveil joue la file d'attente actuelle (ou le son de réveil par défaut de LMS).",
      "The browser has started muttering about “maximum call stack size”.": "Le navigateur commence à marmonner quelque chose à propos de « maximum call stack size ».",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "L'élément média ne peut pas lire ici : choisissez Web Audio dans Paramètres › Sortie audio.",
      "The queue is empty.": "La file d'attente est vide.",
      "The search failed: {error}": "La recherche a échoué : {error}",
      "Theme": "Thème",
      "This browser": "Ce navigateur",
      "This browser as a player": "Ce navigateur comme platine",
      "This browser can't play through the media element: switching to Web Audio…": "Ce navigateur ne peut pas lire via l'élément média : passage à Web Audio…",
      "This folder is empty.": "Ce dossier est vide.",
      "This page could not be shown: {error}": "Impossible d'afficher cette page : {error}",
      "This player is now “{name}”": "Cette platine s'appelle maintenant « {name} »",
      "This player was taken over by another session; this page is now a remote control.": "Cette platine a été reprise par une autre session ; cette page est maintenant une télécommande.",
      "This playlist is empty.": "Cette liste de lecture est vide.",
      "This tab is already playing with LyrionJS.": "Cet onglet joue déjà avec LyrionJS.",
      "Time": "Heure",
      "Track gain": "Gain morceau",
      "Track {n} of {total}": "Piste {n} sur {total}",
      "Tracks ({count})": "Morceaux ({count})",
      "Transfer playback here from…": "Transférer la lecture ici depuis…",
      "Transition between tracks": "Transition entre les morceaux",
      "Transition length": "Durée de la transition",
      "Try again": "Réessayer",
      "Trying again every few seconds…": "Nouvel essai toutes les quelques secondes…",
      "Type at least two letters.": "Saisissez au moins deux lettres.",
      "Unknown": "Inconnu",
      "Unmute": "Rétablir le son",
      "Unsynced": "Désynchronisée",
      "Unsynced {name}": "{name} désynchronisée",
      "Use it here": "L'utiliser ici",
      "Use this browser as a player": "Utiliser ce navigateur comme platine",
      "Version": "Version",
      "Volume": "Volume",
      "Volume levelling (ReplayGain)": "Ajustement du volume (ReplayGain)",
      "Volume of {name}": "Volume de {name}",
      "Web Audio (lowest latency)": "Web Audio (latence minimale)",
      "Web Audio (opens when music starts)": "Web Audio (s'ouvre quand la musique démarre)",
      "Web Audio, opens when music starts": "Web Audio, s'ouvre quand la musique démarre",
      "We’ve told LMS. It isn’t angry, just disappointed.": "Nous avons prévenu LMS. Il n'est pas fâché, juste déçu.",
      "What it is": "Ce que c'est",
      "When the queue ends (Don't Stop The Music)": "À la fin de la file d'attente (Don't Stop The Music)",
      "Which artists": "Quels artistes",
      "Whoa there. You’re already in LyrionJS.": "Holà, doucement. Vous êtes déjà dans LyrionJS.",
      "Why": "Pourquoi",
      "Years": "Années",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "Votre navigateur, en vraie platine Lyrion. Touchez le miroir si vous y tenez.",
      "Your own colour": "Votre propre couleur",
      "by": "par",
      "chosen in Settings": "choisi dans les paramètres",
      "closed": "fermé",
      "decoding {format}": "décodage {format}",
      "desktop browser": "navigateur de bureau",
      "disconnected": "déconnectée",
      "e.g. Kitchen tablet": "p. ex. Tablette cuisine",
      "from": "de",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad : la lecture continue écran verrouillé",
      "interrupted": "interrompu",
      "loaded": "chargée",
      "off": "éteinte",
      "once": "une fois",
      "paused": "en pause",
      "playing": "en lecture",
      "repeats": "chaque semaine",
      "running": "en marche",
      "stopped": "arrêtée",
      "suspended": "en pause",
      "synced with {names}": "synchronisée avec {names}",
      "the media element failed here before": "l'élément média a déjà échoué ici",
      "this browser cannot play FLAC through a media element": "ce navigateur ne peut pas lire le FLAC via un élément média",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "ce navigateur ne peut pas lire le FLAC via un élément média (iOS 17.1 ou ultérieur requis) ; gardez l'écran allumé",
      "volume {volume}": "volume {volume}",
      "waiting": "en attente",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (LMS convertit tout le reste en FLAC)",
      "{name} (this browser)": "{name} (ce navigateur)",
      "{n} albums": {
        "many": "{n} albums",
        "one": "{n} album",
        "other": "{n} albums"
      },
      "{n} artists": {
        "many": "{n} artistes",
        "one": "{n} artiste",
        "other": "{n} artistes"
      },
      "{n} minutes": {
        "many": "{n} minutes",
        "one": "{n} minute",
        "other": "{n} minutes"
      },
      "{n} of {total}": "{n} sur {total}",
      "{n} tracks": {
        "many": "{n} morceaux",
        "one": "{n} morceau",
        "other": "{n} morceaux"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, latence ~{latency} ms",
      "{seconds} s decoded ahead": "{seconds} s décodées d'avance",
      "{setting} saved": "{setting} enregistré",
      "{skin} (the server's)": "{skin} (celle du serveur)",
      "“{name}” already exists. Add to it?": "« {name} » existe déjà. Y ajouter ?"
    },
    "hu": {
      "(plain http page)": "(sima http-oldal)",
      "(the first {shown} shown)": "(az első {shown} látható)",
      "1, and we’d like to keep it that way": "1, és szeretnénk, ha így is maradna",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "Slimproto-lejátszó és távirányító a Lyrion Music Serverhez, amely teljes egészében ezen az oldalon fut.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "Slimproto-lejátszó és vezérlő a Lyrion Music Serverhez, egyetlen oldalon. Billentyűzet: szóköz lejátszás/szünet, ←/→ előző/következő, ↑/↓ hangerő, M némítás.",
      "A new version of LyrionJS is ready — reload": "Elkészült a LyrionJS új verziója — újratöltés",
      "A remote control (not a player)": "Távirányító (nem lejátszó)",
      "About": "Névjegy",
      "About LyrionJS": "A LyrionJS névjegye",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Teljesítmény feloldva: Uroborosz. Most pedig menj, és hallgass egy kis zenét.",
      "Actions to show": "Megjelenített műveletek",
      "Add alarm": "Ébresztő hozzáadása",
      "Add album to playlist…": "Album hozzáadása lejátszási listához…",
      "Add to favourites": "Hozzáadás a kedvencekhez",
      "Add to it": "Hozzáadás",
      "Add to playlist": "Hozzáadás lejátszási listához",
      "Add to playlist…": "Hozzáadás lejátszási listához…",
      "Add to queue": "Hozzáadás a lejátszási sorhoz",
      "Added to favourites": "Hozzáadva a kedvencekhez",
      "Added to the queue": "Hozzáadva a lejátszási sorhoz",
      "Added to {name}": "Hozzáadva a listához: {name}",
      "Alarm deleted": "Ébresztő törölve",
      "Alarm set": "Ébresztő beállítva",
      "Alarms": "Ébresztők",
      "Alarms enabled": "Ébresztők engedélyezve",
      "Alarms enabled on this player": "Ébresztők engedélyezve ezen a lejátszón",
      "Alarms off": "Ébresztők kikapcsolva",
      "Alarms on": "Ébresztők bekapcsolva",
      "Album": "Album",
      "Album artists": "Album előadói",
      "Album gain": "Album kiegyenlítés",
      "Albums": "Albumok",
      "Albums ({count})": "Albumok ({count})",
      "All artists": "Minden előadó",
      "All options…": "Minden lehetőség…",
      "All players": "Minden lejátszó",
      "Already moving playback…": "A lejátszás áthelyezése már folyamatban van…",
      "Android: keeps playing with the screen locked": "Android: lezárt képernyővel is szól",
      "Another tab is this browser's player; this one is a remote control.": "Ennek a böngészőnek egy másik lapja a lejátszó; ez a lap távirányító.",
      "Appearance": "Megjelenés",
      "Apps": "Alkalmazások",
      "Artist": "Előadó",
      "Artists": "Előadók",
      "Artists ({count})": "Előadók ({count})",
      "Artists, albums, tracks, playlists": "Előadók, albumok, zeneszámok, lejátszási listák",
      "As Lyrion Music Server ({language})": "A Lyrion Music Server szerint ({language})",
      "At the end of this track": "A zeneszám végén",
      "Audio": "Hang",
      "Audio engine": "Hangmotor",
      "Audio output": "Hangkimenet",
      "Automatic": "Automatikus",
      "Back": "Vissza",
      "Back to the skin": "Vissza a felülethez",
      "Back to {skin}": "Vissza: {skin}",
      "Blue": "Kék",
      "Browser player off": "Böngészős lejátszó kikapcsolva",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "A böngészős lejátszók ki vannak kapcsolva az LMS-ben (Beállítások › Bővítmények › LyrionJS). Ez az oldal a többi lejátszódat vezérli.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "A böngészős lejátszók ki vannak kapcsolva az LMS-ben (Beállítások › Bővítmények › LyrionJS); ez az oldal most távirányító.",
      "Buffered": "Pufferelve",
      "By artist": "Előadó szerint",
      "By title": "Cím szerint",
      "By year": "Év szerint",
      "Cancel": "Mégse",
      "Cancel ({time} left)": "Mégse (még {time})",
      "Choose a player": "Válassz lejátszót",
      "Clear": "Törlés",
      "Clear queue": "Lejátszási sor törlése",
      "Clear the queue?": "Törlöd a lejátszási sort?",
      "Click to enable sound in this browser": "Kattints ide a hang bekapcsolásához ebben a böngészőben",
      "Close": "Bezárás",
      "Close now playing": "A „Lejátszás alatt” bezárása",
      "Composers": "Zeneszerzők",
      "Connected (Slimproto over a WebSocket to LMS)": "Csatlakozva (Slimproto WebSocketen keresztül az LMS-hez)",
      "Connecting to LMS…": "Csatlakozás az LMS-hez…",
      "Connecting…": "Csatlakozás…",
      "Connection": "Kapcsolat",
      "Control": "Vezérlés",
      "Controlling": "Vezérelt",
      "Create": "Létrehozás",
      "Crossfade": "Áttűnés",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "Az áttűnéshez mindkét zeneszámnak azonos mintavételezési frekvenciájúnak kell lennie; különben ez a böngésző szünet nélkül játssza le őket.",
      "Dark": "Sötét",
      "Delete": "Törlés",
      "Delete alarm": "Ébresztő törlése",
      "Delete playlist": "Lejátszási lista törlése",
      "Delete this alarm?": "Törlöd ezt az ébresztőt?",
      "Delete “{name}”?": "Törlöd: „{name}”?",
      "Deleted": "Törölve",
      "Disc {n}": "{n}. lemez",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Engedélyezve",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Minden lejátszó, amelyet az LMS ismer, ezt a böngészőt is beleértve. Szinkronizáld a lejátszókat, hogy ugyanazt a zenét egyszerre játsszák.",
      "Every time you do that, a call stack loses its wings.": "Valahányszor ezt csinálod, valahol sírva fakad egy hívási verem.",
      "Everything LMS can search: your library, radio and installed apps": "Minden, amiben az LMS keresni tud: a könyvtárad, a rádió és a telepített alkalmazások",
      "Fade in": "Felúsztatás",
      "Fade in and out": "Fel- és leúsztatás",
      "Fade out": "Leúsztatás",
      "Favourites": "Kedvencek",
      "Formats": "Formátumok",
      "From the cover art (as Material Skin)": "A borítóból (mint a Material Skin)",
      "Genres": "Műfajok",
      "Give this player a name": "Adj nevet ennek a lejátszónak",
      "Go to album": "Ugrás az albumhoz",
      "Go to artist": "Ugrás az előadóhoz",
      "Gold": "Arany",
      "Green": "Zöld",
      "Highest sample rate": "Legmagasabb mintavételezési frekvencia",
      "Highlight colour": "Kiemelőszín",
      "Home": "Kezdőlap",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "Így jelenik meg ez a böngésző az LMS-ben és a többi vezérlődben. Bármikor módosíthatod a beállításokban.",
      "LMS answered {status}": "Az LMS válasza: {status}",
      "LMS did not answer in time": "Az LMS nem válaszolt időben",
      "LMS keeps the queue topped up with random picks from your library.": "Az LMS folyamatosan feltölti a lejátszási sort a könyvtáradból véletlenszerűen választott zeneszámokkal.",
      "Language": "Nyelv",
      "Last scan": "Utolsó átvizsgálás",
      "Leave the group": "Kilépés a csoportból",
      "Library": "Könyvtár",
      "Library scan started": "A könyvtár átvizsgálása elindult",
      "Light": "Világos",
      "Live": "Élő",
      "Lost contact with the server: {error} — retrying…": "Megszakadt a kapcsolat a szerverrel: {error} — újrapróbálás…",
      "Lyrion Music Server is not answering at {host}.": "A Lyrion Music Server nem válaszol ezen a címen: {host}.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "A LyrionJS saját lapon működik a legjobban: ebben az ablakban leáll, amikor az ablak bezárul.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} ({os})",
      "Main": "Fő",
      "Match the system": "A rendszer szerint",
      "Media element (plays with the screen locked)": "Médiaelem (lezárt képernyővel is szól)",
      "Menu": "Menü",
      "More": "Továbbiak",
      "More about LyrionJS…": "Bővebben a LyrionJS-ről…",
      "More…": "Továbbiak…",
      "Move down": "Mozgatás le",
      "Move playback to {name} from…": "{name}: lejátszás áthelyezése innen…",
      "Move up": "Mozgatás fel",
      "Moved": "Áthelyezve",
      "Moved playback to {name}": "Lejátszás áthelyezve ide: {name}",
      "Moving playback stopped part-way ({name} carries on): {error}": "A lejátszás áthelyezése félúton megszakadt ({name} tovább szól): {error}",
      "Moving {n} tracks (the first {max})…": {
        "one": "Egy zeneszám áthelyezése (az első {max})…",
        "other": "{n} zeneszám áthelyezése (az első {max})…"
      },
      "Moving {n} tracks…": {
        "one": "Egy zeneszám áthelyezése…",
        "other": "{n} zeneszám áthelyezése…"
      },
      "Music folder": "Zenék mappája",
      "Mute": "Némítás",
      "Name": "Név",
      "Name this player": "Lejátszó elnevezése",
      "Never": "Soha",
      "New alarm on {name}": "Új ébresztő: {name}",
      "New music": "Új zenék",
      "New playlist": "Új lejátszási lista",
      "New playlist…": "Új lejátszási lista…",
      "Next": "Következő",
      "Nice try.": "Szép próbálkozás.",
      "No alarms on {name}.": "Nincs ébresztő ezen a lejátszón: {name}.",
      "No albums.": "Nincsenek albumok.",
      "No apps are installed on the server.": "Nincs alkalmazás telepítve a szerveren.",
      "No player": "Nincs lejátszó",
      "No player selected.": "Nincs kiválasztott lejátszó.",
      "No players are connected to the server.": "Egy lejátszó sem csatlakozik a szerverhez.",
      "No radio services are installed on the server.": "Nincs rádiószolgáltatás telepítve a szerveren.",
      "No saved playlists.": "Nincsenek mentett lejátszási listák.",
      "None (gapless)": "Nincs (szünet nélkül)",
      "Nothing here.": "Itt nincs semmi.",
      "Nothing in the library matches “{query}”.": "A könyvtárban semmi sem felel meg ennek: „{query}”.",
      "Nothing playing": "Nem szól semmi",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "Nem szól semmi. Válassz valamit a könyvtárból, a kedvencekből, a rádióból vagy az alkalmazásokból.",
      "Nothing to add": "Nincs mit hozzáadni",
      "Nothing to move: {name}'s queue is empty": "Nincs mit áthelyezni: {name} lejátszási sora üres",
      "Now playing": "Lejátszás alatt",
      "OK": "OK",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "Jó, nyertél: most a LyrionJS-ben futó LyrionJS-ben futó LyrionJS-t hallgatod. (Dehogy.)",
      "Off": "Ki",
      "Open LyrionJS inside LyrionJS (please don’t)": "LyrionJS megnyitása a LyrionJS-ben (inkább ne)",
      "Open in a new tab": "Megnyitás új lapon",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "Ha megnyitnád a LyrionJS-t a LyrionJS-ben, az megnyitná a LyrionJS-t a LyrionJS-ben a LyrionJS-ben… és így tovább, amíg a böngésződ ki nem fogy a türelemből, a memóriából vagy mindkettőből. Kérlek, ne próbálj végtelen rekurziót előidézni.",
      "Opens when music starts": "A zene indulásakor nyílik meg",
      "Orange": "Narancs",
      "Other random albums": "Más véletlen albumok",
      "Output": "Kimenet",
      "Output level": "Kimeneti szint",
      "Output level in this browser (on top of the LMS volume)": "Kimeneti szint ebben a böngészőben (az LMS hangerején felül)",
      "Pause": "Szünet",
      "Pick a colour": "Válassz színt",
      "Pink": "Rózsaszín",
      "Play": "Lejátszás",
      "Play folder": "Mappa lejátszása",
      "Play music in this browser (a real Slimproto player in LMS)": "Zene lejátszása ebben a böngészőben (valódi Slimproto-lejátszó az LMS-ben)",
      "Play next": "Lejátszás következőként",
      "Play now": "Lejátszás most",
      "Play now, keep the queue": "Lejátszás most, a lejátszási sor marad",
      "Play/pause": "Lejátszás/szünet",
      "Player ID": "Lejátszóazonosító",
      "Player controls": "Lejátszóvezérlők",
      "Player: {name}": "Lejátszó: {name}",
      "Players": "Lejátszók",
      "Playing": "Lejátszás",
      "Playing next": "Következőként szól",
      "Playing shuffled": "Keverve szól",
      "Playlist name": "Lejátszási lista neve",
      "Playlists": "Lejátszási listák",
      "Plays it now (keeps the queue)": "Azonnal lejátssza (a lejátszási sor marad)",
      "Plays it now (replaces the queue)": "Azonnal lejátssza (lecseréli a lejátszási sort)",
      "Position": "Pozíció",
      "Previous": "Előző",
      "Purple": "Lila",
      "Queue": "Lejátszási sor",
      "Queue cleared": "Lejátszási sor törölve",
      "Queue folder": "Mappa a lejátszási sorba",
      "Radio": "Rádió",
      "Random": "Véletlenszerű",
      "Random album mix started": "Albumok keverése elindult",
      "Random albums": "Véletlen albumok",
      "Random artist mix started": "Előadók keverése elindult",
      "Random mix": "Véletlenszerű keverés",
      "Random mix stopped": "Véletlenszerű keverés leállítva",
      "Random song mix started": "Zeneszámok keverése elindult",
      "Random year mix started": "Évek keverése elindult",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. Most boldog vagy?",
      "Recently added": "Nemrég hozzáadott",
      "Recursion depth": "Rekurziós mélység",
      "Refresh": "Frissítés",
      "Reloading to switch the output…": "Újratöltés a kimenet váltásához…",
      "Remove": "Eltávolítás",
      "Remove from favourites": "Eltávolítás a kedvencek közül",
      "Remove from playlist": "Eltávolítás a lejátszási listáról",
      "Remove from queue": "Eltávolítás a lejátszási sorból",
      "Remove “{name}” from favourites?": "Eltávolítod a kedvencek közül: „{name}”?",
      "Removed": "Eltávolítva",
      "Rename": "Átnevezés",
      "Rename favourite": "Kedvenc átnevezése",
      "Rename playlist": "Lejátszási lista átnevezése",
      "Rename this browser…": "A böngésző átnevezése…",
      "Rename this player": "A lejátszó átnevezése",
      "Renamed": "Átnevezve",
      "Rename…": "Átnevezés…",
      "Repeat": "Ismétlés",
      "Repeat off": "Nincs ismétlés",
      "Repeat queue": "Lejátszási sor ismétlése",
      "Repeat song": "Zeneszám ismétlése",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Mentés",
      "Save as playlist": "Mentés lejátszási listaként",
      "Save queue as playlist": "Lejátszási sor mentése lejátszási listaként",
      "Saved": "Mentve",
      "Saved as {name}": "Mentve ezen a néven: {name}",
      "Scan": "Átvizsgálás",
      "Scan for new music": "Új zenék keresése",
      "Scanning: {step} {done}/{total}": "Átvizsgálás: {step} {done}/{total}",
      "Search": "Keresés",
      "Search apps and services for “{query}”": "„{query}” keresése az alkalmazásokban és szolgáltatásokban",
      "Search: {query}": "Keresés: {query}",
      "Searching…": "Keresés…",
      "Seek": "Tekerés",
      "Send diagnostics": "Diagnosztika küldése",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Lejátszási diagnosztika küldése az LMS szervernaplójába (segít a telefonos és tabletes hibák javításában)",
      "Server": "Szerver",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Az eszköz saját gombjaival állítható (az oldal itt nem tudja beállítani); az LMS hangereje 100 %-on marad",
      "Settings": "Beállítások",
      "Show LyrionJS": "LyrionJS megjelenítése",
      "Show the queue": "Lejátszási sor megjelenítése",
      "Showing {skin}": "Megjelenítve: {skin}",
      "Shows actions under it": "Műveleteket mutat alatta",
      "Shuffle": "Keverés",
      "Shuffle albums": "Keverés album szerint",
      "Shuffle off": "Nincs keverés",
      "Shuffle songs": "Keverés zeneszám szerint",
      "Skin": "Felület",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Felület: a LyrionJS saját felülete vagy bármelyik, a Lyrion Music Serveredre telepített felület, miközben továbbra is ez a böngésző a lejátszó",
      "Sleep timer": "Alvásidőzítő",
      "Sleep timer off": "Alvásidőzítő kikapcsolva",
      "Sleeping after this track": "Elalvás a zeneszám végén",
      "Sleeping in {n} minutes": {
        "one": "Elalvás egy perc múlva",
        "other": "Elalvás {n} perc múlva"
      },
      "Smart gain": "Okos kiegyenlítés",
      "Something went wrong": "Hiba történt",
      "Songs": "Zeneszámok",
      "Sort albums": "Albumok rendezése",
      "State": "Állapot",
      "Still no. One of us is enough.": "Még mindig nem. Egy is elég belőlünk.",
      "Stop mix": "Keverés leállítása",
      "Switch off": "Kikapcsolás",
      "Switch on": "Bekapcsolás",
      "Sync this player…": "A lejátszó szinkronizálása…",
      "Sync {name} with…": "{name} szinkronizálása a következővel…",
      "Synced {name}": "Szinkronizálva: {name}",
      "Sync…": "Szinkronizálás…",
      "Take me back to the music": "Vissza a zenéhez",
      "Tapping a track": "Koppintás egy számra",
      "Tapping a track (search, albums, playlists, folders)": "Koppintás egy számra (keresés, albumok, lejátszási listák, mappák)",
      "Teal": "Pávakék",
      "The alarm plays the current queue (or LMS's default alarm sound).": "Az ébresztő az aktuális lejátszási sort játssza le (vagy az LMS alapértelmezett ébresztőhangját).",
      "The browser has started muttering about “maximum call stack size”.": "A böngésző motyogni kezdett valamit: „maximum call stack size”…",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "A médiaelem itt nem tud lejátszani: válaszd a Web Audio lehetőséget itt: Beállítások › Hangkimenet.",
      "The queue is empty.": "A lejátszási sor üres.",
      "The search failed: {error}": "A keresés nem sikerült: {error}",
      "Theme": "Téma",
      "This browser": "Ez a böngésző",
      "This browser as a player": "Ez a böngésző mint lejátszó",
      "This browser can't play through the media element: switching to Web Audio…": "Ez a böngésző nem tud a médiaelemen keresztül lejátszani: váltás Web Audio módra…",
      "This folder is empty.": "Ez a mappa üres.",
      "This page could not be shown: {error}": "Az oldal nem jeleníthető meg: {error}",
      "This player is now “{name}”": "A lejátszó új neve: „{name}”",
      "This player was taken over by another session; this page is now a remote control.": "A lejátszót átvette egy másik munkamenet; ez az oldal most távirányító.",
      "This playlist is empty.": "Ez a lejátszási lista üres.",
      "This tab is already playing with LyrionJS.": "Ezen a lapon már szól a LyrionJS.",
      "Time": "Időpont",
      "Track gain": "Zeneszám kiegyenlítés",
      "Track {n} of {total}": "Zeneszám: {n}/{total}",
      "Tracks ({count})": "Zeneszámok ({count})",
      "Transfer playback here from…": "Lejátszás áthozása ide innen…",
      "Transition between tracks": "Átmenet a zeneszámok között",
      "Transition length": "Átmenet hossza",
      "Try again": "Próbáld újra",
      "Trying again every few seconds…": "Újrapróbálás néhány másodpercenként…",
      "Type at least two letters.": "Írj be legalább két betűt.",
      "Unknown": "Ismeretlen",
      "Unmute": "Némítás feloldása",
      "Unsynced": "Szinkronizálás megszüntetve",
      "Unsynced {name}": "Szinkronizálás megszüntetve: {name}",
      "Use it here": "Használat itt",
      "Use this browser as a player": "A böngésző használata lejátszóként",
      "Version": "Verzió",
      "Volume": "Hangerő",
      "Volume levelling (ReplayGain)": "Hangerő-kiegyenlítés (ReplayGain)",
      "Volume of {name}": "Hangerő: {name}",
      "Web Audio (lowest latency)": "Web Audio (legkisebb késleltetés)",
      "Web Audio (opens when music starts)": "Web Audio (a zene indulásakor nyílik meg)",
      "Web Audio, opens when music starts": "Web Audio, a zene indulásakor nyílik meg",
      "We’ve told LMS. It isn’t angry, just disappointed.": "Szóltunk az LMS-nek. Nem haragszik, csak csalódott.",
      "What it is": "Mi ez",
      "When the queue ends (Don't Stop The Music)": "Ha véget ér a lejátszási sor (Don't Stop The Music)",
      "Which artists": "Mely előadók",
      "Whoa there. You’re already in LyrionJS.": "Hohó. Már a LyrionJS-ben vagy.",
      "Why": "Miért",
      "Years": "Évek",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "A böngésződ, mint igazi Lyrion-lejátszó. Koppints a tükörre, ha muszáj.",
      "Your own colour": "Saját szín",
      "by": "előadó:",
      "chosen in Settings": "a beállításokban kiválasztva",
      "closed": "lezárva",
      "decoding {format}": "dekódolás: {format}",
      "desktop browser": "asztali böngésző",
      "disconnected": "nincs csatlakozva",
      "e.g. Kitchen tablet": "pl. Konyhai tablet",
      "from": "album:",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad: lezárt képernyővel is szól",
      "interrupted": "megszakítva",
      "loaded": "betöltve",
      "off": "kikapcsolva",
      "once": "egyszer",
      "paused": "szünetel",
      "playing": "szól",
      "repeats": "ismétlődik",
      "running": "fut",
      "stopped": "leállítva",
      "suspended": "felfüggesztve",
      "synced with {names}": "szinkronban: {names}",
      "the media element failed here before": "a médiaelem itt korábban már hibázott",
      "this browser cannot play FLAC through a media element": "ez a böngésző nem tud FLAC-ot lejátszani médiaelemen keresztül",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "ez a böngésző nem tud FLAC-ot lejátszani médiaelemen keresztül (iOS 17.1 vagy újabb kell); hagyd bekapcsolva a képernyőt",
      "volume {volume}": "hangerő: {volume}",
      "waiting": "várakozik",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (minden mást FLAC-ra alakít az LMS)",
      "{name} (this browser)": "{name} (ez a böngésző)",
      "{n} albums": {
        "one": "{n} album",
        "other": "{n} album"
      },
      "{n} artists": {
        "one": "{n} előadó",
        "other": "{n} előadó"
      },
      "{n} minutes": {
        "one": "{n} perc",
        "other": "{n} perc"
      },
      "{n} of {total}": "{n}/{total}",
      "{n} tracks": {
        "one": "{n} zeneszám",
        "other": "{n} zeneszám"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, ~{latency} ms késleltetés",
      "{seconds} s decoded ahead": "{seconds} s előre dekódolva",
      "{setting} saved": "Mentve: {setting}",
      "{skin} (the server's)": "{skin} (a szerveré)",
      "“{name}” already exists. Add to it?": "„{name}” már létezik. Hozzáadod?"
    },
    "it": {
      "(plain http page)": "(pagina http semplice)",
      "(the first {shown} shown)": "(mostrati i primi {shown})",
      "1, and we’d like to keep it that way": "1, e vorremmo che restasse così",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "Un lettore Slimproto e un telecomando per Lyrion Music Server, che funzionano interamente in questa pagina.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "Un lettore Slimproto e un controller per Lyrion Music Server in una sola pagina. Tastiera: Spazio riproduci/pausa, ←/→ precedente/successivo, ↑/↓ volume, M disattiva audio.",
      "A new version of LyrionJS is ready — reload": "Una nuova versione di LyrionJS è pronta — ricarica",
      "A remote control (not a player)": "Un telecomando (non un lettore)",
      "About": "Informazioni",
      "About LyrionJS": "Informazioni su LyrionJS",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Obiettivo sbloccato: Uroboro. Ora vai ad ascoltare un po' di musica.",
      "Actions to show": "Azioni da mostrare",
      "Add alarm": "Aggiungi sveglia",
      "Add album to playlist…": "Aggiungi l'album a una playlist…",
      "Add to favourites": "Aggiungi ai preferiti",
      "Add to it": "Aggiungi",
      "Add to playlist": "Aggiungi a una playlist",
      "Add to playlist…": "Aggiungi a una playlist…",
      "Add to queue": "Aggiungi alla coda",
      "Added to favourites": "Aggiunto ai preferiti",
      "Added to the queue": "Aggiunto alla coda",
      "Added to {name}": "Aggiunto a {name}",
      "Alarm deleted": "Sveglia eliminata",
      "Alarm set": "Sveglia impostata",
      "Alarms": "Sveglie",
      "Alarms enabled": "Sveglie attive",
      "Alarms enabled on this player": "Sveglie attive su questo lettore",
      "Alarms off": "Sveglie disattivate",
      "Alarms on": "Sveglie attivate",
      "Album": "Album",
      "Album artists": "Artisti dell'album",
      "Album gain": "Guadagno album",
      "Albums": "Album",
      "Albums ({count})": "Album ({count})",
      "All artists": "Tutti gli artisti",
      "All options…": "Tutte le opzioni…",
      "All players": "Tutti i lettori",
      "Already moving playback…": "Spostamento della riproduzione già in corso…",
      "Android: keeps playing with the screen locked": "Android: continua a suonare a schermo bloccato",
      "Another tab is this browser's player; this one is a remote control.": "Un'altra scheda è il lettore di questo browser; questa è un telecomando.",
      "Appearance": "Aspetto",
      "Apps": "Applicazioni",
      "Artist": "Artista",
      "Artists": "Artisti",
      "Artists ({count})": "Artisti ({count})",
      "Artists, albums, tracks, playlists": "Artisti, album, brani, playlist",
      "As Lyrion Music Server ({language})": "Come Lyrion Music Server ({language})",
      "At the end of this track": "Al termine di questo brano",
      "Audio": "Audio",
      "Audio engine": "Motore audio",
      "Audio output": "Uscita audio",
      "Automatic": "Automatica",
      "Back": "Indietro",
      "Back to the skin": "Torna all'interfaccia Web",
      "Back to {skin}": "Torna a {skin}",
      "Blue": "Blu",
      "Browser player off": "Lettore del browser disattivato",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "I lettori del browser sono disattivati in LMS (Impostazioni › Plugin › LyrionJS). Questa pagina controlla gli altri lettori.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "I lettori del browser sono disattivati in LMS (Impostazioni › Plugin › LyrionJS); questa pagina ora è un telecomando.",
      "Buffered": "Nel buffer",
      "By artist": "Per artista",
      "By title": "Per titolo",
      "By year": "Per anno",
      "Cancel": "Annulla",
      "Cancel ({time} left)": "Annulla (mancano {time})",
      "Choose a player": "Scegli un lettore",
      "Clear": "Svuota",
      "Clear queue": "Svuota la coda",
      "Clear the queue?": "Svuotare la coda?",
      "Click to enable sound in this browser": "Fai clic per attivare l'audio in questo browser",
      "Close": "Chiudi",
      "Close now playing": "Chiudi Riproduzione in corso",
      "Composers": "Compositori",
      "Connected (Slimproto over a WebSocket to LMS)": "Connesso (Slimproto su WebSocket verso LMS)",
      "Connecting to LMS…": "Connessione a LMS…",
      "Connecting…": "Connessione…",
      "Connection": "Connessione",
      "Control": "Controlla",
      "Controlling": "In controllo",
      "Create": "Crea",
      "Crossfade": "Dissolvenza incrociata",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "La dissolvenza incrociata richiede che i due brani abbiano la stessa frequenza di campionamento; altrimenti questo browser li riproduce senza pause.",
      "Dark": "Scuro",
      "Delete": "Elimina",
      "Delete alarm": "Elimina sveglia",
      "Delete playlist": "Elimina playlist",
      "Delete this alarm?": "Eliminare questa sveglia?",
      "Delete “{name}”?": "Eliminare “{name}”?",
      "Deleted": "Eliminato",
      "Disc {n}": "Disco {n}",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Attiva",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Tutti i lettori che LMS conosce, compreso questo browser. Sincronizza i lettori per riprodurre la stessa musica all'unisono.",
      "Every time you do that, a call stack loses its wings.": "Ogni volta che lo fai, uno stack di chiamate perde le ali.",
      "Everything LMS can search: your library, radio and installed apps": "Tutto ciò in cui LMS può cercare: la tua libreria, la radio e le applicazioni installate",
      "Fade in": "Dissolvenza in entrata",
      "Fade in and out": "Dissolvenza in entrata e in uscita",
      "Fade out": "Dissolvenza in uscita",
      "Favourites": "Preferiti",
      "Formats": "Formati",
      "From the cover art (as Material Skin)": "Dalla copertina (come Material Skin)",
      "Genres": "Generi musicali",
      "Give this player a name": "Dai un nome a questo lettore",
      "Go to album": "Vai all'album",
      "Go to artist": "Vai all'artista",
      "Gold": "Oro",
      "Green": "Verde",
      "Highest sample rate": "Frequenza di campionamento massima",
      "Highlight colour": "Colore di evidenziazione",
      "Home": "Home",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "Come appare questo browser in LMS e negli altri controller. Puoi cambiarlo quando vuoi nelle impostazioni.",
      "LMS answered {status}": "LMS ha risposto {status}",
      "LMS did not answer in time": "LMS non ha risposto in tempo",
      "LMS keeps the queue topped up with random picks from your library.": "LMS mantiene piena la coda con scelte casuali dalla tua libreria.",
      "Language": "Lingua",
      "Last scan": "Ultima analisi",
      "Leave the group": "Esci dal gruppo",
      "Library": "Libreria",
      "Library scan started": "Analisi della libreria avviata",
      "Light": "Chiaro",
      "Live": "In diretta",
      "Lost contact with the server: {error} — retrying…": "Contatto con il server perso: {error} — nuovo tentativo…",
      "Lyrion Music Server is not answering at {host}.": "Lyrion Music Server non risponde a {host}.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "LyrionJS funziona meglio in una scheda tutta sua: in questa finestra si ferma quando la finestra viene chiusa.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} su {os}",
      "Main": "Navigazione principale",
      "Match the system": "Come il sistema",
      "Media element (plays with the screen locked)": "Elemento multimediale (suona a schermo bloccato)",
      "Menu": "Menu",
      "More": "Altro",
      "More about LyrionJS…": "Altro su LyrionJS…",
      "More…": "Altro…",
      "Move down": "Sposta giù",
      "Move playback to {name} from…": "Sposta la riproduzione su {name} da…",
      "Move up": "Sposta su",
      "Moved": "Spostato",
      "Moved playback to {name}": "Riproduzione spostata su {name}",
      "Moving playback stopped part-way ({name} carries on): {error}": "Lo spostamento della riproduzione si è fermato a metà ({name} continua): {error}",
      "Moving {n} tracks (the first {max})…": {
        "many": "Spostamento di {n} brani (i primi {max})…",
        "one": "Spostamento di {n} brano (i primi {max})…",
        "other": "Spostamento di {n} brani (i primi {max})…"
      },
      "Moving {n} tracks…": {
        "many": "Spostamento di {n} brani…",
        "one": "Spostamento di {n} brano…",
        "other": "Spostamento di {n} brani…"
      },
      "Music folder": "Cartella Musica",
      "Mute": "Disattiva audio",
      "Name": "Nome",
      "Name this player": "Dai un nome a questo lettore",
      "Never": "Mai",
      "New alarm on {name}": "Nuova sveglia su {name}",
      "New music": "Musica recente",
      "New playlist": "Nuova playlist",
      "New playlist…": "Nuova playlist…",
      "Next": "Successivo",
      "Nice try.": "Bel tentativo.",
      "No alarms on {name}.": "Nessuna sveglia su {name}.",
      "No albums.": "Nessun album.",
      "No apps are installed on the server.": "Nessuna applicazione installata sul server.",
      "No player": "Nessun lettore",
      "No player selected.": "Nessun lettore selezionato.",
      "No players are connected to the server.": "Nessun lettore è connesso al server.",
      "No radio services are installed on the server.": "Nessun servizio radio installato sul server.",
      "No saved playlists.": "Nessuna playlist salvata.",
      "None (gapless)": "Nessuna (senza pause)",
      "Nothing here.": "Qui non c'è niente.",
      "Nothing in the library matches “{query}”.": "Niente nella libreria corrisponde a “{query}”.",
      "Nothing playing": "Nessuna riproduzione",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "Nessuna riproduzione. Scegli qualcosa dalla libreria, dai preferiti, dalla radio o dalle applicazioni.",
      "Nothing to add": "Niente da aggiungere",
      "Nothing to move: {name}'s queue is empty": "Niente da spostare: la coda di {name} è vuota",
      "Now playing": "Riproduzione in corso",
      "OK": "OK",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "Va bene, hai vinto: ora stai ascoltando LyrionJS dentro LyrionJS dentro LyrionJS. (Non è vero.)",
      "Off": "Disattivato",
      "Open LyrionJS inside LyrionJS (please don’t)": "Apri LyrionJS dentro LyrionJS (per favore, no)",
      "Open in a new tab": "Apri in una nuova scheda",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "Aprire LyrionJS dentro LyrionJS aprirebbe LyrionJS dentro LyrionJS dentro LyrionJS… e così via, finché il tuo browser non esaurisce la pazienza, la memoria o entrambe. Smettila di provare a causare un ciclo ricorsivo, per favore.",
      "Opens when music starts": "Si apre quando parte la musica",
      "Orange": "Arancione",
      "Other random albums": "Altri album casuali",
      "Output": "Uscita",
      "Output level": "Livello di uscita",
      "Output level in this browser (on top of the LMS volume)": "Livello di uscita in questo browser (in aggiunta al volume di LMS)",
      "Pause": "Pausa",
      "Pick a colour": "Scegli un colore",
      "Pink": "Rosa",
      "Play": "Riproduci",
      "Play folder": "Riproduci cartella",
      "Play music in this browser (a real Slimproto player in LMS)": "Riproduci musica in questo browser (un vero lettore Slimproto in LMS)",
      "Play next": "Riproduci come successivo",
      "Play now": "Riproduci ora",
      "Play now, keep the queue": "Riproduci ora, mantieni la coda",
      "Play/pause": "Riproduci/pausa",
      "Player ID": "ID del lettore",
      "Player controls": "Comandi del lettore",
      "Player: {name}": "Lettore: {name}",
      "Players": "Lettori",
      "Playing": "In riproduzione",
      "Playing next": "Sarà riprodotto dopo",
      "Playing shuffled": "Riproduzione casuale",
      "Playlist name": "Nome della playlist",
      "Playlists": "Playlist",
      "Plays it now (keeps the queue)": "Lo riproduce subito (mantiene la coda)",
      "Plays it now (replaces the queue)": "Lo riproduce subito (sostituisce la coda)",
      "Position": "Posizione",
      "Previous": "Precedente",
      "Purple": "Viola",
      "Queue": "Coda",
      "Queue cleared": "Coda svuotata",
      "Queue folder": "Aggiungi la cartella alla coda",
      "Radio": "Radio",
      "Random": "Casuale",
      "Random album mix started": "Raccolta di album avviata",
      "Random albums": "Album casuali",
      "Random artist mix started": "Raccolta di artisti avviata",
      "Random mix": "Raccolta casuale",
      "Random mix stopped": "Raccolta casuale interrotta",
      "Random song mix started": "Raccolta di brani avviata",
      "Random year mix started": "Raccolta di anni avviata",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. Contento adesso?",
      "Recently added": "Aggiunti di recente",
      "Recursion depth": "Profondità di ricorsione",
      "Refresh": "Aggiorna",
      "Reloading to switch the output…": "Ricaricamento per cambiare uscita…",
      "Remove": "Rimuovi",
      "Remove from favourites": "Rimuovi dai preferiti",
      "Remove from playlist": "Rimuovi dalla playlist",
      "Remove from queue": "Rimuovi dalla coda",
      "Remove “{name}” from favourites?": "Rimuovere “{name}” dai preferiti?",
      "Removed": "Rimosso",
      "Rename": "Rinomina",
      "Rename favourite": "Rinomina preferito",
      "Rename playlist": "Rinomina playlist",
      "Rename this browser…": "Rinomina questo browser…",
      "Rename this player": "Rinomina questo lettore",
      "Renamed": "Rinominato",
      "Rename…": "Rinomina…",
      "Repeat": "Ripetizione",
      "Repeat off": "Ripetizione disattiva",
      "Repeat queue": "Ripeti la coda",
      "Repeat song": "Ripeti il brano",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Salva",
      "Save as playlist": "Salva come playlist",
      "Save queue as playlist": "Salva la coda come playlist",
      "Saved": "Salvato",
      "Saved as {name}": "Salvata come {name}",
      "Scan": "Analisi",
      "Scan for new music": "Cerca nuova musica",
      "Scanning: {step} {done}/{total}": "Analisi: {step} {done}/{total}",
      "Search": "Cerca",
      "Search apps and services for “{query}”": "Cerca “{query}” in applicazioni e servizi",
      "Search: {query}": "Ricerca: {query}",
      "Searching…": "Ricerca in corso…",
      "Seek": "Vai alla posizione",
      "Send diagnostics": "Invia diagnostica",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Invia la diagnostica di riproduzione al log del server LMS (aiuta a risolvere i problemi su telefoni e tablet)",
      "Server": "Server",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Si regola con i tasti del dispositivo (la pagina non può regolarlo qui); il volume di LMS resta al 100 %",
      "Settings": "Impostazioni",
      "Show LyrionJS": "Mostra LyrionJS",
      "Show the queue": "Mostra la coda",
      "Showing {skin}": "Visualizzazione di {skin}",
      "Shows actions under it": "Mostra le azioni sotto",
      "Shuffle": "Riproduzione casuale",
      "Shuffle albums": "Riproduzione casuale per album",
      "Shuffle off": "Riproduzione casuale disattiva",
      "Shuffle songs": "Riproduzione casuale per brano",
      "Skin": "Interfaccia Web",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Interfaccia Web: quella di LyrionJS o una qualsiasi installata sul tuo Lyrion Music Server, con questo browser che resta il lettore",
      "Sleep timer": "Timer di sospensione",
      "Sleep timer off": "Timer di sospensione disattivato",
      "Sleeping after this track": "Sospensione al termine di questo brano",
      "Sleeping in {n} minutes": {
        "many": "Sospensione tra {n} minuti",
        "one": "Sospensione tra {n} minuto",
        "other": "Sospensione tra {n} minuti"
      },
      "Smart gain": "Guadagno intelligente",
      "Something went wrong": "Qualcosa è andato storto",
      "Songs": "Brani",
      "Sort albums": "Ordina gli album",
      "State": "Stato",
      "Still no. One of us is enough.": "Ancora no. Uno di noi basta e avanza.",
      "Stop mix": "Interrompi la raccolta",
      "Switch off": "Spegni",
      "Switch on": "Accendi",
      "Sync this player…": "Sincronizza questo lettore…",
      "Sync {name} with…": "Sincronizza {name} con…",
      "Synced {name}": "{name} sincronizzato",
      "Sync…": "Sincronizza…",
      "Take me back to the music": "Riportami alla musica",
      "Tapping a track": "Toccare un brano",
      "Tapping a track (search, albums, playlists, folders)": "Toccare un brano (ricerca, album, playlist, cartelle)",
      "Teal": "Verde acqua",
      "The alarm plays the current queue (or LMS's default alarm sound).": "La sveglia riproduce la coda attuale (o il suono di sveglia predefinito di LMS).",
      "The browser has started muttering about “maximum call stack size”.": "Il browser ha cominciato a borbottare qualcosa su “maximum call stack size”.",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "L'elemento multimediale non può riprodurre qui: scegli Web Audio in Impostazioni › Uscita audio.",
      "The queue is empty.": "La coda è vuota.",
      "The search failed: {error}": "La ricerca non è riuscita: {error}",
      "Theme": "Tema",
      "This browser": "Questo browser",
      "This browser as a player": "Questo browser come lettore",
      "This browser can't play through the media element: switching to Web Audio…": "Questo browser non può riprodurre tramite l'elemento multimediale: passaggio a Web Audio…",
      "This folder is empty.": "Questa cartella è vuota.",
      "This page could not be shown: {error}": "Impossibile mostrare questa pagina: {error}",
      "This player is now “{name}”": "Questo lettore ora si chiama “{name}”",
      "This player was taken over by another session; this page is now a remote control.": "Questo lettore è stato preso da un'altra sessione; questa pagina ora è un telecomando.",
      "This playlist is empty.": "Questa playlist è vuota.",
      "This tab is already playing with LyrionJS.": "Questa scheda sta già riproducendo con LyrionJS.",
      "Time": "Ora",
      "Track gain": "Guadagno brano",
      "Track {n} of {total}": "Brano {n} di {total}",
      "Tracks ({count})": "Brani ({count})",
      "Transfer playback here from…": "Trasferisci qui la riproduzione da…",
      "Transition between tracks": "Transizione tra i brani",
      "Transition length": "Durata della transizione",
      "Try again": "Riprova",
      "Trying again every few seconds…": "Nuovo tentativo ogni pochi secondi…",
      "Type at least two letters.": "Digita almeno due lettere.",
      "Unknown": "Sconosciuto",
      "Unmute": "Riattiva audio",
      "Unsynced": "Desincronizzato",
      "Unsynced {name}": "{name} desincronizzato",
      "Use it here": "Usalo qui",
      "Use this browser as a player": "Usa questo browser come lettore",
      "Version": "Versione",
      "Volume": "Volume",
      "Volume levelling (ReplayGain)": "Correzione del volume (ReplayGain)",
      "Volume of {name}": "Volume di {name}",
      "Web Audio (lowest latency)": "Web Audio (latenza minima)",
      "Web Audio (opens when music starts)": "Web Audio (si apre quando parte la musica)",
      "Web Audio, opens when music starts": "Web Audio, si apre quando parte la musica",
      "We’ve told LMS. It isn’t angry, just disappointed.": "L'abbiamo detto a LMS. Non è arrabbiato, solo deluso.",
      "What it is": "Che cos'è",
      "When the queue ends (Don't Stop The Music)": "Quando la coda finisce (Don't Stop The Music)",
      "Which artists": "Quali artisti",
      "Whoa there. You’re already in LyrionJS.": "Ehi, calma. Sei già in LyrionJS.",
      "Why": "Perché",
      "Years": "Anni",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "Il tuo browser, come un vero lettore Lyrion. Tocca lo specchio, se proprio devi.",
      "Your own colour": "Il tuo colore",
      "by": "di",
      "chosen in Settings": "scelto nelle impostazioni",
      "closed": "chiuso",
      "decoding {format}": "decodifica {format}",
      "desktop browser": "browser desktop",
      "disconnected": "disconnesso",
      "e.g. Kitchen tablet": "es. Tablet cucina",
      "from": "da",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad: continua a suonare a schermo bloccato",
      "interrupted": "interrotto",
      "loaded": "caricato",
      "off": "spento",
      "once": "una volta",
      "paused": "in pausa",
      "playing": "in riproduzione",
      "repeats": "si ripete",
      "running": "in esecuzione",
      "stopped": "fermo",
      "suspended": "sospeso",
      "synced with {names}": "sincronizzato con {names}",
      "the media element failed here before": "l'elemento multimediale qui ha già fallito",
      "this browser cannot play FLAC through a media element": "questo browser non può riprodurre FLAC tramite un elemento multimediale",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "questo browser non può riprodurre FLAC tramite un elemento multimediale (serve iOS 17.1 o successivo); tieni lo schermo acceso",
      "volume {volume}": "volume {volume}",
      "waiting": "in attesa",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (LMS converte tutto il resto in FLAC)",
      "{name} (this browser)": "{name} (questo browser)",
      "{n} albums": {
        "many": "{n} album",
        "one": "{n} album",
        "other": "{n} album"
      },
      "{n} artists": {
        "many": "{n} artisti",
        "one": "{n} artista",
        "other": "{n} artisti"
      },
      "{n} minutes": {
        "many": "{n} minuti",
        "one": "{n} minuto",
        "other": "{n} minuti"
      },
      "{n} of {total}": "{n} di {total}",
      "{n} tracks": {
        "many": "{n} brani",
        "one": "{n} brano",
        "other": "{n} brani"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, latenza ~{latency} ms",
      "{seconds} s decoded ahead": "{seconds} s decodificati in anticipo",
      "{setting} saved": "{setting} salvato",
      "{skin} (the server's)": "{skin} (quella del server)",
      "“{name}” already exists. Add to it?": "“{name}” esiste già. Aggiungere a questa?"
    },
    "nb": {
      "(plain http page)": "(vanlig http-side)",
      "(the first {shown} shown)": "(de første {shown} vises)",
      "1, and we’d like to keep it that way": "1, og sånn vil vi helst ha det",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "En Slimproto-spiller og en fjernkontroll for Lyrion Music Server, som kjører helt i denne siden.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "En Slimproto-spiller og kontroll for Lyrion Music Server på én side. Tastatur: mellomrom spill av/pause, ←/→ forrige/neste, ↑/↓ volum, M stille.",
      "A new version of LyrionJS is ready — reload": "En ny versjon av LyrionJS er klar — last inn på nytt",
      "A remote control (not a player)": "En fjernkontroll (ikke en spiller)",
      "About": "Om",
      "About LyrionJS": "Om LyrionJS",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Prestasjon låst opp: Ouroboros. Gå og spill litt musikk nå.",
      "Actions to show": "Handlinger som vises",
      "Add alarm": "Legg til alarm",
      "Add album to playlist…": "Legg til album i spilleliste…",
      "Add to favourites": "Legg til i favoritter",
      "Add to it": "Legg til",
      "Add to playlist": "Legg til i spilleliste",
      "Add to playlist…": "Legg til i spilleliste…",
      "Add to queue": "Legg til i køen",
      "Added to favourites": "Lagt til i favoritter",
      "Added to the queue": "Lagt til i køen",
      "Added to {name}": "Lagt til i {name}",
      "Alarm deleted": "Alarmen er slettet",
      "Alarm set": "Alarmen er stilt inn",
      "Alarms": "Alarmer",
      "Alarms enabled": "Alarmer aktivert",
      "Alarms enabled on this player": "Alarmer aktivert på denne spilleren",
      "Alarms off": "Alarmer av",
      "Alarms on": "Alarmer på",
      "Album": "Album",
      "Album artists": "Albumartister",
      "Album gain": "Album gain",
      "Albums": "Album",
      "Albums ({count})": "Album ({count})",
      "All artists": "Alle artister",
      "All options…": "Alle valg…",
      "All players": "Alle spillere",
      "Already moving playback…": "Flytter allerede avspillingen…",
      "Android: keeps playing with the screen locked": "Android: fortsetter å spille med låst skjerm",
      "Another tab is this browser's player; this one is a remote control.": "En annen fane er denne nettleserens spiller; denne er en fjernkontroll.",
      "Appearance": "Utseende",
      "Apps": "Tjenester",
      "Artist": "Artist",
      "Artists": "Artister",
      "Artists ({count})": "Artister ({count})",
      "Artists, albums, tracks, playlists": "Artister, album, spor, spillelister",
      "As Lyrion Music Server ({language})": "Som Lyrion Music Server ({language})",
      "At the end of this track": "Når dette sporet er ferdig",
      "Audio": "Lyd",
      "Audio engine": "Lydmotor",
      "Audio output": "Lydutgang",
      "Automatic": "Automatisk",
      "Back": "Tilbake",
      "Back to the skin": "Tilbake til skallet",
      "Back to {skin}": "Tilbake til {skin}",
      "Blue": "Blå",
      "Browser player off": "Nettleserspiller av",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "Nettleserspillere er slått av i LMS (Innstillinger › Plugins › LyrionJS). Denne siden styrer de andre spillerne dine.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "Nettleserspillere er slått av i LMS (Innstillinger › Plugins › LyrionJS); denne siden er nå en fjernkontroll.",
      "Buffered": "Bufret",
      "By artist": "Etter artist",
      "By title": "Etter tittel",
      "By year": "Etter år",
      "Cancel": "Avbryt",
      "Cancel ({time} left)": "Avbryt ({time} igjen)",
      "Choose a player": "Velg en spiller",
      "Clear": "Tøm",
      "Clear queue": "Tøm køen",
      "Clear the queue?": "Tømme køen?",
      "Click to enable sound in this browser": "Klikk for å slå på lyden i denne nettleseren",
      "Close": "Lukk",
      "Close now playing": "Lukk Spilles nå",
      "Composers": "Komponister",
      "Connected (Slimproto over a WebSocket to LMS)": "Tilkoblet (Slimproto over en WebSocket til LMS)",
      "Connecting to LMS…": "Kobler til LMS…",
      "Connecting…": "Kobler til…",
      "Connection": "Tilkobling",
      "Control": "Styr",
      "Controlling": "Styres",
      "Create": "Opprett",
      "Crossfade": "Krysstoning",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "Krysstoning krever at begge sporene har samme samplingsfrekvens; ellers spiller denne nettleseren dem uten opphold.",
      "Dark": "Mørkt",
      "Delete": "Slett",
      "Delete alarm": "Slett alarm",
      "Delete playlist": "Slett spilleliste",
      "Delete this alarm?": "Slette denne alarmen?",
      "Delete “{name}”?": "Slette «{name}»?",
      "Deleted": "Slettet",
      "Disc {n}": "Disk {n}",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Aktivert",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Alle spillere LMS kjenner til, også denne nettleseren. Synkroniser spillere for å spille den samme musikken i takt.",
      "Every time you do that, a call stack loses its wings.": "Hver gang du gjør det, mister en kallstakk vingene sine.",
      "Everything LMS can search: your library, radio and installed apps": "Alt LMS kan søke i: biblioteket ditt, radio og installerte tjenester",
      "Fade in": "Ton inn",
      "Fade in and out": "Ton inn og ut",
      "Fade out": "Ton ut",
      "Favourites": "Favoritter",
      "Formats": "Formater",
      "From the cover art (as Material Skin)": "Fra omslagsbildet (som Material Skin)",
      "Genres": "Sjangere",
      "Give this player a name": "Gi denne spilleren et navn",
      "Go to album": "Gå til album",
      "Go to artist": "Gå til artist",
      "Gold": "Gull",
      "Green": "Grønn",
      "Highest sample rate": "Høyeste samplingsfrekvens",
      "Highlight colour": "Fremhevingsfarge",
      "Home": "Hjem",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "Slik vises denne nettleseren i LMS og de andre kontrollene dine. Du kan endre det når som helst i Innstillinger.",
      "LMS answered {status}": "LMS svarte {status}",
      "LMS did not answer in time": "LMS svarte ikke i tide",
      "LMS keeps the queue topped up with random picks from your library.": "LMS fyller hele tiden på køen med tilfeldige valg fra biblioteket ditt.",
      "Language": "Språk",
      "Last scan": "Siste skanning",
      "Leave the group": "Forlat gruppen",
      "Library": "Bibliotek",
      "Library scan started": "Skanning av biblioteket startet",
      "Light": "Lyst",
      "Live": "Direkte",
      "Lost contact with the server: {error} — retrying…": "Mistet kontakten med tjeneren: {error} — prøver igjen…",
      "Lyrion Music Server is not answering at {host}.": "Lyrion Music Server svarer ikke på {host}.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "LyrionJS spiller best i en egen fane: i dette vinduet stopper det når vinduet lukkes.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} på {os}",
      "Main": "Hovedmeny",
      "Match the system": "Følg systemet",
      "Media element (plays with the screen locked)": "Medieelement (spiller med låst skjerm)",
      "Menu": "Meny",
      "More": "Mer",
      "More about LyrionJS…": "Mer om LyrionJS…",
      "More…": "Mer…",
      "Move down": "Flytt ned",
      "Move playback to {name} from…": "Flytt avspillingen til {name} fra…",
      "Move up": "Flytt opp",
      "Moved": "Flyttet",
      "Moved playback to {name}": "Avspillingen ble flyttet til {name}",
      "Moving playback stopped part-way ({name} carries on): {error}": "Flyttingen av avspillingen stoppet halvveis ({name} spiller videre): {error}",
      "Moving {n} tracks (the first {max})…": {
        "one": "Flytter {n} spor (de første {max})…",
        "other": "Flytter {n} spor (de første {max})…"
      },
      "Moving {n} tracks…": {
        "one": "Flytter {n} spor…",
        "other": "Flytter {n} spor…"
      },
      "Music folder": "Musikkmappe",
      "Mute": "Stille",
      "Name": "Navn",
      "Name this player": "Gi denne spilleren et navn",
      "Never": "Aldri",
      "New alarm on {name}": "Ny alarm på {name}",
      "New music": "Ny musikk",
      "New playlist": "Ny spilleliste",
      "New playlist…": "Ny spilleliste…",
      "Next": "Neste",
      "Nice try.": "Godt forsøk.",
      "No alarms on {name}.": "Ingen alarmer på {name}.",
      "No albums.": "Ingen album.",
      "No apps are installed on the server.": "Ingen tjenester er installert.",
      "No player": "Ingen spiller",
      "No player selected.": "Ingen spiller valgt.",
      "No players are connected to the server.": "Ingen spillere er koblet til tjeneren.",
      "No radio services are installed on the server.": "Ingen radiotjenester er installert.",
      "No saved playlists.": "Ingen lagrede spillelister.",
      "None (gapless)": "Ingen (uten opphold)",
      "Nothing here.": "Ingenting her.",
      "Nothing in the library matches “{query}”.": "Ingenting i biblioteket samsvarer med «{query}».",
      "Nothing playing": "Ingenting spilles",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "Ingenting spilles. Velg noe fra biblioteket, favoritter, radio eller tjenester.",
      "Nothing to add": "Ingenting å legge til",
      "Nothing to move: {name}'s queue is empty": "Ingenting å flytte: køen på {name} er tom",
      "Now playing": "Spilles nå",
      "OK": "OK",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "Ok, du vinner: nå lytter du til LyrionJS i LyrionJS i LyrionJS. (Det gjør du ikke.)",
      "Off": "Av",
      "Open LyrionJS inside LyrionJS (please don’t)": "Åpne LyrionJS i LyrionJS (vær så snill, ikke gjør det)",
      "Open in a new tab": "Åpne i en ny fane",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "Å åpne LyrionJS i LyrionJS ville åpne LyrionJS i LyrionJS i LyrionJS… og så videre, til nettleseren går tom for tålmodighet, minne eller begge deler. Vær så snill og slutt å prøve å lage en rekursjonsløkke.",
      "Opens when music starts": "Åpnes når musikken starter",
      "Orange": "Oransje",
      "Other random albums": "Andre tilfeldige album",
      "Output": "Utgang",
      "Output level": "Utgangsnivå",
      "Output level in this browser (on top of the LMS volume)": "Utgangsnivå i denne nettleseren (i tillegg til volumet i LMS)",
      "Pause": "Pause",
      "Pick a colour": "Velg en farge",
      "Pink": "Rosa",
      "Play": "Spill av",
      "Play folder": "Spill av mappe",
      "Play music in this browser (a real Slimproto player in LMS)": "Spill musikk i denne nettleseren (en ekte Slimproto-spiller i LMS)",
      "Play next": "Spill av neste",
      "Play now": "Spill av nå",
      "Play now, keep the queue": "Spill av nå, behold køen",
      "Play/pause": "Spill av/pause",
      "Player ID": "Spiller-ID",
      "Player controls": "Spillerkontroller",
      "Player: {name}": "Spiller: {name}",
      "Players": "Spillere",
      "Playing": "Spiller av",
      "Playing next": "Spilles neste",
      "Playing shuffled": "Spiller i tilfeldig rekkefølge",
      "Playlist name": "Navn på spilleliste",
      "Playlists": "Spillelister",
      "Plays it now (keeps the queue)": "Spiller det nå (beholder køen)",
      "Plays it now (replaces the queue)": "Spiller det nå (erstatter køen)",
      "Position": "Posisjon",
      "Previous": "Forrige",
      "Purple": "Lilla",
      "Queue": "Kø",
      "Queue cleared": "Køen er tømt",
      "Queue folder": "Legg mappe i køen",
      "Radio": "Radio",
      "Random": "Tilfeldig",
      "Random album mix started": "Tilfeldig albummiks startet",
      "Random albums": "Tilfeldige album",
      "Random artist mix started": "Tilfeldig artistmiks startet",
      "Random mix": "Tilfeldig miks",
      "Random mix stopped": "Tilfeldig miks stoppet",
      "Random song mix started": "Tilfeldig sangmiks startet",
      "Random year mix started": "Tilfeldig årsmiks startet",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. Fornøyd nå?",
      "Recently added": "Nylig lagt til",
      "Recursion depth": "Rekursjonsdybde",
      "Refresh": "Oppdater",
      "Reloading to switch the output…": "Laster inn på nytt for å bytte utgang…",
      "Remove": "Fjern",
      "Remove from favourites": "Fjern fra favoritter",
      "Remove from playlist": "Fjern fra spilleliste",
      "Remove from queue": "Fjern fra køen",
      "Remove “{name}” from favourites?": "Fjerne «{name}» fra favoritter?",
      "Removed": "Fjernet",
      "Rename": "Gi nytt navn",
      "Rename favourite": "Gi favoritten nytt navn",
      "Rename playlist": "Gi spillelisten nytt navn",
      "Rename this browser…": "Gi denne nettleseren nytt navn…",
      "Rename this player": "Gi denne spilleren nytt navn",
      "Renamed": "Navnet er endret",
      "Rename…": "Gi nytt navn…",
      "Repeat": "Gjenta",
      "Repeat off": "Repetisjon av",
      "Repeat queue": "Gjenta køen",
      "Repeat song": "Gjenta sang",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Lagre",
      "Save as playlist": "Lagre som spilleliste",
      "Save queue as playlist": "Lagre køen som spilleliste",
      "Saved": "Lagret",
      "Saved as {name}": "Lagret som {name}",
      "Scan": "Skanning",
      "Scan for new music": "Skann etter ny musikk",
      "Scanning: {step} {done}/{total}": "Skanner: {step} {done}/{total}",
      "Search": "Søk",
      "Search apps and services for “{query}”": "Søk etter «{query}» i tjenester",
      "Search: {query}": "Søk: {query}",
      "Searching…": "Søker…",
      "Seek": "Spol",
      "Send diagnostics": "Send diagnostikk",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Send avspillingsdiagnostikk til LMS-tjenerens logg (hjelper med å løse problemer på telefoner og nettbrett)",
      "Server": "Tjener",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Stilles inn med enhetens egne knapper (siden kan ikke stille det inn her); volumet i LMS holdes på 100 %",
      "Settings": "Innstillinger",
      "Show LyrionJS": "Vis LyrionJS",
      "Show the queue": "Vis køen",
      "Showing {skin}": "Viser {skin}",
      "Shows actions under it": "Viser handlinger under det",
      "Shuffle": "Tilfeldig rekkefølge",
      "Shuffle albums": "Tilfeldige album",
      "Shuffle off": "Tilfeldig rekkefølge av",
      "Shuffle songs": "Tilfeldige spor",
      "Skin": "Skall",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Skall: LyrionJS sitt eget, eller et hvilket som helst skall som er installert på Lyrion Music Server, med denne nettleseren fortsatt som spiller",
      "Sleep timer": "Hvilemodus",
      "Sleep timer off": "Hvilemodus av",
      "Sleeping after this track": "Hvilemodus etter dette sporet",
      "Sleeping in {n} minutes": {
        "one": "Hvilemodus om {n} minutt",
        "other": "Hvilemodus om {n} minutter"
      },
      "Smart gain": "Smart gain",
      "Something went wrong": "Noe gikk galt",
      "Songs": "Sanger",
      "Sort albums": "Sorter album",
      "State": "Status",
      "Still no. One of us is enough.": "Fortsatt nei. Én av oss er nok.",
      "Stop mix": "Stopp miks",
      "Switch off": "Slå av",
      "Switch on": "Slå på",
      "Sync this player…": "Synkroniser denne spilleren…",
      "Sync {name} with…": "Synkroniser {name} med…",
      "Synced {name}": "{name} er synkronisert",
      "Sync…": "Synkroniser…",
      "Take me back to the music": "Ta meg tilbake til musikken",
      "Tapping a track": "Trykk på et spor",
      "Tapping a track (search, albums, playlists, folders)": "Trykk på et spor (søk, album, spillelister, mapper)",
      "Teal": "Blågrønn",
      "The alarm plays the current queue (or LMS's default alarm sound).": "Alarmen spiller den gjeldende køen (eller standard alarmlyd i LMS).",
      "The browser has started muttering about “maximum call stack size”.": "Nettleseren har begynt å mumle om «maximum call stack size».",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "Medieelementet kan ikke spille her: velg Web Audio i Innstillinger › Lydutgang.",
      "The queue is empty.": "Køen er tom.",
      "The search failed: {error}": "Søket feilet: {error}",
      "Theme": "Tema",
      "This browser": "Denne nettleseren",
      "This browser as a player": "Denne nettleseren som spiller",
      "This browser can't play through the media element: switching to Web Audio…": "Denne nettleseren kan ikke spille via medieelementet: bytter til Web Audio…",
      "This folder is empty.": "Denne mappen er tom.",
      "This page could not be shown: {error}": "Siden kunne ikke vises: {error}",
      "This player is now “{name}”": "Denne spilleren heter nå «{name}»",
      "This player was taken over by another session; this page is now a remote control.": "Denne spilleren ble overtatt av en annen økt; denne siden er nå en fjernkontroll.",
      "This playlist is empty.": "Denne spillelisten er tom.",
      "This tab is already playing with LyrionJS.": "Denne fanen spiller allerede med LyrionJS.",
      "Time": "Tid",
      "Track gain": "Gain for spor",
      "Track {n} of {total}": "Spor {n} av {total}",
      "Tracks ({count})": "Spor ({count})",
      "Transfer playback here from…": "Flytt avspillingen hit fra…",
      "Transition between tracks": "Overgang mellom spor",
      "Transition length": "Lengde på overgang",
      "Try again": "Prøv igjen",
      "Trying again every few seconds…": "Prøver igjen med noen sekunders mellomrom…",
      "Type at least two letters.": "Skriv minst to bokstaver.",
      "Unknown": "Ukjent",
      "Unmute": "Slå på lyden",
      "Unsynced": "Synkronisering opphevet",
      "Unsynced {name}": "Synkroniseringen av {name} er opphevet",
      "Use it here": "Bruk her",
      "Use this browser as a player": "Bruk denne nettleseren som spiller",
      "Version": "Versjon",
      "Volume": "Volum",
      "Volume levelling (ReplayGain)": "Volumjustering (ReplayGain)",
      "Volume of {name}": "Volum for {name}",
      "Web Audio (lowest latency)": "Web Audio (lavest forsinkelse)",
      "Web Audio (opens when music starts)": "Web Audio (åpnes når musikken starter)",
      "Web Audio, opens when music starts": "Web Audio, åpnes når musikken starter",
      "We’ve told LMS. It isn’t angry, just disappointed.": "Vi har sagt fra til LMS. Den er ikke sint, bare skuffet.",
      "What it is": "Hva det er",
      "When the queue ends (Don't Stop The Music)": "Når køen er slutt (Don't Stop The Music)",
      "Which artists": "Hvilke artister",
      "Whoa there. You’re already in LyrionJS.": "Rolig nå. Du er allerede i LyrionJS.",
      "Why": "Hvorfor",
      "Years": "År",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "Nettleseren din, som en ekte Lyrion-spiller. Trykk på speilet hvis du absolutt må.",
      "Your own colour": "Egen farge",
      "by": "av",
      "chosen in Settings": "valgt i Innstillinger",
      "closed": "lukket",
      "decoding {format}": "dekoder {format}",
      "desktop browser": "nettleser på datamaskin",
      "disconnected": "frakoblet",
      "e.g. Kitchen tablet": "f.eks. Nettbrett på kjøkkenet",
      "from": "fra",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad: fortsetter å spille med låst skjerm",
      "interrupted": "avbrutt",
      "loaded": "lastet inn",
      "off": "av",
      "once": "én gang",
      "paused": "pauset",
      "playing": "spiller",
      "repeats": "gjentas",
      "running": "kjører",
      "stopped": "stoppet",
      "suspended": "satt på pause",
      "synced with {names}": "synkronisert med {names}",
      "the media element failed here before": "medieelementet har feilet her før",
      "this browser cannot play FLAC through a media element": "denne nettleseren kan ikke spille FLAC via et medieelement",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "denne nettleseren kan ikke spille FLAC via et medieelement (krever iOS 17.1 eller nyere); hold skjermen på",
      "volume {volume}": "volum {volume}",
      "waiting": "venter",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (LMS konverterer alt annet til FLAC)",
      "{name} (this browser)": "{name} (denne nettleseren)",
      "{n} albums": {
        "one": "{n} album",
        "other": "{n} album"
      },
      "{n} artists": {
        "one": "{n} artist",
        "other": "{n} artister"
      },
      "{n} minutes": {
        "one": "{n} minutt",
        "other": "{n} minutter"
      },
      "{n} of {total}": "{n} av {total}",
      "{n} tracks": {
        "one": "{n} spor",
        "other": "{n} spor"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, ~{latency} ms forsinkelse",
      "{seconds} s decoded ahead": "{seconds} s dekodet på forhånd",
      "{setting} saved": "{setting} lagret",
      "{skin} (the server's)": "{skin} (tjenerens)",
      "“{name}” already exists. Add to it?": "«{name}» finnes allerede. Legg til i den?"
    },
    "nl": {
      "(plain http page)": "(gewone http-pagina)",
      "(the first {shown} shown)": "(de eerste {shown} getoond)",
      "1, and we’d like to keep it that way": "1, en dat willen we graag zo houden",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "Een Slimproto-speler en afstandsbediening voor Lyrion Music Server, volledig in deze pagina.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "Een Slimproto-speler en bediening voor Lyrion Music Server in één pagina. Toetsenbord: spatie afspelen/pauzeren, ←/→ vorige/volgende, ↑/↓ volume, M dempen.",
      "A new version of LyrionJS is ready — reload": "Er is een nieuwe versie van LyrionJS — herlaad de pagina",
      "A remote control (not a player)": "Een afstandsbediening (geen speler)",
      "About": "Over",
      "About LyrionJS": "Over LyrionJS",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Prestatie ontgrendeld: Ouroboros. Ga nu maar wat muziek afspelen.",
      "Actions to show": "Getoonde acties",
      "Add alarm": "Wekker toevoegen",
      "Add album to playlist…": "Album aan afspeellijst toevoegen…",
      "Add to favourites": "Aan favorieten toevoegen",
      "Add to it": "Eraan toevoegen",
      "Add to playlist": "Aan afspeellijst toevoegen",
      "Add to playlist…": "Aan afspeellijst toevoegen…",
      "Add to queue": "Aan wachtrij toevoegen",
      "Added to favourites": "Aan favorieten toegevoegd",
      "Added to the queue": "Aan de wachtrij toegevoegd",
      "Added to {name}": "Toegevoegd aan {name}",
      "Alarm deleted": "Wekker verwijderd",
      "Alarm set": "Wekker ingesteld",
      "Alarms": "Wekkers",
      "Alarms enabled": "Wekkers ingeschakeld",
      "Alarms enabled on this player": "Wekkers ingeschakeld op deze speler",
      "Alarms off": "Wekkers uit",
      "Alarms on": "Wekkers aan",
      "Album": "Album",
      "Album artists": "Albumartiesten",
      "Album gain": "Volumeaanpassing voor albums",
      "Albums": "Albums",
      "Albums ({count})": "Albums ({count})",
      "All artists": "Alle artiesten",
      "All options…": "Alle opties…",
      "All players": "Alle spelers",
      "Already moving playback…": "Afspelen wordt al verplaatst…",
      "Android: keeps playing with the screen locked": "Android: blijft spelen met vergrendeld scherm",
      "Another tab is this browser's player; this one is a remote control.": "Een ander tabblad is de speler van deze browser; dit tabblad is een afstandsbediening.",
      "Appearance": "Weergave",
      "Apps": "Apps",
      "Artist": "Artiest",
      "Artists": "Artiesten",
      "Artists ({count})": "Artiesten ({count})",
      "Artists, albums, tracks, playlists": "Artiesten, albums, nummers, afspeellijsten",
      "As Lyrion Music Server ({language})": "Zoals Lyrion Music Server ({language})",
      "At the end of this track": "Aan het einde van dit nummer",
      "Audio": "Audio",
      "Audio engine": "Audio-engine",
      "Audio output": "Audio-uitvoer",
      "Automatic": "Automatisch",
      "Back": "Terug",
      "Back to the skin": "Terug naar de skin",
      "Back to {skin}": "Terug naar {skin}",
      "Blue": "Blauw",
      "Browser player off": "Browserspeler uit",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "Browserspelers zijn uitgeschakeld in LMS (Instellingen › Plugins › LyrionJS). Deze pagina bedient je andere spelers.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "Browserspelers zijn uitgeschakeld in LMS (Instellingen › Plugins › LyrionJS); deze pagina is nu een afstandsbediening.",
      "Buffered": "Gebufferd",
      "By artist": "Op artiest",
      "By title": "Op titel",
      "By year": "Op jaar",
      "Cancel": "Annuleren",
      "Cancel ({time} left)": "Annuleren (nog {time})",
      "Choose a player": "Kies een speler",
      "Clear": "Wissen",
      "Clear queue": "Wachtrij wissen",
      "Clear the queue?": "De wachtrij wissen?",
      "Click to enable sound in this browser": "Klik om geluid in deze browser in te schakelen",
      "Close": "Sluiten",
      "Close now playing": "Speelt nu sluiten",
      "Composers": "Componisten",
      "Connected (Slimproto over a WebSocket to LMS)": "Verbonden (Slimproto via een WebSocket naar LMS)",
      "Connecting to LMS…": "Verbinden met LMS…",
      "Connecting…": "Verbinden…",
      "Connection": "Verbinding",
      "Control": "Bedienen",
      "Controlling": "Bedient",
      "Create": "Aanmaken",
      "Crossfade": "Crossfade",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "Voor een crossfade moeten beide nummers dezelfde samplefrequentie hebben; anders speelt deze browser ze zonder pauze achter elkaar.",
      "Dark": "Donker",
      "Delete": "Verwijderen",
      "Delete alarm": "Wekker verwijderen",
      "Delete playlist": "Afspeellijst verwijderen",
      "Delete this alarm?": "Deze wekker verwijderen?",
      "Delete “{name}”?": "“{name}” verwijderen?",
      "Deleted": "Verwijderd",
      "Disc {n}": "Disc {n}",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Ingeschakeld",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Elke speler die LMS kent, ook deze browser. Synchroniseer spelers om tegelijk dezelfde muziek af te spelen.",
      "Every time you do that, a call stack loses its wings.": "Elke keer dat je dat doet, verliest er ergens een call stack zijn vleugels.",
      "Everything LMS can search: your library, radio and installed apps": "Alles waarin LMS kan zoeken: je bibliotheek, radio en geïnstalleerde apps",
      "Fade in": "Infaden",
      "Fade in and out": "In- en uitfaden",
      "Fade out": "Uitfaden",
      "Favourites": "Favorieten",
      "Formats": "Formaten",
      "From the cover art (as Material Skin)": "Uit de albumhoes (zoals Material Skin)",
      "Genres": "Genres",
      "Give this player a name": "Geef deze speler een naam",
      "Go to album": "Naar album",
      "Go to artist": "Naar artiest",
      "Gold": "Goud",
      "Green": "Groen",
      "Highest sample rate": "Hoogste samplefrequentie",
      "Highlight colour": "Accentkleur",
      "Home": "Start",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "Zo verschijnt deze browser in LMS en je andere bedieningen. Je kunt dit altijd wijzigen in Instellingen.",
      "LMS answered {status}": "LMS antwoordde {status}",
      "LMS did not answer in time": "LMS antwoordde niet op tijd",
      "LMS keeps the queue topped up with random picks from your library.": "LMS vult de wachtrij steeds aan met willekeurige keuzes uit je bibliotheek.",
      "Language": "Taal",
      "Last scan": "Laatste scan",
      "Leave the group": "Groep verlaten",
      "Library": "Bibliotheek",
      "Library scan started": "Scan van bibliotheek gestart",
      "Light": "Licht",
      "Live": "Live",
      "Lost contact with the server: {error} — retrying…": "Contact met de server verloren: {error} — opnieuw proberen…",
      "Lyrion Music Server is not answering at {host}.": "Lyrion Music Server reageert niet op {host}.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "LyrionJS speelt het best in een eigen tabblad: in dit venster stopt het wanneer het venster sluit.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} op {os}",
      "Main": "Hoofdmenu",
      "Match the system": "Zoals het systeem",
      "Media element (plays with the screen locked)": "Media-element (speelt met vergrendeld scherm)",
      "Menu": "Menu",
      "More": "Meer",
      "More about LyrionJS…": "Meer over LyrionJS…",
      "More…": "Meer…",
      "Move down": "Omlaag",
      "Move playback to {name} from…": "Afspelen naar {name} verplaatsen vanaf…",
      "Move up": "Omhoog",
      "Moved": "Verplaatst",
      "Moved playback to {name}": "Afspelen verplaatst naar {name}",
      "Moving playback stopped part-way ({name} carries on): {error}": "Verplaatsen van afspelen halverwege gestopt ({name} speelt door): {error}",
      "Moving {n} tracks (the first {max})…": {
        "one": "{n} nummer verplaatsen (de eerste {max})…",
        "other": "{n} nummers verplaatsen (de eerste {max})…"
      },
      "Moving {n} tracks…": {
        "one": "{n} nummer verplaatsen…",
        "other": "{n} nummers verplaatsen…"
      },
      "Music folder": "Muziekmap",
      "Mute": "Dempen",
      "Name": "Naam",
      "Name this player": "Geef deze speler een naam",
      "Never": "Nooit",
      "New alarm on {name}": "Nieuwe wekker op {name}",
      "New music": "Nieuwe muziek",
      "New playlist": "Nieuwe afspeellijst",
      "New playlist…": "Nieuwe afspeellijst…",
      "Next": "Volgende",
      "Nice try.": "Leuk geprobeerd.",
      "No alarms on {name}.": "Geen wekkers op {name}.",
      "No albums.": "Geen albums.",
      "No apps are installed on the server.": "Er zijn geen apps geïnstalleerd op de server.",
      "No player": "Geen speler",
      "No player selected.": "Geen speler gekozen.",
      "No players are connected to the server.": "Er zijn geen spelers met de server verbonden.",
      "No radio services are installed on the server.": "Er zijn geen radiodiensten geïnstalleerd op de server.",
      "No saved playlists.": "Geen opgeslagen afspeellijsten.",
      "None (gapless)": "Geen (naadloos)",
      "Nothing here.": "Hier is niets.",
      "Nothing in the library matches “{query}”.": "Niets in de bibliotheek komt overeen met “{query}”.",
      "Nothing playing": "Er speelt niets",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "Er speelt niets. Kies iets uit de bibliotheek, favorieten, radio of apps.",
      "Nothing to add": "Niets om toe te voegen",
      "Nothing to move: {name}'s queue is empty": "Niets om te verplaatsen: de wachtrij van {name} is leeg",
      "Now playing": "Speelt nu",
      "OK": "OK",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "Oké, je wint: je luistert nu naar LyrionJS in LyrionJS in LyrionJS. (Niet echt.)",
      "Off": "Uit",
      "Open LyrionJS inside LyrionJS (please don’t)": "LyrionJS openen in LyrionJS (liever niet)",
      "Open in a new tab": "Openen in nieuw tabblad",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "LyrionJS openen in LyrionJS zou LyrionJS openen in LyrionJS in LyrionJS… enzovoort, tot je browser door zijn geduld, zijn geheugen of allebei heen is. Hou alsjeblieft op met proberen een recursielus te veroorzaken.",
      "Opens when music starts": "Opent wanneer de muziek begint",
      "Orange": "Oranje",
      "Other random albums": "Andere willekeurige albums",
      "Output": "Uitvoer",
      "Output level": "Uitvoerniveau",
      "Output level in this browser (on top of the LMS volume)": "Uitvoerniveau in deze browser (bovenop het LMS-volume)",
      "Pause": "Pauzeren",
      "Pick a colour": "Kies een kleur",
      "Pink": "Roze",
      "Play": "Afspelen",
      "Play folder": "Map afspelen",
      "Play music in this browser (a real Slimproto player in LMS)": "Muziek afspelen in deze browser (een echte Slimproto-speler in LMS)",
      "Play next": "Volgende afspelen",
      "Play now": "Nu afspelen",
      "Play now, keep the queue": "Nu afspelen, wachtrij behouden",
      "Play/pause": "Afspelen/pauzeren",
      "Player ID": "Speler-ID",
      "Player controls": "Spelerbediening",
      "Player: {name}": "Speler: {name}",
      "Players": "Muziekspelers",
      "Playing": "Speelt",
      "Playing next": "Hierna",
      "Playing shuffled": "Speelt willekeurig",
      "Playlist name": "Naam afspeellijst",
      "Playlists": "Afspeellijsten",
      "Plays it now (keeps the queue)": "Speelt het meteen af (wachtrij blijft)",
      "Plays it now (replaces the queue)": "Speelt het meteen af (vervangt de wachtrij)",
      "Position": "Positie",
      "Previous": "Vorige",
      "Purple": "Paars",
      "Queue": "Wachtrij",
      "Queue cleared": "Wachtrij gewist",
      "Queue folder": "Map aan wachtrij toevoegen",
      "Radio": "Radio",
      "Random": "Willekeurig",
      "Random album mix started": "Albummix gestart",
      "Random albums": "Willekeurige albums",
      "Random artist mix started": "Artiestenmix gestart",
      "Random mix": "Willekeurige mix",
      "Random mix stopped": "Willekeurige mix gestopt",
      "Random song mix started": "Nummermix gestart",
      "Random year mix started": "Jaarmix gestart",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. Blij nu?",
      "Recently added": "Onlangs toegevoegd",
      "Recursion depth": "Recursiediepte",
      "Refresh": "Vernieuwen",
      "Reloading to switch the output…": "Herladen om de uitvoer te wisselen…",
      "Remove": "Verwijderen",
      "Remove from favourites": "Uit favorieten verwijderen",
      "Remove from playlist": "Uit afspeellijst verwijderen",
      "Remove from queue": "Uit wachtrij verwijderen",
      "Remove “{name}” from favourites?": "“{name}” uit favorieten verwijderen?",
      "Removed": "Verwijderd",
      "Rename": "Hernoemen",
      "Rename favourite": "Favoriet hernoemen",
      "Rename playlist": "Afspeellijst hernoemen",
      "Rename this browser…": "Deze browser hernoemen…",
      "Rename this player": "Deze speler hernoemen",
      "Renamed": "Hernoemd",
      "Rename…": "Hernoemen…",
      "Repeat": "Herhalen",
      "Repeat off": "Herhalen uit",
      "Repeat queue": "Wachtrij herhalen",
      "Repeat song": "Huidig nummer herhalen",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Opslaan",
      "Save as playlist": "Opslaan als afspeellijst",
      "Save queue as playlist": "Wachtrij opslaan als afspeellijst",
      "Saved": "Opgeslagen",
      "Saved as {name}": "Opgeslagen als {name}",
      "Scan": "Scannen",
      "Scan for new music": "Scannen op nieuwe muziek",
      "Scanning: {step} {done}/{total}": "Scannen: {step} {done}/{total}",
      "Search": "Zoeken",
      "Search apps and services for “{query}”": "Apps en diensten doorzoeken op “{query}”",
      "Search: {query}": "Zoeken: {query}",
      "Searching…": "Zoeken…",
      "Seek": "Spoelen",
      "Send diagnostics": "Diagnose versturen",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Afspeeldiagnose naar het LMS-serverlogboek sturen (helpt problemen op telefoons en tablets op te lossen)",
      "Server": "Server",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Stel in met de knoppen van dit apparaat (de pagina kan het hier niet instellen); het LMS-volume blijft op 100 %",
      "Settings": "Instellingen",
      "Show LyrionJS": "LyrionJS tonen",
      "Show the queue": "Wachtrij tonen",
      "Showing {skin}": "{skin} wordt getoond",
      "Shows actions under it": "Toont acties eronder",
      "Shuffle": "Willekeurig",
      "Shuffle albums": "Willekeurig op album",
      "Shuffle off": "Willekeurig uit",
      "Shuffle songs": "Willekeurig op nummer",
      "Skin": "Skin",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Skin: die van LyrionJS, of een skin die op je Lyrion Music Server is geïnstalleerd, terwijl deze browser de speler blijft",
      "Sleep timer": "Sluimertimer",
      "Sleep timer off": "Sluimertimer uit",
      "Sleeping after this track": "Sluimermodus na dit nummer",
      "Sleeping in {n} minutes": {
        "one": "Sluimermodus over {n} minuut",
        "other": "Sluimermodus over {n} minuten"
      },
      "Smart gain": "Slimme volumeaanpassing",
      "Something went wrong": "Er ging iets mis",
      "Songs": "Nummers",
      "Sort albums": "Albums sorteren",
      "State": "Status",
      "Still no. One of us is enough.": "Nog steeds niet. Eén van ons is genoeg.",
      "Stop mix": "Mix stoppen",
      "Switch off": "Uitschakelen",
      "Switch on": "Inschakelen",
      "Sync this player…": "Deze speler synchroniseren…",
      "Sync {name} with…": "{name} synchroniseren met…",
      "Synced {name}": "{name} gesynchroniseerd",
      "Sync…": "Synchroniseren…",
      "Take me back to the music": "Breng me terug naar de muziek",
      "Tapping a track": "Tikken op een nummer",
      "Tapping a track (search, albums, playlists, folders)": "Tikken op een nummer (zoeken, albums, afspeellijsten, mappen)",
      "Teal": "Blauwgroen",
      "The alarm plays the current queue (or LMS's default alarm sound).": "De wekker speelt de huidige wachtrij af (of het standaard wekkergeluid van LMS).",
      "The browser has started muttering about “maximum call stack size”.": "De browser begint al te mompelen over “maximum call stack size”.",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "Het media-element kan hier niet afspelen: kies Web Audio in Instellingen › Audio-uitvoer.",
      "The queue is empty.": "De wachtrij is leeg.",
      "The search failed: {error}": "Het zoeken is mislukt: {error}",
      "Theme": "Thema",
      "This browser": "Deze browser",
      "This browser as a player": "Deze browser als speler",
      "This browser can't play through the media element: switching to Web Audio…": "Deze browser kan niet afspelen via het media-element: overschakelen naar Web Audio…",
      "This folder is empty.": "Deze map is leeg.",
      "This page could not be shown: {error}": "Deze pagina kon niet worden getoond: {error}",
      "This player is now “{name}”": "Deze speler heet nu “{name}”",
      "This player was taken over by another session; this page is now a remote control.": "Deze speler is overgenomen door een andere sessie; deze pagina is nu een afstandsbediening.",
      "This playlist is empty.": "Deze afspeellijst is leeg.",
      "This tab is already playing with LyrionJS.": "Dit tabblad speelt al met LyrionJS.",
      "Time": "Tijd",
      "Track gain": "Volumeaanpassing voor nummers",
      "Track {n} of {total}": "Nummer {n} van {total}",
      "Tracks ({count})": "Nummers ({count})",
      "Transfer playback here from…": "Afspelen hierheen halen vanaf…",
      "Transition between tracks": "Overgang tussen nummers",
      "Transition length": "Duur van de overgang",
      "Try again": "Opnieuw proberen",
      "Trying again every few seconds…": "Om de paar seconden opnieuw proberen…",
      "Type at least two letters.": "Typ minstens twee letters.",
      "Unknown": "Onbekend",
      "Unmute": "Dempen opheffen",
      "Unsynced": "Niet meer gesynchroniseerd",
      "Unsynced {name}": "Synchronisatie van {name} opgeheven",
      "Use it here": "Hier gebruiken",
      "Use this browser as a player": "Deze browser als speler gebruiken",
      "Version": "Versie",
      "Volume": "Volume",
      "Volume levelling (ReplayGain)": "Volumeaanpassing (ReplayGain)",
      "Volume of {name}": "Volume van {name}",
      "Web Audio (lowest latency)": "Web Audio (laagste vertraging)",
      "Web Audio (opens when music starts)": "Web Audio (opent wanneer de muziek begint)",
      "Web Audio, opens when music starts": "Web Audio, opent wanneer de muziek begint",
      "We’ve told LMS. It isn’t angry, just disappointed.": "We hebben het aan LMS verteld. Het is niet boos, alleen teleurgesteld.",
      "What it is": "Wat het is",
      "When the queue ends (Don't Stop The Music)": "Als de wachtrij op is (Don't Stop The Music)",
      "Which artists": "Welke artiesten",
      "Whoa there. You’re already in LyrionJS.": "Ho, ho. Je zit al in LyrionJS.",
      "Why": "Waarom",
      "Years": "Jaren",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "Je browser als echte Lyrion-speler. Tik op de spiegel als het echt moet.",
      "Your own colour": "Eigen kleur",
      "by": "van",
      "chosen in Settings": "gekozen in Instellingen",
      "closed": "gesloten",
      "decoding {format}": "decodeert {format}",
      "desktop browser": "desktopbrowser",
      "disconnected": "niet verbonden",
      "e.g. Kitchen tablet": "bijv. Tablet keuken",
      "from": "uit",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad: blijft spelen met vergrendeld scherm",
      "interrupted": "onderbroken",
      "loaded": "geladen",
      "off": "uit",
      "once": "eenmalig",
      "paused": "gepauzeerd",
      "playing": "speelt",
      "repeats": "herhaalt",
      "running": "actief",
      "stopped": "gestopt",
      "suspended": "gepauzeerd",
      "synced with {names}": "gesynchroniseerd met {names}",
      "the media element failed here before": "het media-element werkte hier eerder niet",
      "this browser cannot play FLAC through a media element": "deze browser kan geen FLAC afspelen via een media-element",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "deze browser kan geen FLAC afspelen via een media-element (iOS 17.1 of hoger nodig); houd het scherm aan",
      "volume {volume}": "volume {volume}",
      "waiting": "wacht",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (LMS zet al het andere om naar FLAC)",
      "{name} (this browser)": "{name} (deze browser)",
      "{n} albums": {
        "one": "{n} album",
        "other": "{n} albums"
      },
      "{n} artists": {
        "one": "{n} artiest",
        "other": "{n} artiesten"
      },
      "{n} minutes": {
        "one": "{n} minuut",
        "other": "{n} minuten"
      },
      "{n} of {total}": "{n} van {total}",
      "{n} tracks": {
        "one": "{n} nummer",
        "other": "{n} nummers"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, ~{latency} ms vertraging",
      "{seconds} s decoded ahead": "{seconds} s vooruit gedecodeerd",
      "{setting} saved": "{setting} opgeslagen",
      "{skin} (the server's)": "{skin} (die van de server)",
      "“{name}” already exists. Add to it?": "“{name}” bestaat al. Eraan toevoegen?"
    },
    "nn": {
      "(plain http page)": "(vanleg http-side)",
      "(the first {shown} shown)": "(dei første {shown} blir viste)",
      "1, and we’d like to keep it that way": "1, og sånn vil vi helst ha det",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "Ein Slimproto-spelar og ein fjernkontroll for Lyrion Music Server, som køyrer heilt i denne sida.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "Ein Slimproto-spelar og kontroll for Lyrion Music Server på éi side. Tastatur: mellomrom spel av/pause, ←/→ førre/neste, ↑/↓ volum, M stille.",
      "A new version of LyrionJS is ready — reload": "Ein ny versjon av LyrionJS er klar — last inn på nytt",
      "A remote control (not a player)": "Ein fjernkontroll (ikkje ein spelar)",
      "About": "Om",
      "About LyrionJS": "Om LyrionJS",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Prestasjon låst opp: Ouroboros. Gå og spel litt musikk no.",
      "Actions to show": "Handlingar som blir viste",
      "Add alarm": "Legg til alarm",
      "Add album to playlist…": "Legg til album i speleliste…",
      "Add to favourites": "Legg til i favorittar",
      "Add to it": "Legg til",
      "Add to playlist": "Legg til i speleliste",
      "Add to playlist…": "Legg til i speleliste…",
      "Add to queue": "Legg til i køen",
      "Added to favourites": "Lagt til i favorittar",
      "Added to the queue": "Lagt til i køen",
      "Added to {name}": "Lagt til i {name}",
      "Alarm deleted": "Alarmen er sletta",
      "Alarm set": "Alarmen er stilt inn",
      "Alarms": "Alarmar",
      "Alarms enabled": "Alarmar slått på",
      "Alarms enabled on this player": "Alarmar slått på for denne spelaren",
      "Alarms off": "Alarmar av",
      "Alarms on": "Alarmar på",
      "Album": "Album",
      "Album artists": "Albumartistar",
      "Album gain": "Album gain",
      "Albums": "Album",
      "Albums ({count})": "Album ({count})",
      "All artists": "Alle artistar",
      "All options…": "Alle val…",
      "All players": "Alle spelarar",
      "Already moving playback…": "Flyttar allereie avspelinga…",
      "Android: keeps playing with the screen locked": "Android: held fram med å spele med låst skjerm",
      "Another tab is this browser's player; this one is a remote control.": "Ei anna fane er spelaren til denne nettlesaren; denne er ein fjernkontroll.",
      "Appearance": "Utsjånad",
      "Apps": "Tenester",
      "Artist": "Artist",
      "Artists": "Artistar",
      "Artists ({count})": "Artistar ({count})",
      "Artists, albums, tracks, playlists": "Artistar, album, spor, spelelister",
      "As Lyrion Music Server ({language})": "Som Lyrion Music Server ({language})",
      "At the end of this track": "Når dette sporet er ferdig",
      "Audio": "Lyd",
      "Audio engine": "Lydmotor",
      "Audio output": "Lydutgang",
      "Automatic": "Automatisk",
      "Back": "Tilbake",
      "Back to the skin": "Tilbake til skalet",
      "Back to {skin}": "Tilbake til {skin}",
      "Blue": "Blå",
      "Browser player off": "Nettlesarspelar av",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "Nettlesarspelarar er slått av i LMS (Innstillingar › Plugins › LyrionJS). Denne sida styrer dei andre spelarane dine.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "Nettlesarspelarar er slått av i LMS (Innstillingar › Plugins › LyrionJS); denne sida er no ein fjernkontroll.",
      "Buffered": "Bufra",
      "By artist": "Etter artist",
      "By title": "Etter tittel",
      "By year": "Etter år",
      "Cancel": "Avbryt",
      "Cancel ({time} left)": "Avbryt ({time} att)",
      "Choose a player": "Vel ein spelar",
      "Clear": "Tøm",
      "Clear queue": "Tøm køen",
      "Clear the queue?": "Tømme køen?",
      "Click to enable sound in this browser": "Klikk for å slå på lyden i denne nettlesaren",
      "Close": "Lukk",
      "Close now playing": "Lukk Spelar no",
      "Composers": "Komponistar",
      "Connected (Slimproto over a WebSocket to LMS)": "Tilkopla (Slimproto over ein WebSocket til LMS)",
      "Connecting to LMS…": "Koplar til LMS…",
      "Connecting…": "Koplar til…",
      "Connection": "Tilkopling",
      "Control": "Styr",
      "Controlling": "Blir styrt",
      "Create": "Opprett",
      "Crossfade": "Krysstoning",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "Krysstoning krev at begge spora har same samplingsfrekvens; elles spelar denne nettlesaren dei utan opphald.",
      "Dark": "Mørkt",
      "Delete": "Slett",
      "Delete alarm": "Slett alarm",
      "Delete playlist": "Slett speleliste",
      "Delete this alarm?": "Slette denne alarmen?",
      "Delete “{name}”?": "Slette «{name}»?",
      "Deleted": "Sletta",
      "Disc {n}": "Disk {n}",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Slått på",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Alle spelarar LMS kjenner til, også denne nettlesaren. Synkroniser spelarar for å spele den same musikken i takt.",
      "Every time you do that, a call stack loses its wings.": "Kvar gong du gjer det, mistar ein kallstabel vengene sine.",
      "Everything LMS can search: your library, radio and installed apps": "Alt LMS kan søkje i: biblioteket ditt, radio og installerte tenester",
      "Fade in": "Ton inn",
      "Fade in and out": "Ton inn og ut",
      "Fade out": "Ton ut",
      "Favourites": "Favorittar",
      "Formats": "Format",
      "From the cover art (as Material Skin)": "Frå omslagsbiletet (som Material Skin)",
      "Genres": "Sjangrar",
      "Give this player a name": "Gi denne spelaren eit namn",
      "Go to album": "Gå til album",
      "Go to artist": "Gå til artist",
      "Gold": "Gull",
      "Green": "Grøn",
      "Highest sample rate": "Høgaste samplingsfrekvens",
      "Highlight colour": "Framhevingsfarge",
      "Home": "Heim",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "Slik blir denne nettlesaren vist i LMS og dei andre kontrollane dine. Du kan endre det når som helst i Innstillingar.",
      "LMS answered {status}": "LMS svarte {status}",
      "LMS did not answer in time": "LMS svarte ikkje i tide",
      "LMS keeps the queue topped up with random picks from your library.": "LMS fyller heile tida på køen med tilfeldige val frå biblioteket ditt.",
      "Language": "Språk",
      "Last scan": "Siste skanning",
      "Leave the group": "Forlat gruppa",
      "Library": "Bibliotek",
      "Library scan started": "Skanning av biblioteket starta",
      "Light": "Lyst",
      "Live": "Direkte",
      "Lost contact with the server: {error} — retrying…": "Mista kontakten med tenaren: {error} — prøver igjen…",
      "Lyrion Music Server is not answering at {host}.": "Lyrion Music Server svarer ikkje på {host}.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "LyrionJS spelar best i ei eiga fane: i dette vindauget stoppar det når vindauget blir lukka.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} på {os}",
      "Main": "Hovudmeny",
      "Match the system": "Følg systemet",
      "Media element (plays with the screen locked)": "Medieelement (spelar med låst skjerm)",
      "Menu": "Meny",
      "More": "Meir",
      "More about LyrionJS…": "Meir om LyrionJS…",
      "More…": "Meir…",
      "Move down": "Flytt ned",
      "Move playback to {name} from…": "Flytt avspelinga til {name} frå…",
      "Move up": "Flytt opp",
      "Moved": "Flytta",
      "Moved playback to {name}": "Avspelinga vart flytta til {name}",
      "Moving playback stopped part-way ({name} carries on): {error}": "Flyttinga av avspelinga stoppa halvvegs ({name} spelar vidare): {error}",
      "Moving {n} tracks (the first {max})…": {
        "one": "Flyttar {n} spor (dei første {max})…",
        "other": "Flyttar {n} spor (dei første {max})…"
      },
      "Moving {n} tracks…": {
        "one": "Flyttar {n} spor…",
        "other": "Flyttar {n} spor…"
      },
      "Music folder": "Musikkmappe",
      "Mute": "Stille",
      "Name": "Namn",
      "Name this player": "Gi denne spelaren eit namn",
      "Never": "Aldri",
      "New alarm on {name}": "Ny alarm på {name}",
      "New music": "Ny musikk",
      "New playlist": "Ny speleliste",
      "New playlist…": "Ny speleliste…",
      "Next": "Neste",
      "Nice try.": "Godt forsøk.",
      "No alarms on {name}.": "Ingen alarmar på {name}.",
      "No albums.": "Ingen album.",
      "No apps are installed on the server.": "Ingen tenester er installerte.",
      "No player": "Ingen spelar",
      "No player selected.": "Ingen spelar er vald.",
      "No players are connected to the server.": "Ingen spelarar er kopla til tenaren.",
      "No radio services are installed on the server.": "Ingen radiotenester er installerte.",
      "No saved playlists.": "Ingen lagra spelelister.",
      "None (gapless)": "Ingen (utan opphald)",
      "Nothing here.": "Ingenting her.",
      "Nothing in the library matches “{query}”.": "Ingenting i biblioteket samsvarer med «{query}».",
      "Nothing playing": "Ingenting blir spela",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "Ingenting blir spela. Vel noko frå biblioteket, favorittar, radio eller tenester.",
      "Nothing to add": "Ingenting å leggje til",
      "Nothing to move: {name}'s queue is empty": "Ingenting å flytte: køen på {name} er tom",
      "Now playing": "Spelar no",
      "OK": "OK",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "Ok, du vinn: no lyttar du til LyrionJS i LyrionJS i LyrionJS. (Det gjer du ikkje.)",
      "Off": "Av",
      "Open LyrionJS inside LyrionJS (please don’t)": "Opne LyrionJS i LyrionJS (ver så snill, ikkje gjer det)",
      "Open in a new tab": "Opne i ei ny fane",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "Å opne LyrionJS i LyrionJS ville opne LyrionJS i LyrionJS i LyrionJS… og så vidare, til nettlesaren går tom for tolmod, minne eller begge delar. Ver så snill og slutt å prøve å lage ei rekursjonsløkke.",
      "Opens when music starts": "Blir opna når musikken startar",
      "Orange": "Oransje",
      "Other random albums": "Andre tilfeldige album",
      "Output": "Utgang",
      "Output level": "Utgangsnivå",
      "Output level in this browser (on top of the LMS volume)": "Utgangsnivå i denne nettlesaren (i tillegg til volumet i LMS)",
      "Pause": "Pause",
      "Pick a colour": "Vel ein farge",
      "Pink": "Rosa",
      "Play": "Spel av",
      "Play folder": "Spel av mappe",
      "Play music in this browser (a real Slimproto player in LMS)": "Spel musikk i denne nettlesaren (ein ekte Slimproto-spelar i LMS)",
      "Play next": "Spel av neste",
      "Play now": "Spel av no",
      "Play now, keep the queue": "Spel av no, behald køen",
      "Play/pause": "Spel av/pause",
      "Player ID": "Spelar-ID",
      "Player controls": "Spelarkontrollar",
      "Player: {name}": "Spelar: {name}",
      "Players": "Spelarar",
      "Playing": "Spelar av",
      "Playing next": "Blir spela neste",
      "Playing shuffled": "Spelar i tilfeldig rekkjefølgje",
      "Playlist name": "Namn på speleliste",
      "Playlists": "Spelelister",
      "Plays it now (keeps the queue)": "Spelar det no (beheld køen)",
      "Plays it now (replaces the queue)": "Spelar det no (erstattar køen)",
      "Position": "Posisjon",
      "Previous": "Førre",
      "Purple": "Lilla",
      "Queue": "Kø",
      "Queue cleared": "Køen er tømd",
      "Queue folder": "Legg mappe i køen",
      "Radio": "Radio",
      "Random": "Tilfeldig",
      "Random album mix started": "Tilfeldig albummiks starta",
      "Random albums": "Tilfeldige album",
      "Random artist mix started": "Tilfeldig artistmiks starta",
      "Random mix": "Tilfeldig miks",
      "Random mix stopped": "Tilfeldig miks stoppa",
      "Random song mix started": "Tilfeldig songmiks starta",
      "Random year mix started": "Tilfeldig årsmiks starta",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. Nøgd no?",
      "Recently added": "Nyleg lagt til",
      "Recursion depth": "Rekursjonsdjupn",
      "Refresh": "Oppdater",
      "Reloading to switch the output…": "Lastar inn på nytt for å byte utgang…",
      "Remove": "Fjern",
      "Remove from favourites": "Fjern frå favorittar",
      "Remove from playlist": "Fjern frå speleliste",
      "Remove from queue": "Fjern frå køen",
      "Remove “{name}” from favourites?": "Fjerne «{name}» frå favorittar?",
      "Removed": "Fjerna",
      "Rename": "Gi nytt namn",
      "Rename favourite": "Gi favoritten nytt namn",
      "Rename playlist": "Gi spelelista nytt namn",
      "Rename this browser…": "Gi denne nettlesaren nytt namn…",
      "Rename this player": "Gi denne spelaren nytt namn",
      "Renamed": "Namnet er endra",
      "Rename…": "Gi nytt namn…",
      "Repeat": "Gjenta",
      "Repeat off": "Repetisjon av",
      "Repeat queue": "Gjenta køen",
      "Repeat song": "Gjenta song",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Lagre",
      "Save as playlist": "Lagre som speleliste",
      "Save queue as playlist": "Lagre køen som speleliste",
      "Saved": "Lagra",
      "Saved as {name}": "Lagra som {name}",
      "Scan": "Skanning",
      "Scan for new music": "Skann etter ny musikk",
      "Scanning: {step} {done}/{total}": "Skannar: {step} {done}/{total}",
      "Search": "Søk",
      "Search apps and services for “{query}”": "Søk etter «{query}» i tenester",
      "Search: {query}": "Søk: {query}",
      "Searching…": "Søkjer…",
      "Seek": "Spol",
      "Send diagnostics": "Send diagnostikk",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Send avspelingsdiagnostikk til loggen på LMS-tenaren (hjelper med å løyse problem på telefonar og nettbrett)",
      "Server": "Tenar",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Blir stilt inn med knappane på eininga (sida kan ikkje stille det inn her); volumet i LMS blir halde på 100 %",
      "Settings": "Innstillingar",
      "Show LyrionJS": "Vis LyrionJS",
      "Show the queue": "Vis køen",
      "Showing {skin}": "Viser {skin}",
      "Shows actions under it": "Viser handlingar under det",
      "Shuffle": "Tilfeldig rekkjefølgje",
      "Shuffle albums": "Tilfeldige album",
      "Shuffle off": "Tilfeldig rekkjefølgje av",
      "Shuffle songs": "Tilfeldige spor",
      "Skin": "Skal",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Skal: LyrionJS sitt eige, eller kva skal som helst som er installert på Lyrion Music Server, med denne nettlesaren framleis som spelar",
      "Sleep timer": "Kvilemodus",
      "Sleep timer off": "Kvilemodus av",
      "Sleeping after this track": "Kvilemodus etter dette sporet",
      "Sleeping in {n} minutes": {
        "one": "Kvilemodus om {n} minutt",
        "other": "Kvilemodus om {n} minutt"
      },
      "Smart gain": "Smart gain",
      "Something went wrong": "Noko gjekk gale",
      "Songs": "Songar",
      "Sort albums": "Sorter album",
      "State": "Status",
      "Still no. One of us is enough.": "Framleis nei. Éin av oss er nok.",
      "Stop mix": "Stopp miks",
      "Switch off": "Slå av",
      "Switch on": "Slå på",
      "Sync this player…": "Synkroniser denne spelaren…",
      "Sync {name} with…": "Synkroniser {name} med…",
      "Synced {name}": "{name} er synkronisert",
      "Sync…": "Synkroniser…",
      "Take me back to the music": "Ta meg tilbake til musikken",
      "Tapping a track": "Trykk på eit spor",
      "Tapping a track (search, albums, playlists, folders)": "Trykk på eit spor (søk, album, spelelister, mapper)",
      "Teal": "Blågrøn",
      "The alarm plays the current queue (or LMS's default alarm sound).": "Alarmen spelar den gjeldande køen (eller standard alarmlyd i LMS).",
      "The browser has started muttering about “maximum call stack size”.": "Nettlesaren har byrja å mumle om «maximum call stack size».",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "Medieelementet kan ikkje spele her: vel Web Audio i Innstillingar › Lydutgang.",
      "The queue is empty.": "Køen er tom.",
      "The search failed: {error}": "Søket feila: {error}",
      "Theme": "Tema",
      "This browser": "Denne nettlesaren",
      "This browser as a player": "Denne nettlesaren som spelar",
      "This browser can't play through the media element: switching to Web Audio…": "Denne nettlesaren kan ikkje spele via medieelementet: byter til Web Audio…",
      "This folder is empty.": "Denne mappa er tom.",
      "This page could not be shown: {error}": "Sida kunne ikkje visast: {error}",
      "This player is now “{name}”": "Denne spelaren heiter no «{name}»",
      "This player was taken over by another session; this page is now a remote control.": "Denne spelaren vart overteken av ei anna økt; denne sida er no ein fjernkontroll.",
      "This playlist is empty.": "Denne spelelista er tom.",
      "This tab is already playing with LyrionJS.": "Denne fana spelar allereie med LyrionJS.",
      "Time": "Tid",
      "Track gain": "Gain for spor",
      "Track {n} of {total}": "Spor {n} av {total}",
      "Tracks ({count})": "Spor ({count})",
      "Transfer playback here from…": "Flytt avspelinga hit frå…",
      "Transition between tracks": "Overgang mellom spor",
      "Transition length": "Lengd på overgang",
      "Try again": "Prøv igjen",
      "Trying again every few seconds…": "Prøver igjen med nokre sekunds mellomrom…",
      "Type at least two letters.": "Skriv minst to bokstavar.",
      "Unknown": "Ukjend",
      "Unmute": "Slå på lyden",
      "Unsynced": "Synkronisering oppheva",
      "Unsynced {name}": "Synkroniseringa av {name} er oppheva",
      "Use it here": "Bruk her",
      "Use this browser as a player": "Bruk denne nettlesaren som spelar",
      "Version": "Versjon",
      "Volume": "Volum",
      "Volume levelling (ReplayGain)": "Volumjustering (ReplayGain)",
      "Volume of {name}": "Volum for {name}",
      "Web Audio (lowest latency)": "Web Audio (lågast forseinking)",
      "Web Audio (opens when music starts)": "Web Audio (blir opna når musikken startar)",
      "Web Audio, opens when music starts": "Web Audio, blir opna når musikken startar",
      "We’ve told LMS. It isn’t angry, just disappointed.": "Vi har sagt frå til LMS. Han er ikkje sint, berre skuffa.",
      "What it is": "Kva det er",
      "When the queue ends (Don't Stop The Music)": "Når køen er slutt (Don't Stop The Music)",
      "Which artists": "Kva artistar",
      "Whoa there. You’re already in LyrionJS.": "Roleg no. Du er allereie i LyrionJS.",
      "Why": "Kvifor",
      "Years": "År",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "Nettlesaren din, som ein ekte Lyrion-spelar. Trykk på spegelen viss du absolutt må.",
      "Your own colour": "Eigen farge",
      "by": "av",
      "chosen in Settings": "valt i Innstillingar",
      "closed": "lukka",
      "decoding {format}": "dekodar {format}",
      "desktop browser": "nettlesar på datamaskin",
      "disconnected": "fråkopla",
      "e.g. Kitchen tablet": "t.d. Nettbrett på kjøkenet",
      "from": "frå",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad: held fram med å spele med låst skjerm",
      "interrupted": "avbroten",
      "loaded": "lasta inn",
      "off": "av",
      "once": "éin gong",
      "paused": "pausa",
      "playing": "spelar",
      "repeats": "blir gjenteken",
      "running": "køyrer",
      "stopped": "stoppa",
      "suspended": "sett på pause",
      "synced with {names}": "synkronisert med {names}",
      "the media element failed here before": "medieelementet har feila her før",
      "this browser cannot play FLAC through a media element": "denne nettlesaren kan ikkje spele FLAC via eit medieelement",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "denne nettlesaren kan ikkje spele FLAC via eit medieelement (krev iOS 17.1 eller nyare); hald skjermen på",
      "volume {volume}": "volum {volume}",
      "waiting": "ventar",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (LMS konverterer alt anna til FLAC)",
      "{name} (this browser)": "{name} (denne nettlesaren)",
      "{n} albums": {
        "one": "{n} album",
        "other": "{n} album"
      },
      "{n} artists": {
        "one": "{n} artist",
        "other": "{n} artistar"
      },
      "{n} minutes": {
        "one": "{n} minutt",
        "other": "{n} minutt"
      },
      "{n} of {total}": "{n} av {total}",
      "{n} tracks": {
        "one": "{n} spor",
        "other": "{n} spor"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, ~{latency} ms forseinking",
      "{seconds} s decoded ahead": "{seconds} s dekoda på førehand",
      "{setting} saved": "{setting} lagra",
      "{skin} (the server's)": "{skin} (tenaren sitt)",
      "“{name}” already exists. Add to it?": "«{name}» finst allereie. Legg til i ho?"
    },
    "pl": {
      "(plain http page)": "(zwykła strona http)",
      "(the first {shown} shown)": "(pokazano pierwszych {shown})",
      "1, and we’d like to keep it that way": "1 i niech tak zostanie",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "Odtwarzacz Slimproto i pilot do Lyrion Music Server, działające w całości na tej stronie.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "Odtwarzacz Slimproto i kontroler Lyrion Music Server na jednej stronie. Klawiatura: spacja odtwórz/wstrzymaj, ←/→ poprzedni/następny, ↑/↓ głośność, M wycisz.",
      "A new version of LyrionJS is ready — reload": "Nowa wersja LyrionJS jest gotowa — odśwież",
      "A remote control (not a player)": "Pilot (nie odtwarzacz)",
      "About": "O programie",
      "About LyrionJS": "O LyrionJS",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Osiągnięcie odblokowane: Uroboros. A teraz idź posłuchać muzyki.",
      "Actions to show": "Wyświetlane akcje",
      "Add alarm": "Dodaj budzik",
      "Add album to playlist…": "Dodaj album do listy odtwarzania…",
      "Add to favourites": "Dodaj do ulubionych",
      "Add to it": "Dodaj do niej",
      "Add to playlist": "Dodaj do listy odtwarzania",
      "Add to playlist…": "Dodaj do listy odtwarzania…",
      "Add to queue": "Dodaj do kolejki",
      "Added to favourites": "Dodano do ulubionych",
      "Added to the queue": "Dodano do kolejki",
      "Added to {name}": "Dodano do listy {name}",
      "Alarm deleted": "Usunięto budzik",
      "Alarm set": "Ustawiono budzik",
      "Alarms": "Budziki",
      "Alarms enabled": "Budziki włączone",
      "Alarms enabled on this player": "Budziki włączone w tym odtwarzaczu",
      "Alarms off": "Budziki wyłączone",
      "Alarms on": "Budziki włączone",
      "Album": "Album",
      "Album artists": "Wykonawcy albumów",
      "Album gain": "Wzmocnienie albumu",
      "Albums": "Albumy",
      "Albums ({count})": "Albumy ({count})",
      "All artists": "Wszyscy wykonawcy",
      "All options…": "Wszystkie opcje…",
      "All players": "Wszystkie odtwarzacze",
      "Already moving playback…": "Odtwarzanie jest już przenoszone…",
      "Android: keeps playing with the screen locked": "Android: gra przy zablokowanym ekranie",
      "Another tab is this browser's player; this one is a remote control.": "Odtwarzaczem tej przeglądarki jest inna karta; ta służy jako pilot.",
      "Appearance": "Wygląd",
      "Apps": "Aplikacje",
      "Artist": "Wykonawca",
      "Artists": "Wykonawcy",
      "Artists ({count})": "Wykonawcy ({count})",
      "Artists, albums, tracks, playlists": "Wykonawcy, albumy, utwory, listy odtwarzania",
      "As Lyrion Music Server ({language})": "Jak w Lyrion Music Server ({language})",
      "At the end of this track": "Po zakończeniu tego utworu",
      "Audio": "Dźwięk",
      "Audio engine": "Silnik dźwięku",
      "Audio output": "Wyjście audio",
      "Automatic": "Automatycznie",
      "Back": "Wstecz",
      "Back to the skin": "Wróć do skórki",
      "Back to {skin}": "Wróć do {skin}",
      "Blue": "Niebieski",
      "Browser player off": "Odtwarzacz w przeglądarce wyłączony",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "Odtwarzacze w przeglądarce są wyłączone w LMS (Ustawienia › Wtyczki › LyrionJS). Ta strona steruje twoimi pozostałymi odtwarzaczami.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "Odtwarzacze w przeglądarce są wyłączone w LMS (Ustawienia › Wtyczki › LyrionJS); ta strona działa teraz jako pilot.",
      "Buffered": "Bufor",
      "By artist": "Według wykonawcy",
      "By title": "Według tytułu",
      "By year": "Według roku",
      "Cancel": "Anuluj",
      "Cancel ({time} left)": "Anuluj (zostało {time})",
      "Choose a player": "Wybierz odtwarzacz",
      "Clear": "Wyczyść",
      "Clear queue": "Wyczyść kolejkę",
      "Clear the queue?": "Wyczyścić kolejkę?",
      "Click to enable sound in this browser": "Kliknij, aby włączyć dźwięk w tej przeglądarce",
      "Close": "Zamknij",
      "Close now playing": "Zamknij „Teraz odtwarzane”",
      "Composers": "Kompozytorzy",
      "Connected (Slimproto over a WebSocket to LMS)": "Połączono (Slimproto przez WebSocket z LMS)",
      "Connecting to LMS…": "Łączenie z LMS…",
      "Connecting…": "Łączenie…",
      "Connection": "Połączenie",
      "Control": "Steruj",
      "Controlling": "Sterowany",
      "Create": "Utwórz",
      "Crossfade": "Przenikanie",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "Przenikanie wymaga, by oba utwory miały tę samą częstotliwość próbkowania; w przeciwnym razie ta przeglądarka odtwarza je bez przerwy.",
      "Dark": "Ciemny",
      "Delete": "Usuń",
      "Delete alarm": "Usuń budzik",
      "Delete playlist": "Usuń listę odtwarzania",
      "Delete this alarm?": "Usunąć ten budzik?",
      "Delete “{name}”?": "Usunąć „{name}”?",
      "Deleted": "Usunięto",
      "Disc {n}": "Dysk {n}",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Włączony",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Wszystkie odtwarzacze znane LMS, w tym ta przeglądarka. Zsynchronizuj odtwarzacze, aby grały tę samą muzykę równocześnie.",
      "Every time you do that, a call stack loses its wings.": "Za każdym razem, gdy to robisz, gdzieś płacze jeden stos wywołań.",
      "Everything LMS can search: your library, radio and installed apps": "Wszystko, co LMS potrafi przeszukać: twoja biblioteka, radio i zainstalowane aplikacje",
      "Fade in": "Płynne wejście",
      "Fade in and out": "Płynne wejście i wyjście",
      "Fade out": "Płynne wyjście",
      "Favourites": "Ulubione",
      "Formats": "Formaty",
      "From the cover art (as Material Skin)": "Z okładki (jak w Material Skin)",
      "Genres": "Gatunki",
      "Give this player a name": "Nadaj nazwę temu odtwarzaczowi",
      "Go to album": "Przejdź do albumu",
      "Go to artist": "Przejdź do wykonawcy",
      "Gold": "Złoty",
      "Green": "Zielony",
      "Highest sample rate": "Najwyższa częstotliwość próbkowania",
      "Highlight colour": "Kolor wyróżnienia",
      "Home": "Start",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "Pod tą nazwą przeglądarka będzie widoczna w LMS i w innych twoich kontrolerach. Możesz ją zmienić w każdej chwili w ustawieniach.",
      "LMS answered {status}": "LMS odpowiedział: {status}",
      "LMS did not answer in time": "LMS nie odpowiedział na czas",
      "LMS keeps the queue topped up with random picks from your library.": "LMS uzupełnia kolejkę losowo wybranymi utworami z twojej biblioteki.",
      "Language": "Język",
      "Last scan": "Ostatnie skanowanie",
      "Leave the group": "Opuść grupę",
      "Library": "Biblioteka",
      "Library scan started": "Rozpoczęto skanowanie biblioteki",
      "Light": "Jasny",
      "Live": "Na żywo",
      "Lost contact with the server: {error} — retrying…": "Utracono połączenie z serwerem: {error} — ponawianie…",
      "Lyrion Music Server is not answering at {host}.": "Lyrion Music Server nie odpowiada pod adresem {host}.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "LyrionJS działa najlepiej we własnej karcie: w tym oknie przestanie grać po zamknięciu okna.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} na {os}",
      "Main": "Główne",
      "Match the system": "Jak w systemie",
      "Media element (plays with the screen locked)": "Element multimedialny (gra przy zablokowanym ekranie)",
      "Menu": "Menu",
      "More": "Więcej",
      "More about LyrionJS…": "Więcej o LyrionJS…",
      "More…": "Więcej…",
      "Move down": "Przesuń w dół",
      "Move playback to {name} from…": "Przenieś odtwarzanie na odtwarzacz {name} z…",
      "Move up": "Przesuń w górę",
      "Moved": "Przeniesiono",
      "Moved playback to {name}": "Przeniesiono odtwarzanie na odtwarzacz {name}",
      "Moving playback stopped part-way ({name} carries on): {error}": "Przenoszenie odtwarzania przerwane w trakcie ({name} gra dalej): {error}",
      "Moving {n} tracks (the first {max})…": {
        "few": "Przenoszenie {n} utworów (pierwszych {max})…",
        "many": "Przenoszenie {n} utworów (pierwszych {max})…",
        "one": "Przenoszenie jednego utworu (pierwszych {max})…",
        "other": "Przenoszenie {n} utworu (pierwszych {max})…"
      },
      "Moving {n} tracks…": {
        "few": "Przenoszenie {n} utworów…",
        "many": "Przenoszenie {n} utworów…",
        "one": "Przenoszenie jednego utworu…",
        "other": "Przenoszenie {n} utworu…"
      },
      "Music folder": "Folder muzyki",
      "Mute": "Wycisz",
      "Name": "Nazwa",
      "Name this player": "Nazwij ten odtwarzacz",
      "Never": "Nigdy",
      "New alarm on {name}": "Nowy budzik w odtwarzaczu {name}",
      "New music": "Nowa muzyka",
      "New playlist": "Nowa lista odtwarzania",
      "New playlist…": "Nowa lista odtwarzania…",
      "Next": "Następny",
      "Nice try.": "Niezła próba.",
      "No alarms on {name}.": "Brak budzików w odtwarzaczu {name}.",
      "No albums.": "Brak albumów.",
      "No apps are installed on the server.": "Na serwerze nie zainstalowano żadnych aplikacji.",
      "No player": "Brak odtwarzacza",
      "No player selected.": "Nie wybrano odtwarzacza.",
      "No players are connected to the server.": "Do serwera nie jest podłączony żaden odtwarzacz.",
      "No radio services are installed on the server.": "Na serwerze nie zainstalowano żadnych usług radiowych.",
      "No saved playlists.": "Brak zapisanych list odtwarzania.",
      "None (gapless)": "Brak (bez przerwy)",
      "Nothing here.": "Nic tu nie ma.",
      "Nothing in the library matches “{query}”.": "Nic w bibliotece nie pasuje do „{query}”.",
      "Nothing playing": "Nic nie gra",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "Nic nie gra. Wybierz coś z biblioteki, ulubionych, radia lub aplikacji.",
      "Nothing to add": "Nie ma nic do dodania",
      "Nothing to move: {name}'s queue is empty": "Nie ma czego przenieść: kolejka odtwarzacza {name} jest pusta",
      "Now playing": "Teraz odtwarzane",
      "OK": "OK",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "Dobra, wygrana twoja: słuchasz teraz LyrionJS w LyrionJS w LyrionJS. (Nieprawda.)",
      "Off": "Wyłączone",
      "Open LyrionJS inside LyrionJS (please don’t)": "Otwórz LyrionJS w LyrionJS (lepiej nie)",
      "Open in a new tab": "Otwórz w nowej karcie",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "Otwarcie LyrionJS w LyrionJS otworzyłoby LyrionJS w LyrionJS w LyrionJS… i tak dalej, aż twojej przeglądarce zabraknie cierpliwości, pamięci albo jednego i drugiego. Przestań, proszę, próbować wywołać nieskończoną rekurencję.",
      "Opens when music starts": "Uruchamia się, gdy zacznie grać muzyka",
      "Orange": "Pomarańczowy",
      "Other random albums": "Inne losowe albumy",
      "Output": "Wyjście",
      "Output level": "Poziom wyjścia",
      "Output level in this browser (on top of the LMS volume)": "Poziom wyjścia w tej przeglądarce (niezależnie od głośności LMS)",
      "Pause": "Wstrzymaj",
      "Pick a colour": "Wybierz kolor",
      "Pink": "Różowy",
      "Play": "Odtwórz",
      "Play folder": "Odtwórz folder",
      "Play music in this browser (a real Slimproto player in LMS)": "Odtwarzaj muzykę w tej przeglądarce (prawdziwy odtwarzacz Slimproto w LMS)",
      "Play next": "Odtwórz jako następny",
      "Play now": "Odtwórz teraz",
      "Play now, keep the queue": "Odtwórz teraz, zachowaj kolejkę",
      "Play/pause": "Odtwórz/wstrzymaj",
      "Player ID": "ID odtwarzacza",
      "Player controls": "Sterowanie odtwarzaczem",
      "Player: {name}": "Odtwarzacz: {name}",
      "Players": "Odtwarzacze",
      "Playing": "Odtwarzanie",
      "Playing next": "Zagra jako następny",
      "Playing shuffled": "Odtwarzanie losowe",
      "Playlist name": "Nazwa listy odtwarzania",
      "Playlists": "Listy odtwarzania",
      "Plays it now (keeps the queue)": "Odtwarza go od razu (zachowuje kolejkę)",
      "Plays it now (replaces the queue)": "Odtwarza go od razu (zastępuje kolejkę)",
      "Position": "Pozycja",
      "Previous": "Poprzedni",
      "Purple": "Fioletowy",
      "Queue": "Kolejka",
      "Queue cleared": "Wyczyszczono kolejkę",
      "Queue folder": "Dodaj folder do kolejki",
      "Radio": "Radio",
      "Random": "Losowo",
      "Random album mix started": "Rozpoczęto składankę albumów",
      "Random albums": "Losowe albumy",
      "Random artist mix started": "Rozpoczęto składankę z różnych wykonawców",
      "Random mix": "Składanka losowa",
      "Random mix stopped": "Zatrzymano składankę losową",
      "Random song mix started": "Rozpoczęto składankę utworów",
      "Random year mix started": "Rozpoczęto składankę z różnych lat",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. I co, warto było?",
      "Recently added": "Ostatnio dodane",
      "Recursion depth": "Głębokość rekurencji",
      "Refresh": "Odśwież",
      "Reloading to switch the output…": "Przeładowywanie, aby zmienić wyjście…",
      "Remove": "Usuń",
      "Remove from favourites": "Usuń z ulubionych",
      "Remove from playlist": "Usuń z listy odtwarzania",
      "Remove from queue": "Usuń z kolejki",
      "Remove “{name}” from favourites?": "Usunąć „{name}” z ulubionych?",
      "Removed": "Usunięto",
      "Rename": "Zmień nazwę",
      "Rename favourite": "Zmień nazwę ulubionego",
      "Rename playlist": "Zmień nazwę listy odtwarzania",
      "Rename this browser…": "Zmień nazwę tej przeglądarki…",
      "Rename this player": "Zmień nazwę tego odtwarzacza",
      "Renamed": "Zmieniono nazwę",
      "Rename…": "Zmień nazwę…",
      "Repeat": "Powtórz",
      "Repeat off": "Powtarzanie wyłączone",
      "Repeat queue": "Powtórz kolejkę",
      "Repeat song": "Powtórz utwór",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Zapisz",
      "Save as playlist": "Zapisz jako listę odtwarzania",
      "Save queue as playlist": "Zapisz kolejkę jako listę odtwarzania",
      "Saved": "Zapisano",
      "Saved as {name}": "Zapisano jako {name}",
      "Scan": "Skanowanie",
      "Scan for new music": "Wyszukaj nową muzykę",
      "Scanning: {step} {done}/{total}": "Skanowanie: {step} {done}/{total}",
      "Search": "Szukaj",
      "Search apps and services for “{query}”": "Szukaj „{query}” w aplikacjach i usługach",
      "Search: {query}": "Szukaj: {query}",
      "Searching…": "Wyszukiwanie…",
      "Seek": "Przewiń",
      "Send diagnostics": "Wysyłaj diagnostykę",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Wysyłaj diagnostykę odtwarzania do dziennika serwera LMS (pomaga rozwiązywać problemy na telefonach i tabletach)",
      "Server": "Serwer",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Ustawiany przyciskami tego urządzenia (strona nie może go tu zmienić); głośność LMS pozostaje na 100 %",
      "Settings": "Ustawienia",
      "Show LyrionJS": "Pokaż LyrionJS",
      "Show the queue": "Pokaż kolejkę",
      "Showing {skin}": "Widok: {skin}",
      "Shows actions under it": "Pokazuje akcje pod nim",
      "Shuffle": "Losowo",
      "Shuffle albums": "Losowo według albumów",
      "Shuffle off": "Odtwarzanie losowe wyłączone",
      "Shuffle songs": "Losowo według utworów",
      "Skin": "Skórka",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Skórka: własna LyrionJS lub dowolna zainstalowana na twoim Lyrion Music Server, a ta przeglądarka nadal jest odtwarzaczem",
      "Sleep timer": "Uśpienie",
      "Sleep timer off": "Uśpienie wyłączone",
      "Sleeping after this track": "Uśpienie po tym utworze",
      "Sleeping in {n} minutes": {
        "few": "Uśpienie za {n} minuty",
        "many": "Uśpienie za {n} minut",
        "one": "Uśpienie za minutę",
        "other": "Uśpienie za {n} minuty"
      },
      "Smart gain": "Inteligentne wzmocnienie",
      "Something went wrong": "Coś poszło nie tak",
      "Songs": "Utwory",
      "Sort albums": "Sortuj albumy",
      "State": "Stan",
      "Still no. One of us is enough.": "Nadal nie. Jeden z nas wystarczy.",
      "Stop mix": "Zatrzymaj składankę",
      "Switch off": "Wyłącz",
      "Switch on": "Włącz",
      "Sync this player…": "Synchronizuj ten odtwarzacz…",
      "Sync {name} with…": "{name}: synchronizuj z…",
      "Synced {name}": "Zsynchronizowano: {name}",
      "Sync…": "Synchronizuj…",
      "Take me back to the music": "Wróć do muzyki",
      "Tapping a track": "Stuknięcie utworu",
      "Tapping a track (search, albums, playlists, folders)": "Stuknięcie utworu (wyszukiwanie, albumy, playlisty, foldery)",
      "Teal": "Morski",
      "The alarm plays the current queue (or LMS's default alarm sound).": "Budzik odtwarza bieżącą kolejkę (lub domyślny dźwięk budzika LMS).",
      "The browser has started muttering about “maximum call stack size”.": "Przeglądarka zaczęła mamrotać coś o „maximum call stack size”.",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "Element multimedialny nie może tu odtwarzać: wybierz Web Audio w Ustawienia › Wyjście audio.",
      "The queue is empty.": "Kolejka jest pusta.",
      "The search failed: {error}": "Wyszukiwanie nie powiodło się: {error}",
      "Theme": "Motyw",
      "This browser": "Ta przeglądarka",
      "This browser as a player": "Ta przeglądarka jako odtwarzacz",
      "This browser can't play through the media element: switching to Web Audio…": "Ta przeglądarka nie może odtwarzać przez element multimedialny: przełączanie na Web Audio…",
      "This folder is empty.": "Ten folder jest pusty.",
      "This page could not be shown: {error}": "Nie można wyświetlić tej strony: {error}",
      "This player is now “{name}”": "Ten odtwarzacz nazywa się teraz „{name}”",
      "This player was taken over by another session; this page is now a remote control.": "Ten odtwarzacz został przejęty przez inną sesję; ta strona działa teraz jako pilot.",
      "This playlist is empty.": "Ta lista odtwarzania jest pusta.",
      "This tab is already playing with LyrionJS.": "Ta karta już odtwarza muzykę przez LyrionJS.",
      "Time": "Godzina",
      "Track gain": "Wzmocnienie utworu",
      "Track {n} of {total}": "Utwór {n} z {total}",
      "Tracks ({count})": "Utwory ({count})",
      "Transfer playback here from…": "Przenieś tu odtwarzanie z…",
      "Transition between tracks": "Przejście między utworami",
      "Transition length": "Długość przejścia",
      "Try again": "Spróbuj ponownie",
      "Trying again every few seconds…": "Ponawianie co kilka sekund…",
      "Type at least two letters.": "Wpisz co najmniej dwie litery.",
      "Unknown": "Nieznany",
      "Unmute": "Wyłącz wyciszenie",
      "Unsynced": "Odłączono od grupy",
      "Unsynced {name}": "Odłączono od grupy: {name}",
      "Use it here": "Użyj tutaj",
      "Use this browser as a player": "Używaj tej przeglądarki jako odtwarzacza",
      "Version": "Wersja",
      "Volume": "Głośność",
      "Volume levelling (ReplayGain)": "Wyrównywanie głośności (ReplayGain)",
      "Volume of {name}": "Głośność: {name}",
      "Web Audio (lowest latency)": "Web Audio (najniższe opóźnienie)",
      "Web Audio (opens when music starts)": "Web Audio (uruchamia się, gdy zacznie grać muzyka)",
      "Web Audio, opens when music starts": "Web Audio, uruchamia się, gdy zacznie grać muzyka",
      "We’ve told LMS. It isn’t angry, just disappointed.": "Powiedzieliśmy LMS. Nie jest zły, tylko rozczarowany.",
      "What it is": "Co to jest",
      "When the queue ends (Don't Stop The Music)": "Gdy kolejka się skończy (Don't Stop The Music)",
      "Which artists": "Którzy wykonawcy",
      "Whoa there. You’re already in LyrionJS.": "Hola, hola. Już jesteś w LyrionJS.",
      "Why": "Dlaczego",
      "Years": "Lata",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "Twoja przeglądarka jako prawdziwy odtwarzacz Lyrion. Stuknij w lustro, jeśli musisz.",
      "Your own colour": "Własny kolor",
      "by": "wyk.",
      "chosen in Settings": "wybrane w ustawieniach",
      "closed": "zamknięte",
      "decoding {format}": "dekodowanie {format}",
      "desktop browser": "przeglądarka na komputerze",
      "disconnected": "rozłączony",
      "e.g. Kitchen tablet": "np. Tablet w kuchni",
      "from": "z",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad: gra przy zablokowanym ekranie",
      "interrupted": "przerwane",
      "loaded": "załadowany",
      "off": "wyłączony",
      "once": "jednorazowo",
      "paused": "wstrzymany",
      "playing": "odtwarza",
      "repeats": "powtarzany",
      "running": "działa",
      "stopped": "zatrzymany",
      "suspended": "wstrzymane",
      "synced with {names}": "zsynchronizowany z: {names}",
      "the media element failed here before": "element multimedialny zawiódł tu już wcześniej",
      "this browser cannot play FLAC through a media element": "ta przeglądarka nie odtwarza FLAC przez element multimedialny",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "ta przeglądarka nie odtwarza FLAC przez element multimedialny (wymagany iOS 17.1 lub nowszy); nie wyłączaj ekranu",
      "volume {volume}": "głośność {volume}",
      "waiting": "oczekuje",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (LMS konwertuje wszystko inne do FLAC)",
      "{name} (this browser)": "{name} (ta przeglądarka)",
      "{n} albums": {
        "few": "{n} albumy",
        "many": "{n} albumów",
        "one": "{n} album",
        "other": "{n} albumu"
      },
      "{n} artists": {
        "few": "{n} wykonawcy",
        "many": "{n} wykonawców",
        "one": "{n} wykonawca",
        "other": "{n} wykonawcy"
      },
      "{n} minutes": {
        "few": "{n} minuty",
        "many": "{n} minut",
        "one": "{n} minuta",
        "other": "{n} minuty"
      },
      "{n} of {total}": "{n} z {total}",
      "{n} tracks": {
        "few": "{n} utwory",
        "many": "{n} utworów",
        "one": "{n} utwór",
        "other": "{n} utworu"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, opóźnienie ~{latency} ms",
      "{seconds} s decoded ahead": "zdekodowano {seconds} s naprzód",
      "{setting} saved": "Zapisano: {setting}",
      "{skin} (the server's)": "{skin} (serwera)",
      "“{name}” already exists. Add to it?": "„{name}” już istnieje. Dodać do niej?"
    },
    "sv": {
      "(plain http page)": "(vanlig http-sida)",
      "(the first {shown} shown)": "(de första {shown} visas)",
      "1, and we’d like to keep it that way": "1, och så vill vi att det förblir",
      "A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.": "En Slimproto-spelare och en fjärrkontroll för Lyrion Music Server, som körs helt i den här sidan.",
      "A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.": "En Slimproto-spelare och kontroll för Lyrion Music Server på en sida. Tangentbord: mellanslag spela/paus, ←/→ föregående/nästa, ↑/↓ volym, M ljud av.",
      "A new version of LyrionJS is ready — reload": "En ny version av LyrionJS finns — ladda om",
      "A remote control (not a player)": "En fjärrkontroll (inte en spelare)",
      "About": "Om",
      "About LyrionJS": "Om LyrionJS",
      "Achievement unlocked: Ouroboros. Now go and play some music.": "Prestation upplåst: Ouroboros. Gå nu och spela lite musik.",
      "Actions to show": "Åtgärder som visas",
      "Add alarm": "Lägg till alarm",
      "Add album to playlist…": "Lägg till album i spellista…",
      "Add to favourites": "Lägg till i favoriter",
      "Add to it": "Lägg till",
      "Add to playlist": "Lägg till i spellista",
      "Add to playlist…": "Lägg till i spellista…",
      "Add to queue": "Lägg till i kön",
      "Added to favourites": "Tillagt i favoriter",
      "Added to the queue": "Tillagt i kön",
      "Added to {name}": "Tillagt i {name}",
      "Alarm deleted": "Alarmet togs bort",
      "Alarm set": "Alarmet är inställt",
      "Alarms": "Alarm",
      "Alarms enabled": "Alarm aktiverade",
      "Alarms enabled on this player": "Alarm aktiverade på den här spelaren",
      "Alarms off": "Alarm av",
      "Alarms on": "Alarm på",
      "Album": "Album",
      "Album artists": "Albumartister",
      "Album gain": "Volymutjämning av album",
      "Albums": "Album",
      "Albums ({count})": "Album ({count})",
      "All artists": "Alla artister",
      "All options…": "Alla alternativ…",
      "All players": "Alla spelare",
      "Already moving playback…": "Flyttar redan uppspelningen…",
      "Android: keeps playing with the screen locked": "Android: fortsätter spela med skärmen låst",
      "Another tab is this browser's player; this one is a remote control.": "En annan flik är den här webbläsarens spelare; den här är en fjärrkontroll.",
      "Appearance": "Utseende",
      "Apps": "Program",
      "Artist": "Artist",
      "Artists": "Artister",
      "Artists ({count})": "Artister ({count})",
      "Artists, albums, tracks, playlists": "Artister, album, spår, spellistor",
      "As Lyrion Music Server ({language})": "Som Lyrion Music Server ({language})",
      "At the end of this track": "När det här spåret tar slut",
      "Audio": "Ljud",
      "Audio engine": "Ljudmotor",
      "Audio output": "Ljudutgång",
      "Automatic": "Automatisk",
      "Back": "Tillbaka",
      "Back to the skin": "Tillbaka till skalet",
      "Back to {skin}": "Tillbaka till {skin}",
      "Blue": "Blå",
      "Browser player off": "Webbläsarspelare av",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.": "Webbläsarspelare är avstängda i LMS (Inställningar › Plugins › LyrionJS). Den här sidan styr dina andra spelare.",
      "Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.": "Webbläsarspelare är avstängda i LMS (Inställningar › Plugins › LyrionJS); den här sidan är nu en fjärrkontroll.",
      "Buffered": "Buffrat",
      "By artist": "Efter artist",
      "By title": "Efter titel",
      "By year": "Efter år",
      "Cancel": "Avbryt",
      "Cancel ({time} left)": "Avbryt ({time} kvar)",
      "Choose a player": "Välj en spelare",
      "Clear": "Rensa",
      "Clear queue": "Rensa kön",
      "Clear the queue?": "Rensa kön?",
      "Click to enable sound in this browser": "Klicka för att slå på ljudet i den här webbläsaren",
      "Close": "Stäng",
      "Close now playing": "Stäng Nu spelas",
      "Composers": "Kompositörer",
      "Connected (Slimproto over a WebSocket to LMS)": "Ansluten (Slimproto över en WebSocket till LMS)",
      "Connecting to LMS…": "Ansluter till LMS…",
      "Connecting…": "Ansluter…",
      "Connection": "Anslutning",
      "Control": "Styr",
      "Controlling": "Styrs",
      "Create": "Skapa",
      "Crossfade": "Korstoning",
      "Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.": "Korstoning kräver att båda spåren har samma samplingsfrekvens; annars spelar den här webbläsaren dem utan uppehåll.",
      "Dark": "Mörkt",
      "Delete": "Ta bort",
      "Delete alarm": "Ta bort alarm",
      "Delete playlist": "Ta bort spellista",
      "Delete this alarm?": "Ta bort det här alarmet?",
      "Delete “{name}”?": "Ta bort ”{name}”?",
      "Deleted": "Borttagen",
      "Disc {n}": "Skiva {n}",
      "Don't Stop The Music": "Don't Stop The Music",
      "Enabled": "Aktiverat",
      "Every player LMS knows, including this browser. Sync players to play the same music in step.": "Alla spelare som LMS känner till, inklusive den här webbläsaren. Synkronisera spelare för att spela samma musik i takt.",
      "Every time you do that, a call stack loses its wings.": "Varje gång du gör så där tappar en anropsstack vingarna.",
      "Everything LMS can search: your library, radio and installed apps": "Allt LMS kan söka i: ditt bibliotek, radio och installerade program",
      "Fade in": "Tona in",
      "Fade in and out": "Tona in och ut",
      "Fade out": "Tona ut",
      "Favourites": "Favoriter",
      "Formats": "Format",
      "From the cover art (as Material Skin)": "Från omslagsbilden (som Material Skin)",
      "Genres": "Genrer",
      "Give this player a name": "Ge den här spelaren ett namn",
      "Go to album": "Gå till album",
      "Go to artist": "Gå till artist",
      "Gold": "Guld",
      "Green": "Grön",
      "Highest sample rate": "Högsta samplingsfrekvens",
      "Highlight colour": "Accentfärg",
      "Home": "Hem",
      "How this browser shows in LMS and your other controllers. Change it any time in Settings.": "Så här visas den här webbläsaren i LMS och dina andra kontroller. Du kan ändra det när som helst i Inställningar.",
      "LMS answered {status}": "LMS svarade {status}",
      "LMS did not answer in time": "LMS svarade inte i tid",
      "LMS keeps the queue topped up with random picks from your library.": "LMS fyller hela tiden på kön med slumpmässiga val ur ditt bibliotek.",
      "Language": "Språk",
      "Last scan": "Senaste genomsökning",
      "Leave the group": "Lämna gruppen",
      "Library": "Bibliotek",
      "Library scan started": "Genomsökning av biblioteket har startat",
      "Light": "Ljust",
      "Live": "Live",
      "Lost contact with the server: {error} — retrying…": "Tappade kontakten med servern: {error} — försöker igen…",
      "Lyrion Music Server is not answering at {host}.": "Lyrion Music Server svarar inte på {host}.",
      "LyrionJS plays best in a tab of its own: in this window it stops when the window closes.": "LyrionJS spelar bäst i en egen flik: i det här fönstret slutar det spela när fönstret stängs.",
      "LyrionJS {browser} on {os}": "LyrionJS {browser} på {os}",
      "Main": "Huvudmeny",
      "Match the system": "Följ systemet",
      "Media element (plays with the screen locked)": "Mediaelement (spelar med skärmen låst)",
      "Menu": "Meny",
      "More": "Mer",
      "More about LyrionJS…": "Mer om LyrionJS…",
      "More…": "Mer…",
      "Move down": "Flytta ner",
      "Move playback to {name} from…": "Flytta uppspelningen till {name} från…",
      "Move up": "Flytta upp",
      "Moved": "Flyttat",
      "Moved playback to {name}": "Uppspelningen flyttades till {name}",
      "Moving playback stopped part-way ({name} carries on): {error}": "Flytten av uppspelningen avbröts halvvägs ({name} spelar vidare): {error}",
      "Moving {n} tracks (the first {max})…": {
        "one": "Flyttar {n} spår (de första {max})…",
        "other": "Flyttar {n} spår (de första {max})…"
      },
      "Moving {n} tracks…": {
        "one": "Flyttar {n} spår…",
        "other": "Flyttar {n} spår…"
      },
      "Music folder": "Musikmapp",
      "Mute": "Ljud av",
      "Name": "Namn",
      "Name this player": "Namnge den här spelaren",
      "Never": "Aldrig",
      "New alarm on {name}": "Nytt alarm på {name}",
      "New music": "Ny musik",
      "New playlist": "Ny spellista",
      "New playlist…": "Ny spellista…",
      "Next": "Nästa",
      "Nice try.": "Snyggt försök.",
      "No alarms on {name}.": "Inga alarm på {name}.",
      "No albums.": "Inga album.",
      "No apps are installed on the server.": "Inga program är installerade på servern.",
      "No player": "Ingen spelare",
      "No player selected.": "Ingen spelare vald.",
      "No players are connected to the server.": "Inga spelare är anslutna till servern.",
      "No radio services are installed on the server.": "Inga radiotjänster är installerade på servern.",
      "No saved playlists.": "Inga sparade spellistor.",
      "None (gapless)": "Ingen (utan uppehåll)",
      "Nothing here.": "Här finns inget.",
      "Nothing in the library matches “{query}”.": "Inget i biblioteket matchar ”{query}”.",
      "Nothing playing": "Inget spelas",
      "Nothing playing. Pick something from the library, favourites, radio or apps.": "Inget spelas. Välj något från biblioteket, favoriter, radio eller program.",
      "Nothing to add": "Inget att lägga till",
      "Nothing to move: {name}'s queue is empty": "Inget att flytta: kön på {name} är tom",
      "Now playing": "Nu spelas",
      "OK": "OK",
      "OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)": "Okej, du vinner: nu lyssnar du på LyrionJS i LyrionJS i LyrionJS. (Det gör du inte.)",
      "Off": "Av",
      "Open LyrionJS inside LyrionJS (please don’t)": "Öppna LyrionJS i LyrionJS (snälla, låt bli)",
      "Open in a new tab": "Öppna i en ny flik",
      "Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.": "Att öppna LyrionJS i LyrionJS skulle öppna LyrionJS i LyrionJS i LyrionJS… och så vidare, tills webbläsaren får slut på tålamod, minne eller båda. Sluta försöka skapa en rekursionsloop, tack.",
      "Opens when music starts": "Öppnas när musiken börjar",
      "Orange": "Orange",
      "Other random albums": "Andra slumpade album",
      "Output": "Utgång",
      "Output level": "Utnivå",
      "Output level in this browser (on top of the LMS volume)": "Utnivå i den här webbläsaren (utöver volymen i LMS)",
      "Pause": "Paus",
      "Pick a colour": "Välj en färg",
      "Pink": "Rosa",
      "Play": "Spela",
      "Play folder": "Spela mapp",
      "Play music in this browser (a real Slimproto player in LMS)": "Spela musik i den här webbläsaren (en riktig Slimproto-spelare i LMS)",
      "Play next": "Spela härnäst",
      "Play now": "Spela nu",
      "Play now, keep the queue": "Spela nu, behåll kön",
      "Play/pause": "Spela/paus",
      "Player ID": "Spelar-ID",
      "Player controls": "Spelarkontroller",
      "Player: {name}": "Spelare: {name}",
      "Players": "Spelare",
      "Playing": "Spelar",
      "Playing next": "Spelas härnäst",
      "Playing shuffled": "Spelar i blandad ordning",
      "Playlist name": "Namn på spellista",
      "Playlists": "Spellistor",
      "Plays it now (keeps the queue)": "Spelar det nu (behåller kön)",
      "Plays it now (replaces the queue)": "Spelar det nu (ersätter kön)",
      "Position": "Position",
      "Previous": "Föregående",
      "Purple": "Lila",
      "Queue": "Kö",
      "Queue cleared": "Kön rensades",
      "Queue folder": "Köa mapp",
      "Radio": "Radio",
      "Random": "Slumpmässigt",
      "Random album mix started": "Slumpmässig albummix startad",
      "Random albums": "Slumpade album",
      "Random artist mix started": "Slumpmässig artistmix startad",
      "Random mix": "Slumpmässig mix",
      "Random mix stopped": "Slumpmässig mix stoppad",
      "Random song mix started": "Slumpmässig låtmix startad",
      "Random year mix started": "Slumpmässig årsmix startad",
      "RangeError: Maximum call stack size exceeded. Happy now?": "RangeError: Maximum call stack size exceeded. Nöjd nu?",
      "Recently added": "Nyligen tillagda",
      "Recursion depth": "Rekursionsdjup",
      "Refresh": "Uppdatera",
      "Reloading to switch the output…": "Laddar om för att byta utgång…",
      "Remove": "Ta bort",
      "Remove from favourites": "Ta bort från favoriter",
      "Remove from playlist": "Ta bort från spellista",
      "Remove from queue": "Ta bort från kön",
      "Remove “{name}” from favourites?": "Ta bort ”{name}” från favoriter?",
      "Removed": "Borttaget",
      "Rename": "Byt namn",
      "Rename favourite": "Byt namn på favorit",
      "Rename playlist": "Byt namn på spellista",
      "Rename this browser…": "Byt namn på den här webbläsaren…",
      "Rename this player": "Byt namn på den här spelaren",
      "Renamed": "Namnet ändrat",
      "Rename…": "Byt namn…",
      "Repeat": "Repetera",
      "Repeat off": "Repetition av",
      "Repeat queue": "Repetera kön",
      "Repeat song": "Repetera låt",
      "ReplayGain {gain} dB": "ReplayGain {gain} dB",
      "Save": "Spara",
      "Save as playlist": "Spara som spellista",
      "Save queue as playlist": "Spara kön som spellista",
      "Saved": "Sparat",
      "Saved as {name}": "Sparad som {name}",
      "Scan": "Genomsökning",
      "Scan for new music": "Sök efter ny musik",
      "Scanning: {step} {done}/{total}": "Genomsöker: {step} {done}/{total}",
      "Search": "Sök",
      "Search apps and services for “{query}”": "Sök efter ”{query}” i program och tjänster",
      "Search: {query}": "Sök: {query}",
      "Searching…": "Söker…",
      "Seek": "Spola",
      "Send diagnostics": "Skicka diagnostik",
      "Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)": "Skicka uppspelningsdiagnostik till LMS-serverns logg (hjälper till att lösa problem på telefoner och surfplattor)",
      "Server": "Server",
      "Set with this device's own buttons (the page can't set it here); LMS volume is held at 100 %": "Ställs in med enhetens egna knappar (sidan kan inte ställa in den här); volymen i LMS hålls på 100 %",
      "Settings": "Inställningar",
      "Show LyrionJS": "Visa LyrionJS",
      "Show the queue": "Visa kön",
      "Showing {skin}": "Visar {skin}",
      "Shows actions under it": "Visar åtgärder under det",
      "Shuffle": "Blanda",
      "Shuffle albums": "Blanda album",
      "Shuffle off": "Blanda inte",
      "Shuffle songs": "Blanda låtar",
      "Skin": "Skal",
      "Skin: LyrionJS's own, or any skin installed on your Lyrion Music Server, with this browser still the player": "Skal: LyrionJS eget, eller något skal som är installerat på din Lyrion Music Server, med den här webbläsaren kvar som spelare",
      "Sleep timer": "Viloläge",
      "Sleep timer off": "Viloläge av",
      "Sleeping after this track": "Viloläge efter det här spåret",
      "Sleeping in {n} minutes": {
        "one": "Viloläge om {n} minut",
        "other": "Viloläge om {n} minuter"
      },
      "Smart gain": "Smart volymjustering",
      "Something went wrong": "Något gick fel",
      "Songs": "Låtar",
      "Sort albums": "Sortera album",
      "State": "Status",
      "Still no. One of us is enough.": "Fortfarande nej. En av oss räcker.",
      "Stop mix": "Stoppa mix",
      "Switch off": "Stäng av",
      "Switch on": "Slå på",
      "Sync this player…": "Synkronisera den här spelaren…",
      "Sync {name} with…": "Synkronisera {name} med…",
      "Synced {name}": "{name} synkroniserad",
      "Sync…": "Synkronisera…",
      "Take me back to the music": "Ta mig tillbaka till musiken",
      "Tapping a track": "Tryck på ett spår",
      "Tapping a track (search, albums, playlists, folders)": "Tryck på ett spår (sökning, album, spellistor, mappar)",
      "Teal": "Blågrön",
      "The alarm plays the current queue (or LMS's default alarm sound).": "Alarmet spelar den aktuella kön (eller LMS standardalarmljud).",
      "The browser has started muttering about “maximum call stack size”.": "Webbläsaren har börjat muttra om ”maximum call stack size”.",
      "The media element can't play here: choose Web Audio in Settings › Audio output.": "Mediaelementet kan inte spela här: välj Web Audio i Inställningar › Ljudutgång.",
      "The queue is empty.": "Kön är tom.",
      "The search failed: {error}": "Sökningen misslyckades: {error}",
      "Theme": "Tema",
      "This browser": "Den här webbläsaren",
      "This browser as a player": "Den här webbläsaren som spelare",
      "This browser can't play through the media element: switching to Web Audio…": "Den här webbläsaren kan inte spela via mediaelementet: byter till Web Audio…",
      "This folder is empty.": "Den här mappen är tom.",
      "This page could not be shown: {error}": "Sidan kunde inte visas: {error}",
      "This player is now “{name}”": "Den här spelaren heter nu ”{name}”",
      "This player was taken over by another session; this page is now a remote control.": "Den här spelaren togs över av en annan session; den här sidan är nu en fjärrkontroll.",
      "This playlist is empty.": "Den här spellistan är tom.",
      "This tab is already playing with LyrionJS.": "Den här fliken spelar redan med LyrionJS.",
      "Time": "Tid",
      "Track gain": "Volymutjämning av spår",
      "Track {n} of {total}": "Spår {n} av {total}",
      "Tracks ({count})": "Spår ({count})",
      "Transfer playback here from…": "Flytta hit uppspelningen från…",
      "Transition between tracks": "Övergång mellan spår",
      "Transition length": "Övergångens längd",
      "Try again": "Försök igen",
      "Trying again every few seconds…": "Försöker igen med några sekunders mellanrum…",
      "Type at least two letters.": "Skriv minst två bokstäver.",
      "Unknown": "Okänd",
      "Unmute": "Ljud på",
      "Unsynced": "Synkronisering upphävd",
      "Unsynced {name}": "Synkroniseringen av {name} upphävd",
      "Use it here": "Använd den här",
      "Use this browser as a player": "Använd den här webbläsaren som spelare",
      "Version": "Version",
      "Volume": "Volym",
      "Volume levelling (ReplayGain)": "Volymjustering (ReplayGain)",
      "Volume of {name}": "Volym för {name}",
      "Web Audio (lowest latency)": "Web Audio (lägst latens)",
      "Web Audio (opens when music starts)": "Web Audio (öppnas när musiken börjar)",
      "Web Audio, opens when music starts": "Web Audio, öppnas när musiken börjar",
      "We’ve told LMS. It isn’t angry, just disappointed.": "Vi har berättat det för LMS. Den är inte arg, bara besviken.",
      "What it is": "Vad det är",
      "When the queue ends (Don't Stop The Music)": "När kön tar slut (Don't Stop The Music)",
      "Which artists": "Vilka artister",
      "Whoa there. You’re already in LyrionJS.": "Oj oj, lugn nu. Du är redan i LyrionJS.",
      "Why": "Varför",
      "Years": "År",
      "Your browser, as a real Lyrion player. Tap the mirror if you must.": "Din webbläsare, som en riktig Lyrion-spelare. Tryck på spegeln om du nu måste.",
      "Your own colour": "Egen färg",
      "by": "av",
      "chosen in Settings": "valt i Inställningar",
      "closed": "stängd",
      "decoding {format}": "avkodar {format}",
      "desktop browser": "datorwebbläsare",
      "disconnected": "frånkopplad",
      "e.g. Kitchen tablet": "t.ex. Surfplatta i köket",
      "from": "från",
      "iPhone/iPad: keeps playing with the screen locked": "iPhone/iPad: fortsätter spela med skärmen låst",
      "interrupted": "avbruten",
      "loaded": "inläst",
      "off": "av",
      "once": "en gång",
      "paused": "pausad",
      "playing": "spelar",
      "repeats": "upprepas",
      "running": "igång",
      "stopped": "stoppad",
      "suspended": "pausad",
      "synced with {names}": "synkroniserad med {names}",
      "the media element failed here before": "mediaelementet har misslyckats här tidigare",
      "this browser cannot play FLAC through a media element": "den här webbläsaren kan inte spela FLAC via ett mediaelement",
      "this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on": "den här webbläsaren kan inte spela FLAC via ett mediaelement (iOS 17.1 eller senare krävs); håll skärmen på",
      "volume {volume}": "volym {volume}",
      "waiting": "väntar",
      "{formats} (LMS converts everything else to FLAC)": "{formats} (LMS konverterar allt annat till FLAC)",
      "{name} (this browser)": "{name} (den här webbläsaren)",
      "{n} albums": {
        "one": "{n} album",
        "other": "{n} album"
      },
      "{n} artists": {
        "one": "{n} artist",
        "other": "{n} artister"
      },
      "{n} minutes": {
        "one": "{n} minut",
        "other": "{n} minuter"
      },
      "{n} of {total}": "{n} av {total}",
      "{n} tracks": {
        "one": "{n} spår",
        "other": "{n} spår"
      },
      "{rate} kHz, {state}, ~{latency} ms latency": "{rate} kHz, {state}, ~{latency} ms latens",
      "{seconds} s decoded ahead": "{seconds} s avkodat i förväg",
      "{setting} saved": "{setting} sparad",
      "{skin} (the server's)": "{skin} (serverns)",
      "“{name}” already exists. Add to it?": "”{name}” finns redan. Vill du lägga till i den?"
    }
  };

  // ---------------------------------------------------------------------------
  // Small helpers
  // ---------------------------------------------------------------------------
  const store = {
    get(k, d) {
      try {
        const v = localStorage.getItem('lj.' + k);
        return v == null ? d : JSON.parse(v);
      } catch (e) {
        return d;
      }
    },
    set(k, v) {
      try {
        localStorage.setItem('lj.' + k, JSON.stringify(v));
      } catch (e) {/* private mode */}
    }
  };
  function h(tag, attrs, ...kids) {
    const el = document.createElement(tag);
    if (attrs) {
      for (const [k, v] of Object.entries(attrs)) {
        if (v == null || v === false) continue;
        if (k === 'class') el.className = v;else if (k === 'text') el.textContent = v;else if (k.startsWith('on')) {
          if (typeof v === 'function') el.addEventListener(k.slice(2), v);
        } // never an inline handler
        else if (k === 'style' && typeof v === 'object') Object.assign(el.style, v);else if (k === 'value' || k === 'checked' || k === 'disabled' || k === 'selected') el[k] = v;else el.setAttribute(k, v === true ? '' : v);
      }
    }
    for (const kid of kids.flat(Infinity)) if (kid != null && kid !== false) el.append(kid instanceof Node ? kid : String(kid));
    if (tag === 'input' && el.type === 'range') fillRange(el);
    return el;
  }
  const ICONS = {
    play: 'M8 5v14l11-7z',
    pause: 'M6 19h4V5H6v14zm8-14v14h4V5h-4z',
    stop: 'M6 6h12v12H6z',
    next: 'M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z',
    prev: 'M6 6h2v12H6zm3.5 6l8.5 6V6z',
    shuffle: 'M10.59 9.17L5.41 4 4 5.41l5.17 5.17 1.42-1.41zM14.5 4l2.04 2.04L4 18.59 5.41 20 17.96 7.46 20 9.5V4h-5.5zm.33 9.41l-1.41 1.41 3.13 3.13L14.5 20H20v-5.5l-2.04 2.04-3.13-3.13z',
    repeat: 'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z',
    repeat1: 'M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4zm-4-2V9h-1l-2 1v1h1.5v4H13z',
    volume: 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z',
    mute: 'M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z',
    queue: 'M15 6H3v2h12V6zm0 4H3v2h12v-2zM3 16h8v-2H3v2zM17 6v8.18c-.31-.11-.65-.18-1-.18-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3V8h3V6h-5z',
    search: 'M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z',
    album: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 14.5c-2.49 0-4.5-2.01-4.5-4.5S9.51 7.5 12 7.5s4.5 2.01 4.5 4.5-2.01 4.5-4.5 4.5zm0-5.5c-.55 0-1 .45-1 1s.45 1 1 1 1-.45 1-1-.45-1-1-1z',
    artist: 'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z',
    genre: 'M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z',
    year: 'M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z',
    star: 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
    folder: 'M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z',
    playlist: 'M3 10h11v2H3zm0-4h11v2H3zm0 8h7v2H3zm13-1v8l6-4z',
    fav: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
    radio: 'M3.24 6.15C2.51 6.43 2 7.17 2 8v12c0 1.1.89 2 2 2h16c1.11 0 2-.9 2-2V8c0-1.11-.89-2-2-2H8.3l8.26-3.34L15.88 1 3.24 6.15zM7 20c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm13-8h-2v-2h-2v2H4V8h16v4z',
    apps: 'M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z',
    speaker: 'M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 1.99 2 1.99L17 22c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 2c1.1 0 2 .9 2 2s-.9 2-2 2c-1.11 0-2-.9-2-2s.89-2 2-2zm0 16c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z',
    alarm: 'M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z',
    settings: 'M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z',
    more: 'M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z',
    back: 'M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z',
    close: 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z',
    menu: 'M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z',
    power: 'M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z',
    add: 'M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z',
    next_up: 'M4 10h12v2H4zm0-4h12v2H4zm0 8h8v2H4zm10 0v6l5-3z',
    delete: 'M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z',
    drag: 'M20 9H4v2h16V9zM4 15h16v-2H4v2z',
    sync: 'M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z',
    sleep: 'M12.34 2.02C6.59 1.82 2 6.42 2 12c0 5.52 4.48 10 10 10 3.71 0 6.93-2.02 8.66-5.02-7.51-.25-12.09-8.43-8.32-14.96z',
    home: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
    laptop: 'M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z',
    check: 'M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z',
    refresh: 'M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z',
    save: 'M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z',
    edit: 'M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z',
    up: 'M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z',
    down: 'M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z',
    note: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z',
    random: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM7.5 18c-.83 0-1.5-.67-1.5-1.5S6.67 15 7.5 15s1.5.67 1.5 1.5S8.33 18 7.5 18zm0-9C6.67 9 6 8.33 6 7.5S6.67 6 7.5 6 9 6.67 9 7.5 8.33 9 7.5 9zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4.5 4.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm0-9c-.83 0-1.5-.67-1.5-1.5S15.67 6 16.5 6s1.5.67 1.5 1.5S17.33 9 16.5 9z',
    info: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z'
  };
  function icon(name, cls) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', 'ic' + (cls ? ' ' + cls : ''));
    const p = document.createElementNS(ns, 'path');
    p.setAttribute('d', ICONS[name] || ICONS.note);
    svg.append(p);
    return svg;
  }
  /** The LyrionJS logo (symbol #lj-logo, inlined by build.py from assets/icon.svg). */
  function logo(cls) {
    const ns = 'http://www.w3.org/2000/svg';
    const svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('viewBox', '0 0 128 128');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('class', 'logo-img' + (cls ? ' ' + cls : ''));
    const use = document.createElementNS(ns, 'use');
    use.setAttribute('href', '#lj-logo');
    svg.append(use);
    return svg;
  }
  /** How far along a slider is, for skins that fill its track (Chrome and Safari can't otherwise). */
  function fillRange(el) {
    const lo = +el.min || 0,
      hi = +el.max || 100;
    el.style.setProperty('--fill', (hi > lo ? (el.value - lo) / (hi - lo) * 100 : 0) + '%');
  }
  document.addEventListener('input', e => {
    if (e.target.type === 'range') fillRange(e.target);
  }, true);
  const btn = (name, label, onclick, cls) => h('button', {
    class: 'ib' + (cls ? ' ' + cls : ''),
    title: label,
    'aria-label': label,
    onclick
  }, icon(name));
  function fmtTime(s) {
    s = Math.max(0, Math.floor(+s || 0));
    const hh = Math.floor(s / 3600),
      m = Math.floor(s % 3600 / 60),
      ss = String(s % 60).padStart(2, '0');
    return hh ? `${hh}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`;
  }
  const debounce = (fn, ms) => {
    let t;
    return (...a) => {
      clearTimeout(t);
      t = setTimeout(() => fn(...a), ms);
    };
  };
  let toastTimer;
  function toast(msg, kind) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'show' + (kind ? ' ' + kind : '');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      t.className = '';
    }, 2600);
  }
  function fail(e) {
    console.error(e);
    toast(e && e.message ? e.message : String(e), 'err');
  }

  // Diagnostics: what the player does goes to the LMS log (when the plugin's Diagnostics setting
  // allows it), so problems on devices without developer tools (iPad, phones) can be seen.
  const diagBuf = [];
  // The plugin's settings (config.json), read at boot; S.config is the same object. Kept here as
  // well because this file runs before state.js defines S, and diag() is used from the start.
  let serverConfig = {};
  function diag(kind, msg) {
    if (!store.get('diag', !!serverConfig.clientDiagnostics)) return;
    diagBuf.push(`${(performance.now() / 1000).toFixed(2)} ${kind}: ${msg}`);
    if (diagBuf.length > 400) diagBuf.splice(0, diagBuf.length - 400);
  }
  /** Sends what is buffered, in posts small enough for a closing page (keepalive allows 64 KiB). */
  function flushDiag(closing) {
    const id = window.LyrionJS && window.LyrionJS.S.localId || '-';
    while (diagBuf.length) {
      const lines = [];
      let size = 0;
      while (diagBuf.length && size < 48000) {
        size += diagBuf[0].length + 4;
        lines.push(diagBuf.shift());
      }
      fetch('/plugins/LyrionJS/log', {
        method: 'POST',
        keepalive: closing === true,
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id,
          lines
        })
      }).catch(() => {});
    }
  }
  setInterval(flushDiag, 2000);
  window.addEventListener('pagehide', () => flushDiag(true));
  window.addEventListener('error', e => diag('error', `${e.message} @${e.lineno}:${e.colno}`));
  window.addEventListener('unhandledrejection', e => diag('error', 'unhandled: ' + (e.reason && e.reason.message || e.reason)));
  for (const lvl of ['error', 'warn']) {
    const orig = console[lvl].bind(console);
    console[lvl] = (...a) => {
      diag(lvl, a.map(x => x && x.message || (typeof x === 'object' ? JSON.stringify(x) : String(x))).join(' '));
      orig(...a);
    };
  }
  diag('boot', `${navigator.userAgent} | AudioWorklet ${typeof AudioWorkletNode} | WebCodecs ${typeof AudioDecoder} | audioSession ${navigator.audioSession ? navigator.audioSession.type : 'none'}`);
  // ---------------------------------------------------------------------------
  // Languages: the page's own words. What LMS sends (menus, names, its messages) comes in LMS's
  // language already; the page follows LMS's language setting unless Settings chooses another.
  // I18N (build.py, from src/i18n/<code>.json): per language, the English text -> its
  // translation, or for counted text its plural forms by Intl.PluralRules category.
  // ---------------------------------------------------------------------------
  const LANGS = {
    en: 'English',
    cs: 'Čeština',
    da: 'Dansk',
    de: 'Deutsch',
    es: 'Español',
    fr: 'Français',
    it: 'Italiano',
    hu: 'Magyar',
    nl: 'Nederlands',
    nb: 'Norsk (bokmål)',
    nn: 'Norsk (nynorsk)',
    pl: 'Polski',
    fi: 'Suomi',
    sv: 'Svenska'
  };
  let lang = 'en',
    dict = null,
    pluralRules = null;
  /** For numbers and dates: the browser's own region in the language in use (en-GB, de-AT…), else the language. */
  let locale = 'en';
  const fill = (s, vars) => vars ? s.replace(/\{(\w+)\}/g, (m, k) => vars[k] != null ? vars[k] : m) : s;
  /** The page's text in the language in use; vars fill its {name}s. */
  function tr(s, vars) {
    const r = dict && dict[s];
    return fill(typeof r === 'string' && r ? r : s, vars);
  }
  /** Marks text to translate where it's shown (lists made before the language is known). */
  const N_ = s => s;
  const STATE_WORDS = {
    playing: N_('playing'),
    paused: N_('paused'),
    stopped: N_('stopped'),
    waiting: N_('waiting'),
    loaded: N_('loaded')
  };
  // The browser's audio output (AudioContext.state), likewise.
  const AUDIO_WORDS = {
    running: N_('running'),
    suspended: N_('suspended'),
    closed: N_('closed'),
    interrupted: N_('interrupted')
  };
  /** A player's state (core/player.js), in words. */
  const stateWord = s => STATE_WORDS[s] ? tr(STATE_WORDS[s]) : AUDIO_WORDS[s] ? tr(AUDIO_WORDS[s]) : s;
  /** Counted text: one and other are the English forms, {n} the count. */
  function trn(n, one, other, vars) {
    const v = Object.assign({
      n: (+n).toLocaleString(locale)
    }, vars);
    const r = dict && dict[other];
    if (r && typeof r === 'object' && pluralRules) {
      const form = r[pluralRules.select(+n)] || r.other;
      if (form) return fill(form, v);
    }
    return fill(+n === 1 ? one : other, v);
  }

  /**
   * Our code for a language code. Bokmål is nb here. A workaround, for compatibility only: LMS
   * before 9.2 (and LyrionJS before nb and nn) call bokmål "no", so "no" read from them means nb.
   */
  const ourLang = c => c === 'no' ? 'nb' : c;
  /** The browser's preferred locale for a language of ours, if it has one (bokmål: nb or no). */
  function regionOf(l, prefs = typeof navigator !== 'undefined' && (navigator.languages || [navigator.language]) || []) {
    const base = x => ourLang(String(x || '').toLowerCase().split('-')[0]);
    const hit = prefs.find(x => base(x) === l);
    try {
      return hit ? Intl.getCanonicalLocales(hit)[0] : l;
    } catch (e) {
      return l;
    }
  }

  /**
   * A date as LMS's date and time settings write it (Settings › Interface: shortdateFormat,
   * timeFormat): strftime's %Y %y %m %d %e %H %I %M %S %p %a %A %b %B, and LMS's "|", which drops
   * the leading zero of what follows. Names in the language in use.
   */
  function lmsDate(date, fmt, loc = locale) {
    const name = opt => new Intl.DateTimeFormat(loc, opt).format(date);
    const two = x => String(x).padStart(2, '0');
    const h = date.getHours();
    const period = () => {
      if (!Intl.DateTimeFormat.prototype.formatToParts) return h < 12 ? 'AM' : 'PM';
      const part = new Intl.DateTimeFormat(loc, {
        hour: 'numeric',
        hour12: true
      }).formatToParts(date).find(x => x.type === 'dayPeriod');
      return part ? part.value : h < 12 ? 'AM' : 'PM';
    };
    const codes = {
      Y: () => String(date.getFullYear()),
      y: () => two(date.getFullYear() % 100),
      m: () => two(date.getMonth() + 1),
      d: () => two(date.getDate()),
      e: () => String(date.getDate()),
      H: () => two(h),
      I: () => two(h % 12 || 12),
      M: () => two(date.getMinutes()),
      S: () => two(date.getSeconds()),
      p: period,
      a: () => name({
        weekday: 'short'
      }),
      A: () => name({
        weekday: 'long'
      }),
      b: () => name({
        month: 'short'
      }),
      B: () => name({
        month: 'long'
      })
    };
    return String(fmt).replace(/(\|?)%([a-zA-Z%])/g, (m, bar, c) => {
      if (c === '%') return '%';
      const v = codes[c] ? codes[c]() : m;
      return bar ? v.replace(/^0(?=\d)/, '') : v;
    }).replace(/\|/g, '');
  }

  /** LMS's language setting (EN, EN_GB, DE, NB, NN, or NO before 9.2…) as one of ours. */
  const fromLms = code => {
    const c = ourLang(String(code || '').slice(0, 2).toLowerCase());
    return LANGS[c] ? c : 'en';
  };
  const langChoice = () => {
    const c = ourLang(store.get('lang', 'auto'));
    return LANGS[c] ? c : 'auto';
  };
  /** LMS's language, as last seen. */
  const lmsLang = () => ourLang(store.get('lmsLang', 'en'));
  /** The language in use: chosen in Settings, else LMS's (as last seen, until LMS says). */
  function applyLang() {
    const c = langChoice() === 'auto' ? lmsLang() : langChoice();
    lang = c !== 'en' && I18N[c] ? c : 'en';
    dict = lang === 'en' ? null : I18N[lang];
    pluralRules = new Intl.PluralRules(lang);
    locale = regionOf(lang);
    document.documentElement.lang = lang;
    // Words the style sheets add (Material's "by … from …").
    document.documentElement.style.setProperty('--w-by', JSON.stringify(tr('by')));
    document.documentElement.style.setProperty('--w-from', JSON.stringify(tr('from')));
    // The page's fixed text (index.html): its English is kept in data-i18n*, to change it back.
    for (const el of document.querySelectorAll('[data-i18n]')) el.textContent = tr(el.dataset.i18n);
    for (const el of document.querySelectorAll('[data-i18n-label]')) {
      const s = tr(el.dataset.i18nLabel);
      el.setAttribute('aria-label', s);
      el.title = s;
    }
    for (const el of document.querySelectorAll('[data-i18n-aria]')) el.setAttribute('aria-label', tr(el.dataset.i18nAria));
    for (const el of document.querySelectorAll('[data-i18n-title]')) el.title = tr(el.dataset.i18nTitle);
  }
  /** LMS's language, from the server: true if that changed the language in use. */
  function learnLmsLang() {
    return _learnLmsLang.apply(this, arguments);
  } // ---------------------------------------------------------------------------
  // Theme: light or dark, and the highlight colour
  // ---------------------------------------------------------------------------
  // Each highlight comes in a dark-theme and a light-theme shade: [colour, hover colour, text on it].
  function _learnLmsLang() {
    _learnLmsLang = _asyncToGenerator(function* () {
      let code = 'en';
      try {
        code = fromLms((yield S.lms.rpc('', ['pref', 'language', '?'], 5000))._p2);
      } catch (e) {
        return false;
      }
      if (code === lmsLang()) return false;
      store.set('lmsLang', code);
      if (langChoice() !== 'auto') return false;
      applyLang();
      return true;
    });
    return _learnLmsLang.apply(this, arguments);
  }
  const ACCENTS = {
    orange: {
      name: N_('Orange'),
      dark: ['#f2a541', '#ffcf8a', '#1b1406'],
      light: ['#c46d08', '#e08a1e', '#fff']
    },
    gold: {
      name: N_('Gold'),
      dark: ['#e8c547', '#f5df8f', '#1f1903'],
      light: ['#8f7100', '#a8860a', '#fff']
    },
    green: {
      name: N_('Green'),
      dark: ['#6fd36a', '#a6e8a2', '#0a1f09'],
      light: ['#2e7d2a', '#3a9636', '#fff']
    },
    teal: {
      name: N_('Teal'),
      dark: ['#3fd0c9', '#8ae6e1', '#04201e'],
      light: ['#0d7f7a', '#14998f', '#fff']
    },
    blue: {
      name: N_('Blue'),
      dark: ['#5aa9ff', '#9ccbff', '#04121f'],
      light: ['#1f6fd1', '#3b86e3', '#fff']
    },
    purple: {
      name: N_('Purple'),
      dark: ['#b18cff', '#d2bcff', '#170b2b'],
      light: ['#7046d6', '#8660e6', '#fff']
    },
    pink: {
      name: N_('Pink'),
      dark: ['#ff7ab8', '#ffb1d6', '#2a0716'],
      light: ['#c2306f', '#d94c88', '#fff']
    }
  };
  const hexRgb = hex => [1, 3, 5].map(i => parseInt(hex.slice(i, i + 2), 16));
  const rgbHex = c => '#' + c.map(x => Math.round(Math.max(0, Math.min(255, x))).toString(16).padStart(2, '0')).join('');
  const mix = (c, to, t) => c.map((x, i) => x + (to[i] - x) * t);
  /** Relative luminance (WCAG), 0 for black to 1 for white. */
  function luminance(c) {
    const [r, g, b] = c.map(x => {
      x /= 255;
      return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  }
  /** Text on the colour: black or white, whichever stands out more. */
  const onColour = c => {
    const l = luminance(c);
    return (l + 0.05) / 0.05 > 1.05 / (l + 0.05) ? '#000' : '#fff';
  };

  /** Both shades of a colour picked by hand: light enough to read on the dark theme, dark enough on the light one. */
  function customAccent(hex) {
    const c = hexRgb(hex),
      W = [255, 255, 255],
      K = [0, 0, 0];
    let d = c,
      l = c;
    for (let t = 0.1; luminance(d) < 0.25 && t <= 1; t += 0.1) d = mix(c, W, t);
    for (let t = 0.1; luminance(l) > 0.18 && t <= 1; t += 0.1) l = mix(c, K, t);
    return {
      dark: [rgbHex(d), rgbHex(mix(d, W, 0.35)), onColour(d)],
      light: [rgbHex(l), rgbHex(mix(l, W, 0.15)), onColour(l)]
    };
  }
  const isHex = v => /^#[0-9a-f]{6}$/i.test(v || '');
  // Material Skin's blue: what "from the cover" uses while there's no cover to take a colour from.
  const MATERIAL_BLUE = {
    name: N_('Blue'),
    dark: ['#82b1ff', '#b6d0ff', '#000'],
    light: ['#1976d2', '#2f86dc', '#fff']
  };
  /** The highlight chosen in Settings: a name from ACCENTS, a colour as #rrggbb, or 'cover' (with the cover's colour, if known). */
  function accentShades(v, cover) {
    if (v === 'cover') return isHex(cover) ? customAccent(cover) : MATERIAL_BLUE;
    return ACCENTS[v] || (isHex(v) ? customAccent(v) : ACCENTS.orange);
  }

  /** The cover's colour: the most common clearly coloured shade among its pixels (null for a grey picture). */
  function dominantColour(px) {
    const buckets = new Map();
    let best = null,
      seen = 0;
    for (let i = 0; i < px.length; i += 4) {
      if (px[i + 3] < 128) continue;
      seen++;
      const r = px[i],
        g = px[i + 1],
        b = px[i + 2],
        max = Math.max(r, g, b),
        sat = max - Math.min(r, g, b);
      if (max < 40 || sat < 40) continue; // dark, or grey
      const k = r >> 5 << 6 | g >> 5 << 3 | b >> 5; // 512 shades
      const c = buckets.get(k) || {
        w: 0,
        n: 0,
        r: 0,
        g: 0,
        b: 0
      };
      c.w += sat / 255;
      c.n++;
      c.r += r;
      c.g += g;
      c.b += b;
      buckets.set(k, c);
      if (!best || c.w > best.w) best = c;
    }
    if (!best || best.n < seen * 0.02) return null; // hardly any colour
    return rgbHex([best.r / best.n, best.g / best.n, best.b / best.n]);
  }
  let coverHex = null,
    coverFor;
  const accentChoice = () => store.get('accent', skin() === 'material' ? 'cover' : 'orange');
  /** The cover now shown changed: take its colour, where the highlight comes from the cover. */
  function coverAccent(url) {
    if (url === coverFor) return;
    coverFor = url;
    const done = hex => {
      if (coverFor !== url) return;
      const was = coverHex;
      coverHex = hex;
      if (accentChoice() === 'cover' && was !== hex) applyTheme();
    };
    if (!url) return done(null);
    const img = new Image();
    img.onload = () => {
      try {
        const c = document.createElement('canvas');
        c.width = c.height = 48;
        const g = c.getContext('2d', {
          willReadFrequently: true
        });
        g.drawImage(img, 0, 0, 48, 48);
        done(dominantColour(g.getImageData(0, 0, 48, 48).data));
      } catch (e) {
        done(null);
      }
    };
    img.onerror = () => done(null);
    img.src = url;
  }
  function applyTheme() {
    const t = store.get('theme', 'auto');
    if (t === 'auto') delete document.documentElement.dataset.theme;else document.documentElement.dataset.theme = t;
    // The same selectors as the style sheet's, later in the page: these win.
    const {
      dark,
      light
    } = accentShades(accentChoice(), coverHex);
    const rgb = a => hexRgb(a.length === 4 ? '#' + [...a.slice(1)].map(x => x + x).join('') : a);
    const vars = ([a, a2, on]) => `--accent: ${a}; --accent2: ${a2}; --on-accent: ${on}; --accent-rgb: ${rgb(a).join(', ')};`;
    // Material tints the page with its colour (the deeper shade), more in the toolbars.
    const tint = (base, t) => rgbHex(mix(hexRgb(base), rgb(light[0]), t));
    const md = `--bg: ${tint('#212121', 0.15)}; --toolbar: ${tint('#212121', 0.25)}; --menu: ${tint('#303030', 0.15)};`;
    const ml = `--bg: ${tint('#fafafa', 0.25)}; --toolbar: ${tint('#fafafa', 0.35)}; --menu: ${tint('#fafafa', 0.15)};`;
    const M = '[data-skin="material"]';
    let el = document.getElementById('lj-theme');
    if (!el) {
      el = document.createElement('style');
      el.id = 'lj-theme';
      document.head.append(el);
    }
    el.textContent = `:root { ${vars(dark)} } :root${M} { ${md} }\n` + `@media (prefers-color-scheme: light) { :root:not([data-theme="dark"]) { ${vars(light)} } :root${M}:not([data-theme="dark"]) { ${ml} } }\n` + `:root[data-theme="light"] { ${vars(light)} } :root${M}[data-theme="light"] { ${ml} }`;
  }
  // ---------------------------------------------------------------------------
  // LMS JSON-RPC, same-origin (the page is served by LMS, or by the dev relay that proxies it)
  // ---------------------------------------------------------------------------
  /** Does this address name an SVG picture (by its path)? */
  const isSvg = u => /^[^?#]*\.svg(?:[?#]|$)/i.test(u);
  class LMS {
    constructor() {
      this.base = '/';
    }
    rpc(_x, _x2) {
      var _this = this;
      return _asyncToGenerator(function* (player, cmd, timeout = 20000) {
        const ctrl = new AbortController();
        const tm = setTimeout(() => ctrl.abort(), timeout);
        try {
          const r = yield fetch(_this.base + 'jsonrpc.js', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            signal: ctrl.signal,
            body: JSON.stringify({
              id: 1,
              method: 'slim.request',
              params: [player || '', cmd.map(x => String(x))]
            })
          });
          if (!r.ok) throw new Error(tr('LMS answered {status}', {
            status: r.status
          }));
          const j = yield r.json();
          return j.result || {};
        } catch (e) {
          if (e.name === 'AbortError') throw new Error(tr('LMS did not answer in time'));
          throw e;
        } finally {
          clearTimeout(tm);
        }
      }).apply(this, arguments);
    }
    url(path) {
      return this.base + String(path).replace(/^\//, '');
    }
    art(src, size = 300) {
      if (!src) return null;
      src = String(src);
      if (/^\/\//.test(src)) src = 'http:' + src; // protocol-relative: another host
      // Images from other hosts go through LMS's image proxy: the page never loads them itself.
      // SVGs, which the proxy can't resize and so sends off-site, go through the plugin instead.
      if (/^https?:\/\//i.test(src)) {
        return isSvg(src) ? this.base + 'plugins/LyrionJS/svg?u=' + encodeURIComponent(src) : this.base + 'imageproxy/' + encodeURIComponent(src) + `/image_${size}x${size}_f.png`;
      }
      if (/^[a-z][a-z0-9+.-]*:/i.test(src)) return null; // data:, javascript: and the like
      src = src.replace(/^[\\/\s]+/, ''); // a path on this server, however it starts
      if (/^music\/[^/]+\/cover$/.test(src)) src += `_${size}x${size}_f`;
      // An SVG LMS has already put through its image proxy: through the plugin instead.
      const via = src.match(/^imageproxy\/([^/]+)\//);
      if (via) {
        let u = '';
        try {
          u = decodeURIComponent(via[1]);
        } catch (e) {/* not an address */}
        if (/^https?:\/\//i.test(u) && isSvg(u)) return this.art(u, size);
      }
      // LMS's image proxy sends a picture itself only when asked for a size: at full size (as LMS
      // hands them out, ".../image.png") it redirects to the picture's own host, which this page
      // doesn't load from. So radio logos and the like are always asked for at a size.
      const px = src.match(/^(imageproxy\/[^/]+\/image)(\.(?:png|jpe?g|gif))?$/i);
      if (px) src = px[1] + `_${size}x${size}_f` + (/^\.jpe?g$/i.test(px[2] || '') ? '.jpg' : '.png');
      try {
        if (new URL(this.base + src, location.href).origin !== location.origin) return null;
      } catch (e) {
        return null;
      }
      return this.base + src;
    }
    cover(id, size = 300) {
      return id == null || id === '' ? null : this.base + `music/${encodeURIComponent(id)}/cover_${size}x${size}_f`;
    }
  }
  // ---------------------------------------------------------------------------
  // State
  // ---------------------------------------------------------------------------
  const S = {
    server: null,
    lms: null,
    players: [],
    target: store.get('target', null),
    status: null,
    statusAt: 0,
    local: null,
    localId: null,
    output: null,
    outputMode: '',
    nav: [],
    syncgroups: [],
    localStatus: null,
    serverInfo: null,
    polling: false,
    lastPlaylistTs: null,
    lastPlaylistCur: null,
    ownsPlayer: false,
    chosen: store.get('target', null) // the player last picked by hand (S.target may stand in for it)
  };

  // This browser's player's MAC, made once. The plugin keeps a copy in a cookie (config.json, in
  // boot.js): Safari deletes a page's storage after 7 days without a visit but not a cookie the
  // server set, so a browser stays the same player rather than coming back as a new one.
  const MAC_RE = /^02:4c:4a(:[0-9a-f]{2}){3}$/;
  function macBytes() {
    let mac = store.get('mac', null);
    if (!MAC_RE.test(mac || '')) {
      const m = /(?:^|;\s*)lj_mac=([^;]*)/.exec(document.cookie);
      if (m && MAC_RE.test(m[1])) {
        mac = m[1];
        store.set('mac', mac);
      }
    }
    if (!MAC_RE.test(mac || '')) {
      const r = crypto.getRandomValues(new Uint8Array(3));
      mac = ['02', '4c', '4a', ...[...r].map(b => b.toString(16).padStart(2, '0'))].join(':');
      store.set('mac', mac);
    }
    return {
      str: mac,
      bytes: new Uint8Array(mac.split(':').map(x => parseInt(x, 16)))
    };
  }

  /** iPhone, iPad or iPod (iPadOS Safari claims to be a Mac; touch support gives it away). */
  const isIOS = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || /Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1;
  function defaultName() {
    const ua = navigator.userAgent;
    const b = /Edg\//.test(ua) ? 'Edge' : /Firefox\//.test(ua) ? 'Firefox' : /Chrome\//.test(ua) ? 'Chrome' : /Safari\//.test(ua) ? 'Safari' : 'Browser';
    // iPadOS Safari claims to be a Mac; touch support gives it away.
    const ipad = /iPad/.test(ua) || /Macintosh/.test(ua) && navigator.maxTouchPoints > 1;
    const os = /Android/.test(ua) ? 'Android' : ipad ? 'iPad' : /iPhone/.test(ua) ? 'iPhone' : /Mac OS X/.test(ua) ? 'macOS' : /Windows/.test(ua) ? 'Windows' : /Linux/.test(ua) ? 'Linux' : '';
    return os ? tr('LyrionJS {browser} on {os}', {
      browser: b,
      os
    }) : 'LyrionJS ' + b;
  }
  const rpc = (cmd, player = S.target) => S.lms.rpc(player, cmd);
  const isLocal = id => id && id === S.localId;
  const playerName = id => {
    const p = S.players.find(x => x.playerid === id);
    return p ? p.name : isLocal(id) ? S.local ? S.local.name : tr('This browser') : tr('No player');
  };
  function act(_x3, _x4, _x5) {
    return _act.apply(this, arguments);
  } // ---------------------------------------------------------------------------
  // Common UI pieces: artwork, the sheet (menus and dialogs), lazily loaded lists, rows, cards
  // ---------------------------------------------------------------------------
  function _act() {
    _act = _asyncToGenerator(function* (cmd, msg, player) {
      try {
        yield rpc(cmd, player);
        if (msg) toast(msg);
        pollSoon();
      } catch (e) {
        fail(e);
      }
    });
    return _act.apply(this, arguments);
  }
  function artEl(src, fallback = 'note', cls = '') {
    const box = h('div', {
      class: 'art ' + cls
    }, icon(fallback, 'ph'));
    if (src) {
      const img = h('img', {
        alt: '',
        loading: 'lazy',
        decoding: 'async',
        src
      });
      img.onload = () => box.classList.add('loaded');
      img.onerror = () => img.remove();
      box.append(img);
    }
    return box;
  }

  // -- the sheet --------------------------------------------------------------
  let sheetClosed = null; // what the open sheet does when dismissed without a choice
  let sheetFocus = null; // what had the focus before it opened

  function sheet(title, items, opts = {}) {
    closeSheet();
    const wrap = document.getElementById('sheet');
    const list = h('div', {
      class: 'sheet-list'
    });
    for (const it of items) {
      if (!it) continue;
      if (it.sep) {
        list.append(h('div', {
          class: 'sheet-sep'
        }));
        continue;
      }
      if (it.el) {
        list.append(it.el);
        continue;
      }
      list.append(h('button', {
        class: 'sheet-item' + (it.checked ? ' checked' : '') + (it.danger ? ' danger' : ''),
        onclick: function () {
          var _onclick = _asyncToGenerator(function* () {
            if (!it.keepOpen) closeSheet(true);
            try {
              yield it.run();
            } catch (e) {
              fail(e);
            }
          });
          function onclick() {
            return _onclick.apply(this, arguments);
          }
          return onclick;
        }()
      }, icon(it.icon || 'play'), h('span', {
        text: it.label
      }), it.checked ? icon('check', 'tick') : null));
    }
    const panel = h('div', {
      class: 'sheet-panel',
      role: 'dialog',
      'aria-modal': 'true',
      'aria-label': title
    }, h('div', {
      class: 'sheet-head'
    }, opts.art ? artEl(opts.art, opts.artIcon || 'note', 'sm') : null, h('div', {
      class: 'sheet-title'
    }, h('div', {
      class: 't1',
      text: title
    }), opts.sub ? h('div', {
      class: 't2',
      text: opts.sub
    }) : null), btn('close', tr('Close'), () => closeSheet())), list);
    wrap.append(h('div', {
      class: 'sheet-scrim',
      onclick: () => closeSheet()
    }), panel);
    wrap.hidden = false;
    sheetClosed = opts.onDismiss || null;
    // Keyboard and screen readers go into the dialog, and back where they were when it closes.
    sheetFocus = document.activeElement;
    requestAnimationFrame(() => {
      wrap.classList.add('open');
      if (!panel.contains(document.activeElement)) {
        const first = panel.querySelector('.sheet-item, input, select, button');
        if (first) first.focus();
      }
    });
  }
  /** chosen: closed by picking something (not dismissed). */
  function closeSheet(chosen) {
    const w = document.getElementById('sheet');
    w.classList.remove('open');
    w.hidden = true;
    w.textContent = '';
    const f = sheetClosed;
    sheetClosed = null;
    const back = sheetFocus;
    sheetFocus = null;
    if (back && back.isConnected && back.focus) back.focus();
    if (f && !chosen) f();
  }

  /** A text prompt; resolves the entered text, or null if cancelled or dismissed. */
  function prompt2(title, {
    value = '',
    placeholder = '',
    ok = tr('OK'),
    type = 'text',
    hint = ''
  } = {}) {
    return new Promise(resolve => {
      const input = h('input', {
        class: 'field',
        type,
        value,
        placeholder,
        'aria-label': title
      });
      const form = h('form', {
        class: 'prompt',
        onsubmit: e => {
          e.preventDefault();
          const v = input.value.trim();
          closeSheet(true);
          resolve(v || null);
        }
      }, input, h('div', {
        class: 'row-btns'
      }, h('button', {
        type: 'button',
        class: 'btn ghost',
        onclick: () => closeSheet()
      }, tr('Cancel')), h('button', {
        class: 'btn',
        type: 'submit'
      }, ok)));
      sheet(title, [{
        el: form
      }], {
        onDismiss: () => resolve(null),
        sub: hint || undefined
      });
      setTimeout(() => input.focus(), 50);
    });
  }
  /** Yes or no; resolves false if dismissed. */
  function confirm2(title, okLabel = tr('Delete')) {
    return new Promise(resolve => {
      sheet(title, [{
        label: okLabel,
        icon: 'delete',
        danger: true,
        run: () => resolve(true)
      }, {
        label: tr('Cancel'),
        icon: 'close',
        run: () => resolve(false)
      }], {
        onDismiss: () => resolve(false)
      });
    });
  }

  // -- lists ------------------------------------------------------------------
  /**
   * A lazily loaded list or grid. fetch(start, count) -> {items, total, consumed?}: `consumed`
   * is how many entries of the collection the page covered, when items were filtered out of it.
   * Loading stops as soon as the list leaves the page.
   */
  function lazyList({
    fetch,
    render,
    grid = false,
    empty = tr('Nothing here.'),
    page = 100
  }) {
    const box = h('div', {
      class: grid ? 'grid' : 'list'
    });
    const sentinel = h('div', {
      class: 'sentinel'
    });
    const wrap = h('div', {
      class: 'lazy'
    }, box, sentinel);
    let start = 0,
      total = Infinity,
      loading = false,
      idx = 0,
      shown = 0,
      gen = 0;
    const io = new IntersectionObserver(es => {
      if (es.some(e => e.isIntersecting)) more();
    }, {
      rootMargin: '600px'
    });
    function more() {
      return _more.apply(this, arguments);
    }
    function _more() {
      _more = _asyncToGenerator(function* () {
        if (loading || start >= total) return;
        if (!wrap.isConnected && start > 0) return; // gone from the page (or not shown): stop
        const my = gen;
        loading = true;
        sentinel.classList.add('busy');
        try {
          const r = yield fetch(start, page);
          if (my !== gen) return; // reloaded meanwhile: this page is stale
          const covered = r.consumed != null ? r.consumed : r.items.length;
          total = r.total == null ? covered < page ? start + covered : Infinity : r.total;
          for (const it of r.items) {
            const el = render(it, idx++);
            if (el) {
              box.append(el);
              shown++;
            }
          }
          start += covered;
          if (!covered) total = start;
          if (start >= total && !shown) box.append(h('div', {
            class: 'empty',
            text: empty
          }));
        } catch (e) {
          if (my === gen) {
            fail(e);
            total = start;
          }
        } finally {
          if (my === gen) {
            loading = false;
            sentinel.classList.remove('busy');
          }
        }
        if (my === gen && start < total && wrap.isConnected && sentinel.getBoundingClientRect().top < window.innerHeight + 600) more();
      });
      return _more.apply(this, arguments);
    }
    io.observe(sentinel);
    wrap.reload = () => {
      gen++;
      loading = false;
      box.textContent = '';
      start = 0;
      total = Infinity;
      idx = 0;
      shown = 0;
      more();
    };
    wrap.dispose = () => {
      gen++;
      io.disconnect();
    };
    more();
    return wrap;
  }

  /** Stops the lazy lists in el (el itself may be one). */
  function disposeLists(el) {
    for (const l of [el, ...el.querySelectorAll('.lazy')]) if (l.dispose) l.dispose();
  }

  /** Replace what a holder shows; lists it showed stop loading. */
  function swap(holder, ...els) {
    for (const l of holder.querySelectorAll('.lazy')) if (l.dispose) l.dispose();
    holder.replaceChildren(...els);
  }

  /** fetch() for lazyList over an LMS query: cmd(start, count) -> result; key: the loop's name. */
  const loopFetch = (cmd, key, keep) => (/*#__PURE__*/function () {
    var _ref = _asyncToGenerator(function* (s, n) {
      const r = yield cmd(s, n);
      const raw = r[key] || [];
      return {
        items: keep ? raw.filter(keep) : raw,
        total: +r.count || 0,
        consumed: raw.length
      };
    });
    return function (_x6, _x7) {
      return _ref.apply(this, arguments);
    };
  }());
  function row({
    art,
    artIcon = 'note',
    title,
    sub,
    right,
    onclick,
    menu,
    cls = '',
    num,
    draggable
  }) {
    const r = h('div', {
      class: 'row ' + cls,
      tabindex: onclick ? 0 : null,
      role: onclick ? 'button' : null
    }, num != null ? h('div', {
      class: 'num',
      text: num
    }) : art !== undefined ? artEl(art, artIcon, 'sm') : null, h('div', {
      class: 'meta'
    }, h('div', {
      class: 't1',
      text: title || ''
    }), sub ? h('div', {
      class: 't2',
      text: sub
    }) : null), right != null ? h('div', {
      class: 'right',
      text: right
    }) : null, menu ? btn('more', tr('More'), e => {
      e.stopPropagation();
      menu();
    }, 'more') : null);
    if (onclick) {
      r.addEventListener('click', onclick);
      r.addEventListener('keydown', e => {
        if (e.key === 'Enter' && e.target === r) onclick(e);
      });
    }
    if (menu) r.addEventListener('contextmenu', e => {
      e.preventDefault();
      menu();
    });
    if (draggable) r.draggable = true;
    return r;
  }

  /** A track row as LMS lists them (queue, playlists, search). */
  function trackRow(t, {
    onclick,
    menu,
    cls,
    draggable,
    sub
  } = {}) {
    return row({
      art: t.artwork_url ? S.lms.art(t.artwork_url, 96) : S.lms.cover(t.coverid, 96),
      title: t.title,
      sub: sub !== undefined ? sub : [t.artist, t.album].filter(Boolean).join(' · '),
      right: +t.duration ? fmtTime(t.duration) : '',
      onclick,
      menu,
      cls,
      draggable
    });
  }
  function card({
    art,
    artIcon = 'album',
    title,
    sub,
    onclick,
    menu,
    round
  }) {
    const c = h('div', {
      class: 'card' + (round ? ' round' : ''),
      tabindex: 0,
      role: 'button'
    }, artEl(art, artIcon, 'lg'), h('div', {
      class: 't1',
      text: title || ''
    }), sub ? h('div', {
      class: 't2',
      text: sub
    }) : null, menu ? btn('more', tr('More'), e => {
      e.stopPropagation();
      menu();
    }, 'more') : null);
    c.addEventListener('click', onclick);
    c.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.target === c) onclick(e);
    });
    if (menu) c.addEventListener('contextmenu', e => {
      e.preventDefault();
      menu();
    });
    return c;
  }

  /** Play / Shuffle / Queue buttons for an album, artist or playlist page. */
  function heroButtons(kind, id, cls = '') {
    return h('div', {
      class: 'row-btns ' + cls
    }, h('button', {
      class: 'btn',
      onclick: () => pc('load', kind, id)
    }, icon('play'), 'Play'), h('button', {
      class: 'btn ghost',
      onclick: () => playShuffled(kind, id)
    }, icon('shuffle'), 'Shuffle'), h('button', {
      class: 'btn ghost',
      onclick: () => pc('add', kind, id)
    }, icon('add'), 'Queue'));
  }
  // ---------------------------------------------------------------------------
  // Navigation: a stack of views mirrored in the browser history, so Back works everywhere.
  //   A view is a function (params) -> page: { title, el, actions?, onShow?, onHide?, dispose?,
  //   perPlayer? }. perPlayer views are rebuilt when the controlled player changes.
  // ---------------------------------------------------------------------------
  const VIEWS = {};
  const NAV = [['home', N_('Home'), 'home'], ['now', N_('Now playing'), 'note'], ['queue', N_('Queue'), 'queue'], ['search', N_('Search'), 'search'], null, ['artists', N_('Artists'), 'artist'], ['albums', N_('Albums'), 'album'], ['genres', N_('Genres'), 'genre'], ['years', N_('Years'), 'year'], ['newmusic', N_('New music'), 'star'], ['randomalbums', N_('Random albums'), 'shuffle'], ['folders', N_('Music folder'), 'folder'], ['playlists', N_('Playlists'), 'playlist'], 'plugins', ['favourites', N_('Favourites'), 'fav'], ['radio', N_('Radio'), 'radio'], ['apps', N_('Apps'), 'apps'], ['random', N_('Random mix'), 'random'], null, ['players', N_('Players'), 'speaker'], ['alarms', N_('Alarms'), 'alarm'], ['settings', N_('Settings'), 'settings']];
  function renderNav() {
    const nav = document.getElementById('nav');
    nav.textContent = '';
    const close = () => document.body.classList.remove('nav-open');
    for (const n of NAV) {
      if (n === 'plugins') {
        nav.append(h('div', {
          class: 'nav-sep'
        }));
        // What plugins add to LMS's "My Music" (AudioMuse-AI, Custom Browse…).
        if (S.pluginMenus && S.pluginMenus.length) {
          for (const m of S.pluginMenus) {
            const art = jiveArt(m, 48);
            nav.append(h('button', {
              class: 'nav-item',
              'data-view': 'jive:' + m.id,
              title: m.text,
              onclick: () => {
                root('jive', {
                  action: m.actions.go,
                  title: m.text,
                  navId: 'jive:' + m.id
                });
                close();
              }
            }, art ? h('img', {
              class: 'ic nav-img',
              src: art,
              alt: ''
            }) : icon('apps'), h('span', {
              text: m.text
            })));
          }
          nav.append(h('div', {
            class: 'nav-sep'
          }));
        }
        continue;
      }
      if (!n) {
        nav.append(h('div', {
          class: 'nav-sep'
        }));
        continue;
      }
      nav.append(h('button', {
        class: 'nav-item',
        'data-view': n[0],
        onclick: () => {
          root(n[0]);
          close();
        }
      }, icon(n[2]), h('span', {
        text: tr(n[1])
      })));
    }
    if (S.nav[0]) markNav(navKey(S.nav[0]));
  }
  const navKey = e => e.params && e.params.navId || e.name;
  function markNav(name) {
    for (const b of document.querySelectorAll('.nav-item')) b.classList.toggle('active', b.dataset.view === name);
  }
  function buildPage(entry) {
    try {
      const make = VIEWS[entry.name] || VIEWS.now;
      return make(entry.params || {});
    } catch (e) {
      console.error(e);
      return {
        title: tr('Something went wrong'),
        el: h('div', {
          class: 'empty',
          text: tr('This page could not be shown: {error}', {
            error: e && e.message || e
          })
        })
      };
    }
  }
  function show(entry) {
    const main = document.getElementById('view');
    const cur = S.shown;
    if (cur && cur !== entry && cur.page && cur.page.onHide) cur.page.onHide();
    main.textContent = '';
    if (!entry.page) entry.page = buildPage(entry);
    const p = entry.page;
    p.head = h('h1', {
      text: p.title || ''
    });
    main.append(h('div', {
      class: 'view-head'
    }, S.nav.length > 1 ? btn('back', tr('Back'), () => back()) : null, p.head, h('div', {
      class: 'view-actions'
    }, p.actions || [])), p.el);
    S.shown = entry;
    if (p.onShow) p.onShow();
    main.scrollTop = entry.scroll || 0;
    markNav(S.nav[0] && navKey(S.nav[0]));
    // What the skin lays out around the page: now playing on its own, the queue beside it.
    document.body.dataset.view = entry.name;
    updateSide();
    document.title = tabTitle(p.title);
  }
  /** The tab's name for a page: its title and LyrionJS's (once, if the title already has it). */
  const tabTitle = t => !t ? 'LyrionJS' : /LyrionJS/.test(t) ? t : t + ' · LyrionJS';
  /** A page may learn its title after it is shown (LMS menus). */
  function setTitle(page, t) {
    page.title = t;
    if (page.head) page.head.textContent = t;
    if (S.shown && S.shown.page === page) document.title = tabTitle(t);
  }
  function dispose(entry) {
    const p = entry.page;
    if (!p) return;
    if (p.onHide && S.shown === entry) p.onHide();
    if (p.dispose) try {
      p.dispose();
    } catch (e) {
      console.error(e);
    }
    if (p.el) disposeLists(p.el);
    entry.page = null;
  }

  /** A history entry's state: how deep, and whether it's LyrionJS's own pages over an LMS skin. */
  const navState = d => document.documentElement.classList.contains('host-own') ? {
    d,
    own: 1
  } : {
    d
  };
  function saveScroll() {
    const top = S.nav[S.nav.length - 1];
    if (top) top.scroll = document.getElementById('view').scrollTop;
  }
  function push(name, params) {
    saveScroll();
    S.nav.push({
      name,
      params
    });
    history.pushState(navState(S.nav.length), '');
    show(S.nav[S.nav.length - 1]);
  }
  let ignorePop = 0;
  function root(name, params) {
    const extra = S.nav.length - 1;
    for (const e of S.nav) dispose(e);
    if (!params && VIEWS[name]) {
      store.set('view', name);
      if (name !== 'now' && name !== 'queue') store.set('browseView', name);
    }
    S.nav = [{
      name,
      params
    }];
    S.shown = null;
    show(S.nav[0]);
    // Take the browser history back to the root as well, so Back leaves the app only from there.
    if (extra > 0) {
      ignorePop++;
      history.go(-extra);
    }
  }
  /** Back n views (LMS menus may ask for two). */
  function back(n = 1) {
    n = Math.min(n, S.nav.length - 1);
    if (n > 0) history.go(-n);
  }
  window.addEventListener('popstate', e => {
    // Back leaves whatever was open over the page: a menu or dialog belongs to the page left.
    closeSheet();
    document.body.classList.remove('nav-open');
    if (ignorePop) {
      ignorePop--;
      history.replaceState(navState(1), '');
      return;
    }
    // Back past LyrionJS's first page, over an LMS skin: the skin again.
    if (document.documentElement.classList.contains('host-own') && !(e.state && e.state.own)) document.documentElement.classList.remove('host-own');
    const d = e.state && e.state.d || 1;
    if (d >= S.nav.length) {
      // Forward to a view we have already left: there's nothing to go forward to.
      history.replaceState(navState(S.nav.length), '');
      return;
    }
    while (S.nav.length > d) dispose(S.nav.pop());
    show(S.nav[S.nav.length - 1]);
  });

  /**
   * The controlled player changed: views that show its settings or state start again, those
   * further back too (they are built afresh when Back reaches them).
   */
  function playerChanged() {
    const top = S.shown;
    let rebuild = false;
    for (const e of S.nav) {
      if (e.page && e.page.perPlayer) {
        if (e === top) rebuild = true;
        dispose(e);
      }
    }
    if (rebuild) show(top);
    sidePlayerChanged();
  }
  // ---------------------------------------------------------------------------
  // Polling
  // ---------------------------------------------------------------------------
  const STATUS_TAGS = 'tags:aAlcdejJKNoqrstuyITRx';
  let pollTimer = null,
    pollCount = 0,
    polling = false,
    pollAgain = false;
  let localStatusFor = null; // the local player's state when S.localStatus was fetched

  /** Poll soon. Only one poll runs at a time; a request made during one runs right after it. */
  function pollSoon(ms = 250) {
    if (polling) {
      pollAgain = true;
      return;
    }
    clearTimeout(pollTimer);
    pollTimer = setTimeout(poll, ms);
  }
  function poll() {
    return _poll.apply(this, arguments);
  }
  /**
   * Which player to control, given LMS's players: the one picked by hand (by default, this
   * browser's), as soon as LMS has it; meanwhile the one controlled, if LMS still has it; else
   * this browser's, or any. null: no change. A stand-in is never remembered, so a page opened
   * before LMS knows this browser's player again goes back to it as soon as it does.
   */
  function _poll() {
    _poll = _asyncToGenerator(function* () {
      clearTimeout(pollTimer);
      if (!S.lms) return;
      if (polling) {
        pollAgain = true;
        return;
      }
      polling = true;
      try {
        const target = S.target;
        if (target) {
          const st = yield rpc(['status', '-', 1, STATUS_TAGS], target);
          if (target === S.target) {
            // the player wasn't switched meanwhile
            S.status = st;
            S.statusAt = performance.now();
            // LMS doesn't change playlist_timestamp when the current track changes (a jump, or the next
            // track starting), so the current index is watched too: the queue marks the current track.
            if (st.playlist_timestamp !== S.lastPlaylistTs || st.playlist_cur_index !== S.lastPlaylistCur) {
              S.lastPlaylistTs = st.playlist_timestamp;
              S.lastPlaylistCur = st.playlist_cur_index;
              emitPlaylistChanged();
            }
            updateNowPlaying();
          }
        }
        if (pollCount++ % 5 === 0) yield pollPlayers();
        // This browser's own status (the lock screen shows it) while another player is controlled:
        // now and then while it plays, and whenever its state changed (paused, stopped…).
        if (S.local && !isLocal(S.target)) {
          const state = S.local.state;
          if (state === 'playing' && pollCount % 3 === 0 || state !== localStatusFor) {
            S.localStatus = yield S.lms.rpc(S.localId, ['status', '-', 1, STATUS_TAGS]);
            localStatusFor = state;
          }
        } else if (isLocal(S.target)) {
          S.localStatus = S.status;
          localStatusFor = null;
        }
        updateMediaSession();
        setConn(true);
      } catch (e) {
        setConn(false, e.message);
      } finally {
        polling = false;
      }
      const again = pollAgain;
      pollAgain = false;
      pollTimer = setTimeout(poll, again ? 50 : document.hidden ? 5000 : 1000);
    });
    return _poll.apply(this, arguments);
  }
  function pickTarget(ids, current, chosen, localId) {
    const has = id => !!id && ids.includes(id);
    const want = has(chosen || localId) ? chosen || localId : has(current) ? current : has(localId) ? localId : ids[0] || null;
    return want && want !== current ? want : null;
  }
  function pollPlayers() {
    return _pollPlayers.apply(this, arguments);
  }
  function _pollPlayers() {
    _pollPlayers = _asyncToGenerator(function* () {
      const r = yield S.lms.rpc('', ['players', 0, 100]);
      S.players = (r.players_loop || []).filter(p => +p.connected || isLocal(p.playerid) || p.playerid === S.target || p.playerid === S.chosen);
      const next = pickTarget(S.players.map(p => p.playerid), S.target, S.chosen, S.localId);
      if (next) setTarget(next, true);
      try {
        const sg = yield S.lms.rpc('', ['syncgroups', '?']);
        S.syncgroups = sg.syncgroups_loop || [];
      } catch (e) {
        S.syncgroups = [];
      }
      renderPlayerButton();
      updateHost();
    });
    return _pollPlayers.apply(this, arguments);
  }
  let connLost = false;
  function setConn(ok, msg) {
    const el = document.getElementById('conn');
    // Back after losing it: the server may have restarted with a new version of the page.
    if (ok && connLost) checkUpdate();
    connLost = !ok;
    el.hidden = ok;
    if (!ok) el.textContent = tr('Lost contact with the server: {error} — retrying…', {
      error: msg || ''
    });
  }

  /** Control this player. auto: a stand-in chosen by the page, not remembered as the choice. */
  function setTarget(id, auto) {
    if (!auto) {
      S.chosen = id;
      store.set('target', id);
    }
    const changed = id !== S.target;
    S.target = id;
    S.status = null;
    S.lastPlaylistTs = null;
    S.lastPlaylistCur = null;
    renderPlayerButton();
    updateNowPlaying();
    pollSoon(10);
    loadPluginMenus();
    if (changed) playerChanged();
  }
  const playlistListeners = new Set();
  function emitPlaylistChanged() {
    for (const f of playlistListeners) f();
  }

  // ---------------------------------------------------------------------------
  // Now playing model
  // ---------------------------------------------------------------------------
  function current(st = S.status) {
    if (!st) return null;
    const t = (st.playlist_loop || [])[0] || {};
    const rm = st.remoteMeta || {};
    const remote = !!(+t.remote || +st.remote);
    const title = t.title || rm.title || st.current_title || '';
    return {
      title,
      artist: t.artist || t.trackartist || t.albumartist || rm.artist || '',
      album: t.album || rm.album || '',
      artistId: t.artist_id,
      albumId: t.album_id,
      id: t.id,
      url: t.url,
      remote,
      stationTitle: remote && st.current_title && st.current_title !== title ? st.current_title : '',
      duration: +st.duration || +t.duration || 0,
      type: t.type,
      bitrate: t.bitrate,
      samplerate: t.samplerate,
      samplesize: t.samplesize,
      year: t.year,
      coverid: t.coverid,
      artwork: t.artwork_url
    };
  }
  function elapsedNow() {
    const st = S.status;
    if (!st) return 0;
    let t = +st.time || 0;
    if (st.mode === 'play') t += (performance.now() - S.statusAt) / 1000 * (+st.rate || 1);
    const d = +st.duration || 0;
    return d ? Math.min(t, d) : t;
  }
  function nowArt(size) {
    const st = S.status;
    if (!st || !S.target) return null;
    const c = current(st);
    if (c && c.artwork && !/^\/?music\/current/.test(c.artwork)) {
      const u = S.lms.art(c.artwork, size);
      if (u) return u;
    }
    if (c && c.coverid) return S.lms.cover(c.coverid, size);
    return S.lms.url(`music/current/cover_${size}x${size}_f?player=${encodeURIComponent(S.target)}&t=${encodeURIComponent(st.playlist_timestamp || '')}`);
  }
  function qualityLabel(c) {
    if (!c) return '';
    const parts = [];
    if (c.type) parts.push(String(c.type).toUpperCase());
    if (c.samplesize && c.samplerate) parts.push(`${c.samplesize}/${(c.samplerate / 1000).toFixed(c.samplerate % 1000 ? 1 : 0)}`);else if (c.bitrate) parts.push(String(c.bitrate).replace(/\s*kbps.*/i, ' kb/s'));
    return parts.join(' · ');
  }
  // ---------------------------------------------------------------------------
  // Actions on library items
  // ---------------------------------------------------------------------------
  const QUAL = {
    artist: 'artist_id',
    album: 'album_id',
    track: 'track_id',
    genre: 'genre_id',
    playlist: 'playlist_id',
    folder: 'folder_id',
    year: 'year'
  };
  function pc(cmd, kind, id, extra = []) {
    const q = `${QUAL[kind]}:${id}`;
    const msgs = {
      load: tr('Playing'),
      insert: tr('Playing next'),
      add: tr('Added to the queue')
    };
    return act(['playlistcontrol', 'cmd:' + cmd, q, ...extra], msgs[cmd]);
  }
  function playShuffled(_x8, _x9) {
    return _playShuffled.apply(this, arguments);
  }
  /** Plays an item now without clearing the queue: inserted after the current track, then jumped to. */
  function _playShuffled() {
    _playShuffled = _asyncToGenerator(function* (kind, id) {
      try {
        yield rpc(['playlist', 'shuffle', 1]);
        yield rpc(['playlistcontrol', 'cmd:load', `${QUAL[kind]}:${id}`]);
        toast(tr('Playing shuffled'));
        pollSoon();
      } catch (e) {
        fail(e);
      }
    });
    return _playShuffled.apply(this, arguments);
  }
  function playKeep(_x0, _x1) {
    return _playKeep.apply(this, arguments);
  } // What tapping a track in a library list does (Settings, "Tapping a track"): play it now, replacing
  // the queue (the list's own play, which may queue the whole album); play it now, keeping the queue;
  // or open a row of the chosen actions under it. The ids are libMenu's icons, plus 'keep' and 'all'.
  function _playKeep() {
    _playKeep = _asyncToGenerator(function* (kind, id) {
      try {
        const st = yield rpc(['status', '-', 1]);
        const at = +st.playlist_tracks ? (+st.playlist_cur_index || 0) + 1 : 0;
        yield rpc(['playlistcontrol', 'cmd:insert', `${QUAL[kind]}:${id}`]);
        yield rpc(['playlist', 'index', at]);
        toast(tr('Playing'));
        pollSoon();
      } catch (e) {
        fail(e);
      }
    });
    return _playKeep.apply(this, arguments);
  }
  const TAP_DEFAULT = ['next_up', 'add'];
  const tapItems = () => [['play', tr('Play now')], ['keep', tr('Play now, keep the queue')], ['next_up', tr('Play next')], ['add', tr('Add to queue')], ['artist', tr('Go to artist')], ['album', tr('Go to album')], ['playlist', tr('Add to playlist…')], ['fav', tr('Add to favourites')], ['more', tr('More…')], ['all', tr('All options…')]];
  function tapTrack(it, play, extra = []) {
    return e => {
      const mode = store.get('tapAction', 'play');
      if (mode === 'keep') return playKeep('track', it.id);
      if (mode !== 'menu') return play();
      trackActions(e.currentTarget, it, play, extra);
    };
  }
  function trackActions(r, it, play, extra) {
    const wasOpen = r.getAttribute('aria-expanded') === 'true';
    closeTrackActions();
    if (wasOpen) return;
    const show = store.get('tapItems', TAP_DEFAULT);
    libMenu('track', it, [], (name, items) => {
      const by = Object.fromEntries(items.map(x => [x.icon, x]));
      Object.assign(by, {
        play: {
          icon: 'play',
          run: play
        },
        keep: {
          icon: 'play',
          run: () => playKeep('track', it.id)
        },
        all: {
          icon: 'menu',
          run: () => libMenu('track', it, extra)
        }
      });
      const btns = tapItems().filter(([k]) => show.includes(k) && by[k]).map(([k, label]) => h('button', {
        type: 'button',
        class: 'btn ghost',
        onclick: function () {
          var _onclick2 = _asyncToGenerator(function* () {
            closeTrackActions();
            try {
              yield by[k].run();
            } catch (e) {
              fail(e);
            }
          });
          function onclick() {
            return _onclick2.apply(this, arguments);
          }
          return onclick;
        }()
      }, icon(by[k].icon), label));
      if (!btns.length) return libMenu('track', it, extra);
      r.setAttribute('aria-expanded', 'true');
      r.after(h('div', {
        class: 'row-actions',
        role: 'group',
        'aria-label': name
      }, btns));
    });
  }
  function closeTrackActions() {
    for (const x of document.querySelectorAll('.row-actions')) {
      if (x.previousElementSibling) x.previousElementSibling.setAttribute('aria-expanded', 'false');
      x.remove();
    }
  }
  function libMenu(kind, it, extra = [], show = sheet) {
    const name = it.title || it.album || it.artist || it.playlist || it.genre || it.year || it.filename || '';
    const items = [{
      label: tr('Play now'),
      icon: 'play',
      run: () => pc('load', kind, it.id)
    }, {
      label: tr('Play next'),
      icon: 'next_up',
      run: () => pc('insert', kind, it.id)
    }, {
      label: tr('Add to queue'),
      icon: 'add',
      run: () => pc('add', kind, it.id)
    }];
    if (kind !== 'track') items.push({
      label: tr('Shuffle'),
      icon: 'shuffle',
      run: () => playShuffled(kind, it.id)
    });
    if (kind === 'track' || kind === 'album') {
      if (it.artist_id) items.push({
        label: tr('Go to artist'),
        icon: 'artist',
        run: () => push('artist', {
          id: it.artist_id,
          name: it.artist
        })
      });
      if (kind === 'track' && it.album_id) items.push({
        label: tr('Go to album'),
        icon: 'album',
        run: () => push('album', {
          id: it.album_id,
          title: it.album,
          artist: it.artist,
          artist_id: it.artist_id
        })
      });
    }
    if (kind === 'track' && it.url) items.push({
      label: tr('Add to playlist…'),
      icon: 'playlist',
      run: () => addToPlaylist([it.url])
    });
    if (it.favorites_url || kind === 'track' && it.url) items.push({
      label: tr('Add to favourites'),
      icon: 'fav',
      run: () => act(['favorites', 'add', 'url:' + (it.favorites_url || it.url), 'title:' + (it.favorites_title || name)], tr('Added to favourites'), '')
    });
    const info = contextMenu(kind, it);
    if (info) items.push({
      label: tr('More…'),
      icon: 'more',
      run: () => push('jive', {
        action: info,
        title: name
      })
    });
    show(name, items.concat(extra), {
      sub: it.artist && kind !== 'artist' ? it.artist : kind === 'track' && it.album ? it.album : null,
      art: it.art
    });
  }
  function addToPlaylist(_x10) {
    return _addToPlaylist.apply(this, arguments);
  } // -- Favourites, radio, apps (LMS's XMLBrowser menus) ------------------------
  function _addToPlaylist() {
    _addToPlaylist = _asyncToGenerator(function* (urls) {
      try {
        const r = yield rpc(['playlists', 0, 500], '');
        const lists = r.playlists_loop || [];
        sheet(tr('Add to playlist'), [{
          label: tr('New playlist…'),
          icon: 'add',
          run: function () {
            var _run10 = _asyncToGenerator(function* () {
              const name = yield prompt2(tr('New playlist'), {
                placeholder: tr('Name'),
                ok: tr('Create')
              });
              if (!name) return;
              const nr = yield rpc(['playlists', 'new', 'name:' + name], '');
              // LMS doesn't create a second playlist with a name in use: it names the existing one.
              if (!nr.playlist_id && nr.overwritten_playlist_id && !(yield confirm2(tr('“{name}” already exists. Add to it?', {
                name
              }), tr('Add to it')))) return;
              const id = nr.playlist_id || nr.overwritten_playlist_id;
              for (const u of urls) yield rpc(['playlists', 'edit', 'cmd:add', 'playlist_id:' + id, 'url:' + u], '');
              toast(tr('Added to {name}', {
                name
              }));
            });
            function run() {
              return _run10.apply(this, arguments);
            }
            return run;
          }()
        }, {
          sep: true
        }, ...lists.map(p => ({
          label: p.playlist,
          icon: 'playlist',
          run: function () {
            var _run11 = _asyncToGenerator(function* () {
              for (const u of urls) yield rpc(['playlists', 'edit', 'cmd:add', 'playlist_id:' + p.id, 'url:' + u], '');
              toast(tr('Added to {name}', {
                name: p.playlist
              }));
            });
            function run() {
              return _run11.apply(this, arguments);
            }
            return run;
          }()
        }))]);
      } catch (e) {
        fail(e);
      }
    });
    return _addToPlaylist.apply(this, arguments);
  }
  function xmlArt(it) {
    return S.lms.art(it.image || it.icon || it.cover, 120);
  }
  function xmlMenu(cmd, it, extra = []) {
    const items = [];
    if (+it.isaudio) {
      items.push({
        label: tr('Play now'),
        icon: 'play',
        run: () => act([cmd, 'playlist', 'play', 'item_id:' + it.id], tr('Playing'))
      });
      items.push({
        label: tr('Play next'),
        icon: 'next_up',
        run: () => act([cmd, 'playlist', 'insert', 'item_id:' + it.id], tr('Playing next'))
      });
      items.push({
        label: tr('Add to queue'),
        icon: 'add',
        run: () => act([cmd, 'playlist', 'add', 'item_id:' + it.id], tr('Added to the queue'))
      });
    }
    if (cmd !== 'favorites' && it.url && +it.isaudio) items.push({
      label: tr('Add to favourites'),
      icon: 'fav',
      run: () => act(['favorites', 'add', 'url:' + it.url, 'title:' + it.name, ...(it.image ? ['icon:' + it.image] : [])], tr('Added to favourites'), '')
    });
    sheet(it.name, items.concat(extra), {
      art: xmlArt(it)
    });
  }

  // -- LMS menus (SlimBrowse) --------------------------------------------------
  // LMS describes its menus, and everything plugins add to them, in the format its own
  // controllers use. Rendering that format means AudioMuse-AI, Custom Browse, context menus
  // and any future plugin appear here without special code.
  const STANDARD_MYMUSIC = /^(myMusicArtists|myMusicAlbums|myMusicGenres|myMusicYears|myMusicNewMusic|myMusicMusicFolder|myMusicPlaylists|myMusicSearch|randomplay$|pluginLyrionJS$)/;
  let menusSeq = 0;
  function loadPluginMenus() {
    return _loadPluginMenus.apply(this, arguments);
  }
  /** The LMS context menu for a library item, as a SlimBrowse action. */
  function _loadPluginMenus() {
    _loadPluginMenus = _asyncToGenerator(function* () {
      const player = S.target || S.localId;
      if (!player) return;
      const my = ++menusSeq;
      try {
        const r = yield S.lms.rpc(player, ['menu', 0, 1000, 'direct:1']);
        if (my !== menusSeq) return; // a newer request (another player) answers instead
        S.pluginMenus = (r.item_loop || []).filter(i => (i.node === 'myMusic' || i.node === 'extras') && i.id && !STANDARD_MYMUSIC.test(i.id) && i.actions && i.actions.go).sort((a, b) => (+a.weight || 0) - (+b.weight || 0) || String(a.text).localeCompare(String(b.text)));
        renderNav();
      } catch (e) {/* the menu is optional */}
    });
    return _loadPluginMenus.apply(this, arguments);
  }
  function contextMenu(kind, it) {
    if (kind === 'track') {
      if (it.id && +it.id > 0 && !it.remote) return {
        cmd: ['trackinfo', 'items'],
        params: {
          track_id: it.id,
          menu: 1
        }
      };
      if (it.url) return {
        cmd: ['trackinfo', 'items'],
        params: {
          url: it.url,
          menu: 1
        }
      };
      return null;
    }
    const map = {
      album: ['albuminfo', 'album_id'],
      artist: ['artistinfo', 'artist_id'],
      genre: ['genreinfo', 'genre_id'],
      year: ['yearinfo', 'year']
    };
    const m = map[kind];
    return m && it.id != null ? {
      cmd: [m[0], 'items'],
      params: {
        [m[1]]: it.id,
        menu: 1
      }
    } : null;
  }
  function jiveArt(item, size) {
    const id = item['icon-id'];
    if (id != null && /^-?[0-9a-f]+$/i.test(String(id))) return S.lms.cover(id, size);
    const src = item.image || item.icon || (id != null ? String(id) : '');
    return src ? S.lms.art(src, size) : null;
  }

  /** An item's action: its own, or the window's base action with the item's parameters. */
  function jiveAction(item, base, name) {
    if (item.actions && Object.prototype.hasOwnProperty.call(item.actions, name)) {
      const a = item.actions[name];
      if (!a) return null;
      if (a.itemsParams && item[a.itemsParams]) return Object.assign({}, a, {
        params: Object.assign({}, a.params, item[a.itemsParams])
      });
      return a;
    }
    const b = base && base.actions && base.actions[name];
    if (!b) return null;
    return Object.assign({}, b, {
      params: Object.assign({}, b.params, b.itemsParams && item[b.itemsParams] || {})
    });
  }
  function jiveArgs(a, input) {
    const sub = v => input != null && typeof v === 'string' ? v.replace('__TAGGEDINPUT__', input).replace('__INPUT__', input) : v;
    const cmd = (a.cmd || []).map(sub);
    const params = [];
    for (const [k, v] of Object.entries(a.params || {})) if (v != null && v !== '') params.push(k + ':' + sub(v));
    return {
      cmd,
      params
    };
  }
  function jiveFetch(_x11, _x12, _x13, _x14) {
    return _jiveFetch.apply(this, arguments);
  }
  function _jiveFetch() {
    _jiveFetch = _asyncToGenerator(function* (a, start, count, input) {
      const {
        cmd,
        params
      } = jiveArgs(a, input);
      if (!(a.params && 'menu' in a.params)) params.push('menu:1');
      return S.lms.rpc(S.target || S.localId || '', [...cmd, start, count, ...params]);
    });
    return _jiveFetch.apply(this, arguments);
  }
  function jiveDo(_x15, _x16) {
    return _jiveDo.apply(this, arguments);
  }
  function _jiveDo() {
    _jiveDo = _asyncToGenerator(function* (a, input) {
      const {
        cmd,
        params
      } = jiveArgs(a, input);
      return S.lms.rpc(S.target || S.localId || '', [...cmd, ...params]);
    });
    return _jiveDo.apply(this, arguments);
  }
  function jiveNext(where, ctx) {
    pollSoon(150);
    if (where === 'parent') back();else if (where === 'grandparent') back(2);else if (where === 'home' || where === 'nowPlaying') root('now');else if ((where === 'refresh' || where === 'refreshOrigin') && ctx && ctx.reload) ctx.reload();
  }

  /** Only web addresses: a menu's link is never run as script or opened as a local file. */
  function safeLink(u) {
    try {
      const url = new URL(u, location.href);
      return /^https?:$/.test(url.protocol) ? url.href : null;
    } catch (e) {
      return null;
    }
  }
  const COMMAND_ACTIONS = ['play', 'add', 'add-hold', 'do', 'on', 'off'];

  /** The action a tap on the item means, as LMS's own controllers decide it. */
  function defaultAction(item, base) {
    if (item.goAction) return item.goAction;
    if (/item_?play/.test(item.style || '') && jiveAction(item, base, 'play')) return 'play';
    if (jiveAction(item, base, 'go')) return 'go';
    if (jiveAction(item, base, 'do')) return 'do';
    return null;
  }
  function jiveActivate(_x17, _x18, _x19, _x20, _x21) {
    return _jiveActivate.apply(this, arguments);
  }
  function _jiveActivate() {
    _jiveActivate = _asyncToGenerator(function* (item, base, name, ctx, actionOverride) {
      try {
        if (item.weblink && !name) {
          const u = safeLink(item.weblink);
          if (u) window.open(u, '_blank', 'noopener');
          return;
        }
        const which = name || defaultAction(item, base);
        if (!which) return;
        const a = actionOverride || jiveAction(item, base, which);
        if (!a || !a.cmd) return;
        if (isLyrionJSApp(a.cmd)) {
          push('about', {
            recursion: true
          });
          return true;
        } // an LMS menu leading to LyrionJS itself
        let input = null;
        if (item.input || item.type === 'entry' || item.type === 'search' || JSON.stringify(a).includes('__TAGGEDINPUT__')) {
          input = yield prompt2(firstLine(item.text) || tr('Search'), {
            placeholder: item.input && item.input.help && item.input.help.text || '',
            ok: tr('OK')
          });
          if (!input) return;
        }
        const title = firstLine(item.text);
        const next = a.nextWindow || item.nextWindow;
        const isCommand = !!next || COMMAND_ACTIONS.includes(which) || a.cmd[0] === 'playlistcontrol' || item.type === 'slideshow';
        if (!isCommand) {
          push('jive', {
            action: a,
            title,
            input
          });
          return;
        }
        const r = yield jiveDo(a, input);
        // A command that answered with a menu: show that answer (running it again could repeat it).
        if (r && r.item_loop && !next) {
          push('jive', {
            action: a,
            title,
            input,
            first: r
          });
          return;
        }
        if (which === 'play') toast(tr('Playing'));else if (which === 'add') toast(tr('Added to the queue'));else if (which === 'add-hold') toast(tr('Playing next'));
        // A setting changed in place: show its new state.
        if (!next && (which === 'on' || which === 'off' || item.radio != null || item.choiceStrings)) {
          if (ctx.reload) ctx.reload();
          pollSoon(150);
          return true;
        }
        jiveNext(next, ctx);
        return true;
      } catch (e) {
        fail(e);
        return false;
      }
    });
    return _jiveActivate.apply(this, arguments);
  }
  const firstLine = t => String(t == null ? '' : t).split('\n')[0];
  function jiveRow(item, getBase, ctx) {
    const base = getBase();
    const lines = String(item.text == null ? '' : item.text).split('\n');
    const has = n => !!jiveAction(item, base, n);
    // Settings-style items: a switch, a choice, or one of a set.
    if (item.checkbox != null) {
      const sw = h('input', {
        type: 'checkbox',
        class: 'switch',
        checked: +item.checkbox === 1,
        'aria-label': lines[0]
      });
      sw.addEventListener('change', /*#__PURE__*/_asyncToGenerator(function* () {
        if (!(yield jiveActivate(item, base, sw.checked ? 'on' : 'off', ctx))) sw.checked = !sw.checked; // failed: as it was
      }));
      return h('label', {
        class: 'setting'
      }, h('span', {
        text: lines[0]
      }), sw);
    }
    const choices = item.actions && item.actions.do && item.actions.do.choices;
    if (Array.isArray(item.choiceStrings) && Array.isArray(choices)) {
      const sel = h('select', {
        class: 'select',
        'aria-label': lines[0]
      }, item.choiceStrings.map((t, i) => h('option', {
        value: i,
        text: t,
        selected: i === (+item.selectedIndex || 1) - 1
      })));
      sel.addEventListener('change', () => jiveActivate(item, base, 'do', ctx, choices[+sel.value]));
      return h('label', {
        class: 'setting'
      }, h('span', {
        text: lines[0]
      }), sel);
    }
    const playable = has('play') || has('add');
    const clickable = !!item.weblink || !!defaultAction(item, base);
    if (!clickable && !playable) return h('div', {
      class: 'xml-text',
      text: lines.join('\n')
    });
    const art = jiveArt(item, 96);
    const menu = playable || has('more') ? () => sheet(lines[0], [has('play') ? {
      label: tr('Play now'),
      icon: 'play',
      run: () => jiveActivate(item, base, 'play', ctx)
    } : null, has('add-hold') ? {
      label: tr('Play next'),
      icon: 'next_up',
      run: () => jiveActivate(item, base, 'add-hold', ctx)
    } : null, has('add') ? {
      label: tr('Add to queue'),
      icon: 'add',
      run: () => jiveActivate(item, base, 'add', ctx)
    } : null, has('more') ? {
      label: tr('More…'),
      icon: 'more',
      run: () => push('jive', {
        action: jiveAction(item, base, 'more'),
        title: lines[0]
      })
    } : null], {
      art: art || undefined,
      sub: lines[1]
    }) : null;
    return row({
      art: item.radio != null ? undefined : art || (ctx.textOnly ? undefined : null),
      artIcon: playable ? 'note' : 'folder',
      title: (item.radio != null ? +item.radio === 1 ? '● ' : '○ ' : '') + lines[0],
      sub: lines.slice(1).join(' · ') || null,
      onclick: () => jiveActivate(item, base, null, ctx),
      menu
    });
  }

  /**
   * p: { action, title?, input?, first?, navId? }. first: a command's answer that was a menu. The
   * command is never run again for that page (it may not be safe to repeat), so the page shows
   * just that answer: no further pages, no reload, and it isn't rebuilt for another player.
   */
  VIEWS.jive = p => {
    const holder = h('div');
    const answer = p.first || null;
    let base = null;
    const page = {
      title: p.title || '',
      el: holder,
      perPlayer: !answer
    };
    const ctx = {
      textOnly: false
    };
    const build = () => swap(holder, lazyList({
      page: 100,
      empty: tr('Nothing here.'),
      fetch: function () {
        var _fetch = _asyncToGenerator(function* (s, n) {
          if (answer && s > 0) return {
            items: [],
            total: s,
            consumed: 0
          };
          const r = answer || (yield jiveFetch(p.action, s, n, p.input));
          if (r.base) base = r.base;
          if (s === 0) {
            ctx.textOnly = !!(r.window && /text/.test(r.window.menustyle || r.window.windowStyle || ''));
            const t = r.window && r.window.text || r.title;
            if (t && !p.title) setTitle(page, t);
          }
          const items = r.item_loop || [];
          return {
            items,
            total: answer ? items.length : +r.count || 0,
            consumed: items.length
          };
        });
        function fetch(_x22, _x23) {
          return _fetch.apply(this, arguments);
        }
        return fetch;
      }(),
      render: it => jiveRow(it, () => base, ctx)
    }));
    // A setting changed on a command's answer: its switch already shows the new state.
    ctx.reload = answer ? () => pollSoon(150) : build;
    build();
    return page;
  };
  VIEWS.xml = p => {
    if (isLyrionJSApp(p.cmd)) return VIEWS.about({
      recursion: true
    }); // however it was reached
    const holder = h('div');
    const page = {
      title: p.title || '',
      el: holder,
      perPlayer: true
    };
    const where = [...(p.item ? ['item_id:' + p.item] : []), ...(p.search ? ['search:' + p.search] : [])];
    const items = loopFetch((s, n) => rpc([p.cmd, 'items', s, n, 'want_url:1', ...where]), 'loop_loop');
    const inert = it => it.type === 'text' || it.type === 'textarea' || !+it.hasitems && !+it.isaudio && it.type !== 'search' && it.type !== 'link';
    // LMS gives an item's web link (a plugin's "Donate" page, say) only in menu mode, so a page
    // with text items asks again in that mode for theirs, matched by name.
    const fetch = /*#__PURE__*/function () {
      var _fetch2 = _asyncToGenerator(function* (s, n) {
        const r = yield items(s, n);
        if (r.items.some(inert)) {
          try {
            const m = yield rpc([p.cmd, 'items', s, n, 'menu:' + p.cmd, ...where]);
            const links = new Map((m.item_loop || []).filter(x => x.weblink).map(x => [firstLine(x.text), x.weblink]));
            for (const it of r.items) if (inert(it) && links.has(it.name || it.title || '')) it.weblink = links.get(it.name || it.title || '');
          } catch (e) {/* links are extra */}
        }
        return r;
      });
      function fetch(_x24, _x25) {
        return _fetch2.apply(this, arguments);
      }
      return fetch;
    }();
    const build = () => swap(holder, lazyList({
      page: 200,
      empty: tr('Nothing here.'),
      fetch,
      render: it => {
        const name = it.name || it.title || '';
        const link = it.weblink && safeLink(it.weblink);
        if (link) return row({
          art: xmlArt(it),
          artIcon: 'info',
          title: name,
          sub: it.line2 || null,
          onclick: () => window.open(link, '_blank', 'noopener')
        });
        if (inert(it)) return h('div', {
          class: 'xml-text',
          text: name
        });
        const isSearch = it.type === 'search';
        const go = /*#__PURE__*/function () {
          var _go = _asyncToGenerator(function* () {
            if (isSearch) {
              const q = yield prompt2(name || tr('Search'), {
                placeholder: tr('Search'),
                ok: tr('Search')
              });
              if (q) push('xml', {
                cmd: p.cmd,
                item: it.id,
                search: q,
                title: `${name}: ${q}`
              });
            } else if (+it.hasitems || it.type === 'link') push('xml', {
              cmd: p.cmd,
              item: it.id,
              title: name,
              fav: p.fav
            });else if (+it.isaudio) act([p.cmd, 'playlist', 'play', 'item_id:' + it.id], tr('Playing'));
          });
          function go() {
            return _go.apply(this, arguments);
          }
          return go;
        }();
        const extra = p.fav ? [{
          sep: true
        }, {
          label: tr('Rename…'),
          icon: 'edit',
          run: function () {
            var _run = _asyncToGenerator(function* () {
              const n = yield prompt2(tr('Rename favourite'), {
                value: name,
                ok: tr('Rename')
              });
              if (n) {
                yield act(['favorites', 'rename', 'item_id:' + it.id, 'title:' + n], tr('Renamed'), '');
                build();
              }
            });
            function run() {
              return _run.apply(this, arguments);
            }
            return run;
          }()
        }, {
          label: tr('Remove from favourites'),
          icon: 'delete',
          danger: true,
          run: function () {
            var _run2 = _asyncToGenerator(function* () {
              if (yield confirm2(tr('Remove “{name}” from favourites?', {
                name
              }), tr('Remove'))) {
                yield act(['favorites', 'delete', 'item_id:' + it.id], tr('Removed'), '');
                build();
              }
            });
            function run() {
              return _run2.apply(this, arguments);
            }
            return run;
          }()
        }] : [];
        return row({
          art: xmlArt(it),
          artIcon: isSearch ? 'search' : +it.hasitems ? 'folder' : 'note',
          title: name,
          sub: it.line2 || it.subtitle || null,
          onclick: go,
          menu: +it.isaudio || p.fav ? () => xmlMenu(p.cmd, it, extra) : null
        });
      }
    }));
    build();
    return page;
  };
  VIEWS.favourites = () => VIEWS.xml({
    cmd: 'favorites',
    title: tr('Favourites'),
    fav: true
  });
  function serviceList(kind) {
    return lazyList({
      page: 100,
      empty: kind === 'radios' ? tr('No radio services are installed on the server.') : tr('No apps are installed on the server.'),
      fetch: loopFetch((s, n) => rpc([kind, s, n], ''), kind + 's_loop', x => x.cmd),
      render: a => row({
        art: S.lms.art(a.icon, 96),
        artIcon: kind === 'radios' ? 'radio' : 'apps',
        title: a.name,
        onclick: () => isLyrionJSApp(a.cmd) ? push('about', {
          recursion: true
        }) : push('xml', {
          cmd: a.cmd,
          title: a.name
        })
      })
    });
  }
  VIEWS.radio = () => ({
    title: tr('Radio'),
    el: serviceList('radios')
  });
  VIEWS.apps = () => ({
    title: tr('Apps'),
    el: serviceList('apps')
  });
  VIEWS.random = () => {
    const kinds = [['tracks', tr('Songs'), 'note', tr('Random song mix started')], ['albums', tr('Albums'), 'album', tr('Random album mix started')], ['contributors', tr('Artists'), 'artist', tr('Random artist mix started')], ['year', tr('Years'), 'year', tr('Random year mix started')]];
    const el = h('div', {
      class: 'tiles'
    }, kinds.map(([k, t, i, msg]) => h('button', {
      class: 'tile',
      onclick: () => act(['randomplay', k], msg)
    }, icon(i), h('span', {
      text: t
    }))), h('button', {
      class: 'tile ghost',
      onclick: () => act(['randomplay', 'disable'], tr('Random mix stopped'))
    }, icon('stop'), h('span', {
      text: tr('Stop mix')
    })));
    return {
      title: tr('Random mix'),
      el: h('div', {}, h('p', {
        class: 'view-sub',
        text: tr('LMS keeps the queue topped up with random picks from your library.')
      }), el)
    };
  };
  // ---------------------------------------------------------------------------
  // The local Slimproto player
  // ---------------------------------------------------------------------------
  /**
   * Which output this device should use. Phones and tablets get the media element (it keeps
   * playing with the screen locked) if a self-test shows the browser plays our FLAC-in-MP4;
   * everything else, or a failed test, gets Web Audio. Settings can force either.
   */
  const WS_URL = (location.protocol === 'https:' ? 'wss://' : 'ws://') + location.host + '/plugins/LyrionJS/ws';
  function chooseOutput() {
    return _chooseOutput.apply(this, arguments);
  }
  /** Starts this browser's player; a start already under way is shared, not repeated. */
  function _chooseOutput() {
    _chooseOutput = _asyncToGenerator(function* () {
      const want = store.get('outputMode', S.config && S.config.defaultOutput || 'auto');
      const ua = navigator.userAgent;
      const ios = isIOS();
      const mobile = ios || /Android/.test(ua);
      // why: English, for the log; Settings shows it translated.
      let mode = 'webaudio',
        why = N_('desktop browser');
      if (want === 'webaudio') why = N_('chosen in Settings');else if (want !== 'media' && store.get('mediaUnusable', false)) why = N_('the media element failed here before');else if (want === 'media' || mobile) {
        const ok = LJ.mediaSupported() && (yield LJ.selfTest());
        if (ok) {
          mode = 'media';
          why = want === 'media' ? N_('chosen in Settings') : ios ? N_('iPhone/iPad: keeps playing with the screen locked') : N_('Android: keeps playing with the screen locked');
        } else why = ios ? N_('this browser cannot play FLAC through a media element (iOS 17.1 or later needed); keep the screen on') : N_('this browser cannot play FLAC through a media element');
      }
      diag('output', `mode ${mode} (${why}); ios=${ios} mobile=${mobile} mms=${!!window.ManagedMediaSource} mse=${!!window.MediaSource}`);
      S.outputMode = mode;
      S.outputWhy = why;
      if (mode === 'media') {
        const o = new LJ.MediaOutput(document.getElementById('lj-audio'), {
          diag
        });
        o.level = store.get('localLevel', store.get('localTrim', 1));
        // The OS paused us (a call, another app, headphones out): tell LMS, as a Squeezebox would.
        o.externalPause = () => {
          if (S.local && S.local.state === 'playing') act(['pause', 1], null, S.localId);
        };
        return o;
      }
      return new LJ.WebOutput({
        workletSource: document.getElementById('lj-worklet').textContent,
        diag,
        level: store.get('localLevel', store.get('localTrim', 1)),
        preferRate: store.get('outRate', 44100),
        onRate: r => store.set('outRate', r),
        // iPhone and iPad start a second audio context only inside a tap.
        singleContext: isIOS()
      });
    });
    return _chooseOutput.apply(this, arguments);
  }
  let starting = null;
  function startLocalPlayer() {
    if (!starting) starting = startNow().catch(fail).finally(() => {
      starting = null;
    });
    return starting;
  }
  function startNow() {
    return _startNow.apply(this, arguments);
  }
  function _startNow() {
    _startNow = _asyncToGenerator(function* () {
      const wanted = () => !S.local && S.server && store.get('localEnabled', true);
      if (!wanted()) return;
      const mac = macBytes();
      S.localId = mac.str;
      // Ask once for this browser's storage to be kept, as it holds the player's MAC: lost, the
      // browser comes back as a new player. Only on HTTPS and localhost; Firefox asks the person.
      if (!store.get('persistAsked', false) && navigator.storage && navigator.storage.persist) {
        store.set('persistAsked', true);
        navigator.storage.persisted().then(p => p || navigator.storage.persist()).catch(() => {});
      }
      if (!S.output) S.output = yield chooseOutput();
      const [maxRate, mp3] = yield Promise.all([S.outputMode === 'media' ? Promise.resolve(192000) : LJ.detectMaxRate(), detectMp3()]);
      if (!wanted()) return; // switched off (or started) while the checks ran
      const caps = ['flc', 'pcm'].concat(mp3 ? ['mp3'] : []);
      const uuid = new Uint8Array(16);
      uuid.set(mac.bytes, 0);
      // Earlier versions named iPads "… on macOS" (iPadOS Safari reports a Mac).
      // Earlier test builds were misspelt "LyrianJS", and named iPads "… on macOS".
      const oldName = store.get('name', '');
      if (/^LyrianJS /.test(oldName) || oldName === 'LyrionJS Safari on macOS' && defaultName() !== oldName) store.set('name', defaultName());
      const decoders = {
        f: () => new LJ.FlacDecoder(),
        p: s => new LJ.PcmDecoder(s)
      };
      if (mp3 === 'webcodecs') decoders.m = () => new LJ.Mp3Decoder();else if (mp3 === 'chunks') decoders.m = () => new LJ.Mp3ChunkDecoder(decodeWithBrowser);
      const p = new LJ.SlimPlayer({
        mac: mac.bytes,
        uuid,
        name: store.get('name', defaultName()),
        openControl: () => LJ.controlSocket(WS_URL, LJ.browserEnv(), diag),
        openStream: o => LJ.openStream(o, LJ.browserEnv(), diag),
        output: S.output,
        now: () => performance.now(),
        caps,
        maxRate,
        decoders,
        firmware: VERSION,
        // Without AudioWorklet the output shares the main thread: decode in smaller slices.
        pumpBudget: window.AudioWorkletNode && window.isSecureContext ? 12 : 3,
        // A locked phone runs the page's code only now and then: keep more decoded ahead.
        decodeAhead: S.outputMode === 'media' ? 30 : 10,
        log: (...a) => console.warn('[slimproto]', ...a)
      });
      p.maxRateFound = maxRate;
      p.on(what => {
        if (what === 'name') store.set('name', p.name);
        // The plugin ended this player: another session took it, or browser players were switched off.
        if (what === 'replaced' || what === 'disabled') {
          toast(what === 'replaced' ? tr('This player was taken over by another session; this page is now a remote control.') : tr('Browser players are switched off in LMS (Settings › Plugins › LyrionJS); this page is now a remote control.'));
          if (S.local === p) stopLocalPlayer();
          if (what === 'replaced') playerTaken();
          return;
        }
        if (what === 'state' || what === 'track' || what === 'connected') {
          pollSoon(150);
          refreshUnlock();
        }
        if (what === 'connected') {
          setTimeout(pollPlayers, 400);
          if (!S.pluginMenus || !S.pluginMenus.length) setTimeout(loadPluginMenus, 800);
          setTimeout(maybeAskName, 2500);
          // Where the page can't set the volume (iOS), the device's buttons do: hold LMS at 100 %
          // (but leave it muted).
          if (S.output.volumeLocked && p.gain > 0.01 && Math.abs(p.gain - 1) > 0.01) act(['mixer', 'volume', 100], null, S.localId);
        }
        renderLocalBadge();
      });
      S.local = p;
      S.output.onState = refreshUnlock;
      // The media element failed and was replaced (output/media.js): what was queued is lost, so
      // start the current track again where it was.
      let lastRecovery = {
        index: -1,
        at: -1e9
      };
      S.output.onFailure = /*#__PURE__*/function () {
        var _ref1 = _asyncToGenerator(function* (why, wasPlaying, fatal) {
          if (fatal) {
            diag('media', 'media element unusable: ' + why);
            // Chosen in Settings: say so, and leave the choice to the person.
            if (store.get('outputMode', 'auto') === 'media') {
              fail(new Error(tr('The media element can\'t play here: choose Web Audio in Settings › Audio output.')));
              return;
            }
            // Automatic: this browser uses Web Audio from now on (Settings can still choose either).
            store.set('mediaUnusable', true);
            toast(tr('This browser can\'t play through the media element: switching to Web Audio…'));
            setTimeout(() => location.reload(), 1500);
            return;
          }
          diag('media', 'recovering after: ' + why);
          if (!wasPlaying) return;
          try {
            const st = yield S.lms.rpc(S.localId, ['status', '-', 1]);
            const index = +st.playlist_cur_index || 0;
            // The same track failing again at once: it's the track, so go on to the next one.
            if (index === lastRecovery.index && performance.now() - lastRecovery.at < 30000) {
              diag('media', 'track ' + index + ' fails again: skipping it');
              lastRecovery = {
                index: -1,
                at: -1e9
              };
              yield S.lms.rpc(S.localId, ['playlist', 'index', '+1']);
              return;
            }
            lastRecovery = {
              index,
              at: performance.now()
            };
            yield S.lms.rpc(S.localId, ['playlist', 'index', index]);
            if (+st.time > 1) yield S.lms.rpc(S.localId, ['time', st.time]);
          } catch (e) {
            diag('error', 'recovery: ' + e.message);
          }
        });
        return function (_x35, _x36, _x37) {
          return _ref1.apply(this, arguments);
        };
      }();
      p.onStat = ev => {
        if (ev !== 'STMt') diag('stat', `${ev} state=${p.state}`);
      };
      p.onStrm = s => {
        if (s.command !== 't') diag('strm', `${s.command} autostart=${s.autostart} format=${s.format} threshold=${s.threshold} arg=${s.replayGain}`);
      };
      diag('player', `${p.name} ${mac.str} caps=${caps.join(',')} mp3=${mp3 || 'none'} maxRate=${maxRate} secure=${window.isSecureContext}`);
      const snapshot = setInterval(() => {
        if (p.state === 'stopped') return;
        const o = S.output,
          t = p.tracks.find(x => !x.decoded) || p.tracks[p.tracks.length - 1];
        const out = o.el ? `el ${o.el.paused ? 'paused' : 'playing'} t=${o.el.currentTime.toFixed(2)} end=${o.writer.end.toFixed(2)} ops=${o.sbq.ops.length} full=${o.sbq.full} unlocked=${o.unlocked}` : `ctx=${o.ctx ? o.ctx.state + '@' + o.rate : 'none'} src=${o.srcRate} rep=${o.rep ? `pos ${o.rep.pos} q ${o.rep.queued} playing ${o.rep.playing} under ${o.rep.under}` : 'none'} pending=${o.pending.length} posts=${o.posts.length}`;
        diag('snap', `state=${p.state} conn=${p.connected} queued=${o.queuedSeconds().toFixed(1)}s ${out} ` + `track=${t ? `#${t.seq} ${t.format} bytes ${t.bytes} buf ${t.decoder ? t.decoder.buffered : '-'} open ${t.streamOpen} decoded ${t.decoded} ${t.describe}` : 'none'} err=${p.lastError || '-'}`);
      }, 3000);
      const onHide = () => {
        try {
          p.stop();
        } catch (e) {/* closing */}
      };
      window.addEventListener('pagehide', onHide);
      S.localCleanup = () => {
        clearInterval(snapshot);
        window.removeEventListener('pagehide', onHide);
      };
      p.start();
    });
    return _startNow.apply(this, arguments);
  }
  function stopLocalPlayer() {
    if (!S.local) return;
    S.local.stop();
    S.local = null;
    if (S.localCleanup) {
      S.localCleanup();
      S.localCleanup = null;
    }
    clearMediaSession();
    renderLocalBadge();
  }

  /**
   * Only one tab per browser may be the player: two would share a MAC, and the plugin would give
   * the player to the newer one, cutting off what the first was playing. So the first tab keeps
   * it for its life (switching the player off and on again reuses it); the others are remote
   * controls, and one of them takes over when it closes. The browser's lock does this where it
   * has one (HTTPS and localhost); elsewhere the tabs ask each other on a channel.
   */
  const ASK_MS = 400; // for the player tab to answer a new one
  let claim = null; // null, 'asking' (the other tabs), 'waiting' (a remote control) or 'lock'
  let chan = null,
    asked = null,
    askTimer = 0;
  function ownPlayer() {
    S.ownsPlayer = true;
    startLocalPlayer();
  }
  function beRemote() {
    claim = claim === 'lock' ? 'lock' : 'waiting';
    toast(tr('Another tab is this browser\'s player; this one is a remote control.'));
  }
  function claimPlayerThenStart() {
    if (S.ownsPlayer) {
      startLocalPlayer();
      return;
    }
    if (claim === 'asking') return;
    if (claim) {
      beRemote();
      return;
    }
    if (navigator.locks && navigator.locks.request) {
      claim = 'lock';
      const hold = () => {
        ownPlayer();
        return new Promise(() => {});
      }; // for the life of the tab
      navigator.locks.request('lyrionjs-player', {
        ifAvailable: true
      }, lock => {
        if (lock) return hold();
        beRemote();
        navigator.locks.request('lyrionjs-player', hold); // granted when the player tab closes
        return null;
      });
    } else if (window.BroadcastChannel) {
      if (!chan) {
        chan = new BroadcastChannel('lyrionjs-player');
        chan.onmessage = ({
          data: m
        }) => {
          if (!m || typeof m !== 'object') return;
          // Two tabs asking at once: the one that asked first goes ahead.
          const first = asked && claim === 'asking' && (asked.at < m.at || asked.at === m.at && asked.id < m.id);
          if (m.t === 'who' && (S.ownsPlayer || first)) chan.postMessage({
            t: 'mine'
          });else if (m.t === 'mine' && claim === 'asking') {
            clearTimeout(askTimer);
            beRemote();
          } else if (m.t === 'gone' && claim === 'waiting') {
            claim = null;
            setTimeout(claimPlayerThenStart, Math.random() * 200);
          }
        };
        window.addEventListener('pagehide', () => {
          if (S.ownsPlayer) chan.postMessage({
            t: 'gone'
          });
        });
      }
      claim = 'asking';
      asked = {
        t: 'who',
        at: Date.now(),
        id: Math.random()
      };
      chan.postMessage(asked);
      askTimer = setTimeout(() => {
        claim = null;
        ownPlayer();
      }, ASK_MS);
    } else ownPlayer();
  }
  /** The plugin gave this browser's player to another tab: this one waits for it, as a remote control. */
  function playerTaken() {
    if (S.ownsPlayer && claim !== 'lock') {
      S.ownsPlayer = false;
      claim = 'waiting';
    }
  }

  // Back from the back/forward cache: the player stopped when the page was hidden; start afresh.
  window.addEventListener('pageshow', e => {
    if (e.persisted) location.reload();
  });
  function refreshUnlock() {
    const el = document.getElementById('unlock');
    const need = S.local && S.output && S.output.needsGesture && ['playing', 'waiting', 'loaded', 'paused'].includes(S.local.state);
    el.hidden = !need;
  }
  // -- naming ---------------------------------------------------------------------
  /** Lets the person name this browser's player (in LMS, so every controller shows it). */
  function renameLocal(_x26) {
    return _renameLocal.apply(this, arguments);
  }
  /** The first time this browser is a player with the name it was given automatically, ask. */
  function _renameLocal() {
    _renameLocal = _asyncToGenerator(function* (first) {
      if (!S.local) return;
      const n = yield prompt2(first ? tr('Give this player a name') : tr('Name this player'), first ? {
        value: '',
        placeholder: tr('e.g. Kitchen tablet'),
        ok: tr('Save'),
        hint: tr('How this browser shows in LMS and your other controllers. Change it any time in Settings.')
      } : {
        value: S.local.name,
        placeholder: tr('e.g. Kitchen tablet'),
        ok: tr('Save')
      });
      store.set('named', true); // asked once: never ask again by ourselves
      if (!S.local || !n || n === S.local.name) return; // (the player may have been switched off meanwhile)
      const name = n.slice(0, 48);
      try {
        yield S.lms.rpc(S.localId, ['name', name]);
      } catch (e) {
        fail(e);
        return;
      }
      S.local.name = name;
      store.set('name', name);
      toast(tr('This player is now “{name}”', {
        name
      }));
      renderLocalBadge();
      yield pollPlayers().catch(() => {});
      renderPlayerButton();
    });
    return _renameLocal.apply(this, arguments);
  }
  let askedName = false;
  function maybeAskName() {
    return _maybeAskName.apply(this, arguments);
  }
  function _maybeAskName() {
    _maybeAskName = _asyncToGenerator(function* () {
      if (askedName || store.get('named', false) || !S.local) return;
      askedName = true;
      yield pollPlayers().catch(() => {});
      const known = S.players.find(x => x.playerid === S.localId);
      const name = known ? known.name : S.local.name;
      if (name !== defaultName()) {
        store.set('named', true);
        return;
      } // already named (perhaps in another controller)
      // Not over a dialog, nor while the person is typing somewhere (the prompt would take the keys).
      const busy = !document.getElementById('sheet').hidden || document.activeElement && document.activeElement.matches('input, textarea, select');
      if (!busy) renameLocal(true).catch(fail);else askedName = false; // try again when they next connect
    });
    return _maybeAskName.apply(this, arguments);
  }
  function renderLocalBadge() {
    const el = document.getElementById('localBadge');
    if (!el) return;
    el.textContent = '';
    if (!S.local) {
      el.append(tr('Browser player off'));
      el.className = 'badge off';
      el.title = '';
      el.disabled = true;
      return;
    }
    el.disabled = false;
    const snap = S.local.snapshot();
    el.className = 'badge ' + (snap.connected ? 'on' : 'warn');
    el.append(snap.connected ? `${S.local.name} · ${stateWord(snap.state)}` : tr('Connecting to LMS…'));
    el.title = tr('Rename this player');
  }

  /** 'webcodecs' (streaming, exact), 'chunks' (decodeAudioData fallback) or '' (no MP3). */
  function detectMp3() {
    return _detectMp.apply(this, arguments);
  }
  function _detectMp() {
    _detectMp = _asyncToGenerator(function* () {
      if (LJ.Mp3Decoder.supported()) {
        try {
          const r = yield AudioDecoder.isConfigSupported({
            codec: 'mp3',
            sampleRate: 44100,
            numberOfChannels: 2
          });
          if (r.supported) return 'webcodecs';
        } catch (e) {/* fall through */}
      }
      return typeof OfflineAudioContext === 'function' ? 'chunks' : '';
    });
    return _detectMp.apply(this, arguments);
  }
  function decodeWithBrowser(bytes, rate, channels) {
    const ctx = new OfflineAudioContext(channels, 1, rate);
    const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
    return ctx.decodeAudioData(buf).then(b => {
      const out = [];
      for (let c = 0; c < b.numberOfChannels; c++) out.push(b.getChannelData(c));
      return out;
    });
  }

  // ---------------------------------------------------------------------------
  // Media Session (lock screen / media keys) for this browser's player
  // ---------------------------------------------------------------------------
  let lastMeta = '';
  /** The lock screen no longer shows this browser as playing, nor sends it commands. */
  function clearMediaSession() {
    lastMeta = null;
    if (!('mediaSession' in navigator)) return;
    navigator.mediaSession.metadata = null;
    navigator.mediaSession.playbackState = 'none';
    for (const a of ['play', 'pause', 'nexttrack', 'previoustrack', 'stop', 'seekto']) {
      try {
        navigator.mediaSession.setActionHandler(a, null);
      } catch (e) {/* unsupported action */}
    }
  }
  function updateMediaSession() {
    if (!('mediaSession' in navigator) || !S.local) return;
    const st = S.localStatus;
    if (!st) return;
    const c = current(st);
    if (!c) return;
    const key = c.title + c.artist + c.album;
    navigator.mediaSession.playbackState = st.mode === 'play' ? 'playing' : st.mode === 'pause' ? 'paused' : 'none';
    // The lock screen's position: the track's own, not the media element's whole session.
    if (navigator.mediaSession.setPositionState && c.duration > 0) {
      try {
        navigator.mediaSession.setPositionState({
          duration: c.duration,
          position: Math.min(c.duration, Math.max(0, +st.time || 0)),
          playbackRate: 1
        });
      } catch (e) {/* out of range */}
    }
    if (key === lastMeta) return;
    lastMeta = key;
    try {
      const art = S.lms.url(`music/current/cover_512x512_f?player=${encodeURIComponent(S.localId)}&t=${encodeURIComponent(st.playlist_timestamp || '')}`);
      navigator.mediaSession.metadata = new MediaMetadata({
        title: c.title,
        artist: c.artist,
        album: c.album,
        artwork: [{
          src: new URL(art, location.href).href,
          sizes: '512x512'
        }]
      });
      const L = cmd => () => act(cmd, null, S.localId);
      navigator.mediaSession.setActionHandler('play', L(['pause', 0]));
      navigator.mediaSession.setActionHandler('pause', L(['pause', 1]));
      navigator.mediaSession.setActionHandler('nexttrack', L(['playlist', 'index', '+1']));
      navigator.mediaSession.setActionHandler('previoustrack', L(['button', 'jump_rew']));
      navigator.mediaSession.setActionHandler('stop', L(['stop']));
      navigator.mediaSession.setActionHandler('seekto', d => {
        if (d && d.seekTime != null) act(['time', d.seekTime.toFixed(1)], null, S.localId);
      });
    } catch (e) {/* not all browsers support every action */}
  }
  // ---------------------------------------------------------------------------
  // A new version of the page: an open tab keeps running the code it started with, even across an
  // LMS restart. config.json says when the page file last changed; when that's no longer what it
  // was at boot, the page reloads itself, or offers to while this browser is playing.
  // ---------------------------------------------------------------------------
  const UPDATE_EVERY_MS = 10 * 60 * 1000;
  let pageAtBoot = null,
    pageNow = null,
    checking = false;

  /**
   * What to do about the page on the server: 'none', 'reload' now, or 'wait' (offer it, and
   * reload once this browser's player stops). Busy: anything but stopped, since a reload ends the
   * stream and loses a paused place. In use: a sheet open or something being typed, on a shown page.
   */
  function updateAction(atBoot, now, localState, inUse) {
    if (!atBoot || !now || now === atBoot) return 'none';
    return localState && localState !== 'stopped' || inUse ? 'wait' : 'reload';
  }
  function pageInUse() {
    if (document.hidden) return false;
    const a = document.activeElement;
    return !document.getElementById('sheet').hidden || !!(a && a.matches && a.matches('input:not([type="range"]), textarea, select'));
  }

  /** The page stamp at boot, from the config.json read then (an older plugin has none). */
  function notePage(config) {
    pageAtBoot = config && config.page || null;
  }
  function checkUpdate() {
    return _checkUpdate.apply(this, arguments);
  }
  function _checkUpdate() {
    _checkUpdate = _asyncToGenerator(function* () {
      if (!pageAtBoot || checking) return;
      checking = true;
      try {
        const c = yield (yield fetch('/plugins/LyrionJS/config.json', {
          cache: 'no-store'
        })).json();
        if (c.page) pageNow = c.page;
        applyUpdate();
      } catch (e) {/* the server is away: next time */} finally {
        checking = false;
      }
    });
    return _checkUpdate.apply(this, arguments);
  }
  function applyUpdate() {
    const act = updateAction(pageAtBoot, pageNow, S.local && S.local.state, pageInUse());
    if (act === 'reload') {
      diag('update', 'new page: reloading');
      flushDiag(true);
      location.reload();
    } else document.getElementById('update').hidden = act === 'none';
  }
  document.getElementById('update').onclick = () => location.reload();
  // Back after a while away, or the server back after a restart: look then, and now and then too.
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) checkUpdate();
  });
  setInterval(checkUpdate, UPDATE_EVERY_MS);
  // Waiting for this browser to stop playing: try again as things change.
  setInterval(() => {
    if (pageNow) applyUpdate();
  }, 5000);
  // ---------------------------------------------------------------------------
  /** A volume slider for the controlled player. It follows LMS, except just after a touch. */
  function volumeSlider() {
    const vol = h('input', {
      type: 'range',
      min: 0,
      max: 100,
      step: 1,
      class: 'vol',
      'aria-label': tr('Volume')
    });
    const send = debounce(() => act(['mixer', 'volume', vol.value]), 120);
    const touch = () => {
      vol.touchedAt = performance.now();
    };
    vol.addEventListener('pointerdown', touch);
    vol.addEventListener('input', () => {
      touch();
      send();
    });
    return vol;
  }
  const showVolume = (vol, v) => {
    if (!(performance.now() - (vol.touchedAt || -1e9) < 1500)) {
      vol.value = v;
      fillRange(vol);
    }
  };

  // Views
  // ---------------------------------------------------------------------------
  let npEls = null;
  VIEWS.now = () => {
    const art = h('div', {
      class: 'np-art'
    });
    const title = h('div', {
        class: 'np-title'
      }),
      artist = h('button', {
        class: 'np-link np-artist'
      }),
      album = h('button', {
        class: 'np-link np-album'
      });
    const station = h('div', {
      class: 'np-station'
    });
    const quality = h('div', {
      class: 'np-quality'
    });
    const seek = h('input', {
      type: 'range',
      min: 0,
      max: 100,
      step: 'any',
      value: 0,
      class: 'seek',
      'aria-label': tr('Position')
    });
    const tNow = h('span', {
        class: 'tm'
      }),
      tDur = h('span', {
        class: 'tm'
      });
    const playBtn = btn('play', tr('Play'), () => togglePlay(), 'big');
    const shuf = btn('shuffle', tr('Shuffle'), () => cycleShuffle()),
      rep = btn('repeat', tr('Repeat'), () => cycleRepeat());
    const vol = volumeSlider();
    const muteBtn = btn('volume', tr('Mute'), () => act(['mixer', 'muting', 'toggle']));
    const upNext = h('div', {
      class: 'np-next'
    });
    const empty = h('div', {
      class: 'np-empty'
    }, icon('note', 'huge'), h('p', {
      text: tr('Nothing playing. Pick something from the library, favourites, radio or apps.')
    }));
    let seeking = false;
    seek.addEventListener('input', () => {
      seeking = true;
      tNow.textContent = fmtTime(seek.value);
    });
    seek.addEventListener('change', () => {
      seeking = false;
      act(['time', seek.value]);
    });
    artist.addEventListener('click', () => {
      const c = current();
      if (c && c.artistId) push('artist', {
        id: c.artistId,
        name: c.artist
      });
    });
    album.addEventListener('click', () => {
      const c = current();
      if (c && c.albumId) push('album', {
        id: c.albumId,
        title: c.album,
        artist: c.artist,
        artist_id: c.artistId
      });
    });
    const main = h('div', {
      class: 'np'
    }, art, h('div', {
      class: 'np-info'
    }, title, h('div', {
      class: 'np-sub'
    }, artist, album), station, quality, h('div', {
      class: 'np-seek'
    }, tNow, seek, tDur), h('div', {
      class: 'np-ctrls'
    }, shuf, btn('prev', tr('Previous'), () => act(['button', 'jump_rew'])), playBtn, btn('next', tr('Next'), () => act(['playlist', 'index', '+1'])), rep), h('div', {
      class: 'np-vol'
    }, muteBtn, vol), upNext));
    const el = h('div', {}, empty, main);
    const els = {
      art,
      title,
      artist,
      album,
      station,
      quality,
      seek,
      tNow,
      tDur,
      playBtn,
      shuf,
      rep,
      vol,
      muteBtn,
      upNext,
      empty,
      main,
      isSeeking: () => seeking,
      lastArt: null
    };
    const actions = [btn('down', tr('Close now playing'), () => closeNow(), 'np-close'), btn('fav', tr('Add to favourites'), () => {
      const c = current();
      if (!c || !c.url) return toast(tr('Nothing to add'));
      act(['favorites', 'add', 'url:' + c.url, 'title:' + (c.stationTitle || c.title)], tr('Added to favourites'), '');
    }), btn('sleep', tr('Sleep timer'), sleepMenu), btn('more', tr('More'), () => {
      const c = current();
      if (!c) return;
      libMenu('track', {
        id: c.id,
        title: c.title,
        artist: c.artist,
        album: c.album,
        artist_id: c.artistId,
        album_id: c.albumId,
        url: c.url,
        remote: c.remote,
        art: nowArt(120)
      });
    })];
    // Shown again after Back, the same page must start updating again.
    return {
      title: tr('Now playing'),
      el,
      actions,
      onShow: () => {
        npEls = els;
        updateNowPlaying(true);
      },
      onHide: () => {
        if (npEls === els) npEls = null;
      }
    };
  };
  function sleepMenu() {
    const st = S.status || {};
    const left = +st.will_sleep_in || 0;
    sheet(tr('Sleep timer'), [...[15, 30, 45, 60, 90].map(m => ({
      label: trn(m, '{n} minute', '{n} minutes'),
      icon: 'sleep',
      run: () => act(['sleep', m * 60], trn(m, 'Sleeping in {n} minute', 'Sleeping in {n} minutes'))
    })), {
      label: tr('At the end of this track'),
      icon: 'note',
      run: () => act(['jiveendoftracksleep'], tr('Sleeping after this track'))
    }, left ? {
      label: tr('Cancel ({time} left)', {
        time: fmtTime(left)
      }),
      icon: 'close',
      run: () => act(['sleep', 0], tr('Sleep timer off'))
    } : null], {
      sub: playerName(S.target)
    });
  }
  function togglePlay() {
    const st = S.status;
    if (S.output && S.output.needsGesture) S.output.unlock();
    if (!st) return;
    if (st.mode === 'play') act(['pause', 1]);else if (st.mode === 'pause') act(['pause', 0]);else act(['play']);
  }
  const SHUFFLE = [N_('Shuffle off'), N_('Shuffle songs'), N_('Shuffle albums')];
  const REPEAT = [N_('Repeat off'), N_('Repeat song'), N_('Repeat queue')];
  function cycleShuffle() {
    const v = +(S.status && S.status['playlist shuffle']) || 0;
    act(['playlist', 'shuffle', (v + 1) % 3], tr(SHUFFLE[(v + 1) % 3]));
  }
  function cycleRepeat() {
    const v = +(S.status && S.status['playlist repeat']) || 0;
    act(['playlist', 'repeat', (v + 1) % 3], tr(REPEAT[(v + 1) % 3]));
  }
  function setIcon(b, name, label) {
    b.replaceChildren(icon(name));
    if (label) {
      b.title = label;
      b.setAttribute('aria-label', label);
    }
  }
  function updateNowPlaying(force) {
    updateBar();
    if (!npEls) return;
    const st = S.status,
      c = current(st);
    const has = !!(c && (c.title || +st.playlist_tracks));
    npEls.empty.hidden = has;
    npEls.main.hidden = !has;
    if (!has) return;
    const artUrl = nowArt(600);
    if (force || artUrl !== npEls.lastArt) {
      npEls.lastArt = artUrl;
      npEls.art.replaceChildren(artEl(artUrl, 'album', 'xl'));
      // The cover, blurred, behind full-screen now playing (the Material skin).
      document.body.style.setProperty('--np-art', artUrl ? `url(${JSON.stringify(artUrl)})` : 'none');
    }
    npEls.title.textContent = c.title || tr('Unknown');
    npEls.artist.textContent = c.artist;
    npEls.artist.disabled = !c.artistId;
    npEls.album.textContent = c.album;
    npEls.album.disabled = !c.albumId;
    npEls.album.hidden = !c.album;
    npEls.station.textContent = c.stationTitle;
    npEls.station.hidden = !c.stationTitle;
    let q = qualityLabel(c);
    // The gain LMS applies to this track, by the player's ReplayGain mode (only when there is one).
    const rg = st.replay_gain != null && st.replay_gain !== '' && isFinite(+st.replay_gain) ? +st.replay_gain : null;
    // Two decimals and always a sign, as LMS and other clients show it ("+0.00"); never "−0.00".
    if (rg != null) q = (q ? q + ' · ' : '') + tr('ReplayGain {gain} dB', {
      gain: (Math.round(rg * 100) / 100 || 0).toLocaleString(locale, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        signDisplay: 'always'
      })
    });
    if (isLocal(S.target) && S.local) {
      const f = S.local.snapshot().format;
      if (f) q = (q ? q + '  →  ' : '') + tr('decoding {format}', {
        format: f
      });
    }
    npEls.quality.textContent = q;
    const d = c.duration,
      t = elapsedNow();
    npEls.seek.max = d || 1;
    npEls.seek.disabled = !d || st.can_seek === 0;
    if (!npEls.isSeeking()) {
      npEls.seek.value = t;
      fillRange(npEls.seek);
      npEls.tNow.textContent = fmtTime(t);
    }
    npEls.tDur.textContent = d ? fmtTime(d) : c.remote ? tr('Live') : '';
    setIcon(npEls.playBtn, st.mode === 'play' ? 'pause' : 'play', st.mode === 'play' ? tr('Pause') : tr('Play'));
    const sh = +st['playlist shuffle'] || 0,
      rp = +st['playlist repeat'] || 0;
    npEls.shuf.classList.toggle('on', sh > 0);
    npEls.shuf.title = tr(SHUFFLE[sh]);
    npEls.rep.classList.toggle('on', rp > 0);
    setIcon(npEls.rep, rp === 1 ? 'repeat1' : 'repeat', tr(REPEAT[rp]));
    const v = Math.abs(+st['mixer volume'] || 0),
      muted = (+st['mixer volume'] || 0) < 0;
    showVolume(npEls.vol, v);
    setIcon(npEls.muteBtn, muted ? 'mute' : 'volume', muted ? tr('Unmute') : tr('Mute'));
    npEls.muteBtn.classList.toggle('on', muted);
    const idx = +st.playlist_cur_index,
      total = +st.playlist_tracks || 0;
    npEls.upNext.textContent = total ? tr('Track {n} of {total}', {
      n: idx + 1,
      total
    }) : '';
  }
  function updateBar() {
    const bar = document.getElementById('bar');
    const st = S.status,
      c = current(st);
    const has = !!(c && c.title);
    const els = bar._els || (bar._els = buildBar(bar));
    els.title.textContent = has ? c.title : S.target ? tr('Nothing playing') : tr('No player');
    // Artist and album apart, so a skin can join them its own way (Material: "by … from …").
    els.by.textContent = has ? c.artist || '' : playerName(S.target);
    els.from.textContent = has ? c.album || '' : '';
    els.sub.classList.toggle('track', has);
    const art = has ? nowArt(120) : null;
    if (art !== els.lastArt) {
      els.lastArt = art;
      els.art.replaceChildren(artEl(art, 'note', 'sm'));
      coverAccent(art);
    }
    setIcon(els.play, st && st.mode === 'play' ? 'pause' : 'play', st && st.mode === 'play' ? tr('Pause') : tr('Play'));
    const d = c ? c.duration : 0,
      t = elapsedNow();
    els.prog.style.width = d ? Math.min(100, t / d * 100) + '%' : '0%';
    els.time.textContent = has ? d ? `${fmtTime(t)} / ${fmtTime(d)}` : fmtTime(t) : '';
    const total = +(st && st.playlist_tracks) || 0;
    els.pos.textContent = has && total > 1 ? tr('{n} of {total}', {
      n: +st.playlist_cur_index + 1,
      total
    }) : '';
    const v = Math.abs(+(st && st['mixer volume']) || 0),
      muted = (+(st && st['mixer volume']) || 0) < 0;
    for (const [m, vl] of [[els.mute, els.vol], [els.topMute, els.topVol]]) {
      showVolume(vl, v);
      setIcon(m, muted ? 'mute' : 'volume', muted ? tr('Unmute') : tr('Mute'));
      m.classList.toggle('on', muted);
    }
    els.topPct.textContent = st ? v + '%' : '';
  }
  function buildBar(bar) {
    const art = h('div', {
      class: 'bar-art'
    });
    const title = h('div', {
        class: 't1'
      }),
      by = h('span', {
        class: 'by'
      }),
      from = h('span', {
        class: 'from'
      }),
      sub = h('div', {
        class: 't2'
      }, by, from);
    const play = btn('play', tr('Play'), () => togglePlay(), 'mid');
    const prog = h('div', {
      class: 'bar-prog-fill'
    });
    const time = h('div', {
        class: 'bar-time'
      }),
      pos = h('div', {
        class: 'bar-pos'
      });
    const vol = volumeSlider();
    const mute = btn('volume', tr('Mute'), () => act(['mixer', 'muting', 'toggle']));
    // The same in the top bar, where the Material skin has it.
    const topVol = volumeSlider(),
      topMute = btn('volume', tr('Mute'), () => act(['mixer', 'muting', 'toggle'])),
      topPct = h('span', {
        class: 'top-pct'
      });
    document.getElementById('topVol').replaceChildren(topMute, topVol, topPct);
    const progBar = h('div', {
      class: 'bar-prog',
      title: tr('Seek')
    }, prog);
    progBar.addEventListener('click', e => {
      const c = current();
      if (!c || !c.duration) return;
      const r = progBar.getBoundingClientRect();
      act(['time', ((e.clientX - r.left) / r.width * c.duration).toFixed(1)]);
    });
    bar.append(progBar, h('div', {
      class: 'bar-main'
    }, h('button', {
      class: 'bar-np',
      onclick: () => openNow()
    }, art, h('div', {
      class: 'meta'
    }, title, sub)), h('div', {
      class: 'bar-ctrls'
    }, btn('prev', tr('Previous'), () => act(['button', 'jump_rew'])), play, btn('next', tr('Next'), () => act(['playlist', 'index', '+1']))), h('div', {
      class: 'bar-right'
    }, h('div', {
      class: 'bar-when'
    }, time, pos), h('div', {
      class: 'bar-vol'
    }, mute, vol), btn('queue', tr('Queue'), () => S.shown && S.shown.name === 'queue' ? root(store.get('browseView', 'home')) : root('queue')))));
    return {
      art,
      title,
      sub,
      by,
      from,
      play,
      pos,
      prog,
      time,
      vol,
      mute,
      topVol,
      topMute,
      topPct,
      lastArt: undefined
    };
  }
  setInterval(() => {
    if (S.status && S.status.mode === 'play') {
      updateBar();
      if (npEls) updateNowPlaying();
    }
    renderLocalBadge();
  }, 500);
  // -- Queue -------------------------------------------------------------------
  VIEWS.queue = () => {
    const list = h('div', {
      class: 'list queue'
    });
    const info = h('div', {
      class: 'view-sub'
    });
    let dragFrom = null,
      gen = 0;
    const SHOWN = 1000;
    function load() {
      return _load.apply(this, arguments);
    }
    function _load() {
      _load = _asyncToGenerator(function* () {
        if (!S.target) {
          list.replaceChildren(h('div', {
            class: 'empty',
            text: tr('No player selected.')
          }));
          return;
        }
        const my = ++gen;
        try {
          const r = yield rpc(['status', 0, SHOWN, 'tags:aAlcdeKNsjJtux']);
          if (my !== gen) return; // a newer load has started
          const cur = +r.playlist_cur_index;
          const items = r.playlist_loop || [];
          const count = +r.playlist_tracks || items.length;
          let total = 0;
          for (const t of items) total += +t.duration || 0;
          info.textContent = items.length ? [trn(count, '{n} track', '{n} tracks') + (count > items.length ? ' ' + tr('(the first {shown} shown)', {
            shown: items.length
          }) : ''), count > items.length ? null : fmtTime(total), playerName(S.target)].filter(Boolean).join(' · ') : '';
          list.replaceChildren(...(items.length ? items.map(t => {
            const i = +t['playlist index'];
            const el = trackRow(t, {
              cls: i === cur ? 'current' : '',
              draggable: true,
              onclick: () => act(['playlist', 'index', i]),
              menu: () => sheet(t.title, [{
                label: tr('Play now'),
                icon: 'play',
                run: () => act(['playlist', 'index', i])
              }, i !== cur ? {
                label: tr('Play next'),
                icon: 'next_up',
                run: () => act(['playlist', 'move', i, i < cur ? cur : cur + 1], tr('Moved'))
              } : null, i > 0 ? {
                label: tr('Move up'),
                icon: 'up',
                run: () => act(['playlist', 'move', i, i - 1])
              } : null, i < count - 1 ? {
                label: tr('Move down'),
                icon: 'down',
                run: () => act(['playlist', 'move', i, i + 1])
              } : null, {
                label: tr('Remove from queue'),
                icon: 'delete',
                run: () => act(['playlist', 'delete', i], tr('Removed'))
              }, t.artist_id ? {
                label: tr('Go to artist'),
                icon: 'artist',
                run: () => push('artist', {
                  id: t.artist_id,
                  name: t.artist
                })
              } : null, t.album_id ? {
                label: tr('Go to album'),
                icon: 'album',
                run: () => push('album', {
                  id: t.album_id,
                  title: t.album,
                  artist: t.artist
                })
              } : null, {
                label: tr('More…'),
                icon: 'more',
                run: () => push('jive', {
                  action: {
                    cmd: ['trackinfo', 'items'],
                    params: {
                      playlist_index: i,
                      menu: 1
                    }
                  },
                  title: t.title
                })
              }, t.url && !+t.remote ? {
                label: tr('Add to playlist…'),
                icon: 'playlist',
                run: () => addToPlaylist([t.url])
              } : null], {
                sub: t.artist
              })
            });
            el.addEventListener('dragstart', e => {
              dragFrom = i;
              el.classList.add('dragging');
              e.dataTransfer.effectAllowed = 'move';
              e.dataTransfer.setData('text/plain', String(i));
            });
            el.addEventListener('dragend', () => el.classList.remove('dragging'));
            el.addEventListener('dragover', e => {
              e.preventDefault();
              el.classList.add('over');
            });
            el.addEventListener('dragleave', () => el.classList.remove('over'));
            el.addEventListener('drop', e => {
              e.preventDefault();
              el.classList.remove('over');
              if (dragFrom != null && dragFrom !== i) act(['playlist', 'move', dragFrom, i]);
              dragFrom = null;
            });
            return el;
          }) : [h('div', {
            class: 'empty',
            text: tr('The queue is empty.')
          })]));
          const curEl = list.querySelector('.current');
          if (curEl && !list.dataset.scrolled) {
            list.dataset.scrolled = '1';
            curEl.scrollIntoView({
              block: 'center'
            });
          }
        } catch (e) {
          fail(e);
        }
      });
      return _load.apply(this, arguments);
    }
    const actions = [btn('shuffle', tr('Shuffle'), () => cycleShuffle()), btn('repeat', tr('Repeat'), () => cycleRepeat()), btn('save', tr('Save as playlist'), /*#__PURE__*/_asyncToGenerator(function* () {
      const n = yield prompt2(tr('Save queue as playlist'), {
        placeholder: tr('Playlist name'),
        ok: tr('Save')
      });
      if (n) act(['playlist', 'save', n], tr('Saved as {name}', {
        name: n
      }));
    })), btn('delete', tr('Clear queue'), /*#__PURE__*/_asyncToGenerator(function* () {
      if (yield confirm2(tr('Clear the queue?'), tr('Clear'))) act(['playlist', 'clear'], tr('Queue cleared'));
    }))];
    return {
      title: tr('Queue'),
      el: h('div', {}, info, list),
      actions,
      perPlayer: true,
      onShow: () => {
        playlistListeners.add(load);
        load();
      },
      onHide: () => playlistListeners.delete(load)
    };
  };
  // -- Library -----------------------------------------------------------------
  function albumCard(a) {
    return card({
      art: S.lms.cover(a.artwork_track_id, 300),
      title: a.album,
      sub: [a.artist, a.year && +a.year ? a.year : ''].filter(Boolean).join(' · '),
      onclick: () => push('album', {
        id: a.id,
        title: a.album,
        artist: a.artist,
        artist_id: a.artist_id,
        art: a.artwork_track_id,
        year: a.year
      }),
      menu: () => libMenu('album', _objectSpread(_objectSpread({}, a), {}, {
        title: a.album,
        art: S.lms.cover(a.artwork_track_id, 120)
      }))
    });
  }
  const artistImg = (id, size = 300) => S.lms.url(`imageproxy/mai/artist/${id}/image_${size}x${size}_f`);
  function artistRow(a) {
    return row({
      art: artistImg(a.id, 96),
      artIcon: 'artist',
      title: a.artist,
      onclick: () => push('artist', {
        id: a.id,
        name: a.artist
      }),
      menu: () => libMenu('artist', _objectSpread(_objectSpread({}, a), {}, {
        title: a.artist
      }))
    });
  }
  VIEWS.artists = () => {
    let role = store.get('artistRole', 'ALBUMARTIST');
    const holder = h('div');
    const pick = h('select', {
      class: 'select',
      'aria-label': tr('Which artists'),
      onchange: () => {
        role = pick.value;
        store.set('artistRole', role);
        build();
      }
    }, h('option', {
      value: 'ALBUMARTIST',
      text: tr('Album artists'),
      selected: role === 'ALBUMARTIST'
    }), h('option', {
      value: '',
      text: tr('All artists'),
      selected: role === ''
    }), h('option', {
      value: 'COMPOSER',
      text: tr('Composers'),
      selected: role === 'COMPOSER'
    }));
    function build() {
      swap(holder, lazyList({
        fetch: loopFetch((s, n) => rpc(['artists', s, n, ...(role ? ['role_id:' + role] : [])], ''), 'artists_loop'),
        render: artistRow,
        page: 200
      }));
    }
    build();
    return {
      title: tr('Artists'),
      el: holder,
      actions: [pick]
    };
  };
  VIEWS.albums = (p = {}) => {
    let sort = p.sort || store.get('albumSort', 'album');
    const holder = h('div');
    const pick = p.sort ? null : h('select', {
      class: 'select',
      'aria-label': tr('Sort albums'),
      onchange: () => {
        sort = pick.value;
        store.set('albumSort', sort);
        build();
      }
    }, [['album', tr('By title')], ['artistalbum', tr('By artist')], ['yearalbum', tr('By year')], ['new', tr('Recently added')], ['random', tr('Random')]].map(([v, t]) => h('option', {
      value: v,
      text: t,
      selected: sort === v
    })));
    function build() {
      const all = loopFetch((s, n) => rpc(['albums', s, n, 'tags:aljyS', 'sort:' + sort, ...(p.filter || [])], ''), 'albums_loop');
      // LMS shuffles each page it's asked for afresh: random albums come as one batch, never paged.
      const once = /*#__PURE__*/function () {
        var _once = _asyncToGenerator(function* () {
          const r = yield all(0, RANDOM_BATCH);
          r.total = r.items.length;
          return r;
        });
        function once() {
          return _once.apply(this, arguments);
        }
        return once;
      }();
      swap(holder, lazyList({
        grid: true,
        page: 120,
        render: albumCard,
        // "New music" shows the newest 300 albums, not the whole library newest-first.
        fetch: sort === 'random' ? once : p.sort === 'new' ? (/*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator(function* (s, n) {
            const r = yield all(s, n);
            r.total = Math.min(r.total, 300);
            return r;
          });
          return function (_x27, _x28) {
            return _ref5.apply(this, arguments);
          };
        }()) : all
      }));
    }
    build();
    const again = btn('refresh', tr('Other random albums'), () => build());
    if (sort !== 'random') again.hidden = true;
    if (pick) pick.addEventListener('change', () => {
      again.hidden = sort !== 'random';
    });
    return {
      title: p.title || tr('Albums'),
      el: holder,
      actions: [again, ...(pick ? [pick] : [])]
    };
  };
  const RANDOM_BATCH = 50;
  VIEWS.randomalbums = () => VIEWS.albums({
    sort: 'random',
    title: tr('Random albums')
  });
  VIEWS.newmusic = () => VIEWS.albums({
    sort: 'new',
    title: tr('New music')
  });
  VIEWS.artist = p => {
    const header = h('div', {
      class: 'hero'
    }, artEl(artistImg(p.id, 300), 'artist', 'hero-art round'), h('div', {
      class: 'hero-meta'
    }, h('h2', {
      text: p.name || ''
    }), heroButtons('artist', p.id)));
    const albums = lazyList({
      grid: true,
      page: 200,
      empty: tr('No albums.'),
      render: albumCard,
      fetch: loopFetch((s, n) => rpc(['albums', s, n, 'artist_id:' + p.id, 'tags:aljyS', 'sort:yearalbum'], ''), 'albums_loop')
    });
    return {
      title: p.name || tr('Artist'),
      el: h('div', {}, header, h('h3', {
        class: 'section',
        text: tr('Albums')
      }), albums),
      actions: [btn('more', tr('More'), () => libMenu('artist', {
        id: p.id,
        title: p.name,
        favorites_url: 'db:contributor.name=' + encodeURIComponent(p.name || '')
      }))]
    };
  };
  VIEWS.album = p => {
    const list = h('div', {
      class: 'list'
    });
    const meta = h('div', {
      class: 't2'
    });
    const artist = h('button', {
      class: 'np-link',
      text: p.artist || '',
      onclick: () => p.artist_id && push('artist', {
        id: p.artist_id,
        name: p.artist
      })
    });
    const header = h('div', {
      class: 'hero'
    }, artEl(p.art ? S.lms.cover(p.art, 500) : null, 'album', 'hero-art'), h('div', {
      class: 'hero-meta'
    }, h('h2', {
      text: p.title || ''
    }), artist, meta, heroButtons('album', p.id)));
    let tracks = [];
    _asyncToGenerator(function* () {
      try {
        const r = yield rpc(['titles', 0, 1000, 'album_id:' + p.id, 'tags:aAdeltuyjJKsiqr', 'sort:tracknum'], '');
        tracks = r.titles_loop || [];
        let total = 0;
        for (const t of tracks) total += +t.duration || 0;
        const first = tracks[0] || {};
        if (!p.art && first.coverid) header.firstChild.replaceWith(artEl(S.lms.cover(first.coverid, 500), 'album', 'hero-art'));
        if (!p.artist_id && first.artist_id) {
          p.artist_id = first.artist_id;
        }
        if (!p.artist && first.artist) artist.textContent = p.artist = first.artist;
        meta.textContent = [first.year && +first.year ? first.year : '', trn(tracks.length, '{n} track', '{n} tracks'), fmtTime(total), qualityLabel(first)].filter(Boolean).join(' · ');
        const discs = new Set(tracks.map(t => t.disc || 1));
        let lastDisc = null;
        const rows = [];
        tracks.forEach((t, i) => {
          if (discs.size > 1 && t.disc !== lastDisc) {
            lastDisc = t.disc;
            rows.push(h('div', {
              class: 'disc',
              text: tr('Disc {n}', {
                n: t.disc || 1
              })
            }));
          }
          rows.push(row({
            num: t.tracknum || i + 1,
            title: t.title,
            sub: t.artist && t.artist !== p.artist ? t.artist : null,
            right: fmtTime(t.duration),
            onclick: tapTrack(_objectSpread(_objectSpread({}, t), {}, {
              art: S.lms.cover(t.coverid, 120)
            }), () => act(['playlistcontrol', 'cmd:load', 'album_id:' + p.id, 'play_index:' + i], tr('Playing'))),
            menu: () => libMenu('track', _objectSpread(_objectSpread({}, t), {}, {
              art: S.lms.cover(t.coverid, 120)
            }))
          }));
        });
        list.replaceChildren(...rows);
      } catch (e) {
        fail(e);
      }
    })();
    return {
      title: p.title || tr('Album'),
      el: h('div', {}, header, list),
      actions: [btn('more', tr('More'), () => libMenu('album', {
        id: p.id,
        title: p.title,
        artist: p.artist,
        artist_id: p.artist_id,
        favorites_url: tracks[0] ? `db:album.title=${encodeURIComponent(p.title || '')}&contributor.name=${encodeURIComponent(p.artist || '')}` : null
      }, [tracks.length ? {
        label: tr('Add album to playlist…'),
        icon: 'playlist',
        run: () => addToPlaylist(tracks.map(t => t.url).filter(Boolean))
      } : null]))]
    };
  };
  VIEWS.genres = () => ({
    title: tr('Genres'),
    el: lazyList({
      page: 200,
      fetch: loopFetch((s, n) => rpc(['genres', s, n], ''), 'genres_loop'),
      render: g => row({
        art: null,
        artIcon: 'genre',
        title: g.genre,
        onclick: () => push('albums', {
          title: g.genre,
          filter: ['genre_id:' + g.id],
          sort: 'artistalbum'
        }),
        menu: () => libMenu('genre', _objectSpread(_objectSpread({}, g), {}, {
          title: g.genre
        }))
      })
    })
  });
  VIEWS.years = () => ({
    title: tr('Years'),
    el: lazyList({
      page: 200,
      fetch: loopFetch((s, n) => rpc(['years', s, n], ''), 'years_loop', y => +y.year),
      render: y => row({
        art: null,
        artIcon: 'year',
        title: String(y.year),
        onclick: () => push('albums', {
          title: String(y.year),
          filter: ['year:' + y.year],
          sort: 'artistalbum'
        }),
        menu: () => libMenu('year', {
          id: y.year,
          title: String(y.year)
        })
      })
    })
  });
  VIEWS.folders = (p = {}) => ({
    title: p.title || tr('Music folder'),
    el: lazyList({
      page: 200,
      empty: tr('This folder is empty.'),
      fetch: loopFetch((s, n) => rpc(['musicfolder', s, n, 'tags:cdu', ...(p.id ? ['folder_id:' + p.id] : [])], ''), 'folder_loop'),
      render: f => {
        if (f.type === 'folder') return row({
          art: null,
          artIcon: 'folder',
          title: f.filename,
          onclick: () => push('folders', {
            id: f.id,
            title: f.filename
          }),
          menu: () => libMenu('folder', _objectSpread(_objectSpread({}, f), {}, {
            title: f.filename
          }))
        });
        if (f.type === 'track') return row({
          art: S.lms.cover(f.coverid || f.id, 96),
          title: f.filename,
          right: f.duration ? fmtTime(f.duration) : '',
          onclick: tapTrack(_objectSpread(_objectSpread({}, f), {}, {
            title: f.filename
          }), () => pc('load', 'track', f.id)),
          menu: () => libMenu('track', _objectSpread(_objectSpread({}, f), {}, {
            title: f.filename
          }))
        });
        if (f.type === 'playlist') return row({
          art: null,
          artIcon: 'playlist',
          title: f.filename,
          onclick: () => pc('load', 'playlist', f.id),
          menu: () => libMenu('playlist', _objectSpread(_objectSpread({}, f), {}, {
            title: f.filename
          }))
        });
        return row({
          art: null,
          artIcon: 'note',
          title: f.filename,
          cls: 'dim'
        });
      }
    }),
    actions: p.id ? [btn('play', tr('Play folder'), () => pc('load', 'folder', p.id)), btn('add', tr('Queue folder'), () => pc('add', 'folder', p.id))] : []
  });
  // -- Playlists ---------------------------------------------------------------
  VIEWS.playlists = () => {
    const holder = h('div');
    const build = () => swap(holder, lazyList({
      page: 200,
      empty: tr('No saved playlists.'),
      fetch: loopFetch((s, n) => rpc(['playlists', s, n, 'tags:u'], ''), 'playlists_loop'),
      render: pl => row({
        art: null,
        artIcon: 'playlist',
        title: pl.playlist,
        onclick: () => push('playlist', {
          id: pl.id,
          name: pl.playlist
        }),
        menu: () => libMenu('playlist', _objectSpread(_objectSpread({}, pl), {}, {
          title: pl.playlist,
          favorites_url: pl.url
        }), playlistAdmin(pl, build))
      })
    }));
    build();
    // Back from a playlist that was renamed or deleted: show the list as it is now.
    let shown = false;
    const onShow = () => {
      if (shown) build();
      shown = true;
    };
    return {
      title: tr('Playlists'),
      el: holder,
      onShow,
      actions: [btn('save', tr('Save queue as playlist'), /*#__PURE__*/_asyncToGenerator(function* () {
        const n = yield prompt2(tr('Save queue as playlist'), {
          placeholder: tr('Playlist name'),
          ok: tr('Save')
        });
        if (n) {
          yield act(['playlist', 'save', n], tr('Saved as {name}', {
            name: n
          }));
          setTimeout(build, 800);
        }
      }))]
    };
  };
  function playlistAdmin(pl, after) {
    return [{
      sep: true
    }, {
      label: tr('Rename…'),
      icon: 'edit',
      run: function () {
        var _run3 = _asyncToGenerator(function* () {
          const n = yield prompt2(tr('Rename playlist'), {
            value: pl.playlist,
            ok: tr('Rename')
          });
          if (n) {
            yield act(['playlists', 'rename', 'playlist_id:' + pl.id, 'newname:' + n], tr('Renamed'), '');
            after && after();
          }
        });
        function run() {
          return _run3.apply(this, arguments);
        }
        return run;
      }()
    }, {
      label: tr('Delete playlist'),
      icon: 'delete',
      danger: true,
      run: function () {
        var _run4 = _asyncToGenerator(function* () {
          if (yield confirm2(tr('Delete “{name}”?', {
            name: pl.playlist
          }))) {
            yield act(['playlists', 'delete', 'playlist_id:' + pl.id], tr('Deleted'), '');
            after && after();
          }
        });
        function run() {
          return _run4.apply(this, arguments);
        }
        return run;
      }()
    }];
  }
  VIEWS.playlist = p => {
    const holder = h('div');
    let count = 0;
    const tracks = loopFetch((s, n) => rpc(['playlists', 'tracks', s, n, 'playlist_id:' + p.id, 'tags:adlcuKs'], ''), 'playlisttracks_loop');
    const build = () => swap(holder, lazyList({
      page: 500,
      empty: tr('This playlist is empty.'),
      fetch: function () {
        var _fetch3 = _asyncToGenerator(function* (s, n) {
          const r = yield tracks(s, n);
          count = r.total;
          return r;
        });
        function fetch(_x29, _x30) {
          return _fetch3.apply(this, arguments);
        }
        return fetch;
      }(),
      render: (t, i) => {
        const it = _objectSpread(_objectSpread({}, t), {}, {
          art: S.lms.cover(t.coverid, 120)
        });
        const edits = [{
          sep: true
        }, i > 0 ? {
          label: tr('Move up'),
          icon: 'up',
          run: function () {
            var _run5 = _asyncToGenerator(function* () {
              yield act(['playlists', 'edit', 'cmd:move', 'playlist_id:' + p.id, 'index:' + i, 'toindex:' + (i - 1)], null, '');
              build();
            });
            function run() {
              return _run5.apply(this, arguments);
            }
            return run;
          }()
        } : null, i < count - 1 ? {
          label: tr('Move down'),
          icon: 'down',
          run: function () {
            var _run6 = _asyncToGenerator(function* () {
              yield act(['playlists', 'edit', 'cmd:move', 'playlist_id:' + p.id, 'index:' + i, 'toindex:' + (i + 1)], null, '');
              build();
            });
            function run() {
              return _run6.apply(this, arguments);
            }
            return run;
          }()
        } : null, {
          label: tr('Remove from playlist'),
          icon: 'delete',
          run: function () {
            var _run7 = _asyncToGenerator(function* () {
              yield act(['playlists', 'edit', 'cmd:delete', 'playlist_id:' + p.id, 'index:' + i], tr('Removed'), '');
              build();
            });
            function run() {
              return _run7.apply(this, arguments);
            }
            return run;
          }()
        }];
        return trackRow(t, {
          onclick: tapTrack(it, () => act(['playlistcontrol', 'cmd:load', 'playlist_id:' + p.id, 'play_index:' + i], tr('Playing')), edits),
          menu: () => libMenu('track', it, edits)
        });
      }
    }));
    build();
    return {
      title: p.name,
      el: h('div', {}, heroButtons('playlist', p.id, 'pad'), holder),
      actions: [btn('more', tr('More'), () => sheet(p.name, playlistAdmin({
        id: p.id,
        playlist: p.name
      }, () => back()).slice(1)))]
    };
  };
  // -- Search ------------------------------------------------------------------
  VIEWS.search = (p = {}) => {
    const input = h('input', {
      class: 'field search-field',
      type: 'search',
      placeholder: tr('Artists, albums, tracks, playlists'),
      'aria-label': tr('Search'),
      value: p.q || store.get('lastSearch', '')
    });
    const results = h('div', {
      class: 'results'
    });
    let seq = 0;
    function run() {
      return _run8.apply(this, arguments);
    }
    function _run8() {
      _run8 = _asyncToGenerator(function* () {
        const q = input.value.trim();
        store.set('lastSearch', q);
        const my = ++seq;
        if (q.length < 2) {
          results.replaceChildren(h('div', {
            class: 'empty',
            text: tr('Type at least two letters.')
          }));
          return;
        }
        results.replaceChildren(h('div', {
          class: 'empty',
          text: tr('Searching…')
        }));
        try {
          const [ar, al, ti, pl] = yield Promise.all([rpc(['artists', 0, 30, 'search:' + q], ''), rpc(['albums', 0, 40, 'search:' + q, 'tags:aljyS'], ''), rpc(['titles', 0, 100, 'search:' + q, 'tags:aAdeltuyjJKs'], ''), rpc(['playlists', 0, 30, 'search:' + q], '')]);
          if (my !== seq) return;
          const out = [];
          const artists = ar.artists_loop || [],
            albums = al.albums_loop || [],
            tracks = ti.titles_loop || [],
            lists = pl.playlists_loop || [];
          if (artists.length) out.push(h('h3', {
            class: 'section',
            text: tr('Artists ({count})', {
              count: ar.count
            })
          }), h('div', {
            class: 'list'
          }, artists.map(artistRow)));
          if (albums.length) out.push(h('h3', {
            class: 'section',
            text: tr('Albums ({count})', {
              count: al.count
            })
          }), h('div', {
            class: 'grid'
          }, albums.map(albumCard)));
          if (tracks.length) out.push(h('h3', {
            class: 'section',
            text: tr('Tracks ({count})', {
              count: ti.count
            })
          }), h('div', {
            class: 'list'
          }, tracks.map(t => trackRow(t, {
            onclick: tapTrack(_objectSpread(_objectSpread({}, t), {}, {
              art: S.lms.cover(t.coverid, 120)
            }), () => pc('load', 'track', t.id)),
            menu: () => libMenu('track', _objectSpread(_objectSpread({}, t), {}, {
              art: S.lms.cover(t.coverid, 120)
            }))
          }))));
          if (lists.length) out.push(h('h3', {
            class: 'section',
            text: tr('Playlists')
          }), h('div', {
            class: 'list'
          }, lists.map(x => row({
            art: null,
            artIcon: 'playlist',
            title: x.playlist,
            onclick: () => push('playlist', {
              id: x.id,
              name: x.playlist
            })
          }))));
          if (!out.length) out.push(h('div', {
            class: 'empty',
            text: tr('Nothing in the library matches “{query}”.', {
              query: q
            })
          }));
          out.push(h('div', {
            class: 'list'
          }, row({
            art: null,
            artIcon: 'search',
            title: tr('Search apps and services for “{query}”', {
              query: q
            }),
            sub: tr('Everything LMS can search: your library, radio and installed apps'),
            onclick: () => push('jive', {
              action: {
                cmd: ['globalsearch', 'items'],
                params: {
                  menu: 'globalsearch',
                  search: q
                }
              },
              title: tr('Search: {query}', {
                query: q
              })
            })
          })));
          results.replaceChildren(...out);
        } catch (e) {
          if (my !== seq) return; // a newer search is under way
          results.replaceChildren(h('div', {
            class: 'empty',
            text: tr('The search failed: {error}', {
              error: e && e.message || e
            })
          }));
        }
      });
      return _run8.apply(this, arguments);
    }
    input.addEventListener('input', debounce(run, 350));
    if (input.value) run();
    return {
      title: tr('Search'),
      el: h('div', {}, h('form', {
        class: 'search-form',
        onsubmit: e => {
          e.preventDefault();
          run();
        }
      }, input), results),
      onShow: () => setTimeout(() => input.focus(), 30)
    };
  };
  // -- Players -----------------------------------------------------------------
  function groupOf(id) {
    for (const g of S.syncgroups) {
      const m = String(g.sync_members || '').split(',');
      if (m.includes(id)) return m;
    }
    return null;
  }
  VIEWS.players = () => {
    const list = h('div', {
      class: 'players'
    });
    let gen = 0;
    function render() {
      return _render.apply(this, arguments);
    }
    function _render() {
      _render = _asyncToGenerator(function* () {
        const my = ++gen; // renders overlap (each button re-renders): only the newest is shown
        const rows = yield Promise.all(S.players.map(/*#__PURE__*/function () {
          var _ref8 = _asyncToGenerator(function* (p) {
            let st = {};
            try {
              st = yield S.lms.rpc(p.playerid, ['status', '-', 1, 'tags:al']);
            } catch (e) {/* offline */}
            const t = (st.playlist_loop || [])[0] || {};
            const vol = h('input', {
              type: 'range',
              min: 0,
              max: 100,
              value: Math.abs(+st['mixer volume'] || 0),
              class: 'vol',
              'aria-label': tr('Volume of {name}', {
                name: p.name
              })
            });
            vol.addEventListener('input', debounce(() => act(['mixer', 'volume', vol.value], null, p.playerid), 120));
            const g = groupOf(p.playerid);
            const on = +st.power === 1 || st.power === undefined;
            return h('div', {
              class: 'pcard' + (p.playerid === S.target ? ' sel' : '')
            }, h('div', {
              class: 'pcard-head'
            }, icon(isLocal(p.playerid) ? 'laptop' : 'speaker'), h('div', {
              class: 'meta'
            }, h('div', {
              class: 't1',
              text: isLocal(p.playerid) ? tr('{name} (this browser)', {
                name: p.name
              }) : p.name
            }), h('div', {
              class: 't2',
              text: [p.modelname || p.model, !+p.connected ? tr('disconnected') : !on ? tr('off') : stateWord({
                play: 'playing',
                pause: 'paused',
                stop: 'stopped'
              }[st.mode] || st.mode), g ? tr('synced with {names}', {
                names: g.filter(x => x !== p.playerid).map(playerName).join(', ')
              }) : ''].filter(Boolean).join(' · ')
            })), +p.canpoweroff ? btn('power', on ? tr('Switch off') : tr('Switch on'), () => act(['power', on ? 0 : 1], null, p.playerid).then(render), on ? 'on' : '') : null), t.title ? h('div', {
              class: 'pcard-now',
              text: [t.title, t.artist].filter(Boolean).join(' — ')
            }) : null, h('div', {
              class: 'pcard-ctrls'
            }, btn(st.mode === 'play' ? 'pause' : 'play', tr('Play/pause'), () => act(st.mode === 'play' ? ['pause', 1] : ['play'], null, p.playerid).then(render)), vol, h('button', {
              class: 'btn ghost sm',
              onclick: () => {
                setTarget(p.playerid);
                render();
              }
            }, p.playerid === S.target ? tr('Controlling') : tr('Control')), h('button', {
              class: 'btn ghost sm',
              onclick: () => syncMenu(p.playerid, render)
            }, icon('sync'), tr('Sync…')), isLocal(p.playerid) ? h('button', {
              class: 'btn ghost sm',
              onclick: () => renameLocal().then(render)
            }, icon('edit'), tr('Rename…')) : null));
          });
          return function (_x31) {
            return _ref8.apply(this, arguments);
          };
        }()));
        if (my !== gen) return;
        list.replaceChildren(...(rows.length ? rows : [h('div', {
          class: 'empty',
          text: tr('No players are connected to the server.')
        })]));
      });
      return _render.apply(this, arguments);
    }
    return {
      title: tr('Players'),
      el: h('div', {}, h('p', {
        class: 'view-sub',
        text: tr('Every player LMS knows, including this browser. Sync players to play the same music in step.')
      }), list),
      onShow: () => {
        pollPlayers().then(render).catch(fail);
      },
      actions: [btn('refresh', tr('Refresh'), () => pollPlayers().then(render))]
    };
  };
  function syncMenu(id, after) {
    const g = groupOf(id) || [];
    const others = S.players.filter(p => p.playerid !== id);
    sheet(tr('Sync {name} with…', {
      name: playerName(id)
    }), [...others.map(p => ({
      label: p.name,
      icon: isLocal(p.playerid) ? 'laptop' : 'speaker',
      checked: g.includes(p.playerid),
      run: function () {
        var _run9 = _asyncToGenerator(function* () {
          if (g.includes(p.playerid)) yield rpc(['sync', '-'], p.playerid);else yield rpc(['sync', p.playerid], id);
          toast(g.includes(p.playerid) ? tr('Unsynced {name}', {
            name: p.name
          }) : tr('Synced {name}', {
            name: p.name
          }));
          yield pollPlayers();
          after && after();
        });
        function run() {
          return _run9.apply(this, arguments);
        }
        return run;
      }()
    })), g.length ? {
      sep: true
    } : null, g.length ? {
      label: tr('Leave the group'),
      icon: 'close',
      run: function () {
        var _run0 = _asyncToGenerator(function* () {
          yield rpc(['sync', '-'], id);
          toast(tr('Unsynced'));
          yield pollPlayers();
          after && after();
        });
        function run() {
          return _run0.apply(this, arguments);
        }
        return run;
      }()
    } : null]);
  }
  function renderPlayerButton() {
    const b = document.getElementById('playerBtn');
    b.replaceChildren(icon(isLocal(S.target) ? 'laptop' : 'speaker'), h('span', {
      text: playerName(S.target)
    }), icon('down', 'caret'));
  }
  function playerPicker() {
    sheet(tr('Choose a player'), [...S.players.map(p => ({
      label: isLocal(p.playerid) ? tr('{name} (this browser)', {
        name: p.name
      }) : p.name,
      icon: isLocal(p.playerid) ? 'laptop' : 'speaker',
      checked: p.playerid === S.target,
      run: () => setTarget(p.playerid)
    })), {
      sep: true
    }, S.target ? {
      label: tr('Sync this player…'),
      icon: 'sync',
      run: () => syncMenu(S.target)
    } : null, S.target ? {
      label: tr('Transfer playback here from…'),
      icon: 'next_up',
      run: () => transferMenu()
    } : null, S.local ? {
      label: tr('Rename this browser…'),
      icon: 'edit',
      run: () => renameLocal()
    } : null, {
      label: tr('All players'),
      icon: 'speaker',
      run: () => root('players')
    }]);
  }
  const TRANSFER_MAX = 2000; // tracks moved at most (one request each)
  let transferring = false;
  function transferMenu() {
    const to = S.target;
    sheet(tr('Move playback to {name} from…', {
      name: playerName(to)
    }), S.players.filter(p => p.playerid !== to).map(p => ({
      label: p.name,
      icon: 'speaker',
      run: function () {
        var _run1 = _asyncToGenerator(function* () {
          if (transferring) return toast(tr('Already moving playback…'));
          transferring = true;
          try {
            // Read the queue and position there first: nothing changes here unless there's something to move.
            const st = yield S.lms.rpc(p.playerid, ['status', '-', 1]);
            const q = yield S.lms.rpc(p.playerid, ['status', 0, TRANSFER_MAX, 'tags:u']);
            const loop = q.playlist_loop || [];
            const cur = +st.playlist_cur_index || 0;
            const urls = loop.map(t => t.url).filter(Boolean);
            if (!urls.length) return toast(tr('Nothing to move: {name}\'s queue is empty', {
              name: p.name
            }));
            // The playing track's place among the tracks that can be moved.
            const index = loop.slice(0, cur).filter(t => t.url).length;
            const cut = +q.playlist_tracks > TRANSFER_MAX;
            toast(cut ? trn(urls.length, 'Moving {n} track (the first {max})…', 'Moving {n} tracks (the first {max})…', {
              max: TRANSFER_MAX
            }) : trn(urls.length, 'Moving {n} track…', 'Moving {n} tracks…'));
            yield S.lms.rpc(to, ['playlist', 'clear']);
            for (const u of urls) yield S.lms.rpc(to, ['playlist', 'add', u]);
            yield S.lms.rpc(to, ['playlist', 'index', Math.min(index, urls.length - 1)]);
            if (+st.time) yield S.lms.rpc(to, ['time', st.time]);
            yield S.lms.rpc(p.playerid, ['pause', 1]); // only once the move is complete
            toast(tr('Moved playback to {name}', {
              name: playerName(to)
            }));
            pollSoon();
          } catch (e) {
            fail(new Error(tr('Moving playback stopped part-way ({name} carries on): {error}', {
              name: p.name,
              error: e.message
            })));
          } finally {
            transferring = false;
          }
        });
        function run() {
          return _run1.apply(this, arguments);
        }
        return run;
      }()
    })));
  }

  // -- Alarms ------------------------------------------------------------------
  /** A weekday's short name in the page's language: 0 Sunday … 6 Saturday, as LMS counts. */
  const dayName = i => new Intl.DateTimeFormat(locale, {
    weekday: 'short',
    timeZone: 'UTC'
  }).format(Date.UTC(2023, 0, 1 + i, 12));
  VIEWS.alarms = () => {
    const list = h('div', {
      class: 'list'
    });
    const master = h('input', {
      type: 'checkbox',
      class: 'switch',
      'aria-label': tr('Alarms enabled')
    });
    master.addEventListener('change', () => act(['playerpref', 'alarmsEnabled', master.checked ? 1 : 0], master.checked ? tr('Alarms on') : tr('Alarms off')));
    function load() {
      return _load2.apply(this, arguments);
    }
    function _load2() {
      _load2 = _asyncToGenerator(function* () {
        if (!S.target) return;
        try {
          const [r, en] = yield Promise.all([rpc(['alarms', 0, 100, 'filter:all']), rpc(['playerpref', 'alarmsEnabled', '?'])]);
          master.checked = +en._p2 === 1;
          const al = r.alarms_loop || [];
          list.replaceChildren(...(al.length ? al.map(a => {
            const sw = h('input', {
              type: 'checkbox',
              class: 'switch',
              checked: +a.enabled === 1,
              'aria-label': tr('Enabled')
            });
            sw.addEventListener('change', () => act(['alarm', 'update', 'id:' + a.id, 'enabled:' + (sw.checked ? 1 : 0)]));
            const days = String(a.dow || '').split(',').filter(x => x !== '').map(d => dayName(+d)).join(' ');
            return h('div', {
              class: 'row'
            }, icon('alarm'), h('div', {
              class: 'meta'
            }, h('div', {
              class: 't1 big',
              text: fmtClock(+a.time)
            }), h('div', {
              class: 't2',
              text: [days || tr('Never'), +a.repeat ? tr('repeats') : tr('once'), tr('volume {volume}', {
                volume: a.volume
              })].join(' · ')
            })), sw, btn('delete', tr('Delete alarm'), /*#__PURE__*/_asyncToGenerator(function* () {
              if (yield confirm2(tr('Delete this alarm?'))) {
                yield act(['alarm', 'delete', 'id:' + a.id], tr('Alarm deleted'));
                load();
              }
            })));
          }) : [h('div', {
            class: 'empty',
            text: tr('No alarms on {name}.', {
              name: playerName(S.target)
            })
          })]));
        } catch (e) {
          fail(e);
        }
      });
      return _load2.apply(this, arguments);
    }
    function add() {
      return _add.apply(this, arguments);
    }
    function _add() {
      _add = _asyncToGenerator(function* () {
        const time = h('input', {
          type: 'time',
          class: 'field',
          value: '07:00',
          'aria-label': tr('Time')
        });
        const boxes = [0, 1, 2, 3, 4, 5, 6].map(i => h('label', {
          class: 'day'
        }, h('input', {
          type: 'checkbox',
          checked: i > 0 && i < 6,
          value: i
        }), dayName(i)));
        const vol = h('input', {
          type: 'range',
          min: 0,
          max: 100,
          value: 40,
          class: 'vol',
          'aria-label': tr('Volume')
        });
        const form = h('form', {
          class: 'prompt',
          onsubmit: function () {
            var _onsubmit = _asyncToGenerator(function* (e) {
              e.preventDefault();
              const [hh, mm] = time.value.split(':').map(Number);
              const dow = boxes.map(b => b.firstChild).filter(c => c.checked).map(c => c.value).join(',');
              closeSheet();
              yield act(['alarm', 'add', 'time:' + (hh * 3600 + mm * 60), 'dow:' + dow, 'enabled:1', 'repeat:1', 'volume:' + vol.value], tr('Alarm set'));
              load();
            });
            function onsubmit(_x32) {
              return _onsubmit.apply(this, arguments);
            }
            return onsubmit;
          }()
        }, time, h('div', {
          class: 'days'
        }, boxes), h('label', {
          class: 'lbl'
        }, tr('Volume'), vol), h('p', {
          class: 't2',
          text: tr('The alarm plays the current queue (or LMS\'s default alarm sound).')
        }), h('div', {
          class: 'row-btns'
        }, h('button', {
          class: 'btn',
          type: 'submit'
        }, tr('Add alarm'))));
        sheet(tr('New alarm on {name}', {
          name: playerName(S.target)
        }), [{
          el: form
        }]);
      });
      return _add.apply(this, arguments);
    }
    return {
      title: tr('Alarms'),
      el: h('div', {}, h('label', {
        class: 'setting'
      }, h('span', {
        text: tr('Alarms enabled on this player')
      }), master), list),
      onShow: load,
      perPlayer: true,
      actions: [btn('add', tr('Add alarm'), add)]
    };
  };
  const fmtClock = secs => `${String(Math.floor(secs / 3600)).padStart(2, '0')}:${String(Math.floor(secs % 3600 / 60)).padStart(2, '0')}`;
  // -- Settings ----------------------------------------------------------------
  VIEWS.settings = () => {
    const el = h('div', {
      class: 'settings'
    });
    function render() {
      return _render2.apply(this, arguments);
    }
    function _render2() {
      _render2 = _asyncToGenerator(function* () {
        const sections = [];
        // This browser as a player.
        const enabled = store.get('localEnabled', true);
        const sw = h('input', {
          type: 'checkbox',
          class: 'switch',
          checked: enabled,
          'aria-label': tr('Use this browser as a player')
        });
        sw.addEventListener('change', () => {
          store.set('localEnabled', sw.checked);
          if (sw.checked) claimPlayerThenStart();else stopLocalPlayer();
          setTimeout(render, 500);
        });
        const out = S.output ? S.output.info() : null;
        const snap = S.local ? S.local.snapshot() : null;
        const trim = h('input', {
          type: 'range',
          min: 0,
          max: 100,
          value: Math.round((S.output ? S.output.level : 1) * 100),
          class: 'vol',
          'aria-label': tr('Output level')
        });
        trim.addEventListener('input', () => {
          store.set('localLevel', trim.value / 100);
          if (S.output) S.output.setLevel(trim.value / 100);
        });
        const mode = h('select', {
          class: 'select',
          'aria-label': tr('Audio output')
        }, [['auto', tr('Automatic')], ['webaudio', tr('Web Audio (lowest latency)')], ['media', tr('Media element (plays with the screen locked)')]].map(([v, t]) => h('option', {
          value: v,
          text: t,
          selected: store.get('outputMode', S.config && S.config.defaultOutput || 'auto') === v
        })));
        // A choice made here is tried afresh, even where the media element failed before.
        mode.addEventListener('change', () => {
          store.set('outputMode', mode.value);
          store.set('mediaUnusable', false);
          toast(tr('Reloading to switch the output…'));
          setTimeout(() => location.reload(), 800);
        });
        sections.push(h('section', {}, h('h3', {
          text: tr('This browser as a player')
        }), h('label', {
          class: 'setting'
        }, h('span', {
          text: tr('Play music in this browser (a real Slimproto player in LMS)')
        }), sw), S.local ? h('div', {
          class: 'kv'
        }, kv(tr('Name'), S.local.name, h('button', {
          class: 'btn ghost sm',
          onclick: () => renameLocal().then(render)
        }, tr('Rename'))), kv(tr('Player ID'), S.localId), kv(tr('Connection'), snap.connected ? tr('Connected (Slimproto over a WebSocket to LMS)') : tr('Connecting…')), kv(tr('State'), stateWord(snap.state) + (snap.error ? ' — ' + snap.error : '')), kv(tr('Audio engine'), S.output ? (S.output.engine || tr('Web Audio (opens when music starts)')) + (S.outputMode === 'webaudio' && !window.isSecureContext ? ' ' + tr('(plain http page)') : '') : '—'), kv(tr('Why'), S.outputWhy ? tr(S.outputWhy) : ''), S.output && S.output.volumeLocked ? kv(tr('Volume'), tr('Set with this device\'s own buttons (the page can\'t set it here); LMS volume is held at 100 %')) : null, kv(tr('Formats'), tr('{formats} (LMS converts everything else to FLAC)', {
          formats: S.local.caps.map(c => ({
            flc: 'FLAC',
            pcm: 'PCM/WAV/AIFF',
            mp3: 'MP3'
          })[c] || c).join(', ')
        })), kv(tr('Highest sample rate'), (S.local.maxRateFound / 1000).toLocaleString(locale) + ' kHz'), kv(tr('Output'), out ? tr('{rate} kHz, {state}, ~{latency} ms latency', {
          rate: (out.rate / 1000).toLocaleString(locale),
          state: stateWord(out.state),
          latency: out.latency
        }) : tr('Opens when music starts')), kv(tr('Buffered'), tr('{seconds} s decoded ahead', {
          seconds: snap.queued.toLocaleString(locale, {
            minimumFractionDigits: 1,
            maximumFractionDigits: 1
          })
        })), S.output && !S.output.volumeLocked ? h('label', {
          class: 'setting'
        }, h('span', {
          text: tr('Output level in this browser (on top of the LMS volume)')
        }), trim) : null, h('label', {
          class: 'setting'
        }, h('span', {
          text: tr('Audio output')
        }), mode)) : null));

        // The player being controlled.
        if (S.target) {
          const prefs = {};
          yield Promise.all(['transitionType', 'transitionDuration', 'replayGainMode', 'plugin.dontstopthemusic:provider'].map(/*#__PURE__*/function () {
            var _ref0 = _asyncToGenerator(function* (k) {
              try {
                const r = yield rpc(['playerpref', k, '?']);
                prefs[k] = r._p2;
              } catch (e) {
                prefs[k] = undefined;
              }
            });
            return function (_x33) {
              return _ref0.apply(this, arguments);
            };
          }()));
          const sel = (k, opts, label) => {
            const s = h('select', {
              class: 'select',
              'aria-label': label
            }, opts.map(([v, t]) => h('option', {
              value: v,
              text: t,
              selected: String(prefs[k]) === String(v)
            })));
            s.addEventListener('change', () => act(['playerpref', k, s.value], tr('{setting} saved', {
              setting: label
            })));
            return h('label', {
              class: 'setting'
            }, h('span', {
              text: label
            }), s);
          };
          sections.push(h('section', {}, h('h3', {
            text: tr('Player: {name}', {
              name: playerName(S.target)
            })
          }), sel('replayGainMode', [[0, tr('Off')], [1, tr('Track gain')], [2, tr('Album gain')], [3, tr('Smart gain')]], tr('Volume levelling (ReplayGain)')), sel('transitionType', [[0, tr('None (gapless)')], [1, tr('Crossfade')], [2, tr('Fade in')], [3, tr('Fade out')], [4, tr('Fade in and out')]], tr('Transition between tracks')), sel('transitionDuration', [0, 1, 2, 3, 5, 8, 10].map(n => [n, n + ' s']), tr('Transition length')), prefs['plugin.dontstopthemusic:provider'] !== undefined ? yield dstmSetting(prefs['plugin.dontstopthemusic:provider']) : null, isLocal(S.target) ? h('p', {
            class: 't2',
            text: tr('Crossfades need both tracks at the same sample rate; otherwise this browser plays them gaplessly.')
          }) : null));
        }

        // Server.
        let info = S.serverInfo;
        try {
          info = S.serverInfo = yield S.lms.rpc('', ['serverstatus', 0, 0]);
        } catch (e) {/* keep last */}
        // Dates as LMS writes them (Settings › Interface: its date and time formats).
        if (!S.dateFormats) {
          const [date, time] = yield Promise.all(['shortdateFormat', 'timeFormat'].map(k => S.lms.rpc('', ['pref', k, '?']).then(r => r._p2 || null, () => null)));
          if (date && time) S.dateFormats = {
            date,
            time
          };
        }
        const when = secs => {
          const d = new Date(secs * 1000);
          return S.dateFormats ? lmsDate(d, S.dateFormats.date + ' ' + S.dateFormats.time) : d.toLocaleString(locale);
        };
        sections.push(h('section', {}, h('h3', {
          text: tr('Server')
        }), h('div', {
          class: 'kv'
        }, kv(tr('Server'), `${S.server.name} (${location.host})`), info ? kv(tr('Version'), 'Lyrion Music Server ' + info.version) : null, info ? kv(tr('Library'), [trn(info['info total albums'], '{n} album', '{n} albums'), trn(info['info total artists'], '{n} artist', '{n} artists'), trn(info['info total songs'], '{n} track', '{n} tracks')].join(', ')) : null, info && info.rescan ? kv(tr('Scan'), tr('Scanning: {step} {done}/{total}', {
          step: info.progressname || '',
          done: info.progressdone || '',
          total: info.progresstotal || ''
        })) : null, info && info.lastscan ? kv(tr('Last scan'), when(+info.lastscan)) : null), h('div', {
          class: 'row-btns'
        }, h('button', {
          class: 'btn ghost',
          onclick: () => act(['rescan'], tr('Library scan started'), '')
        }, icon('refresh'), tr('Scan for new music')))));

        // Appearance.
        const theme = h('select', {
          class: 'select',
          'aria-label': tr('Theme')
        }, [['auto', tr('Match the system')], ['dark', tr('Dark')], ['light', tr('Light')]].map(([v, t]) => h('option', {
          value: v,
          text: t,
          selected: store.get('theme', 'auto') === v
        })));
        theme.addEventListener('change', () => {
          store.set('theme', theme.value);
          applyTheme();
        });
        // LyrionJS's own skins, and the server's web skins, shown over the page with LyrionJS still the player.
        const lmsSkins = Object.entries(S.config && S.config.skins || {}).sort((a, b) => a[1].localeCompare(b[1]));
        const curSkin = lmsSkin() ? 'lms:' + lmsSkin() : skin();
        const opt = (v, t) => h('option', {
          value: v,
          text: t,
          selected: curSkin === v
        });
        const sk = h('select', {
          class: 'select',
          'aria-label': tr('Skin')
        }, h('optgroup', {
          label: 'LyrionJS'
        }, Object.entries(SKINS).map(([v, t]) => opt(v, t))), lmsSkins.length ? h('optgroup', {
          label: 'Lyrion Music Server'
        }, lmsSkins.map(([v, t]) => opt('lms:' + v, v === S.config.skin ? tr('{skin} (the server\'s)', {
          skin: t
        }) : t))) : null);
        sk.addEventListener('change', () => {
          useSkin(sk.value);
          render(); // an LMS skin: shown now (from LyrionJS's own pages over another, or over none)
        });
        // The highlight colour: a swatch each, and one to pick any colour.
        const cur = accentChoice();
        const setAccent = v => {
          store.set('accent', v);
          applyTheme();
          for (const b of swatches.children) b.setAttribute('aria-checked', String(b.dataset.v === v || b.dataset.v === 'custom' && isHex(v)));
        };
        const swatch = (v, name, colour) => h('button', {
          type: 'button',
          class: 'swatch',
          role: 'radio',
          'aria-checked': String(cur === v),
          'aria-label': name,
          title: name,
          'data-v': v,
          style: {
            background: colour
          },
          onclick: () => setAccent(v)
        });
        const pick = h('input', {
          type: 'color',
          class: 'swatch-pick',
          value: isHex(cur) ? cur : '#f2a541',
          'aria-label': tr('Pick a colour'),
          title: tr('Pick a colour')
        });
        pick.addEventListener('input', () => setAccent(pick.value.toLowerCase()));
        const custom = h('label', {
          class: 'swatch custom',
          role: 'radio',
          'aria-checked': String(isHex(cur)),
          'aria-label': tr('Your own colour'),
          title: tr('Your own colour'),
          'data-v': 'custom'
        }, pick);
        const swatches = h('div', {
          class: 'swatches',
          role: 'radiogroup',
          'aria-label': tr('Highlight colour')
        }, swatch('cover', tr('From the cover art (as Material Skin)'), 'conic-gradient(from 45deg, #d8a23a, #3f7fd0, #c2306f, #4caf50, #d8a23a)'), Object.entries(ACCENTS).map(([v, a]) => swatch(v, tr(a.name), `linear-gradient(135deg, ${a.dark[0]} 50%, ${a.light[0]} 50%)`)), custom);
        const dg = h('input', {
          type: 'checkbox',
          class: 'switch',
          checked: store.get('diag', !!(S.config && S.config.clientDiagnostics)),
          'aria-label': tr('Send diagnostics')
        });
        dg.addEventListener('change', () => store.set('diag', dg.checked));
        // The language: LMS's (as its menus are), or one chosen for this browser.
        const lmsName = LANGS[lmsLang()] || LANGS.en;
        const lg = h('select', {
          class: 'select',
          'aria-label': tr('Language')
        }, h('option', {
          value: 'auto',
          text: tr('As Lyrion Music Server ({language})', {
            language: lmsName
          }),
          selected: langChoice() === 'auto'
        }), Object.entries(LANGS).map(([v, name]) => h('option', {
          value: v,
          text: name,
          selected: langChoice() === v
        })));
        lg.addEventListener('change', () => {
          store.set('lang', lg.value);
          relang();
        });
        sections.push(h('section', {}, h('h3', {
          text: tr('Appearance')
        }), h('label', {
          class: 'setting'
        }, h('span', {
          text: tr('Skin: LyrionJS\'s own, or any skin installed on your Lyrion Music Server, with this browser still the player')
        }), sk), h('label', {
          class: 'setting'
        }, h('span', {
          text: tr('Language')
        }), lg), h('label', {
          class: 'setting'
        }, h('span', {
          text: tr('Theme')
        }), theme), h('div', {
          class: 'setting'
        }, h('span', {
          text: tr('Highlight colour')
        }), swatches), h('label', {
          class: 'setting'
        }, h('span', {
          text: tr('Send playback diagnostics to the LMS server log (helps fix problems on phones and tablets)')
        }), dg)));
        // Tapping a track in the library: play it, or show the chosen actions under it.
        const tap = h('select', {
          class: 'select',
          'aria-label': tr('Tapping a track')
        }, [['play', tr('Plays it now (replaces the queue)')], ['keep', tr('Plays it now (keeps the queue)')], ['menu', tr('Shows actions under it')]].map(([v, t]) => h('option', {
          value: v,
          text: t,
          selected: store.get('tapAction', 'play') === v
        })));
        let chosen = store.get('tapItems', TAP_DEFAULT);
        const chips = h('div', {
          class: 'swatches tap-items',
          role: 'group',
          'aria-label': tr('Actions to show')
        }, tapItems().map(([k, label]) => h('button', {
          type: 'button',
          class: 'btn ghost sm',
          'aria-pressed': String(chosen.includes(k)),
          onclick: e => {
            chosen = chosen.includes(k) ? chosen.filter(x => x !== k) : chosen.concat(k);
            store.set('tapItems', chosen);
            e.currentTarget.setAttribute('aria-pressed', String(chosen.includes(k)));
          }
        }, label)));
        const chipsRow = h('div', {
          class: 'setting stack',
          hidden: tap.value !== 'menu'
        }, h('span', {
          text: tr('Actions to show')
        }), chips);
        tap.addEventListener('change', () => {
          store.set('tapAction', tap.value);
          chipsRow.hidden = tap.value !== 'menu';
        });
        sections.push(h('section', {}, h('h3', {
          text: tr('Library')
        }), h('label', {
          class: 'setting stack'
        }, h('span', {
          text: tr('Tapping a track (search, albums, playlists, folders)')
        }), tap), chipsRow));
        sections.push(h('section', {}, h('h3', {
          text: tr('About')
        }), h('div', {
          class: 'about'
        }, logo('about-logo'), h('div', {}, h('div', {
          class: 'about-name',
          text: `LyrionJS ${VERSION}`
        }), h('p', {
          class: 'about-text',
          text: tr('A Slimproto player and controller for Lyrion Music Server in one page. Keyboard: Space play/pause, ←/→ previous/next, ↑/↓ volume, M mute.')
        }), h('button', {
          class: 'btn ghost sm about-more',
          onclick: () => push('about')
        }, tr('More about LyrionJS…'))))));
        el.replaceChildren(...sections);
      });
      return _render2.apply(this, arguments);
    }
    render().catch(fail);
    return {
      title: tr('Settings'),
      el,
      perPlayer: true
    };
  };
  function kv(k, v, extra) {
    return h('div', {
      class: 'kv-row'
    }, h('div', {
      class: 'k',
      text: k
    }), h('div', {
      class: 'v'
    }, h('span', {
      text: v == null ? '' : String(v)
    }), extra || null));
  }
  function dstmSetting(_x34) {
    return _dstmSetting.apply(this, arguments);
  } // -- About (and what happens when you open LyrionJS inside LyrionJS) -----------
  // LMS lists LyrionJS among its apps, so the page can find itself there. Opening it here would
  // show this page's own address; it shows this instead.
  function _dstmSetting() {
    _dstmSetting = _asyncToGenerator(function* (cur) {
      // Don't Stop The Music: ask the plugin for its providers through the jive menu.
      let opts = [];
      try {
        const r = yield rpc(['dontstopthemusicsetting', 0, 100, 'menu:1']);
        for (const it of r.item_loop || []) {
          const v = it.actions && it.actions.do && it.actions.do.cmd && it.actions.do.cmd[it.actions.do.cmd.length - 1];
          if (typeof v === 'string' || typeof v === 'number') opts.push([String(v), it.text]);
        }
      } catch (e) {/* plugin menu unavailable */}
      if (!opts.length) opts.push(['0', tr('Off')]);
      const curStr = cur == null || cur === '' ? '0' : String(cur);
      if (!opts.some(o => o[0] === curStr)) opts.push([curStr, curStr]);
      opts = opts.filter((o, i, a) => a.findIndex(x => x[0] === o[0]) === i);
      const s = h('select', {
        class: 'select',
        'aria-label': tr('Don\'t Stop The Music')
      }, opts.map(([v, t]) => h('option', {
        value: v,
        text: t,
        selected: curStr === v
      })));
      s.addEventListener('change', () => act(['playerpref', 'plugin.dontstopthemusic:provider', s.value], tr('Saved')));
      return h('label', {
        class: 'setting'
      }, h('span', {
        text: tr('When the queue ends (Don\'t Stop The Music)')
      }), s);
    });
    return _dstmSetting.apply(this, arguments);
  }
  const RECURSION_QUIPS = [N_('Nice try.'), N_('Still no. One of us is enough.'), N_('Every time you do that, a call stack loses its wings.'), N_('The browser has started muttering about “maximum call stack size”.'), N_('We’ve told LMS. It isn’t angry, just disappointed.'), N_('RangeError: Maximum call stack size exceeded. Happy now?'), N_('OK, you win: you are now listening to LyrionJS inside LyrionJS inside LyrionJS. (You aren’t.)'), N_('Achievement unlocked: Ouroboros. Now go and play some music.')];

  /** p.recursion: arrived by opening the LyrionJS app from inside LyrionJS. */
  VIEWS.about = (p = {}) => {
    let tries = 0;
    const quip = h('p', {
      class: 'about-quip',
      'aria-live': 'polite'
    });
    // An infinite mirror: the logo inside the logo inside the logo…
    let mirror = null;
    for (let i = 0; i < 7; i++) mirror = h('div', {
      class: 'mirror-frame'
    }, logo('mirror-logo'), mirror);
    const box = h('button', {
      class: 'mirror',
      type: 'button',
      'aria-label': tr('Open LyrionJS inside LyrionJS (please don’t)')
    }, mirror);
    box.addEventListener('click', () => {
      quip.textContent = tr(RECURSION_QUIPS[Math.min(tries++, RECURSION_QUIPS.length - 1)]);
      box.classList.remove('wobble');
      void box.offsetWidth;
      box.classList.add('wobble');
    });
    const facts = h('div', {
      class: 'kv'
    }, kv(tr('Version'), 'LyrionJS ' + VERSION), kv(tr('What it is'), tr('A Slimproto player and a remote for Lyrion Music Server, running entirely in this page.')), kv('GitHub', null, h('a', {
      href: 'https://github.com/JameZUK/LyrionJS',
      target: '_blank',
      rel: 'noopener',
      text: 'JameZUK/LyrionJS'
    })), kv(tr('Server'), S.server ? `${S.server.name} (Lyrion ${S.server.version})` : '—'), kv(tr('This browser'), S.local ? `${S.local.name} · ${S.localId}` : tr('A remote control (not a player)')), kv(tr('Audio'), S.output ? S.output.engine || tr('Web Audio, opens when music starts') : '—'), kv(tr('Recursion depth'), tr('1, and we’d like to keep it that way')));
    const el = h('div', {
      class: 'about-page'
    }, box, h('h2', {
      class: 'about-title',
      text: p.recursion ? tr('Whoa there. You’re already in LyrionJS.') : 'LyrionJS'
    }), h('p', {
      class: 'about-lead',
      text: p.recursion ? tr('Opening LyrionJS inside LyrionJS would open LyrionJS inside LyrionJS inside LyrionJS… and so on, until your browser runs out of patience, memory, or both. Please stop trying to cause a recursion loop.') : tr('Your browser, as a real Lyrion player. Tap the mirror if you must.')
    }), quip, h('section', {
      class: 'about-facts'
    }, h('h3', {
      text: tr('About')
    }), facts), h('div', {
      class: 'row-btns about-btns'
    }, h('button', {
      class: 'btn',
      onclick: () => root('now')
    }, icon('note'), tr('Take me back to the music')), h('button', {
      class: 'btn ghost',
      onclick: () => root('settings')
    }, icon('settings'), tr('Settings')), document.documentElement.dataset.host ? h('button', {
      class: 'btn ghost',
      onclick: () => leaveOwn()
    }, icon('back'), tr('Back to {skin}', {
      skin: hostName()
    })) : null));
    return {
      title: tr('About LyrionJS'),
      el
    };
  };

  /** Is this LMS command (or app) LyrionJS itself? */
  const isLyrionJSApp = cmd => (Array.isArray(cmd) ? cmd[0] : cmd) === 'lyrionjs';
  // ---------------------------------------------------------------------------
  // Skins: the page's own look, or one like Material Skin's. A skin is a style sheet (scoped by
  // data-skin on the page) and the few pieces of layout it needs, made here.
  // ---------------------------------------------------------------------------
  const SKINS = {
    lyrionjs: 'LyrionJS',
    material: 'Material'
  };
  /** The page's own layout (LyrionJS's while an LMS skin is shown over it, below). */
  const skin = () => SKINS[store.get('skin', 'lyrionjs')] ? store.get('skin', 'lyrionjs') : 'lyrionjs';
  /** The LMS skin shown over the page ('lms:<its folder>' in Settings), if one is. */
  const lmsSkin = () => {
    const m = /^lms:([\w.-]+)$/.exec(store.get('skin', ''));
    return m ? m[1] : null;
  };
  const narrow = matchMedia('(max-width: 860px)');
  /** A skin asked for in a link to LyrionJS (?skin=, as in the LyrionJS app's link to the server's skin). */
  const skinParam = u => {
    try {
      const v = new URL(u, location.href).searchParams.get('skin');
      return v && (SKINS[v] || /^lms:[\w.-]+$/.test(v)) ? v : null;
    } catch (e) {
      return null;
    }
  };
  // Opened by such a link: this browser keeps that skin from now on, as if chosen in Settings.
  const linkSkin = skinParam(location.href);
  if (linkSkin) {
    store.set('skin', linkSkin);
    const u = new URL(location.href);
    u.searchParams.delete('skin');
    history.replaceState(history.state, '', u.pathname + u.search + u.hash);
  }
  /** This browser's skin from now on (Settings › Skin, or a link): an LMS skin is shown now. */
  function useSkin(v) {
    store.set('skin', v);
    applySkin();
    applyTheme();
    if (lmsSkin()) {
      leaveOwn();
      toast(tr('Showing {skin}', {
        skin: hostName()
      }));
    }
  }
  function applySkin() {
    document.documentElement.dataset.skin = skin();
    updateSide();
    updateHost();
  }

  // -- An LMS skin over the page -----------------------------------------------------------------
  // LyrionJS stays the player (the stream, the sound, the lock screen's controls); the skin
  // installed on the server is the remote, in a frame over the page, pointed at this browser.
  // Nothing of the skin is copied: it's whatever version LMS has. The skin's own ways to
  // LyrionJS lead to LyrionJS's pages; "Back to <skin>" (top bar, About page, Back) returns.
  const HOST_WAIT_MS = 8000; // for LMS to know this browser's player, before showing another
  let hostFrame = null,
    hostSince = 0;
  function hostWanted() {
    const s = lmsSkin(),
      known = S.config && S.config.skins;
    return s && S.lms && document.body.classList.contains('ready') && (!known || known[s]) ? s : null;
  }
  const hostName = () => S.config && S.config.skins && S.config.skins[lmsSkin()] || lmsSkin() || '';
  const hostOwn = () => document.documentElement.classList.contains('host-own');
  function updateHost() {
    const s = hostWanted(),
      root = document.documentElement;
    if (!s) {
      if (hostFrame) {
        hostFrame.remove();
        hostFrame = null;
      }
      if (root.dataset.host) {
        delete root.dataset.host;
        root.classList.remove('host-own');
      }
      return;
    }
    root.dataset.host = s;
    document.getElementById('skinBtn').lastChild.textContent = hostName();
    hostSince = hostSince || performance.now();
    const local = (S.players || []).some(p => isLocal(p.playerid));
    if (!local && performance.now() - hostSince < HOST_WAIT_MS) return; // poll comes back here
    if (hostFrame && hostFrame.dataset.skin === s) return;
    if (!hostFrame) {
      hostFrame = h('iframe', {
        id: 'skinframe',
        title: hostName()
      });
      document.body.append(hostFrame);
    }
    hostFrame.dataset.skin = s;
    hostFrame.src = `/${encodeURIComponent(s)}/?player=${encodeURIComponent(local ? S.localId : S.target || '')}`;
  }

  /**
   * A way to LyrionJS: this page, whatever host name the skin's link has, or the LyrionJS app's
   * own page in a skin (Light and Classic: /<skin>/plugins/lyrionjs/index.html).
   */
  const isPageUrl = u => {
    try {
      return /^(?:\/[^/]+)?\/plugins\/lyrionjs\/(?:index\.html)?$/i.test(new URL(u, location.href).pathname);
    } catch (e) {
      return false;
    }
  };
  /**
   * Each page the frame shows, and the frames inside it (Light and Classic are framesets): a tap
   * or key in it can start the sound here, and the skin's ways to LyrionJS (Material's tile opens
   * a window, an app's link is followed) come to this page instead of opening another. Looked at
   * often (below), so a page just loaded is caught soon.
   */
  function hookFrame(w) {
    let d;
    try {
      d = w.document;
    } catch (e) {
      return;
    } // another origin: nothing to do there
    if (!d) return;
    if (!d.ljHooked) {
      d.ljHooked = true;
      for (const ev of ['touchend', 'click', 'keydown']) d.addEventListener(ev, unlock, true);
      d.addEventListener('click', e => {
        const a = e.target.closest && e.target.closest('a[href]');
        if (a && isPageUrl(a.href)) {
          e.preventDefault();
          e.stopPropagation();
          toPage(a.href);
        }
      }, true);
      const open = w.open;
      w.open = function (u, ...rest) {
        if (u && isPageUrl(String(u))) {
          toPage(String(u));
          return null;
        }
        return open.call(this, u, ...rest);
      };
    }
    for (let i = 0; i < w.frames.length; i++) hookFrame(w.frames[i]);
  }
  setInterval(() => {
    if (!hostFrame || !hostFrame.contentWindow) return;
    hookFrame(hostFrame.contentWindow);
    // The tab's name: LyrionJS's, not the skin's (Material's says the player's MAC address).
    const t = hostName() + ' · LyrionJS';
    if (!hostOwn() && document.title !== t) document.title = t;
  }, 300);

  /** A way to LyrionJS followed in the skin: to the skin it names, else LyrionJS's own pages. */
  const toPage = u => skinParam(u) ? useSkin(skinParam(u)) : enterOwn();
  /** From the LMS skin to LyrionJS's own pages, a step in the history (so Back returns). */
  function enterOwn() {
    if (!document.documentElement.dataset.host || hostOwn()) return;
    document.documentElement.classList.add('host-own');
    root('about', {
      recursion: true
    });
    history.pushState(navState(1), '');
  }
  /** Back to the skin: all of LyrionJS's steps in the history (popstate, in router.js, does the rest). */
  function leaveOwn() {
    if (!hostOwn()) return;
    if (history.state && history.state.own) history.go(-S.nav.length);else document.documentElement.classList.remove('host-own');
  }
  document.getElementById('skinBtn').onclick = leaveOwn;

  // -- Home: what the menu offers, as a grid (Material's "Browse") -----------------------------
  VIEWS.home = () => {
    const tiles = [];
    for (const n of NAV) {
      if (n === 'plugins') {
        for (const m of S.pluginMenus || []) {
          const art = jiveArt(m, 96);
          tiles.push(h('button', {
            class: 'home-item',
            onclick: () => push('jive', {
              action: m.actions.go,
              title: m.text
            })
          }, art ? h('img', {
            class: 'home-img',
            src: art,
            alt: ''
          }) : icon('apps'), h('span', {
            text: m.text
          })));
        }
        continue;
      }
      if (!n || ['home', 'now', 'queue', 'search'].includes(n[0])) continue; // search: the button over the page
      tiles.push(h('button', {
        class: 'home-item',
        onclick: () => push(n[0])
      }, icon(n[2]), h('span', {
        text: tr(n[1])
      })));
    }
    return {
      title: tr('Home'),
      el: h('div', {
        class: 'home'
      }, tiles)
    };
  };

  // -- Now playing over the page (Material's expanded now playing) -------------------------------
  /** Opens now playing; with the Material skin over the page, so closing it goes back to where it was. */
  function openNow() {
    if (skin() === 'material' && S.shown && S.shown.name !== 'now') push('now');else root('now');
  }
  function closeNow() {
    if (S.nav.length > 1) back();else root(store.get('browseView', 'home'));
  }

  // -- The queue beside the page (Material's desktop layout) -------------------------------------
  let sidePage = null;
  function sideWanted() {
    const v = S.shown && S.shown.name;
    return skin() === 'material' && !narrow.matches && store.get('sideQueue', false) && v !== 'now' && v !== 'queue' && !!S.lms;
  }
  function updateSide() {
    const el = document.getElementById('side'),
      sb = document.getElementById('sideBtn');
    const want = sideWanted();
    if (sb) sb.setAttribute('aria-pressed', String(skin() === 'material' && store.get('sideQueue', false)));
    if (want && !sidePage) {
      sidePage = VIEWS.queue();
      el.replaceChildren(h('div', {
        class: 'view-head side-head'
      }, h('h2', {
        text: tr('Queue')
      }), h('div', {
        class: 'view-actions'
      }, sidePage.actions || [])), sidePage.el);
      if (sidePage.onShow) sidePage.onShow();
    } else if (!want && sidePage) closeSide();
    el.hidden = !want;
  }
  function closeSide() {
    if (!sidePage) return;
    if (sidePage.onHide) sidePage.onHide();
    disposeLists(sidePage.el);
    sidePage = null;
    document.getElementById('side').textContent = '';
  }
  /** Another player: its queue. */
  function sidePlayerChanged() {
    if (sidePage) {
      closeSide();
      updateSide();
    }
  }
  narrow.addEventListener('change', updateSide);
  // Material's search button, over the page.
  document.getElementById('fab').onclick = () => root('search');
  document.getElementById('sideBtn').onclick = () => {
    // On a narrow screen there's no room beside the page: the queue opens instead.
    if (narrow.matches) {
      root('queue');
      return;
    }
    store.set('sideQueue', !store.get('sideQueue', false));
    if (S.shown && S.shown.name === 'queue' && store.get('sideQueue', false)) closeNow();
    updateSide();
  };
  // ---------------------------------------------------------------------------
  // Keyboard, boot
  // ---------------------------------------------------------------------------
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeSheet();
      document.body.classList.remove('nav-open');
      return;
    } // also while typing
    if (!document.body.classList.contains('ready') || !S.lms) return; // not before the app has started
    if (e.target.closest('input, textarea, select') || e.ctrlKey || e.metaKey || e.altKey) return;
    if (e.key === ' ') {
      if (e.target.closest('button, [role="button"], a')) return; // Space activates what has focus
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'ArrowRight') act(['playlist', 'index', '+1']);else if (e.key === 'ArrowLeft') act(['button', 'jump_rew']);else if (e.key === 'ArrowUp') {
      e.preventDefault();
      act(['mixer', 'volume', '+5']);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      act(['mixer', 'volume', '-5']);
    } else if (e.key === 'm' || e.key === 'M') act(['mixer', 'muting', 'toggle']);else if (e.key === '/') {
      e.preventDefault();
      root('search');
    }
  });
  // Browsers only let audio start inside a user gesture. On iPad a touch counts on touchend or
  // click, not pointerdown, and the audio context must be created or resumed right there.
  const unlock = () => {
    if (S.output) S.output.unlock();
    refreshUnlock();
  };
  for (const ev of ['touchend', 'click', 'keydown']) document.addEventListener(ev, unlock, true);
  // Safari 17+: play as media, so the silent switch and Control Centre's silent mode don't mute it.
  try {
    if (navigator.audioSession) navigator.audioSession.type = 'playback';
  } catch (e) {/* older Safari */}

  // LMS not answering when the page opened (often a restart in progress): ask again now and then,
  // and start afresh once it answers.
  const BOOT_RETRY_MS = 5000;
  function unreachable(msg) {
    document.getElementById('view').replaceChildren(h('div', {
      class: 'discover'
    }, h('div', {
      class: 'logo'
    }, logo()), h('h1', {
      text: 'LyrionJS'
    }), h('p', {
      text: tr('Lyrion Music Server is not answering at {host}.', {
        host: location.host
      })
    }), h('p', {
      class: 't2',
      text: (msg ? msg.replace(/\.$/, '') + '. ' : '') + tr('Trying again every few seconds…')
    }), h('button', {
      class: 'btn',
      onclick: () => location.reload()
    }, icon('refresh'), tr('Try again'))));
    const _retry = /*#__PURE__*/function () {
      var _retry2 = _asyncToGenerator(function* () {
        try {
          yield S.lms.rpc('', ['version', '?'], 5000);
          location.reload();
        } catch (e) {
          setTimeout(_retry, document.hidden ? 6 * BOOT_RETRY_MS : BOOT_RETRY_MS);
        }
      });
      function retry() {
        return _retry2.apply(this, arguments);
      }
      return retry;
    }();
    setTimeout(_retry, BOOT_RETRY_MS);
  }

  /**
   * Inside another page's frame (Material Skin opens its Extras that way), the player stops when
   * that window closes: offer it a tab of its own, or carry on here.
   */
  function leaveFrame() {
    let inFrame = true;
    try {
      inFrame = window.top !== window;
    } catch (e) {/* a parent on another origin */}
    if (!inFrame) return Promise.resolve();
    // Opened from the LMS skin that this tab's LyrionJS shows: that one is already the player.
    let host = null;
    try {
      host = window.top.LyrionJS && window.top.LyrionJS.showOwn ? window.top.LyrionJS : null;
    } catch (e) {/* another origin */}
    if (host) {
      // Material's Extras opens it in a dialog: show LyrionJS's own pages out there (or the skin this link names).
      if (linkSkin && host.useSkin) host.useSkin(linkSkin);else host.showOwn();
      document.getElementById('view').replaceChildren(h('div', {
        class: 'discover'
      }, h('div', {
        class: 'logo'
      }, logo()), h('h1', {
        text: 'LyrionJS'
      }), h('p', {
        text: tr('This tab is already playing with LyrionJS.')
      }), h('button', {
        class: 'btn',
        onclick: () => host.showOwn()
      }, tr('Show LyrionJS'))));
      return new Promise(() => {}); // and nothing more here
    }
    return new Promise(resolve => {
      document.getElementById('view').replaceChildren(h('div', {
        class: 'discover'
      }, h('div', {
        class: 'logo'
      }, logo()), h('h1', {
        text: 'LyrionJS'
      }), h('p', {
        text: tr('LyrionJS plays best in a tab of its own: in this window it stops when the window closes.')
      }), h('div', {
        class: 'row-btns'
      }, h('a', {
        class: 'btn',
        href: location.origin + location.pathname,
        target: '_blank',
        rel: 'noopener'
      }, icon('play'), tr('Open in a new tab')), h('button', {
        class: 'btn ghost',
        onclick: () => resolve()
      }, tr('Use it here')))));
    });
  }

  /** The language changed: the page's text again, without a reload (the music plays on). */
  function relang() {
    applyLang();
    renderNav();
    const bar = document.getElementById('bar');
    if (bar._els) {
      bar.textContent = '';
      bar._els = null;
      updateBar();
    }
    renderPlayerButton();
    renderLocalBadge();
    closeSide();
    updateSide();
    if (S.nav.length) {
      for (const e of S.nav) dispose(e);
      S.shown = null;
      show(S.nav[S.nav.length - 1]);
    }
  }
  function boot() {
    return _boot.apply(this, arguments);
  } // For diagnostics from the browser console; showOwn: for a LyrionJS page opened from the LMS skin shown here.
  function _boot() {
    _boot = _asyncToGenerator(function* () {
      applyLang();
      applyTheme();
      applySkin();
      renderNav();
      yield leaveFrame();
      document.getElementById('menuBtn').onclick = () => document.body.classList.toggle('nav-open');
      // The menu button says whether the drawer is open, whoever opened or closed it.
      new MutationObserver(() => document.getElementById('menuBtn').setAttribute('aria-expanded', String(document.body.classList.contains('nav-open')))).observe(document.body, {
        attributes: true,
        attributeFilter: ['class']
      });
      document.getElementById('scrim').onclick = () => document.body.classList.remove('nav-open');
      document.getElementById('playerBtn').onclick = () => S.lms && playerPicker();
      document.getElementById('localBadge').onclick = () => renameLocal();
      document.getElementById('unlock').onclick = unlock;
      S.lms = new LMS();
      try {
        const v = yield S.lms.rpc('', ['version', '?'], 8000);
        let name = '';
        try {
          name = (yield S.lms.rpc('', ['pref', 'libraryname', '?'], 5000))._p2 || '';
        } catch (e) {/* older LMS */}
        S.server = {
          name: name || 'Lyrion Music Server',
          version: v._version
        };
      } catch (e) {
        unreachable(e.message);
        return;
      }
      if (yield learnLmsLang()) relang(); // LMS's language, if it changed since last time
      document.getElementById('serverName').textContent = S.server.name;
      document.body.classList.add('ready');
      S.localId = macBytes().str;
      try {
        S.config = serverConfig = yield (yield fetch(`/plugins/LyrionJS/config.json?mac=${encodeURIComponent(S.localId)}`, {
          cache: 'no-store'
        })).json();
      } catch (e) {
        S.config = serverConfig = {};
      }
      notePage(S.config);
      if (S.config.enabled === 0) toast(tr('Browser players are switched off in LMS (Settings › Plugins › LyrionJS). This page controls your other players.'));else claimPlayerThenStart();
      history.replaceState({
        d: 1
      }, '');
      const saved = store.get('view', 'now');
      root(VIEWS[saved] ? saved : 'now');
      try {
        yield pollPlayers();
      } catch (e) {
        setConn(false, e.message);
      }
      setTimeout(updateHost, HOST_WAIT_MS); // no player of its own here: the skin shows another
      if (S.target && S.players.some(p => p.playerid === S.target)) loadPluginMenus();
      poll();
    });
    return _boot.apply(this, arguments);
  }
  window.LyrionJS = {
    S,
    VERSION,
    showOwn: () => enterOwn(),
    useSkin: v => useSkin(v)
  };
  boot();
})();