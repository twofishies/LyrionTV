  /* LYRION-TV-MEDIA-2 */
  const tvMediaCommands = {
    415: ['play'],
    19: ['pause', 1],
    413: ['stop']
  };
  const tvMediaHoldMs = 500;
  const tvMediaSeekIntervalMs = 650;
  let tvMediaPress = null;

  function cancelTVMediaPress() {
    if (!tvMediaPress) return;
    clearTimeout(tvMediaPress.timer);
    tvMediaPress = null;
  }

  function seekTVMedia(press) {
    press.nextSeekAt = performance.now() + tvMediaSeekIntervalMs;
    if (!S.lms || press.player !== S.target) return;
    const status = S.status;
    if (!status || status === press.lastSeekStatus ||
        (press.track != null && press.track !== status.playlist_cur_index) ||
        (status.mode !== 'play' && status.mode !== 'pause') ||
        (status.can_seek != null && +status.can_seek === 0)) return;
    const duration = current(status).duration;
    if (!Number.isFinite(duration) || duration <= 0) return;
    // Keep seeking within the track. Wait for fresh LMS status before another seek.
    const position = Math.max(0, Math.min(duration - 0.1, elapsedNow() + press.direction * 10)).toFixed(1);
    if (position === press.lastPosition) return;
    press.lastSeekStatus = status;
    press.lastPosition = position;
    act(['time', position], null, press.player);
  }

  function tvMediaKey(event) {
    const key = event.keyCode;
    const direction = key === 412 ? -1 : key === 417 ? 1 : 0;
    const command = tvMediaCommands[key];
    if (!direction && (!command || event.type !== 'keydown')) return;
    event.preventDefault();
    event.stopImmediatePropagation();

    if (event.type === 'keyup') {
      const press = tvMediaPress;
      if (!press || press.key !== key || press.document !== event.currentTarget) return;
      cancelTVMediaPress();
      if (!press.nextSeekAt && S.lms && press.player === S.target) {
        act(['playlist', 'index', direction < 0 ? '-1' : '+1'], null, press.player);
      }
      return;
    }

    if (direction && tvMediaPress && tvMediaPress.key === key &&
        tvMediaPress.document === event.currentTarget) {
      if (tvMediaPress.nextSeekAt && performance.now() >= tvMediaPress.nextSeekAt) {
        seekTVMedia(tvMediaPress);
      }
      return;
    }
    if (event.repeat || !S.lms || !S.target) return;
    cancelTVMediaPress();
    if (command) {
      act(command);
      return;
    }

    const press = { key, direction, player: S.target, document: event.currentTarget,
      track: S.status && S.status.playlist_cur_index, nextSeekAt: 0 };
    tvMediaPress = press;
    press.timer = setTimeout(() => seekTVMedia(press), tvMediaHoldMs);
  }

  function bindTVMediaKeys(doc) {
    doc.addEventListener('keydown', tvMediaKey, true);
    doc.addEventListener('keyup', tvMediaKey, true);
    doc.defaultView.addEventListener('blur', cancelTVMediaPress);
    doc.addEventListener('visibilitychange', () => {
      if (doc.hidden) cancelTVMediaPress();
    });
  }

  if (window.lyrionTVNav) {
    document.documentElement.setAttribute('data-lyrion-tv-remote', '');
    bindTVMediaKeys(document);
  }
