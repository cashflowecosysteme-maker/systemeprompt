/* ============================================================
   NyXia Core — Formation Vivante universelle
   Version 1.0.0
   ------------------------------------------------------------
   Un seul moteur pour TOUS les personnages.
   - Détecte les formations assignées à l'agent courant
   - Affiche Commencer / Continuer
   - Lance la commande naturelle vers le personnage
   - Reçoit les ouvertures depuis une bibliothèque de formations
   - Aucun nom / id de formation codé en dur
   - En cas d'échec API, le chat continue normalement
   ============================================================ */
(function (global) {
  'use strict';

  if (global.NyxiaFormation) return;

  var state = {
    listEndpoint: '/api/formation/list',
    getToken: function () { return global.sessionToken || ''; },
    getAgent: function () { return global._currentAgent || ''; },
    sendMessageText: function (text) {
      if (typeof global.sendMessageText === 'function') global.sendMessageText(text, false);
    },
    launchWrapId: 'formation-launch-wrap',
    launchButtonId: 'formation-launch',
    hasProgress: false,
    formations: []
  };

  function configure(options) {
    options = options || {};
    Object.keys(options).forEach(function (key) {
      if (options[key] != null) state[key] = options[key];
    });
    return api;
  }

  function token() {
    try { return typeof state.getToken === 'function' ? (state.getToken() || '') : ''; }
    catch (e) { return ''; }
  }

  function agent() {
    try { return typeof state.getAgent === 'function' ? (state.getAgent() || '') : ''; }
    catch (e) { return ''; }
  }

  function progressExists(formations) {
    return (formations || []).some(function (f) {
      return !!(f && f.progress && (
        f.progress.moduleId ||
        f.progress.moduleNumero != null ||
        f.progress.blocIndex != null ||
        f.progress.etape != null
      ));
    });
  }

  function setLaunchUi(visible, hasProgress) {
    var wrap = document.getElementById(state.launchWrapId);
    var btn = document.getElementById(state.launchButtonId);
    if (!wrap || !btn) return;

    if (!visible) {
      wrap.style.display = 'none';
      return;
    }

    btn.textContent = hasProgress ? '▸ Continuer ma formation' : '✨ Commencer ma formation';
    wrap.style.display = 'block';
  }

  function refreshLaunchButton() {
    var t = token();
    var a = agent();
    if (!t || !a) {
      setLaunchUi(false, false);
      return Promise.resolve([]);
    }

    return fetch(state.listEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: t, agent: a })
    })
    .then(function (r) {
      if (!r.ok) throw new Error('formation/list ' + r.status);
      return r.json();
    })
    .then(function (data) {
      state.formations = (data && data.formations) || [];
      state.hasProgress = progressExists(state.formations);
      setLaunchUi(state.formations.length > 0, state.hasProgress);
      return state.formations;
    })
    .catch(function () {
      // Dégradation douce : aucune fonction de chat n'est bloquée.
      setLaunchUi(false, false);
      return [];
    });
  }

  function send(text) {
    if (!text) return;
    try {
      if (typeof state.sendMessageText === 'function') state.sendMessageText(text, false);
    } catch (e) {}
  }

  function launch(mode, formation) {
    var continuing = mode === 'continue' || (!mode && state.hasProgress);
    var command = continuing ? 'continue ma formation' : 'commence ma formation';

    if (formation) {
      var label = String(formation.title || formation.titre || formation.formationId || formation.id || '').trim();
      if (label) command += ' ' + label;
    }

    send(command);
    setTimeout(refreshLaunchButton, 1200);
  }

  function launchFromButton() {
    launch(state.hasProgress ? 'continue' : 'start');
  }

  function normalizeOpenMessage(data) {
    data = data || {};
    var mode = String(data.mode || '').toLowerCase();
    var formationId = String(data.formationId || data.id || '').trim();
    var title = String(data.title || data.titre || '').trim();
    return { mode: mode, formationId: formationId, title: title };
  }

  function handleOpenMessage(event) {
    if (!event || !event.data || event.data.type !== 'nyxia_formation_open') return false;
    var d = normalizeOpenMessage(event.data);
    launch(d.mode === 'continue' ? 'continue' : 'start', d);
    return true;
  }

  function bindMessageListener() {
    if (global.__nyxiaFormationMessageBound) return;
    global.__nyxiaFormationMessageBound = true;
    global.addEventListener('message', handleOpenMessage);
  }

  function bindLaunchButton() {
    var btn = document.getElementById(state.launchButtonId);
    if (!btn || btn.__nyxiaFormationBound) return;
    btn.__nyxiaFormationBound = true;
    btn.addEventListener('click', launchFromButton);
  }

  function init(options) {
    if (options) configure(options);
    bindMessageListener();
    bindLaunchButton();
    return refreshLaunchButton();
  }

  var api = {
    version: '1.0.0',
    configure: configure,
    init: init,
    refreshLaunchButton: refreshLaunchButton,
    launch: launch,
    launchFromButton: launchFromButton,
    handleOpenMessage: handleOpenMessage,
    getState: function () {
      return {
        hasProgress: state.hasProgress,
        formations: state.formations.slice(),
        agent: agent()
      };
    }
  };

  global.NyxiaFormation = api;

  // Compatibilité avec les anciens chats : leurs onclick="foLaunch()"
  // et appels foRefreshLaunchButton() continuent de fonctionner.
  if (typeof global.foLaunch !== 'function') global.foLaunch = launchFromButton;
  if (typeof global.foRefreshLaunchButton !== 'function') global.foRefreshLaunchButton = refreshLaunchButton;
})(window);
