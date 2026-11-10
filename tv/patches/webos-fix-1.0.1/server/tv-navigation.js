/* LyrionJS TV navigation v1.0.1. ES5 syntax for older webOS engines. */
(function () {
  'use strict';
  if (!/(?:\?|&)tvnav=1(?:&|$)/.test(location.search) || window.lyrionTVNav) { return; }
  window.lyrionTVNav = { version: '1.0.1' };
  var selector = 'a[href],button,input,select,textarea,[tabindex],[role="button"],[role="link"],[role="tab"],[role="menuitem"],[role="checkbox"],[role="switch"],[role="slider"],[contenteditable="true"]';
  var current = null, editing = false;
  function visible(el) {
    if (!el || !document.documentElement.contains(el) || el.disabled || el.getAttribute('aria-disabled') === 'true' || el.getAttribute('type') === 'hidden') { return false; }
    var r = el.getBoundingClientRect(), n = el;
    if (!r.width || !r.height) { return false; }
    while (n && n.nodeType === 1) {
      var s = window.getComputedStyle(n);
      if (s.display === 'none' || s.visibility === 'hidden' || s.opacity === '0' || n.hasAttribute('inert') || n.getAttribute('aria-hidden') === 'true') { return false; }
      n = n.parentElement;
    }
    return true;
  }
  function scope() {
    var dialogs = document.querySelectorAll('dialog[open],[role="dialog"][aria-modal="true"],[aria-modal="true"]');
    for (var i = dialogs.length - 1; i >= 0; i--) { if (visible(dialogs[i])) { return dialogs[i]; } }
    return document;
  }
  function candidates() {
    var root = scope(), nodes = root.querySelectorAll(selector), result = [];
    for (var i = 0; i < nodes.length; i++) {
      if (visible(nodes[i]) && nodes[i].getAttribute('tabindex') !== '-1') { result.push(nodes[i]); }
    }
    return result;
  }
  function focus(el) {
    if (!el) { return; }
    if (current) { current.removeAttribute('data-tv-focus'); }
    current = el;
    if (!el.hasAttribute('tabindex') && el.tabIndex < 0) { el.setAttribute('tabindex', '0'); }
    el.setAttribute('data-tv-focus', 'true');
    el.focus();
    try { el.scrollIntoView({ block: 'nearest', inline: 'nearest' }); }
    catch (ignore) { el.scrollIntoView(false); }
  }
  function choose(list, from, key) {
    var a = from.getBoundingClientRect(), ax = (a.left + a.right) / 2, ay = (a.top + a.bottom) / 2;
    var best = null, score = Infinity, horizontal = key === 37 || key === 39;
    for (var i = 0; i < list.length; i++) {
      if (list[i] === from) { continue; }
      var b = list[i].getBoundingClientRect(), dx = (b.left + b.right) / 2 - ax, dy = (b.top + b.bottom) / 2 - ay;
      var forward = key === 37 ? -dx : key === 39 ? dx : key === 38 ? -dy : dy;
      if (forward <= 1) { continue; }
      var side = Math.abs(horizontal ? dy : dx);
      var overlap = horizontal ? b.bottom > a.top && b.top < a.bottom : b.right > a.left && b.left < a.right;
      var rank = forward + side * 3 + (overlap ? 0 : 1000);
      if (rank < score) { score = rank; best = list[i]; }
    }
    return best;
  }
  function editor(el) { return (el.tagName === 'INPUT' && !/^(button|submit|reset|checkbox|radio)$/i.test(el.type)) || /^(TEXTAREA|SELECT)$/.test(el.tagName) || el.isContentEditable || el.getAttribute('role') === 'slider'; }
  function stop(e) { e.preventDefault(); e.stopImmediatePropagation(); }
  function install() {
    var style = document.createElement('style');
    style.textContent = '[data-tv-focus="true"]{outline:4px solid #28d5f0!important;outline-offset:3px!important;box-shadow:0 0 0 6px rgba(0,0,0,.8)!important}';
    document.head.appendChild(style);
    window.addEventListener('keydown', function (e) {
      var rawKey = e.keyCode;
      var names = { ArrowLeft: 37, Left: 37, ArrowUp: 38, Up: 38, ArrowRight: 39, Right: 39, ArrowDown: 40, Down: 40, Enter: 13 };
      var key = names[e.key] || rawKey;
      if (editing && (!visible(current) || document.activeElement !== current)) { editing = false; }
      if (editing) {
        if (key === 461 || key === 27) { stop(e); editing = false; current.blur(); focus(current); }
        // Let native controls, virtual keyboard and LyrionJS receive editing keys.
        return;
      }
      if (key < 37 || key > 40) { if (key !== 13) { return; } }
      var list = candidates();
      stop(e);
      if (!list.length) { return; }
      if (list.indexOf(current) < 0) { focus(list[0]); if (key !== 13) { return; } }
      if (key === 13) {
        if (e.repeat) { return; }
        if (editor(current)) { editing = true; current.focus(); current.click(); }
        else { current.click(); }
      } else { focus(choose(list, current, key) || current); }
    }, true);
    // A click/Tab can also establish the starting point for subsequent D-pad input.
    document.addEventListener('focusin', function (e) {
      if (e.target !== current && visible(e.target) && e.target.matches(selector)) {
        editing = false;
        if (current) { current.removeAttribute('data-tv-focus'); }
        current = e.target; current.setAttribute('data-tv-focus', 'true');
      }
    });
    // Recover focus after asynchronous list refreshes and modal open/close.
    var timer;
    new MutationObserver(function () {
      clearTimeout(timer);
      timer = setTimeout(function () {
        var list = candidates();
        if (list.indexOf(current) < 0) { editing = false; focus(list[0]); }
      }, 100);
    }).observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ['hidden','disabled','aria-hidden','aria-modal','open','style','class'] });
    focus(candidates()[0]);
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', install); } else { install(); }
}());
