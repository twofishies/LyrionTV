/* LYRION-TV-PAGE-LIFECYCLE-1 */
(function () {
  'use strict';
  var key = 'lyrion-tv-page-lifecycle-v1';
  var session = Date.now().toString(36);
  var records = [];
  try {
    records = JSON.parse(localStorage.getItem(key) || '[]');
    if (!Array.isArray(records)) records = [];
  } catch (e) {}
  var previous = records.slice(-32);

  function record(event) {
    records.push(new Date().toISOString() + ' ' + session + ' ' +
      Math.round(performance.now()) + 'ms ' + document.visibilityState + ' ' + event);
    records = records.slice(-32);
    try { localStorage.setItem(key, JSON.stringify(records)); } catch (e) {}
  }

  var nav = performance.getEntriesByType && performance.getEntriesByType('navigation')[0];
  record('boot nav=' + (nav ? nav.type : performance.navigation ? performance.navigation.type : 'unknown'));
  var boot = records[records.length - 1];
  window.addEventListener('pageshow', function (e) { record('pageshow persisted=' + e.persisted); });
  window.addEventListener('pagehide', function (e) { record('pagehide persisted=' + e.persisted); });
  document.addEventListener('visibilitychange', function () { record('visibilitychange'); });
  window.addEventListener('online', function () { record('online'); });
  window.addEventListener('offline', function () { record('offline'); });
  setInterval(function () { record('heartbeat'); }, 5000);

  // Use the same endpoint as Send diagnostics. Keep the previous page's data
  // local even after sending, so an interrupted upload doesn't erase evidence.
  var attempts = 0;
  function report() {
    if (++attempts > 4) return;
    var request = new XMLHttpRequest();
    request.open('POST', '/plugins/LyrionJS/log');
    request.timeout = 5000;
    request.setRequestHeader('Content-Type', 'application/json');
    function retry() { setTimeout(report, 10000); }
    request.onerror = request.ontimeout = retry;
    request.onload = function () {
      if (request.status < 200 || request.status >= 300) retry();
    };
    var player = window.LyrionJS && window.LyrionJS.S;
    request.send(JSON.stringify({
      id: (player && player.localId) || '-',
      lines: previous.concat(boot).map(function (line) { return 'tv-lifecycle: ' + line; })
    }));
  }
  setTimeout(report, 3000);
}());
