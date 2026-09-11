/*
  NyXia — Studio Prompt
  Moteur média commun des Formations Vivantes
  ------------------------------------------------------------
  Chargé automatiquement dans TOUTES les pages /chat-*.html par _worker.js.
  Il ne dépend d'aucun personnage et ne contient aucun nom de formation.
*/
(function () {
  'use strict';

  if (window.__NYXIA_FORMATION_MEDIA_COMMON__) return;
  window.__NYXIA_FORMATION_MEDIA_COMMON__ = true;

  function safeHttps(raw) {
    try {
      var u = new URL(String(raw || '').trim(), window.location.href);
      return u.protocol === 'https:' ? u.href : '';
    } catch (e) { return ''; }
  }

  function documentEmbedUrl(raw) {
    try {
      var u = new URL(String(raw || '').trim());
      if (u.protocol !== 'https:') return '';
      var host = u.hostname.toLowerCase().replace(/^www\./, '');
      var path = u.pathname || '';

      // PDF direct
      if (/\.pdf$/i.test(path)) return u.href;

      // Google Drive — fichier partagé (PDF, cahier, document exporté, etc.)
      if (host === 'drive.google.com') {
        var m = path.match(/\/file\/d\/([A-Za-z0-9_-]+)/);
        var id = m ? m[1] : (u.searchParams.get('id') || '');
        if (id) return 'https://drive.google.com/file/d/' + id + '/preview';
      }

      // Google Docs / Slides / Sheets
      if (host === 'docs.google.com') {
        var dm = path.match(/^\/(document|presentation|spreadsheets)\/d\/([A-Za-z0-9_-]+)/);
        if (dm) return 'https://docs.google.com/' + dm[1] + '/d/' + dm[2] + '/preview';
      }
    } catch (e) {}
    return '';
  }

  function splitUrlTrailing(raw) {
    var url = raw;
    var trailing = '';
    while (url && /[.,;:!?»”'\)]$/.test(url)) {
      trailing = url.slice(-1) + trailing;
      url = url.slice(0, -1);
    }
    return { url: url, trailing: trailing };
  }

  function linkifyTextNodes(root) {
    if (!root || root.dataset.nxLinkified === '1') return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || node.nodeValue.indexOf('https://') === -1) return NodeFilter.FILTER_REJECT;
        var p = node.parentElement;
        if (!p || p.closest('a,script,style,textarea,code,pre')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(function (node) {
      var text = node.nodeValue;
      var re = /https:\/\/[^\s<>]+/g;
      var match, last = 0, frag = document.createDocumentFragment();
      var changed = false;

      while ((match = re.exec(text)) !== null) {
        changed = true;
        if (match.index > last) frag.appendChild(document.createTextNode(text.slice(last, match.index)));
        var parts = splitUrlTrailing(match[0]);
        var safe = safeHttps(parts.url);
        if (safe) {
          var a = document.createElement('a');
          a.href = safe;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.textContent = parts.url;
          a.style.cssText = 'color:#c4b5fd;text-decoration:underline;word-break:break-word';
          frag.appendChild(a);
        } else {
          frag.appendChild(document.createTextNode(match[0]));
        }
        if (parts.trailing) frag.appendChild(document.createTextNode(parts.trailing));
        last = match.index + match[0].length;
      }

      if (changed) {
        if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
        node.parentNode.replaceChild(frag, node);
      }
    });

    root.dataset.nxLinkified = '1';
  }

  function extractLinkMarkers(root) {
    if (!root) return [];
    var found = [];
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || !/\[LINK\s*:/i.test(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        var p = node.parentElement;
        if (!p || p.closest('script,style,textarea,code,pre')) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach(function (node) {
      var original = node.nodeValue;
      var cleaned = original.replace(/\[LINK\s*:\s*([^\]\r\n]+)\]/gi, function (_, raw) {
        var safe = safeHttps(raw);
        if (safe) found.push(safe);
        return '';
      });
      if (cleaned !== original) node.nodeValue = cleaned;
    });
    return found;
  }

  function hasDocumentPreview(msg) {
    return !!msg.querySelector('iframe[title="Document de formation"], iframe[data-nx-document-preview="1"]');
  }

  function appendLinkCard(msg, url, forceCard) {
    var safe = safeHttps(url);
    if (!safe) return;

    var key = encodeURIComponent(safe);
    if (msg.querySelector('[data-nx-link-url="' + CSS.escape(key) + '"]')) return;

    var wrapper = msg.querySelector('.msg-bubble') && msg.querySelector('.msg-bubble').parentElement;
    if (!wrapper) wrapper = msg;

    var embed = documentEmbedUrl(safe);
    if (!forceCard && !embed) return;
    if (embed && hasDocumentPreview(msg)) return;

    var card = document.createElement('div');
    card.setAttribute('data-nx-link-url', key);
    card.className = 'nx-formation-link-card';
    card.style.cssText = 'width:min(100%,560px);margin-top:6px;padding:12px;border-radius:16px;border:1px solid rgba(123,92,255,.22);background:linear-gradient(145deg,rgba(123,92,255,.09),rgba(255,255,255,.025));box-shadow:0 12px 30px rgba(20,12,48,.16)';

    if (embed) {
      var label = document.createElement('div');
      label.textContent = '📄 Document de formation';
      label.style.cssText = 'font-size:12px;font-weight:700;color:#c4b5fd;margin:0 2px 10px';
      card.appendChild(label);

      var iframe = document.createElement('iframe');
      iframe.src = embed;
      iframe.title = 'Document de formation';
      iframe.loading = 'lazy';
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      iframe.setAttribute('data-nx-document-preview', '1');
      iframe.style.cssText = 'width:100%;height:460px;border:0;border-radius:12px;background:#070713;display:block';
      card.appendChild(iframe);
    }

    var a = document.createElement('a');
    a.href = safe;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = embed ? '↗ Ouvrir le document dans un nouvel onglet' : '🔗 Ouvrir le lien dans un nouvel onglet';
    a.style.cssText = 'display:flex;align-items:center;justify-content:center;margin-top:' + (embed ? '10px' : '0') + ';padding:10px 14px;border-radius:50px;border:1px solid rgba(123,92,255,.35);background:rgba(123,92,255,.12);color:#fff;text-decoration:none;font-size:12px;font-weight:700';
    card.appendChild(a);

    wrapper.appendChild(card);
  }

  function processBotMessage(msg) {
    if (!msg || !msg.classList || !msg.classList.contains('bot')) return;
    if (msg.dataset.nxCommonMediaDone === '1') return;

    var bubble = msg.querySelector('.msg-bubble');
    if (!bubble) return;

    // 1) Les blocs « Lien » créés dans le Super Admin arrivent sous forme [LINK: ...].
    var markerUrls = extractLinkMarkers(bubble);

    // 2) Tout lien web écrit normalement par un personnage devient cliquable en _blank.
    linkifyTextNodes(bubble);

    // 3) Un bloc Lien reçoit une carte/bouton. S'il s'agit d'un PDF/Drive/Docs,
    //    le document est aussi affiché directement dans la conversation.
    markerUrls.forEach(function (u) { appendLinkCard(msg, u, true); });

    // 4) Même si le personnage donne un PDF/Google Doc hors d'un bloc Formation Vivante,
    //    on affiche l'aperçu automatiquement (sans doubler une carte déjà rendue).
    Array.prototype.forEach.call(bubble.querySelectorAll('a[href^="https://"]'), function (a) {
      var href = safeHttps(a.href);
      if (href && documentEmbedUrl(href)) appendLinkCard(msg, href, false);
    });

    msg.dataset.nxCommonMediaDone = '1';
  }

  function scan(root) {
    var scope = root && root.querySelectorAll ? root : document;
    if (root && root.matches && root.matches('.msg.bot')) processBotMessage(root);
    Array.prototype.forEach.call(scope.querySelectorAll('.msg.bot'), processBotMessage);
  }

  function start() {
    scan(document);
    var obs = new MutationObserver(function (mutations) {
      mutations.forEach(function (m) {
        Array.prototype.forEach.call(m.addedNodes || [], function (node) {
          if (node.nodeType === 1) scan(node);
        });
      });
    });
    obs.observe(document.body || document.documentElement, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start, { once: true });
  else start();
})();
