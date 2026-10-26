/* Lecture des boutons configurés dans Personnages, sans afficher leur stockage technique. */
(function (global) {
  'use strict';
  var defaults = new WeakMap();
  function decode(raw) {
    if (typeof raw === 'string') {
      raw = raw.trim();
      if (!raw) return null;
      if (raw.indexOf('@NYXIA_TRIGGER:') === 0) {
        try { raw = JSON.parse(raw.slice('@NYXIA_TRIGGER:'.length)); }
        catch (_) { return null; }
      } else return { label: raw, action: 'chat', message: raw, url: '', intro: '', resourceTitle: '' };
    }
    if (!raw || typeof raw !== 'object') return null;
    var label = String(raw.l || raw.label || raw.text || raw.title || '').trim();
    if (!label) return null;
    return {
      label: label,
      action: String(raw.a || raw.action || raw.type || 'chat').toLowerCase(),
      message: String(raw.m || raw.message || raw.value || label),
      url: String(raw.u || raw.url || ''),
      intro: String(raw.i || raw.intro || ''),
      resourceTitle: String(raw.r || raw.resourceTitle || raw.resource || '')
    };
  }
  function safeUrl(value) {
    try {
      var url = new URL(value, global.location.href);
      return value && /^(https?:)$/.test(url.protocol) ? url.href : '';
    } catch (_) { return ''; }
  }
  function render(items, resources) {
    var box = document.getElementById('suggestions');
    if (!box || !Array.isArray(items)) return;
    if (!defaults.has(box)) defaults.set(box, box.innerHTML);
    var suggestions = items.map(decode).filter(Boolean).slice(0, 4);
    if (!suggestions.length) {
      box.innerHTML = defaults.get(box);
      return;
    }
    box.innerHTML = '';
    suggestions.forEach(function (item) {
      var button = document.createElement('button');
      button.type = 'button';
      button.className = 'sug-chip';
      button.textContent = item.label;
      button.setAttribute('data-message', item.message);
      var resource = (Array.isArray(resources) ? resources : []).find(function (r) {
        return r && item.resourceTitle && r.title === item.resourceTitle &&
          String(r.type || '').toLowerCase() === item.action;
      });
      var url = safeUrl(item.url || resource && resource.url || '');
      button.setAttribute('data-intro', item.intro);
      if (url && ['video', 'audio', 'image'].indexOf(item.action) >= 0) {
        button.setAttribute('data-' + item.action, url);
      }
      button.onclick = function () {
        if (['pdf', 'link', 'canva'].indexOf(item.action) >= 0) {
          if (url) global.open(url, '_blank', 'noopener,noreferrer');
          return;
        }
        if (['video', 'audio', 'image'].indexOf(item.action) >= 0 && !url) return;
        global.useSuggestion(button);
      };
      box.appendChild(button);
    });
  }
  global.NyxiaSuggestions = { render: render };
})(window);
