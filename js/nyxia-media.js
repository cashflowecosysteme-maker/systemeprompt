/* ============================================================
   NyXia Core — Médias universels
   Version 1.0.0
   ------------------------------------------------------------
   Capacités communes à TOUS les personnages / portails :
   - Vidéo : MP4/WebM/MOV, YouTube, Vimeo, Cloudflare, Google Drive
   - Audio : MP3/audio direct + Google Drive
   - Image
   - PDF / Google Drive / Google Docs / Sheets / Slides
   - Liens externes toujours ouverts dans un nouvel onglet
   - Boutons ressources via data-audio / data-video / data-image /
     data-pdf / data-link / data-intro

   AUCUN nom de personnage, AUCUN id de formation, AUCUN contenu
   pédagogique n'est codé ici.
   ============================================================ */
(function (global) {
  'use strict';

  if (global.NyxiaMedia) return;

  function str(v) { return String(v == null ? '' : v); }

  function safeHttps(rawUrl) {
    try {
      var u = new URL(str(rawUrl).trim(), global.location && global.location.href ? global.location.href : undefined);
      return u.protocol === 'https:' ? u.href : '';
    } catch (e) { return ''; }
  }

  function hostOf(rawUrl) {
    try { return new URL(rawUrl).hostname.toLowerCase().replace(/^www\./, ''); }
    catch (e) { return ''; }
  }

  function googleDriveId(rawUrl) {
    try {
      var u = new URL(str(rawUrl).trim());
      if (u.hostname.toLowerCase().replace(/^www\./, '') !== 'drive.google.com') return '';
      var m = u.pathname.match(/\/file\/d\/([A-Za-z0-9_-]+)/);
      return m ? m[1] : (u.searchParams.get('id') || '');
    } catch (e) { return ''; }
  }

  function youtubeId(rawUrl) {
    try {
      var u = new URL(str(rawUrl).trim());
      var host = u.hostname.toLowerCase().replace(/^www\./, '');
      if (host === 'youtu.be') return (u.pathname.split('/').filter(Boolean)[0] || '');
      if (host === 'youtube.com' || host === 'youtube-nocookie.com' || host === 'm.youtube.com') {
        var id = u.searchParams.get('v') || '';
        if (!id) {
          var parts = u.pathname.split('/').filter(Boolean);
          if (parts[0] === 'embed' || parts[0] === 'shorts' || parts[0] === 'live') id = parts[1] || '';
        }
        return id;
      }
    } catch (e) {}
    return '';
  }

  function vimeoId(rawUrl) {
    try {
      var u = new URL(str(rawUrl).trim());
      var host = u.hostname.toLowerCase().replace(/^www\./, '');
      if (host !== 'vimeo.com' && host !== 'player.vimeo.com') return '';
      var m = u.pathname.match(/(?:video\/)?(\d+)/);
      return m ? m[1] : '';
    } catch (e) { return ''; }
  }

  function videoEmbedUrl(rawUrl) {
    var url = safeHttps(rawUrl);
    if (!url) return '';

    var yt = youtubeId(url);
    if (yt && /^[A-Za-z0-9_-]{6,}$/.test(yt)) {
      return 'https://www.youtube-nocookie.com/embed/' + yt;
    }

    var vm = vimeoId(url);
    if (vm) return 'https://player.vimeo.com/video/' + vm;

    try {
      var u = new URL(url);
      var host = u.hostname.toLowerCase().replace(/^www\./, '');
      if (host === 'iframe.videodelivery.net') return u.href;
      if (host === 'watch.cloudflarestream.com') {
        var streamId = u.pathname.split('/').filter(Boolean)[0] || '';
        if (/^[A-Za-z0-9_-]+$/.test(streamId)) return 'https://iframe.videodelivery.net/' + streamId;
      }
    } catch (e) {}

    var driveId = googleDriveId(url);
    if (driveId) return 'https://drive.google.com/file/d/' + driveId + '/preview';

    return '';
  }

  function documentEmbedUrl(rawUrl) {
    var url = safeHttps(rawUrl);
    if (!url) return '';

    try {
      var u = new URL(url);
      var host = u.hostname.toLowerCase().replace(/^www\./, '');
      var path = u.pathname || '';

      if (/\.pdf$/i.test(path)) return u.href;

      var driveId = googleDriveId(url);
      if (driveId) return 'https://drive.google.com/file/d/' + driveId + '/preview';

      if (host === 'docs.google.com') {
        var m = path.match(/^\/(document|presentation|spreadsheets)\/d\/([A-Za-z0-9_-]+)/);
        if (m) return 'https://docs.google.com/' + m[1] + '/d/' + m[2] + '/preview';
      }
    } catch (e) {}

    return '';
  }

  function isDirectVideo(rawUrl) {
    try { return /\.(mp4|webm|ogg|mov|m4v)(\?|#|$)/i.test(new URL(rawUrl).href); }
    catch (e) { return false; }
  }

  function el(tag, className) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    return node;
  }

  function externalLink(url, label, className) {
    var a = el('a', className || 'nx-media-link');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = label || '🔗 Ouvrir le lien';
    return a;
  }

  function appendVideo(wrapper, rawUrl, meta) {
    if (!wrapper) return null;
    var url = safeHttps(rawUrl);
    if (!url) return null;
    meta = meta || {};

    var card = el('div', 'nx-media-card nx-media-video');
    var label = el('div', 'nx-media-label');
    label.textContent = meta.title || '🎬 Vidéo';
    card.appendChild(label);

    var frame = el('div', 'nx-media-video-frame');
    var embed = videoEmbedUrl(url);

    if (embed) {
      var iframe = el('iframe');
      iframe.src = embed;
      iframe.title = meta.iframeTitle || 'Vidéo NyXia';
      iframe.loading = 'lazy';
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
      iframe.allowFullscreen = true;
      iframe.referrerPolicy = 'strict-origin-when-cross-origin';
      frame.appendChild(iframe);
    } else if (isDirectVideo(url)) {
      var video = el('video');
      video.src = url;
      video.controls = true;
      video.playsInline = true;
      video.preload = 'metadata';
      frame.appendChild(video);
    } else {
      frame.className += ' nx-media-video-fallback';
      frame.appendChild(externalLink(url, '▶ Ouvrir la vidéo'));
    }

    card.appendChild(frame);
    wrapper.appendChild(card);
    return card;
  }

  function appendAudio(wrapper, rawUrl, meta) {
    if (!wrapper) return null;
    var url = safeHttps(rawUrl);
    if (!url) return null;
    meta = meta || {};

    var driveId = googleDriveId(url);
    if (driveId) {
      var driveCard = el('div', 'nx-media-card nx-media-audio nx-media-drive-audio');
      var driveLabel = el('div', 'nx-media-label');
      driveLabel.textContent = meta.title || '🎧 Audio';
      driveCard.appendChild(driveLabel);
      var iframe = el('iframe', 'nx-media-drive-audio-frame');
      iframe.src = 'https://drive.google.com/file/d/' + driveId + '/preview';
      iframe.allow = 'autoplay';
      iframe.loading = 'lazy';
      iframe.title = meta.iframeTitle || 'Audio NyXia';
      driveCard.appendChild(iframe);
      wrapper.appendChild(driveCard);
      return driveCard;
    }

    var card = el('div', 'nx-media-card nx-media-audio');
    var label = el('div', 'nx-media-label');
    label.textContent = meta.title || '🎧 Audio';
    card.appendChild(label);

    var audio = el('audio', 'nx-media-audio-player');
    audio.src = url;
    audio.controls = true;
    audio.preload = 'metadata';
    card.appendChild(audio);

    wrapper.appendChild(card);
    return card;
  }

  function appendImage(wrapper, rawUrl, meta) {
    if (!wrapper) return null;
    var url = safeHttps(rawUrl);
    if (!url) return null;
    meta = meta || {};

    var card = el('div', 'nx-media-card nx-media-image');
    var img = el('img');
    img.src = url;
    img.alt = meta.alt || 'Image NyXia';
    img.loading = 'lazy';
    img.onerror = function () { card.style.display = 'none'; };
    card.appendChild(img);
    wrapper.appendChild(card);
    return card;
  }

  function appendDocument(wrapper, rawUrl, meta) {
    if (!wrapper) return null;
    var url = safeHttps(rawUrl);
    if (!url) return null;
    meta = meta || {};

    var card = el('div', 'nx-media-card nx-media-document');
    var label = el('div', 'nx-media-label');
    label.textContent = meta.title || '📄 Document';
    card.appendChild(label);

    var embed = documentEmbedUrl(url);
    if (embed) {
      var iframe = el('iframe', 'nx-media-document-frame');
      iframe.src = embed;
      iframe.loading = 'lazy';
      iframe.title = meta.iframeTitle || 'Document NyXia';
      iframe.allow = 'autoplay';
      card.appendChild(iframe);
    }

    card.appendChild(externalLink(url, meta.buttonLabel || '↗ Ouvrir dans un nouvel onglet', 'nx-media-link nx-media-document-open'));
    wrapper.appendChild(card);
    return card;
  }

  function appendLink(wrapper, rawUrl, meta) {
    if (!wrapper) return null;
    var url = safeHttps(rawUrl);
    if (!url) return null;
    meta = meta || {};

    var embed = documentEmbedUrl(url);
    if (embed && meta.preview !== false) {
      return appendDocument(wrapper, url, {
        title: meta.title || '📄 Document',
        buttonLabel: meta.buttonLabel || '↗ Ouvrir dans un nouvel onglet'
      });
    }

    var link = externalLink(url, meta.label || meta.title || '🔗 Ouvrir le lien');
    wrapper.appendChild(link);
    return link;
  }

  function parseLinkPayload(payload) {
    var raw = str(payload).trim();
    var parts = raw.split('|');
    return {
      url: (parts.shift() || '').trim(),
      label: parts.join('|').trim() || ''
    };
  }

  function extractMarkers(rawText) {
    var text = str(rawText);
    var items = [];

    function collect(type, regex, parser) {
      text = text.replace(regex, function (_, payload) {
        var parsed = parser ? parser(payload) : { url: str(payload).trim() };
        var url = safeHttps(parsed.url);
        if (url) {
          parsed.type = type;
          parsed.url = url;
          items.push(parsed);
        }
        return '';
      });
    }

    collect('video', /\[VIDEO\s*:\s*([^\]\r\n]+)\]/gi);
    collect('audio', /\[AUDIO\s*:\s*([^\]\r\n]+)\]/gi);
    collect('image', /\[(?:PHOTO|IMAGE_URL)\s*:\s*([^\]\r\n]+)\]/gi);
    collect('pdf', /\[PDF\s*:\s*([^\]\r\n]+)\]/gi);
    collect('link', /\[(?:LINK|LIEN)\s*:\s*([^\]\r\n]+)\]/gi, parseLinkPayload);

    return {
      text: text.replace(/\n{3,}/g, '\n\n').trim(),
      items: items
    };
  }

  function renderItems(wrapper, items) {
    if (!wrapper || !items || !items.length) return;
    items.forEach(function (item) {
      if (!item || !item.url) return;
      if (item.type === 'video') appendVideo(wrapper, item.url, { title: item.title || '🎬 Vidéo' });
      else if (item.type === 'audio') appendAudio(wrapper, item.url, { title: item.title || '🎧 Audio' });
      else if (item.type === 'image') appendImage(wrapper, item.url, { alt: item.alt || 'Image NyXia' });
      else if (item.type === 'pdf') appendDocument(wrapper, item.url, { title: item.title || '📄 PDF' });
      else if (item.type === 'link') appendLink(wrapper, item.url, { label: item.label || '🔗 Ouvrir le lien', title: item.title || '' });
    });
  }

  function extractAndRender(wrapper, rawText) {
    var parsed = extractMarkers(rawText);
    renderItems(wrapper, parsed.items);
    return parsed;
  }

  function buttonPayload(button) {
    if (!button || !button.getAttribute) return null;

    var intro = button.getAttribute('data-intro') || '';
    var video = button.getAttribute('data-video') || '';
    var audio = button.getAttribute('data-audio') || '';
    var image = button.getAttribute('data-image') || '';
    var pdf = button.getAttribute('data-pdf') || '';
    var link = button.getAttribute('data-link') || '';
    var linkLabel = button.getAttribute('data-link-label') || button.getAttribute('data-label') || '';

    if (!video && !audio && !image && !pdf && !link) return null;

    var body = intro.trim();
    function add(marker, value) {
      value = str(value).trim();
      if (!value) return;
      body += (body ? '\n\n' : '') + '[' + marker + ': ' + value + ']';
    }

    add('VIDEO', video);
    add('AUDIO', audio);
    add('PHOTO', image);
    add('PDF', pdf);
    if (link) add('LINK', link + (linkLabel ? '|' + linkLabel : ''));

    return { body: body, intro: intro, video: video, audio: audio, image: image, pdf: pdf, link: link };
  }

  function handleSuggestionButton(button, options) {
    options = options || {};
    var payload = buttonPayload(button);
    if (!payload) return false;

    if (typeof options.addBotMessage === 'function') {
      options.addBotMessage(payload.body);
      return true;
    }

    if (typeof global.addBotMessage === 'function') {
      global.addBotMessage(payload.body);
      return true;
    }

    return false;
  }

  function linkifyPlainUrls(root) {
    if (!root || !document.createTreeWalker) return;
    var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) {
        if (!node.nodeValue || node.nodeValue.indexOf('http') === -1) return NodeFilter.FILTER_REJECT;
        var p = node.parentNode;
        if (p && /^(A|SCRIPT|STYLE|TEXTAREA)$/i.test(p.nodeName)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var nodes = [], n;
    while ((n = walker.nextNode())) nodes.push(n);

    nodes.forEach(function (node) {
      var text = node.nodeValue;
      var re = /(https:\/\/[^\s<>]+)/g;
      if (!re.test(text)) return;
      re.lastIndex = 0;

      var frag = document.createDocumentFragment();
      var last = 0, m;
      while ((m = re.exec(text))) {
        if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
        var raw = m[1];
        var tail = '';
        var mt = raw.match(/[)\].,;!?]+$/);
        if (mt) { tail = mt[0]; raw = raw.slice(0, -tail.length); }
        var url = safeHttps(raw);
        if (url) frag.appendChild(externalLink(url, raw, 'nx-inline-link'));
        else frag.appendChild(document.createTextNode(raw));
        if (tail) frag.appendChild(document.createTextNode(tail));
        last = re.lastIndex;
      }
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      node.parentNode.replaceChild(frag, node);
    });
  }

  global.NyxiaMedia = {
    version: '1.0.0',
    safeHttps: safeHttps,
    googleDriveId: googleDriveId,
    youtubeId: youtubeId,
    vimeoId: vimeoId,
    videoEmbedUrl: videoEmbedUrl,
    documentEmbedUrl: documentEmbedUrl,
    appendVideo: appendVideo,
    appendAudio: appendAudio,
    appendImage: appendImage,
    appendDocument: appendDocument,
    appendLink: appendLink,
    extractMarkers: extractMarkers,
    renderItems: renderItems,
    extractAndRender: extractAndRender,
    buttonPayload: buttonPayload,
    handleSuggestionButton: handleSuggestionButton,
    linkifyPlainUrls: linkifyPlainUrls
  };
})(window);
