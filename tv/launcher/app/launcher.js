(function () {
  'use strict';
  var storageKey = 'lyrionjs-url';
  var input = document.getElementById('url'), connect = document.getElementById('connect');
  var settings = document.getElementById('settings'), error = document.getElementById('error');
  var startup = document.getElementById('startup'), setup = document.getElementById('setup');
  var saved = '', timer = null, unsaved = null;
  try { saved = localStorage.getItem(storageKey) || ''; } catch (ignore) {}
  input.value = saved || window.LYRIONJS_DEFAULT_URL || '';

  function destination(value) {
    var target;
    try { target = new URL(value.trim()); } catch (e) { throw new Error('Enter a full address beginning with http:// or https://.'); }
    if (!/^https?:$/.test(target.protocol) || target.username || target.password) {
      throw new Error('Use an HTTP or HTTPS address without a username or password.');
    }
    target.searchParams.set('tvnav', '1');
    var defaults = {tvsingle:'1', tvschedule:'1', tvui:'1'};
    Object.keys(defaults).forEach(function (key) {
      if (!target.searchParams.has(key)) { target.searchParams.set(key, defaults[key]); }
    });
    return target.href;
  }

  function showSetup(message) {
    if (timer !== null) { clearTimeout(timer); timer = null; }
    startup.hidden = true; setup.hidden = false;
    error.textContent = message || '';
    (input.value ? connect : input).focus();
  }

  settings.onclick = function () { showSetup(); input.focus(); };
  connect.onclick = function () {
    var target, value = input.value.trim();
    try { target = destination(value); } catch (e) { showSetup(e.message); input.focus(); return; }
    try { localStorage.setItem(storageKey, value); }
    catch (e) {
      if (unsaved !== value) {
        unsaved = value;
        showSetup('This TV could not save the address. Press OK again to connect for this session.');
        connect.textContent = 'Connect without saving';
        return;
      }
    }
    window.location.href = target;
  };

  input.addEventListener('input', function () { unsaved = null; connect.textContent = 'Save and connect'; });

  document.addEventListener('keydown', function (e) {
    var code = e.keyCode, name = e.key;
    if (code === 406) { e.preventDefault(); settings.click(); return; }
    if (!startup.hidden && (code === 13 || name === 'Enter')) {
      e.preventDefault(); settings.click(); return;
    }
    if (!setup.hidden && (code === 38 || code === 40 || name === 'ArrowUp' || name === 'ArrowDown')) {
      e.preventDefault();
      (document.activeElement === input ? connect : input).focus();
    } else if (!setup.hidden && (code === 13 || name === 'Enter') && document.activeElement === connect) {
      e.preventDefault(); if (!e.repeat) { connect.click(); }
    }
  }, true);

  // When Back returns to a restored launcher page, leave setup open instead of redirecting again.
  window.addEventListener('pageshow', function (e) { if (e.persisted) { showSetup(); } });
  var back = window.performance && performance.navigation && performance.navigation.type === 2;
  if (!saved || back) { showSetup(); return; }
  var target;
  try { target = destination(saved); } catch (e) { showSetup('The saved server address needs to be corrected.'); return; }
  startup.hidden = false;
  settings.focus();
  timer = setTimeout(function () { timer = null; window.location.href = target; }, 2000);
}());
