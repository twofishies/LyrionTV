/* D-pad navigation for the LMS-hosted TV UI. Compatible with Chromium 53. */
(function () {
  'use strict';
  if (!/[?&]tvnav=1(?:&|$)/.test(location.search) || window.lyrionTVNav) { return; }
  var state = window.lyrionTVNav = { version: '1.1.0' };
  var controls = 'a[href],button,input,select,textarea,[tabindex],[role="button"],[role="link"],[role="tab"],[role="menuitem"],[role="checkbox"],[role="switch"],[role="slider"],[contenteditable="true"]';
  var panes = '#nav,#view,#side,#top,#bar,[role="dialog"],[aria-modal="true"],dialog';
  var current, lastPane, anchor, editing;

  function rect(el) {
    var box = el.getBoundingClientRect();
    return { left: box.left, top: box.top, right: box.right, bottom: box.bottom,
      width: box.width, height: box.height, x: (box.left + box.right) / 2, y: (box.top + box.bottom) / 2 };
  }

  function shown(el, cache) {
    if (!el) { return true; }
    if (cache.has(el)) { return cache.get(el); }
    var style = getComputedStyle(el);
    var menu = el.id === 'nav' && document.getElementById('menuBtn');
    var result = style.display !== 'none' && style.visibility !== 'hidden' && style.visibility !== 'collapse' &&
      (style.opacity !== '0' || el.matches('.swatch-pick')) && !el.hidden &&
      !el.hasAttribute('inert') && el.getAttribute('aria-hidden') !== 'true' &&
      !(menu && menu.offsetWidth && !document.body.classList.contains('nav-open')) &&
      shown(el.parentElement, cache);
    cache.set(el, result);
    return result;
  }

  function available(el, cache) {
    return el && document.documentElement.contains(el) && !el.disabled &&
      el.getAttribute('aria-disabled') !== 'true' && el.getAttribute('tabindex') !== '-1' && shown(el, cache);
  }

  function scope(cache) {
    var dialogs = document.querySelectorAll('dialog[open],[aria-modal="true"]');
    for (var i = dialogs.length - 1; i >= 0; i--) {
      if (shown(dialogs[i], cache)) { return dialogs[i]; }
    }
    return document.body.classList.contains('nav-open') ? document.getElementById('nav') || document : document;
  }

  function usableBox(el) {
    var box = rect(el);
    return box.width && box.height ? box : null;
  }

  function viewport(el, panel, sticky) {
    var box = rect(panel);
    var top = box.top + panel.clientTop, left = box.left + panel.clientLeft;
    var bottom = top + panel.clientHeight, right = left + panel.clientWidth;
    if (sticky && (panel.id === 'view' || panel.id === 'side')) {
      var header = panel.querySelector('.view-head');
      if (header && !header.contains(el)) { top = Math.min(bottom, Math.max(top, rect(header).bottom)); }
    }
    return { top: top, bottom: bottom, left: left, right: right };
  }

  function scrollable(el) {
    return el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;
  }

  function reveal(el, box, scrollers, key) {
    for (var i = 0; i < scrollers.length; i++) {
      var panel = scrollers[i].el;
      if (!scrollers[i].reveal) { continue; }
      var clip = viewport(el, panel, true);
      var height = clip.bottom - clip.top;
      // Keep successive selections in the middle third once the list starts moving.
      var down = key === 40 && box.y > clip.top + height * 2 / 3;
      var up = key === 38 && box.y < clip.top + height / 3;
      var dy = down ? box.y - (clip.top + height * 2 / 3) : up ? box.y - (clip.top + height / 3) : 0;
      if (box.top < clip.top || box.bottom > clip.bottom) {
        if (key === 38 || key === 40) {
          dy = box.height > height ? box.top - clip.top : box.y - (clip.top + height / 2);
        } else {
          dy = box.top < clip.top ? box.top - clip.top : box.bottom - clip.bottom;
        }
      }
      var dx = box.left < clip.left ? box.left - clip.left : Math.max(0, box.right - clip.right);
      if (dy) { panel.scrollTop += Math.round(dy); }
      if (dx) { panel.scrollLeft += Math.round(dx); }
      if (dx || dy) { box = rect(el); }
    }
  }

  function remember(el) {
    if (el === current) { return; }
    if (current) { current.removeAttribute('data-tv-focus'); }
    current = el;
    lastPane = el.closest(panes);
    anchor = { box: rect(el), label: el.getAttribute('aria-label') || el.textContent.trim(), view: document.body.getAttribute('data-view') };
    el.setAttribute('data-tv-focus', 'true');
  }

  function focus(el, key) {
    if (!el) { return; }
    remember(el);
    if (!el.hasAttribute('tabindex') && el.tabIndex < 0) { el.setAttribute('tabindex', '0'); }
    var scrollers = [];
    for (var n = el.parentElement; n; n = n.parentElement) {
      if (!scrollable(n)) { continue; }
      var style = getComputedStyle(n);
      if (/(auto|scroll|hidden)/.test(style.overflowX + ' ' + style.overflowY)) {
        scrollers.push({ el: n, x: n.scrollLeft, y: n.scrollTop, reveal: /(auto|scroll)/.test(style.overflowX + ' ' + style.overflowY) });
      }
    }
    // Older webOS ignores preventScroll. Restore any native focus scroll before paint.
    var x = window.pageXOffset, y = window.pageYOffset;
    el.focus({ preventScroll: true });
    if (window.pageXOffset !== x || window.pageYOffset !== y) { window.scrollTo(x, y); }
    scrollers.forEach(function (s) {
      if (s.el.scrollTop !== s.y) { s.el.scrollTop = s.y; }
      if (s.el.scrollLeft !== s.x) { s.el.scrollLeft = s.x; }
    });
    reveal(el, rect(el), scrollers, key);
    anchor.box = rect(el);
  }

  state.centerQueueRow = function (el) {
    var panel = el.closest('#view');
    if (!panel || !scrollable(panel)) { return; }
    var clip = viewport(el, panel, true);
    panel.scrollTop += Math.round(rect(el).y - (clip.top + clip.bottom) / 2);
  };

  function inView(el, box, panel, clips) {
    if (box.bottom <= 0 || box.top >= innerHeight || box.right <= 0 || box.left >= innerWidth) { return false; }
    if (!panel || !scrollable(panel)) { return true; }
    if (!clips.has(panel)) {
      var clip = viewport(null, panel, false);
      clip.header = (panel.id === 'view' || panel.id === 'side') && panel.querySelector('.view-head');
      clip.contentTop = clip.header ? Math.min(clip.bottom, Math.max(clip.top, rect(clip.header).bottom)) : clip.top;
      clips.set(panel, clip);
    }
    var bounds = clips.get(panel);
    var top = bounds.header && bounds.header.contains(el) ? bounds.top : bounds.contentTop;
    return box.x >= bounds.left && box.x <= bounds.right && box.y >= top && box.y <= bounds.bottom;
  }

  function choose(root, from, key, cache) {
    var a = rect(from), panel = from.closest(panes), horizontal = key === 37 || key === 39;
    var clips = new WeakMap();
    function search(region, local) {
      var nodes = region.querySelectorAll(controls), best, score = Infinity;
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        if (el === from || !available(el, cache)) { continue; }
        var b = usableBox(el);
        if (!b || (!local && !inView(el, b, el.closest(panes), clips))) { continue; }
        var dx = b.x - a.x, dy = b.y - a.y;
        var forward = key === 37 ? -dx : key === 39 ? dx : key === 38 ? -dy : dy;
        if (forward <= 1) { continue; }
        var overlap = horizontal ? b.bottom > a.top && b.top < a.bottom : b.right > a.left && b.left < a.right;
        var rank = forward + Math.abs(horizontal ? dy : dx) * 3 + (overlap ? 0 : 1000);
        if (rank < score) { score = rank; best = el; }
      }
      return best;
    }
    // Vertical moves stay in the current pane until it runs out of items.
    if (!horizontal && panel && panel.id !== 'top' && panel.id !== 'bar' && root.contains(panel)) {
      var next = search(panel, true);
      if (next) { return next; }
    }
    return search(root, false);
  }

  function recover(root, cache) {
    editing = false;
    var sameView = anchor && anchor.view === document.body.getAttribute('data-view');
    var local = lastPane && root.contains(lastPane) ? lastPane : null;
    var clips = new WeakMap();
    var nodes = (local || root).querySelectorAll(controls), nearest, score = Infinity;
    for (var i = 0; i < nodes.length; i++) {
      var el = nodes[i];
      if (!available(el, cache)) { continue; }
      var box = usableBox(el);
      if (!box || !inView(el, box, el.closest(panes), clips)) { continue; }
      if (!local || !sameView) { focus(el); return; }
      var label = el.getAttribute('aria-label') || el.textContent.trim();
      var rank = Math.abs(box.y - anchor.box.y) + Math.abs(box.x - anchor.box.x) + (label === anchor.label ? 0 : 10000);
      if (rank < score) { score = rank; nearest = el; }
    }
    if (nearest) { focus(nearest); }
    else if (local && local !== root) { lastPane = null; recover(root, cache); }
    else if (current) { current.removeAttribute('data-tv-focus'); current = null; }
  }

  function editor(el) {
    return (el.tagName === 'INPUT' && !/^(button|submit|reset|checkbox|radio)$/i.test(el.type)) ||
      /^(TEXTAREA|SELECT)$/.test(el.tagName) || el.isContentEditable || el.getAttribute('role') === 'slider';
  }

  function elementNode(node) { return node.nodeType === 1; }

  function stop(e) { e.preventDefault(); e.stopImmediatePropagation(); }

  function install() {
    var names = { ArrowLeft: 37, Left: 37, ArrowUp: 38, Up: 38, ArrowRight: 39, Right: 39, ArrowDown: 40, Down: 40, Enter: 13, Escape: 27 };
    window.addEventListener('keydown', function (e) {
      var key = names[e.key] || e.keyCode;
      var back = key === 461 || key === 27;
      if (!back && key !== 13 && (key < 37 || key > 40)) { return; }
      var cache = new WeakMap(), root = scope(cache);
      var valid = available(current, cache) && root.contains(current) && usableBox(current);
      if (editing && (!valid || document.activeElement !== current)) { editing = false; }
      if (editing) {
        if (back) { stop(e); editing = false; current.blur(); focus(current); }
        return;
      }
      if (back) {
        if (root.id === 'nav') {
          stop(e);
          document.body.classList.remove('nav-open');
          focus(document.getElementById('menuBtn'));
        } else if (key === 461 && root.closest && root.closest('#sheet')) {
          var close = root.querySelector('.sheet-head button');
          if (close) { stop(e); close.click(); }
        }
        return;
      }
      stop(e);
      if (!valid) { recover(root, cache); if (key !== 13 || !current) { return; } }
      if (key === 13) {
        if (e.repeat) { return; }
        if (editor(current)) { editing = true; current.focus(); }
        current.click();
      } else {
        var target = choose(root, current, key, cache);
        if (target) { focus(target, current.closest(panes) === target.closest(panes) ? key : null); }
      }
    }, true);

    document.addEventListener('focusin', function (e) {
      if (e.target !== current && e.target.matches(controls) && available(e.target, new WeakMap())) {
        editing = false;
        remember(e.target);
      }
    });
    var frame;
    function refresh() {
      frame = null;
      var cache = new WeakMap(), root = scope(cache);
      if (available(current, cache) && root.contains(current) && usableBox(current)) { return; }
      recover(root, cache);
    }
    new MutationObserver(function (records) {
      if (frame != null) { return; }
      var structural = records.some(function (record) {
        if (record.type === 'attributes') {
          return record.attributeName !== 'style' || !record.target.matches('.bar-prog-fill,input[type="range"]');
        }
        return Array.prototype.some.call(record.addedNodes, elementNode) ||
          Array.prototype.some.call(record.removedNodes, elementNode);
      });
      if (structural) { frame = requestAnimationFrame(refresh); }
    }).observe(document.body, { childList: true, subtree: true, attributes: true,
      attributeFilter: ['hidden','disabled','aria-hidden','aria-disabled','aria-modal','tabindex','open','style','class'] });
    refresh();
  }
  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', install); }
  else { install(); }
}());
