/* ============================================================
   NyXia Core — Outils de chat universels
   Version 1.0.0
   ------------------------------------------------------------
   Fonctions communes qui ne dépendent PAS de la personnalité :
   - Markdown léger + liens HTTPS en nouvel onglet
   - Nettoyage pour lecture vocale
   - TTS via /api/tts/nyxia
   - Micro / dictée vocale
   - Gestion universelle d'une pièce jointe
   - Boutons Copier / Réessayer / PDF / Écouter

   Le fichier reçoit ses callbacks depuis le chat : il ne connaît ni le
   personnage, ni son prompt, ni sa formation.
   ============================================================ */
(function (global) {
  'use strict';

  if (global.NyxiaChatTools) return;

  var cfg = {
    ttsEndpoint: '/api/tts/nyxia',
    getToken: function () { return global.sessionToken || ''; },
    getAgent: function () { return global._currentAgent || ''; },
    getAgentName: function () {
      var a = global._currentAgent || '';
      return global.ALPHA_INFO && global.ALPHA_INFO[a] ? global.ALPHA_INFO[a].name : 'NyXia';
    },
    sendMessageText: function (text, fromVoice) {
      if (typeof global.sendMessageText === 'function') global.sendMessageText(text, !!fromVoice);
    }
  };

  function configure(options) {
    options = options || {};
    Object.keys(options).forEach(function (key) {
      if (options[key] != null) cfg[key] = options[key];
    });
    return api;
  }

  function escHtml(value) {
    var d = document.createElement('div');
    d.textContent = String(value == null ? '' : value);
    return d.innerHTML;
  }

  function cleanMarkdown(value) {
    return String(value == null ? '' : value)
      .replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="nx-inline-link">$1</a>')
      .replace(/(^|[^"'>=])(https?:\/\/[^\s<]+)/g, function (_, pre, url) {
        var tail = '';
        var mt = url.match(/[)\].,;!?]+$/);
        if (mt) { tail = mt[0]; url = url.slice(0, url.length - tail.length); }
        return pre + '<a href="' + url + '" target="_blank" rel="noopener noreferrer" class="nx-inline-link">' + url + '</a>' + tail;
      })
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/^---+$/gm, '')
      .replace(/^#{1,6}\s+/gm, '')
      .replace(/^[-*]\s+/gm, '')
      .replace(/^>+\s*/gm, '')
      .replace(/`([^`]+)`/g, '$1')
      .trim();
  }

  function cleanForSpeech(value) {
    return String(value == null ? '' : value)
      .replace(/\*\*(.*?)\*\*/g, '$1')
      .replace(/\*(.*?)\*/g, '$1')
      .replace(/---+/g, '')
      .replace(/#{1,6}\s+/g, '')
      .replace(/^>+\s*/gm, '')
      .replace(/\[IMAGE[\s\S]*?\]/gi, '')
      .replace(/\[(?:PROMPT|PARCHEMIN)\][\s\S]*?\[\/(?:PROMPT|PARCHEMIN)\]/gi, '')
      .replace(/\[(?:PROMPT|PARCHEMIN)_IMAGE[\s\S]*?\]/gi, '')
      .replace(/\[(?:PHOTO|AUDIO|VIDEO|LINK|LIEN|PDF)\s*:[^\]]*\]/gi, '')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, '')
      .replace(/`([^`]+)`/g, '$1')
      .trim();
  }

  function token() {
    try { return typeof cfg.getToken === 'function' ? (cfg.getToken() || '') : ''; }
    catch (e) { return ''; }
  }

  function agent() {
    try { return typeof cfg.getAgent === 'function' ? (cfg.getAgent() || '') : ''; }
    catch (e) { return ''; }
  }

  function agentName() {
    try { return typeof cfg.getAgentName === 'function' ? (cfg.getAgentName() || 'NyXia') : 'NyXia'; }
    catch (e) { return 'NyXia'; }
  }

  function stopSpeakButton(btn) {
    if (!btn) return;
    btn._nxSpeaking = false;
    btn.textContent = '🔊 Écouter';
    btn.classList.remove('nx-speaking');
    if (btn._nxAudio) {
      try { btn._nxAudio.pause(); } catch (e) {}
      btn._nxAudio = null;
    }
  }

  function stopAllSpeech(except) {
    try { if (global.speechSynthesis) global.speechSynthesis.cancel(); } catch (e) {}
    document.querySelectorAll('[data-nx-speak-button="1"]').forEach(function (b) {
      if (b !== except && b._nxSpeaking) stopSpeakButton(b);
    });
  }

  function speak(btn, text) {
    if (!btn) return Promise.resolve(false);
    if (btn._nxSpeaking) {
      stopAllSpeech();
      stopSpeakButton(btn);
      return Promise.resolve(false);
    }

    var clean = cleanForSpeech(text);
    if (!clean) return Promise.resolve(false);

    stopAllSpeech(btn);
    btn.setAttribute('data-nx-speak-button', '1');
    btn._nxSpeaking = true;
    btn.textContent = '⏳ Un instant...';
    btn.classList.add('nx-speaking');

    return fetch(cfg.ttsEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: token(), text: clean, agent: agent() })
    })
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data || !data.success || !data.proxyUrl) throw new Error((data && data.error) || 'Voix indisponible');
      var audio = new Audio(data.proxyUrl);
      btn._nxAudio = audio;
      btn.textContent = '⏹ Arrêter';
      return audio.play().then(function () {
        audio.onended = audio.onerror = function () { stopSpeakButton(btn); };
        return true;
      });
    })
    .catch(function (err) {
      console.error('NyXia TTS:', err);
      btn.textContent = '⚠️ Voix indisponible';
      setTimeout(function () { stopSpeakButton(btn); }, 2200);
      return false;
    });
  }

  function exportPdf(text, title) {
    var w = global.open('', '_blank');
    if (!w) return false;
    var safeTitle = escHtml(title || (agentName() + ' — NyXia'));
    var body = '<h2 style="color:#7B5CFF">' + safeTitle + '</h2>' + escHtml(text).replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br>');
    w.document.write('<!DOCTYPE html><html><head><meta charset="UTF-8"><title>' + safeTitle + '</title><style>body{font-family:Georgia,serif;max-width:760px;margin:48px auto;line-height:1.85;padding:0 20px}h2{margin-bottom:24px}</style></head><body>' + body + '</body></html>');
    w.document.close();
    setTimeout(function () { try { w.print(); } catch (e) {} }, 300);
    return true;
  }

  function createMessageActions(options) {
    options = options || {};
    var row = document.createElement('div');
    row.className = 'nx-message-actions';

    if (options.speak !== false) {
      var spk = document.createElement('button');
      spk.type = 'button';
      spk.textContent = '🔊 Écouter';
      spk.addEventListener('click', function () { speak(spk, options.speakText || options.text || ''); });
      row.appendChild(spk);
    }

    if (options.copy !== false) {
      var copy = document.createElement('button');
      copy.type = 'button';
      copy.textContent = '📋 Copier';
      copy.addEventListener('click', function () {
        navigator.clipboard.writeText(options.copyText || options.text || '').then(function () {
          copy.textContent = '✓';
          setTimeout(function () { copy.textContent = '📋 Copier'; }, 1800);
        }).catch(function () { copy.textContent = '⚠️'; });
      });
      row.appendChild(copy);
    }

    if (typeof options.onRetry === 'function') {
      var retry = document.createElement('button');
      retry.type = 'button';
      retry.textContent = '↺ Réessayer';
      retry.addEventListener('click', options.onRetry);
      row.appendChild(retry);
    }

    if (options.pdf !== false) {
      var pdf = document.createElement('button');
      pdf.type = 'button';
      pdf.textContent = '⬇ PDF';
      pdf.addEventListener('click', function () { exportPdf(options.pdfText || options.text || '', options.pdfTitle); });
      row.appendChild(pdf);
    }

    return row;
  }

  var mic = { recognition: null, listening: false, finalText: '', timer: null };

  function resetMicButton(btn) {
    mic.listening = false;
    if (!btn) return;
    btn.textContent = '🎤';
    btn.classList.remove('nx-mic-listening');
    btn.title = 'Parler';
  }

  function bindMic(options) {
    options = options || {};
    var btn = typeof options.button === 'string' ? document.getElementById(options.button) : options.button;
    var input = typeof options.input === 'string' ? document.getElementById(options.input) : options.input;
    var silenceMs = options.silenceMs || 3200;
    if (!btn || !input || btn.__nyxiaMicBound) return;
    btn.__nyxiaMicBound = true;

    btn.addEventListener('click', function () {
      var SR = global.SpeechRecognition || global.webkitSpeechRecognition;
      if (!SR) {
        alert("La reconnaissance vocale n'est pas disponible sur ce navigateur. Essaie avec Chrome ou Edge.");
        return;
      }

      if (mic.listening) {
        if (mic.timer) { clearTimeout(mic.timer); mic.timer = null; }
        try { if (mic.recognition) mic.recognition.stop(); } catch (e) {}
        var txt = (input.value || mic.finalText || '').trim();
        resetMicButton(btn);
        if (txt) {
          input.value = '';
          if (typeof options.onSend === 'function') options.onSend(txt, true);
          else cfg.sendMessageText(txt, true);
        }
        return;
      }

      mic.finalText = '';
      mic.recognition = new SR();
      mic.recognition.lang = options.lang || 'fr-FR';
      mic.recognition.continuous = true;
      mic.recognition.interimResults = true;
      mic.recognition.maxAlternatives = 1;

      mic.recognition.onstart = function () {
        mic.listening = true;
        btn.textContent = '⏹';
        btn.classList.add('nx-mic-listening');
        btn.title = 'Cliquer pour terminer et envoyer';
      };

      mic.recognition.onresult = function (event) {
        var interim = '';
        for (var i = event.resultIndex; i < event.results.length; i++) {
          var piece = event.results[i][0].transcript;
          if (event.results[i].isFinal) mic.finalText = (mic.finalText + ' ' + piece).replace(/\s+/g, ' ').trim();
          else interim += piece;
        }
        input.value = (mic.finalText + (interim ? ' ' + interim : '')).replace(/\s+/g, ' ').trim();
        input.style.height = 'auto';
        input.style.height = Math.min(input.scrollHeight, 120) + 'px';

        if (mic.timer) clearTimeout(mic.timer);
        mic.timer = setTimeout(function () {
          if (!mic.listening) return;
          var finalText = (mic.finalText || input.value || '').trim();
          try { if (mic.recognition) mic.recognition.stop(); } catch (e) {}
          resetMicButton(btn);
          if (finalText) {
            input.value = '';
            if (typeof options.onSend === 'function') options.onSend(finalText, true);
            else cfg.sendMessageText(finalText, true);
          }
        }, silenceMs);
      };

      mic.recognition.onerror = function () {
        if (mic.timer) { clearTimeout(mic.timer); mic.timer = null; }
        resetMicButton(btn);
      };
      mic.recognition.onend = function () {
        if (!mic.timer) resetMicButton(btn);
      };

      try { mic.recognition.start(); }
      catch (e) { resetMicButton(btn); alert('Impossible de démarrer le micro. Réessaie.'); }
    });
  }

  function bindAttachment(options) {
    options = options || {};
    var input = typeof options.input === 'string' ? document.getElementById(options.input) : options.input;
    var bar = typeof options.bar === 'string' ? document.getElementById(options.bar) : options.bar;
    var nameEl = typeof options.name === 'string' ? document.getElementById(options.name) : options.name;
    var clearBtn = typeof options.clearButton === 'string' ? document.getElementById(options.clearButton) : options.clearButton;
    var sendBtn = typeof options.sendButton === 'string' ? document.getElementById(options.sendButton) : options.sendButton;
    if (!input || input.__nyxiaAttachmentBound) return;
    input.__nyxiaAttachmentBound = true;

    function emit(value) {
      if (typeof options.onChange === 'function') options.onChange(value);
    }

    input.addEventListener('change', function () {
      var file = input.files && input.files[0];
      if (!file) return;
      var size = file.size > 1048576 ? (file.size / 1048576).toFixed(1) + 'MB' : Math.round(file.size / 1024) + 'KB';
      var state = { name: file.name, type: file.type, data: null };
      if (bar) bar.style.display = 'flex';
      if (nameEl) nameEl.innerHTML = '<strong>' + escHtml(file.name) + '</strong> (' + size + ') — ⏳ Chargement...';
      if (sendBtn) sendBtn.disabled = true;
      emit(state);

      var reader = new FileReader();
      reader.onload = function (e) {
        state.data = String(e.target.result || '').split(',')[1] || '';
        if (nameEl) nameEl.innerHTML = '<strong>' + escHtml(file.name) + '</strong> (' + size + ') — ✅ Prêt';
        if (sendBtn) sendBtn.disabled = false;
        emit(state);
      };
      reader.onerror = function () {
        if (nameEl) nameEl.textContent = '❌ Erreur';
        if (sendBtn) sendBtn.disabled = false;
        emit(null);
      };
      reader.readAsDataURL(file);
    });

    if (clearBtn && !clearBtn.__nyxiaAttachmentBound) {
      clearBtn.__nyxiaAttachmentBound = true;
      clearBtn.addEventListener('click', function () {
        input.value = '';
        if (bar) bar.style.display = 'none';
        emit(null);
      });
    }
  }

  var api = {
    version: '1.0.0',
    configure: configure,
    escHtml: escHtml,
    cleanMarkdown: cleanMarkdown,
    cleanForSpeech: cleanForSpeech,
    speak: speak,
    stopAllSpeech: stopAllSpeech,
    exportPdf: exportPdf,
    createMessageActions: createMessageActions,
    bindMic: bindMic,
    bindAttachment: bindAttachment
  };

  global.NyxiaChatTools = api;
})(window);
