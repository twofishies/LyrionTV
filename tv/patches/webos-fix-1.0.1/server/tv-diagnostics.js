/* Runs before application scripts, so syntax/startup errors are visible on the TV. */
(function () {
  'use strict';
  if (!/(?:\?|&)tvnav=[01](?:&|$)/.test(location.search) || window.lyrionTVDiagnostics) { return; }
  var messages = [], panel = null, enabled = /(?:\?|&)tvdebug=1(?:&|$)/.test(location.search);
  window.lyrionTVDiagnostics = { version: '1.0.1', messages: messages };
  function paint() {
    if (!document.body || (!enabled && !messages.length)) { return; }
    if (!panel) {
      panel = document.createElement('pre'); panel.id = 'lyrion-tv-errors';
      panel.style.cssText = 'position:fixed;left:20px;right:20px;bottom:60px;max-height:45vh;overflow:auto;white-space:pre-wrap;word-wrap:break-word;background:#161b22;color:#fff;border:3px solid #e9ab42;padding:16px;font:20px monospace;z-index:2147483646;pointer-events:none';
      document.body.appendChild(panel);
    }
    panel.textContent = 'TV compatibility 1.0.1 | ' + (document.body.classList.contains('ready') ? 'app ready' : 'starting') + '\n' + navigator.userAgent + '\n' + (messages.length ? messages.join('\n') : 'No uncaught errors recorded.');
  }
  function report(message) { messages.push(String(message).slice(0, 700)); if (messages.length > 5) { messages.shift(); } paint(); }
  window.addEventListener('error', function (e) {
    if (e.message) { report(e.message + ' | line ' + (e.lineno || '?') + ':' + (e.colno || '?')); }
    else if (e.target && /^(SCRIPT|LINK)$/.test(e.target.tagName)) { report('Failed resource: ' + e.target.tagName); }
  }, true);
  window.addEventListener('unhandledrejection', function (e) { report('Rejected promise: ' + (e.reason && (e.reason.stack || e.reason.message) || e.reason)); });
  document.addEventListener('DOMContentLoaded', paint);
  window.addEventListener('load', paint);
  // Keep the status current without a permanent polling timer.
  document.addEventListener('DOMContentLoaded', function () {
    if (document.body) { new MutationObserver(paint).observe(document.body, {attributes:true, attributeFilter:['class']}); }
  });
}());
