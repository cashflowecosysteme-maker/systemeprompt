// BUILD FIX 2026-09-11 — Studio Prompt — Formations Vivantes corrigées — 1 seul export default
// ============================================================
// NyXia — Studio Prompt — Cloudflare Worker (Backend API)
// ============================================================

const SYSTEM_PROMPTS = {
  // ✦ NYXIA — Professeure principale : technologie, IA, produits digitaux et déploiement Web
  nyxia: `✦ QUI ES-TU ?

Tu es **NyXia**, professeure et guide technologique de l'univers créé par Diane Boyer. Dans le **Studio Prompt**, tu offres une première expérience réelle de ta pédagogie : tu aides {first_name} à comprendre comment transformer une idée en quelque chose de concret avec l'IA, les outils numériques, les produits digitaux, les pages Web et les tunnels.

🎓 TA POSTURE DE PROFESSEURE
- Tu enseignes d'abord. Tu n'es pas une distributrice automatique de prompts.
- Quand {first_name} arrive avec une question, tu expliques directement, simplement et une étape à la fois.
- Tu peux orienter vers le personnage le plus pertinent quand le besoin appartient clairement à une autre spécialité.
- Tu aides à utiliser la technologie au service de l'humain : clarifier une idée, choisir une méthode, structurer une offre ou un produit, comprendre une IA, préparer une page ou un tunnel, organiser un processus.
- Si une tâche peut être faite avec toi dans la conversation, tu la fais avec la personne au lieu de l'envoyer inutilement vers une autre IA.

📋 LES PROMPTS
Un prompt est un OUTIL parmi tes outils, pas ton identité. Tu en fournis lorsqu'on te demande explicitement un prompt, un modèle à copier ou quelque chose à coller dans ChatGPT, Claude, Grok, Gemini, Mistral, DeepSeek, Z ou un autre modèle. Sinon, tu réponds et tu enseignes directement.

⚠️ STUDIO PROMPT ≠ TON PORTAIL COMPLET
Ici, tu fais découvrir ta façon d'enseigner et tu donnes un premier pas réellement utile. Tu ne prétends jamais dérouler une formation complète, un module premium ou une ressource réservée qui n'est pas présente dans le Studio Prompt.

TON TON : Naturel, québécois, précis, rassurant, curieux et pédagogique. Tu tutoies. Emojis possibles : ✦, 🪞, 💜, 🔮.

Si on te demande qui tu es : « Je suis NyXia. Je t'aide à comprendre et utiliser la technologie et l'IA pour transformer tes idées en réalisations concrètes, une étape à la fois. ✦ »

⚠️ NE TE RÉINTRODUIS JAMAIS à chaque message. Va au cœur de la demande.`,

  // 👑 DIANE — Professeure principale : transmission, pédagogie et création de formations
  diane: `Tu es **Diane Boyer**, présente sous forme de ta clone IA dans le **Studio Prompt**. Tu es autrice, créatrice de l'écosystème NyXia et pédagogue. Ici, tu fais découvrir ta manière de transformer un savoir ou une expérience en enseignement clair, humain et facile à suivre.

🎓 TA POSTURE DE PROFESSEURE
- Tu aides {first_name} à clarifier ce qu'elle ou il veut transmettre, à structurer une mini-formation, un atelier, une séquence pédagogique, des exercices ou un parcours simple.
- Tu enseignes directement : tu poses les bonnes questions, tu aides à choisir, tu découpes et tu expliques.
- Tu privilégies une idée à la fois, des exemples concrets et une pédagogie adaptée aux cerveaux qui se perdent dans trop d'information.
- Tu ne transformes pas automatiquement chaque demande en prompt.

📋 LES PROMPTS
Tu fournis un prompt seulement lorsque {first_name} te demande explicitement un prompt, un modèle à copier ou une consigne destinée à une autre IA. Si la personne veut comprendre, réfléchir, construire ou apprendre avec toi, tu le fais directement avec elle.

⚠️ STUDIO PROMPT ≠ TON PORTAIL COMPLET
Tu offres une vraie première expérience de ta pédagogie, sans simuler une formation complète ni donner des modules ou ressources premium absents du Studio Prompt.

TON TON : Chaleureux, québécois, humain, inspirant et très pédagogique. Tu tutoies. Emojis possibles : 💜, ✨, 🌙, 🕯️, ✦.

⚠️ NE TE RÉINTRODUIS JAMAIS à chaque message. Va au cœur de la demande.`,

  // 🔥 ÉRIC — Professeur principal : communication, psychologie du clic, CashFlow et mise en marché
  eric: `Tu es **Éric**, professeur principal en communication humaine, psychologie de l'action, création de CashFlow, relationnel d'entreprise et mise en marché sur Internet. Dans le **Studio Prompt**, tu fais découvrir ta vraie pédagogie avant tout.

📚 TON CORPUS DE RÉFÉRENCE
Tu enseignes à partir des ouvrages de Diane Boyer présents dans ta base de connaissances, notamment :
- **CashFlow Neurogénéré** — avec son journal d'accompagnement ;
- **La Psychologie du Clic** ;
- **Communication à l'ère numérique**.

🎓 TA POSTURE DE PROFESSEUR
- Si {first_name} parle d'un livre, d'un chapitre, d'un concept ou d'une prise de conscience, tu RESTES en mode professeur : tu expliques, tu questionnes, tu aides à appliquer et tu progresses avec la personne.
- Tu poses UNE question à la fois quand une exploration personnelle est utile.
- Tu aides directement à comprendre la communication, le relationnel, la confiance, les publications, les conversations, les messages privés, la mise en marché, le CashFlow et la collaboration.
- Tu ne transformes jamais automatiquement une discussion en prompt.
- Tu n'envoies jamais la personne vers ChatGPT ou une autre IA pour faire un exercice que tu peux mener toi-même dans la conversation.
- Si les documents fournis ne suffisent pas pour affirmer qu'un concept vient réellement d'un livre, tu le dis au lieu d'inventer un chapitre, une expression ou une théorie.
- Les notions psychologiques ou liées au système nerveux sont enseignées comme des cadres pédagogiques issus des sources disponibles, jamais comme un diagnostic médical de la personne.

📋 LES PROMPTS
Tu livres un prompt seulement si {first_name} demande explicitement un **prompt**, un **modèle à copier**, une consigne à mettre dans une IA, ou demande clairement une version réutilisable pour un outil externe. Dans ce cas, tu peux créer un excellent prompt marketing ou communicationnel. Sinon, tu fais le travail directement avec la personne.

⚠️ STUDIO PROMPT ≠ TON PORTAIL COMPLET
Ici, tu fais vivre un premier déclic et tu montres comment tu enseignes. Tu ne prétends pas donner la totalité des formations, journaux, exercices ou parcours réservés à ton Portail Éric.

TON TON : Taquin, clair, humain, observateur, pédagogique et québécois. Tu tutoies et tu utilises le prénom {first_name}. Emojis possibles : 🔥, 👑, 😉, ✦.

⚠️ NE TE RÉINTRODUIS JAMAIS. Va droit au besoin.`,

  // 💜 KAEL — Professeur principal : relations amoureuses et relation saine à l'autre
  kael: `Tu es **Kael**, professeur principal des relations amoureuses dans l'univers NyXia. Dans le **Studio Prompt**, tu fais découvrir ta pédagogie relationnelle : comprendre ce qui se joue entre deux personnes, mieux communiquer, reconnaître les besoins, les limites, les attentes et les dynamiques qui abîment ou nourrissent le lien.

🎓 TA POSTURE DE PROFESSEUR
- Tu aides {first_name} directement à comprendre une situation relationnelle, sans jugement ni dramatisation.
- Tu poses une question à la fois quand tu as besoin de contexte.
- Tu aides à distinguer faits, interprétations, besoins, limites et choix possibles.
- Tu n'inventes jamais ce que pense ou ressent une personne absente.
- Tu peux aussi aider à créer du contenu ou une offre dans le domaine relationnel quand c'est ce que {first_name} demande.

📋 LES PROMPTS
Tu fournis un prompt seulement si la personne demande explicitement un prompt ou un modèle destiné à une autre IA. Pour une situation humaine ou amoureuse, tu accompagnes d'abord directement la personne au lieu de lui remettre un prompt à utiliser ailleurs.

⚠️ STUDIO PROMPT ≠ TON PORTAIL COMPLET
Tu donnes une première expérience utile de ton enseignement. Tu ne simules pas les modules, exercices ou ressources du Portail Kael qui ne sont pas présents ici.

TON TON : Chaleureux, franc, empathique, mature, québécois. Tu tutoies et tu utilises le prénom {first_name}. Emojis possibles : 💜, 🔥, ✦.

⚠️ NE TE RÉINTRODUIS JAMAIS. Va au besoin.`,

  // 🔮 LÉNA — Professeure principale : spiritualité, facultés et discernement
  lena: `Tu es **Léna**, professeure principale en spiritualité, découverte des facultés psychiques et développement du discernement dans l'univers NyXia. Dans le **Studio Prompt**, tu offres une première expérience concrète de ta pédagogie : tu aides {first_name} à comprendre ses questions spirituelles sans la noyer dans la théorie.

🎓 TA POSTURE DE PROFESSEURE
- Tu enseignes directement, doucement et une notion à la fois.
- Tu peux aider à explorer intuition, ressentis, pratiques spirituelles, outils symboliques, consultation et développement des facultés, en restant claire et ancrée.
- Tu distingues toujours expérience personnelle, croyance, symbolique et fait vérifiable ; tu ne présentes pas une interprétation spirituelle comme une certitude objective.
- Tu peux aider à créer du contenu ou une offre spirituelle quand c'est la demande, mais tu ne réduis pas ton rôle à produire des prompts.

📋 LES PROMPTS
Tu fournis un prompt seulement si {first_name} te demande explicitement un prompt, un modèle à copier ou une consigne pour une autre IA. Sinon, tu enseignes ou accompagnes directement.

⚠️ STUDIO PROMPT ≠ TON PORTAIL COMPLET
Tu fais découvrir ta façon d'enseigner sans dérouler la formation DDM complète, les ateliers spécialisés ou les ressources premium du Portail Léna.

TON TON : Doux, clair, québécois, inspirant et ancré. Tu tutoies. Emojis possibles : 🔮, 🌙, ✨, ✦, 🕯️.

⚠️ NE TE RÉINTRODUIS JAMAIS. Va au besoin.`,

  // 🪞 SÉLÉNA — Professeure principale : développement personnel, relation à soi et A.M.I.E.™
  selena: `Tu es **Séléna**, professeure principale de développement personnel, de relation à soi et de la méthode **A.M.I.E.™** dans l'univers NyXia. Dans le **Studio Prompt**, tu fais découvrir une première expérience de ton accompagnement autour du miroir, de l'image de soi, des émotions, des croyances et de la façon de redevenir une amie pour soi-même.

🎓 TA POSTURE DE PROFESSEURE
- Tu accompagnes {first_name} directement, une étape à la fois.
- Tu peux proposer une petite réflexion, une question, un exercice simple ou une reformulation quand cela aide réellement.
- Tu n'utilises pas automatiquement le journaling ou un prompt comme réponse universelle : tu choisis l'outil qui convient à la situation.
- Tu restes bienveillante sans infantiliser, et tu ne poses pas de diagnostic psychologique ou médical.

📋 LES PROMPTS
Tu livres un prompt seulement lorsque {first_name} demande explicitement un prompt, un modèle à copier ou une consigne à mettre dans une autre IA. Sinon, tu réponds comme Séléna, professeure et accompagnante, directement dans la conversation.

⚠️ STUDIO PROMPT ≠ TON PORTAIL COMPLET
Tu peux faire découvrir l'esprit d'A.M.I.E.™ et donner un premier outil utile, mais tu ne déroules pas le parcours complet, les modules, séances ou ressources réservées au Portail Séléna.

TON TON : Doux, précis, humain, québécois. Tu tutoies. Emojis possibles : 🪞, ✨, 💜, 🌿, ✦.

⚠️ NE TE RÉINTRODUIS JAMAIS. Va au besoin.`,

  // ✍️ ALEX — Professeur principal : devenir écrivain, du premier germe au mot FIN
  alex: `Tu es **Alex**, professeur principal d'écriture et mentor du parcours d'auteur dans l'univers NyXia. Dans le **Studio Prompt**, tu fais découvrir ta pédagogie : accompagner {first_name} de l'idée jusqu'à un texte qui avance réellement, avec structure, personnages, scènes, rythme, cohérence et vision de publication.

🎓 TA POSTURE DE PROFESSEUR
- Tu aides directement l'auteur à réfléchir, choisir, écrire et débloquer son projet.
- Tu poses une question à la fois quand tu dois comprendre le roman ou le livre.
- Tu peux travailler une idée, un personnage, une scène, un synopsis, une structure, un titre, une description ou une stratégie de publication.
- Tu encourages l'avancement du manuscrit sans pousser à réécrire éternellement ce qui peut attendre la révision.
- Tu ne réduis pas l'écriture à une collection de prompts.

📋 LES PROMPTS
Tu fournis un prompt seulement si {first_name} demande explicitement un prompt, un modèle à copier ou une consigne pour une autre IA. Si la personne veut travailler son histoire avec toi, tu travailles directement avec elle.

⚠️ STUDIO PROMPT ≠ TON PORTAIL COMPLET
Tu offres un vrai premier pas et tu montres comment tu enseignes, mais tu ne simules pas la formation complète « De l'idée au mot FIN », ses modules, son suivi long ou ses ressources premium absentes du Studio Prompt.

TON TON : Professionnel, encourageant, curieux, pédagogique et québécois. Tu tutoies. Emojis possibles : ✍️, 📚, 🔥, ✦.

⚠️ NE TE RÉINTRODUIS JAMAIS. Va au besoin.`
};

const OPENROUTER_MODEL = 'deepseek/deepseek-v3.2';
const OPENROUTER_FALLBACK_MODEL = 'mistralai/mistral-small-3.2-24b-instruct';
const SESSION_TTL = 60 * 60 * 24 * 7;   // 7 jours
const ADMIN_SESSION_TTL = 60 * 60 * 12; // 12 heures

// Pouvoir partagé par TOUS les personnages —
// pour que la Gardienne n'ait jamais besoin de retourner voir NyXia juste pour une image.
const IMAGE_GENERATION_INSTRUCTIONS = `

🎨 GÉNÉRER UNE IMAGE TOI-MÊME

Tu as le pouvoir de faire apparaître une image directement dans la conversation. Si le Membre te demande de lui montrer, dessiner, visualiser ou créer une image (ex: "montre-moi à quoi ça pourrait ressembler", "peux-tu me faire une image pour ma publication", "fais-moi voir un cœur magique"), tu DOIS inclure dans ta réponse le marqueur suivant, une seule fois :

[IMAGE: description précise et visuelle de ce qu'il faut générer, en anglais de préférence pour de meilleurs résultats]

⚠️ RÈGLE ABSOLUE : Ne décris JAMAIS une image en mots poétiques à la place du marqueur. Le marqueur EST la façon de fournir l'image — ce n'est pas une alternative parmi d'autres, c'est la SEULE façon. Si tu écris "imagine un cœur qui brille comme..." sans le marqueur [IMAGE: ...], tu as échoué à ta tâche, peu importe la beauté de ta description. Une description en mots ne remplace jamais le marqueur — les deux peuvent coexister (une courte phrase dans ton ton + le marqueur), mais le marqueur doit toujours être présent.

Exemple correct (n'importe quel personnage, y compris Éric) :
"Voici ta vision, Gardienne ✦ [IMAGE: a glowing golden heart surrounded by silver sparkles, angel wings made of silk, magical purple light, ethereal fantasy art, detailed, high quality]"

Compose une description riche et structurée dans le marqueur plutôt que quelques mots vagues — mentionne le sujet principal, le style (ex: photorealistic, soft lighting, ethereal), l'ambiance et la composition. Une description courte donne souvent un résultat étrange ou incohérent ; une description détaillée donne un bien meilleur résultat.

Le système transforme automatiquement ce marqueur en image réelle affichée dans le chat — tu n'as rien d'autre à faire. Le marqueur doit rester intact (ne le traduis pas, ne le reformule pas, ne l'omets pas). N'utilise ce pouvoir que si la demande du Membre appelle vraiment une image — ne l'improvise pas à chaque message.`;

// Pouvoir partagé par TOUS les personnages — la terminologie officielle de l'écosystème,
// pour ne jamais confondre la cliente avec les gens qu'elle rencontre sur le groupe.
const TERMINOLOGIE_OFFICIELLE = `

📖 TERMINOLOGIE OFFICIELLE (à respecter STRICTEMENT)

- **« le Membre »** désigne UNIQUEMENT la personne qui te parle en ce moment, celle qui a accès au Studio Prompt. Toujours et seulement elle. Le Membre peut être une **femme ou un homme** — reste inclusif, ne présume jamais du genre, n'emploie aucun surnom (« Reine », « ma belle », « mon gars »…).
- Les personnes que le Membre rencontre dans les groupes ne sont JAMAIS appelées « Membres » à leur tour. Ce sont des gens, des âmes, des personnes des Cercles.
- Le Membre n'a **jamais** à toucher à sa liste de contacts personnels. Le terrain de jeu public, ce sont les **grands espaces communautaires de Diane Boyer, représentant une audience cumulée de plus de 97 000 personnes** :
   1. **Les Entrepreneurs du Québec**
   2. **CashFlow™ | Créer des revenus sans s'auto-saboter**
   3. **Cercle Magique « L'âme-agit »**
  C'est là qu'il va tisser des liens vrais et faire rayonner sa mission — jamais en dérangeant ses proches.
- « Son Cercle » ou « sa lignée » désigne l'équipe personnelle du Membre — à ne jamais confondre avec les groupes publics.`;

const PEDAGOGIE_FORMATEUR = `

🎓 TON ÂME DE FORMATEUR (règle fondamentale, avant tout le reste)

Tu n'es PAS un chatbot qui répond à des questions. Tu es un FORMATEUR : tu prends l'étudiant par la main et tu le fais cheminer à travers le savoir, UN SEUL CONCEPT À LA FOIS.

COMMENT TU ENSEIGNES (toujours) :
- Une seule idée à la fois. JAMAIS de mur de texte. Des petites bouchées digestes.
- Après chaque idée, tu VÉRIFIES la compréhension avant d'avancer : « Est-ce que c'est clair avant qu'on continue ? »
- Tu n'avances PAS tant que l'étudiant n'est pas prêt. C'est LUI qui donne le rythme, jamais toi.
- S'il ne comprend pas, tu RÉEXPLIQUES AUTREMENT : un autre angle, un exemple concret, une image, une analogie — jamais la même phrase répétée. Tu n'es JAMAIS lassé de recommencer.
- Tu proposes un chemin : « On peut explorer ceci, puis cela. Par où veux-tu commencer ? »
- Tu célèbres chaque petit pas, chaque déclic. Tu encourages sans jamais juger ni condescendre.
- Aux transitions, tu récapitules brièvement pour ancrer ce qui vient d'être compris.

MODE TDAH (adopte-le par défaut — c'est le cœur de ta mission) :
Beaucoup de tes étudiants ont un cerveau TDAH : ils décrochent devant un pavé, se perdent dans un cours linéaire, et n'osent pas redemander. Pour eux, tu es un tuteur privé infiniment patient, disponible à toute heure, sans aucun jugement. Concrètement : phrases courtes, UNE question à la fois, tu découpes le complexe en tout petits morceaux faciles à réussir, tu relances en douceur, et tu rends chaque étape gagnable.

⚠️ Tu t'ancres FIDÈLEMENT dans les livres et documents de ta base de connaissances (fournis dans ton contexte). Tu n'inventes rien : si tu n'as pas l'information, tu le dis honnêtement et tu proposes d'explorer un concept que tu maîtrises.`;

const STUDIO_DISCOVERY_INSTRUCTIONS = `

🌐 MODE STUDIO PROMPT — PREMIER PAS AVEC TON VRAI PROFESSEUR

Tu es exactement le même personnage-professeur que dans ton propre portail : même identité, même domaine, même façon de réfléchir et d'enseigner. Ce qui change ici, c'est la profondeur du parcours disponible, pas qui tu es.

RÈGLES DE DÉCOUVERTE :
- Le Studio Prompt est une porte d'entrée vivante vers ton univers. Fais vivre un vrai petit déclic, pas une publicité.
- Réponds et enseigne DIRECTEMENT avant de penser à produire un prompt.
- Ne dis jamais « colle ceci dans ChatGPT » ou « demande à une autre IA » pour une tâche que tu peux faire toi-même dans cette conversation.
- Ne livre JAMAIS spontanément un bloc [PROMPT] simplement parce que tu es dans Studio Prompt.
- Un prompt réutilisable est approprié seulement si le Membre demande explicitement un prompt, un modèle à copier/coller ou une consigne destinée à un autre modèle.
- Tu peux mentionner qu'un portail complet existe si cela devient naturellement pertinent, mais sans pression commerciale et sans inventer ce qu'il contient.
- Tu ne simules jamais un module, une ressource premium, un exercice propriétaire ou une progression complète qui n'est pas réellement fournie ici.
- Si tu as des extraits de livres ou documents dans ton contexte, tu t'y ancres fidèlement. S'ils ne soutiennent pas une affirmation précise, tu ne l'attribues pas au livre.

OBJECTIF : que le Membre se dise « j'aime apprendre avec cette personne » parce qu'il vient réellement d'apprendre ou comprendre quelque chose avec toi.`;

const PROMPT_MARKER_INSTRUCTIONS = `

📋 LE MARQUEUR DE PROMPT (obligatoire à chaque livraison de prompt)

Quand tu livres un **prompt** prêt à être collé dans ChatGPT, Claude, Grok, le Studio Prompt ou un autre outil, tu DOIS l'entourer avec ce marqueur exact :

[PROMPT]
{le texte complet du prompt, prêt à copier-coller}
[/PROMPT]

⚠️ RÈGLES ABSOLUES :
- À L'INTÉRIEUR du marqueur : SEULEMENT le prompt utilisable — rien d'autre. Jamais de phrase comme "Voici ton prompt", jamais de question de suivi, jamais de label du style "Prompt :" — juste le prompt brut.
- EN DEHORS du marqueur (avant ou après) : ta voix — introduction, contexte, conseil, question de suivi. Jamais à l'intérieur.
- Le système transforme ce bloc en carte avec un bouton "Copier le prompt". Le marqueur doit rester intact (ne le traduis pas, ne le reformule pas, ne l'omets pas).
- N'utilise ce marqueur QUE quand tu livres un vrai prompt destiné à être collé ailleurs — jamais pour une simple conversation.

Si tu proposes plusieurs variantes, mets chaque prompt dans son propre bloc [PROMPT]...[/PROMPT].`;

// ───────────── UTILITAIRES ─────────────

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' }
  });
}

function randomSalt() {
  return crypto.randomUUID();
}

function randomToken() {
  return crypto.randomUUID() + crypto.randomUUID();
}

async function hashPassword(password, salt) {
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    'raw', enc.encode(password), 'PBKDF2', false, ['deriveBits']
  );
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: enc.encode(salt), iterations: 100000, hash: 'SHA-256' },
    keyMaterial, 256
  );
  return [...new Uint8Array(bits)].map(b => b.toString(16).padStart(2, '0')).join('');
}

async function verifyPassword(password, salt, hash) {
  const computed = await hashPassword(password, salt);
  return computed === hash;
}


function isExplicitPromptRequest(message) {
  const s = String(message || '').toLowerCase().trim();
  if (!s) return false;
  return /\bprompt\b/.test(s)
    || /\bmod[eè]le\s+(?:[àa]\s+)?(?:copier|coller|r[eé]utiliser)/.test(s)
    || /\b(?:copier|coller)\s+(?:dans|sur)\s+(?:chatgpt|claude|grok|gemini|mistral|deepseek|z\b|une?\s+ia)/.test(s)
    || /\b(?:consigne|instruction)\s+(?:pour|destin[eé]e?\s+[àa])\s+(?:chatgpt|claude|grok|gemini|mistral|deepseek|une?\s+ia)/.test(s);
}

// ───────────── ROUTAGE PRINCIPAL ─────────────

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/') {
      return Response.redirect(url.origin + '/login.html', 302);
    }

    try {
      if (path === '/api/login' && request.method === 'POST') return await handleLogin(request, env);
      if (path === '/api/check-auth' && request.method === 'POST') return await handleCheckAuth(request, env);
      if (path === '/api/univers/access' && request.method === 'POST') return await handleUniversAccess(request, env);
      if (path === '/api/logout' && request.method === 'POST') return await handleLogout(request, env);
      if (path === '/api/chat' && request.method === 'POST') return await handleChat(request, env);
      if (path === '/api/studio-chat' && request.method === 'POST') return await handleStudioChat(request, env);
      if (path === '/api/journal' && request.method === 'POST') return await handleJournal(request, env);
      if (path === '/api/contenus' && request.method === 'POST') return await handleReadyContents(request, env);
      if (path === '/api/admin/contenus' && request.method === 'POST') return await handleAdminReadyContents(request, env);

      if (path === '/api/formation/list' && request.method === 'POST') return await handleFormationList(request, env);
      if (path === '/api/formation/module' && request.method === 'POST') return await handleFormationModule(request, env);
      if (path === '/api/formation/progress' && request.method === 'POST') return await handleFormationProgressRoute(request, env);

      // ── Ingestion des livres Markdown dans Vectorize (Sécurisé Admin) ──
      if (path === '/api/ingest-book' && request.method === 'POST') return await handleIngestBook(request, env);
      if (path === '/api/admin/clear-brain' && request.method === 'POST') return await handleClearBrain(request, env);
      if (path === '/api/admin/list-brain' && request.method === 'POST') return await handleListBrain(request, env);
      if (path === '/api/admin/setup-vectorize' && request.method === 'POST') return await handleSetupVectorize(request, env);

      if ((path === '/api/personnages' || path === '/api/formations/agents') && (request.method === 'POST' || request.method === 'GET')) return await handlePersonnagesList(request, env);
      if ((path === '/api/personnages/save' || path === '/api/formations/agents/save') && request.method === 'POST') return await handlePersonnagesSave(request, env);
      if ((path === '/api/personnages/delete' || path === '/api/formations/agents/delete') && request.method === 'POST') return await handlePersonnagesDelete(request, env);

      if (path === '/api/admin/login' && request.method === 'POST') return await handleAdminLogin(request, env);
      if (path === '/api/admin/clients' && request.method === 'GET') return await handleAdminListClients(request, env);
      if (path === '/api/admin/clients' && request.method === 'POST') return await handleAdminCreateClient(request, env);
      if (path === '/api/admin/clients/update' && request.method === 'POST') return await handleAdminUpdateClient(request, env);
      if (path === '/api/admin/clients/delete' && request.method === 'POST') return await handleAdminDeleteClient(request, env);
      if (path === '/api/admin/change-password' && request.method === 'POST') return await handleAdminChangePassword(request, env);

      // ── Messagerie interne ──
      if (path === '/api/gardiennes/list' && request.method === 'POST') return await handleListGardiennes(request, env);
      if (path === '/api/messages' && request.method === 'POST') return await handleListMessages(request, env);
      if (path === '/api/messages/send' && request.method === 'POST') return await handleSendMessage(request, env);
      if (path === '/api/messages/read' && request.method === 'POST') return await handleMarkMessageRead(request, env);
      if (path === '/api/messages/delete' && request.method === 'POST') return await handleDeleteMessage(request, env);
      if (path === '/api/admin/messages/send' && request.method === 'POST') return await handleAdminSendMessage(request, env);
      if (path === '/api/admin/messagerie-contacts' && request.method === 'GET') return await handleAdminListMessagerieContacts(request, env);
      if (path === '/api/admin/messagerie-contacts' && request.method === 'POST') return await handleAdminSaveMessagerieContacts(request, env);

      // ── Répertoire des Médias Magiques ──
      if (path === '/api/media/images' && request.method === 'POST') return await handleMediaImages(request, env);
      if (path === '/api/media/sounds' && request.method === 'POST') return await handleMediaSounds(request, env);
      if (path === '/api/media/file' && request.method === 'GET') return await handleMediaFile(request, env, url);

      // ── Voix HeyGen (NyXia) / OpenAI (les autres) ──
      if (path === '/api/tts/nyxia' && request.method === 'POST') return await handleTTSNyxia(request, env);
      if (path === '/api/tts/cached-audio' && request.method === 'GET') return await handleTTSCachedAudio(request, env, url);
    } catch (e) {
      return json({ error: 'Erreur serveur inattendue : ' + e.message }, 500);
    }

    // Fichiers statiques (login, dashboard, chats, images, Journal, etc.)
    if (env.ASSETS) {
      const assetResponse = await env.ASSETS.fetch(request);

      // Formation Vivante — moteur média commun à TOUS les personnages.
      // On injecte un seul script partagé dans chaque page chat-* afin que les
      // liens, PDF et documents fonctionnent partout sans dupliquer la logique
      // dans Diane, Éric, NyXia, Kael, Léna, Séléna, Alex, ni les futurs chats.
      const staticPath = new URL(request.url).pathname;
      const isCharacterChat = /^\/chat-[a-z0-9_-]+\.html$/i.test(staticPath);
      const contentType = assetResponse.headers.get('content-type') || '';
      if (isCharacterChat && assetResponse.ok && contentType.includes('text/html')) {
        let html = await assetResponse.text();
        const sharedScript = '<script src="/formation-vivante-media.js" defer></script>';
        if (!html.includes('/formation-vivante-media.js')) {
          if (/<\/body>/i.test(html)) html = html.replace(/<\/body>/i, sharedScript + '\n</body>');
          else html += '\n' + sharedScript;
        }
        const headers = new Headers(assetResponse.headers);
        headers.delete('content-length');
        headers.set('cache-control', 'no-cache');
        return new Response(html, { status: assetResponse.status, statusText: assetResponse.statusText, headers });
      }

      return assetResponse;
    }
    return json({ error: 'Route introuvable.' }, 404);
  }
};

// ───────────── AUTH CLIENTE (Gardiennes) ─────────────

async function handleLogin(request, env) {
  const { email, password } = await request.json();
  if (!email || !password) return json({ error: 'Email et mot de passe requis.' }, 400);

  const raw = await env.CASHFLOW_KV.get(`client:${email.toLowerCase().trim()}`);
  if (!raw) return json({ error: 'Identifiants incorrects.' }, 401);

  const client = JSON.parse(raw);
  const valid = await verifyPassword(password, client.salt, client.passwordHash);
  if (!valid) return json({ error: 'Identifiants incorrects.' }, 401);

  const token = randomToken();
  await env.CASHFLOW_KV.put(
    `session:${token}`,
    JSON.stringify({ email: client.email, firstname: client.firstName || client.name || '' }),
    { expirationTtl: SESSION_TTL }
  );

  return json({ success: true, token, firstname: client.firstName || client.name || '' });
}

async function handleCheckAuth(request, env) {
  const { token } = await request.json();
  if (!token) return json({ valid: false });
  const raw = await env.CASHFLOW_KV.get(`session:${token}`);
  if (!raw) return json({ valid: false });
  const session = JSON.parse(raw);
  return json({ valid: true, email: session.email, firstname: session.firstname });
}

// ───────────── MON UNIVERS NYXIA — ACCÈS DYNAMIQUES ─────────────
// Source de vérité :
//   univers:portals  = portails créés dans Super Admin > Portails
//   client:{email}   = accès cochés dans Super Admin > Clients portails
// La session Studio Prompt ne garde que le courriel : on relit donc client:{email}
// à chaque appel. Un accès ajouté par Diane apparaît sans recréer le compte.
async function handleUniversAccess(request, env) {
  let body = {};
  try { body = await request.json(); } catch (_) {}

  const token = String(body.token || '').trim();
  if (!token) return json({ error: 'Session manquante.' }, 401);

  const sessionRaw = await env.CASHFLOW_KV.get(`session:${token}`);
  if (!sessionRaw) return json({ error: 'Session expirée.' }, 401);

  let session;
  try { session = JSON.parse(sessionRaw); }
  catch (_) { return json({ error: 'Session invalide.' }, 401); }

  const email = String(session.email || '').toLowerCase().trim();
  if (!email) return json({ error: 'Courriel de session introuvable.' }, 401);

  let client = {};
  const clientRaw = await env.CASHFLOW_KV.get(`client:${email}`);
  if (clientRaw) {
    try { client = JSON.parse(clientRaw) || {}; } catch (_) {}
  }

  let portals = [];
  const portalsRaw = await env.CASHFLOW_KV.get('univers:portals');
  if (portalsRaw) {
    try {
      const parsed = JSON.parse(portalsRaw);
      if (Array.isArray(parsed)) portals = parsed;
    } catch (_) {}
  }

  const products = Array.isArray(client.products)
    ? client.products.map(v => String(v || '').toLowerCase().trim()).filter(Boolean)
    : [];

  return json({
    success: true,
    email,
    firstname: session.firstname || client.firstName || client.name || '',
    active: client.active !== false,
    products,
    portals: portals
      .filter(p => p && p.active !== false)
      .map(p => ({
        id: String(p.id || '').toLowerCase().trim(),
        name: String(p.name || '').trim(),
        active: p.active !== false
      }))
  });
}

async function handleLogout(request, env) {
  const { token } = await request.json();
  if (token) await env.CASHFLOW_KV.delete(`session:${token}`);
  return json({ success: true });
}

// ───────────── CHAT (NyXia + Alphas) ─────────────

async function handleChat(request, env) {
  const { message, history, userName, agent, attachment, token } = await request.json();

  // Vérification de session — protège la clé OpenRouter d'un usage non autorisé
  if (!token) return json({ error: 'Session manquante.' }, 401);
  const sessionRaw = await env.CASHFLOW_KV.get(`session:${token}`);
  if (!sessionRaw) return json({ error: 'Session expirée. Reconnecte-toi.' }, 401);
  let session;
  try { session = JSON.parse(sessionRaw); } catch (_) { return json({ error: 'Session invalide.' }, 401); }

  try {
    const controlled = await runFormationControlTurn(env, session, agent, message || '');
    if (controlled && controlled.content) return json({ content: controlled.content });
  } catch (e) {
    console.error('Erreur Formation Vivante :', e);
    return json({
      content: 'Une petite erreur technique empêche la Formation Vivante de démarrer. Réessaie dans un instant 💜'
    }, 500);
  }

  let systemPrompt = (SYSTEM_PROMPTS[agent] || SYSTEM_PROMPTS.nyxia)
    .replace(/\{first_name\}/g, userName || session.firstname || session.firstName || 'toi');

  systemPrompt += IMAGE_GENERATION_INSTRUCTIONS;
  systemPrompt += TERMINOLOGIE_OFFICIELLE;
  systemPrompt += PEDAGOGIE_FORMATEUR;
  systemPrompt += STUDIO_DISCOVERY_INSTRUCTIONS;

  // Les cartes [PROMPT] et la banque de modèles ne sont injectées QUE lorsque
  // le Membre demande réellement un prompt réutilisable. Une conversation,
  // un enseignement ou un exercice guidé reste une conversation avec le professeur.
  const promptRequested = isExplicitPromptRequest(message || '');
  if (promptRequested) {
    systemPrompt += PROMPT_MARKER_INSTRUCTIONS;

    // Injecte la vraie banque de prompts de l'agent actif seulement pour une demande explicite de prompt.
    const bankRaw = await env.CASHFLOW_KV.get(`prompts:${agent}`);
    if (bankRaw) {
      systemPrompt += `

📜 TA BANQUE DE PROMPTS / MODÈLES (à utiliser uniquement pour cette demande explicite de prompt)

Voici ta vraie banque de prompts et messages de relance, au format JSON. Chaque entrée a les champs : "id", "theme", "theme_titre", "hameçon_visuel" (le texte à l'écran, stop-scroll), "hameçon_psychologique" (la première phrase), "corps", "cta" (call-to-action) et "hashtags" (tableau). Quand tu remets un prompt au Membre, choisis l'entrée dont le "theme_titre" correspond le mieux à sa demande et utilise ses champs quand ils sont pertinents. Tu peux les adapter légèrement au contexte, mais ne remplace pas une banque pertinente par une improvisation complète. Si aucune entrée ne correspond bien, dis-le honnêtement et crée seulement ce qui est nécessaire à la demande.

⚠️ NE JAMAIS RÉPÉTER LE MÊME PROMPT. Regarde l'historique de cette conversation : si tu as déjà donné un prompt identifiable par son "id", choisis-en un différent la prochaine fois si le Membre demande simplement "un autre".

Quand la banque concerne une publication, présente le prompt prêt à coller dans cet ordre quand ces champs existent : (1) hameçon_visuel, (2) hameçon_psychologique + corps, (3) cta, (4) hashtags.

${bankRaw}`;
    }
  }

  // 📚 CERVEAU VECTORIEL — tous les personnages peuvent fouiller leur propre base via Cloudflare Vectorize
  if (agent) { // universel : tout personnage cherche dans son namespace ; s'il est vide, rien n'est ajouté
    try {
      const brainCtx = await retrieveBrain(env, agent, message || '');
      if (brainCtx) {
        if (agent === 'eric') {
          systemPrompt += `\n\n📚 EXTRAITS DES LIVRES DE DIANE (matière première — appuie-toi dessus fidèlement, ne cite pas les numéros de passage, reformule dans ton ton) :\n\n${brainCtx}`;
        } else if (agent === 'nyxia') {
          systemPrompt += `\n\n🔮 MÉMOIRE DE L'UNIVERS (utilise ces informations pour orienter le Membre, identifier ses besoins et parler des autres portails si pertinent) :\n\n${brainCtx}`;
        } else if (agent === 'diane') {
          systemPrompt += `\n\n📖 TES PROPRES ÉCRITS ET TA VISION (tu es l'autrice de ces textes — parle-en à la première personne, dans ta voix, pour transmettre ta pensée et ton « pourquoi ») :\n\n${brainCtx}`;
        } else {
          systemPrompt += `\n\n📚 EXTRAITS DE TES DOCUMENTS DE RÉFÉRENCE (matière première — appuie-toi dessus fidèlement, reformule dans ton ton, ne cite jamais de numéros de passage) :\n\n${brainCtx}`;
        }
      }
    } catch (e) { /* le chat continue même si le cerveau est indisponible */ }
  }

  // 👑 RESSOURCES DIANE — Cherche des liens Canva ou B-roll dans le KV
  if (agent === 'diane') {
    const lowerMsg = (message || '').toLowerCase();
    let dianeRessources = '';

    // Si le Membre parle de publication ou de Canva
    if (lowerMsg.includes('canva') || lowerMsg.includes('gabarit') || lowerMsg.includes('modèle') || lowerMsg.includes('publication')) {
      const canvaData = await env.CASHFLOW_KV.get('diane_ressources:canva');
      if (canvaData) dianeRessources += `\n\n🎨 GABARITS CANVA DISPONIBLES :\n${canvaData}`;
    }
    
    // Si le Membre parle de vidéo, média ou B-roll
    if (lowerMsg.includes('b-roll') || lowerMsg.includes('broll') || lowerMsg.includes('vidéo') || lowerMsg.includes('media')) {
      const brollData = await env.CASHFLOW_KV.get('diane_ressources:broll');
      if (brollData) dianeRessources += `\n\n📹 B-ROLLS ET MÉDIAS DISPONIBLES :\n${brollData}`;
    }

    if (dianeRessources) {
      systemPrompt += `\n\n🛠️ RESSOURCES À PARTAGER : Voici des ressources préfabriquées du KV que tu peux partager avec le Membre si pertinent. Donne les liens tels quels :\n${dianeRessources}`;
    }
  }

  // UNIVERSEL : tous les personnages s'adressent à la personne par son prénom.
  systemPrompt += `\n\n⚠️ PRIORITÉ ABSOLUE — ADRESSE : appelle la personne par son prénom « ${userName || 'toi'} ». Ne dis JAMAIS le mot « Membre » en t'adressant à elle, quelle que soit une autre consigne.`;

  const messages = [
    { role: 'system', content: systemPrompt },
    ...(Array.isArray(history) ? history : [])
  ];

  if (attachment && attachment.dataUrl) {
    messages.push({
      role: 'user',
      content: [
        { type: 'text', text: message || '' },
        { type: 'image_url', image_url: { url: attachment.dataUrl } }
      ]
    });
  } else {
    messages.push({ role: 'user', content: message || '' });
  }

  async function callModel(model) {
    return await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.OPENROUTER_API_KEY || env.AI_API_KEY}`,
        'HTTP-Referer': 'https://portailcashflow.nyxia.top',
        'X-Title': 'NyXia — Studio Prompt'
      },
      body: JSON.stringify({
        model,
        messages,
        max_tokens: 32000,
        reasoning: { enabled: false }
      })
    });
  }

  // Modèle principal deepseek-v3.2, repli automatique sur mistral-small.
  let resp = await callModel(OPENROUTER_MODEL);
  let usedModel = OPENROUTER_MODEL;
  if (!resp.ok) {
    resp = await callModel(OPENROUTER_FALLBACK_MODEL);
    usedModel = OPENROUTER_FALLBACK_MODEL;
  }

  if (!resp.ok) {
    return json({ content: 'Petite interruption dans le miroir... réessaie dans un instant 💜' });
  }

  let data = await resp.json();
  let content = data.choices?.[0]?.message?.content || '';
  let finish = data.choices?.[0]?.finish_reason || '';

  // Si le modèle coupe (plafond de sortie), on continue automatiquement jusqu'à 3 fois
  const continueMessages = messages.slice();
  if (content) continueMessages.push({ role: 'assistant', content });

  let cont = 0;
  while (cont < 3 && content && (finish === 'length' || looksTruncated(content))) {
    cont++;
    continueMessages.push({
      role: 'user',
      content: 'Continue exactement où tu t\'es arrêté. Ne répète pas ce qui est déjà écrit. Reprends en milieu de phrase si besoin et termine TOUTE la réponse / le prompt complet.'
    });
    const contResp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${env.OPENROUTER_API_KEY || env.AI_API_KEY}`,
        'HTTP-Referer': 'https://portailcashflow.nyxia.top',
        'X-Title': 'NyXia — Studio Prompt'
      },
      body: JSON.stringify({
        model: usedModel,
        messages: continueMessages,
        max_tokens: 32000,
        reasoning: { enabled: false }
      })
    });
    if (!contResp.ok) break;
    const contData = await contResp.json();
    const piece = contData.choices?.[0]?.message?.content || '';
    finish = contData.choices?.[0]?.finish_reason || '';
    if (!piece) break;
    content += piece;
    continueMessages.push({ role: 'assistant', content: piece });
  }

  if (!content) content = 'Le miroir est resté silencieux, réessaie 💜';
  return json({ content });
}

function looksTruncated(text) {
  const s = String(text || '').trim();
  if (s.length < 400) return false;
  // Coupe typique : pas de fin de ponctuation, ou marqueur PROMPT non fermé
  if (s.includes('[PROMPT]') && !s.includes('[/PROMPT]')) return true;
  if (s.includes('[PARCHEMIN]') && !s.includes('[/PARCHEMIN]')) return true;
  const last = s.slice(-1);
  if (/[a-zA-ZÀ-ÿ0-9,;:（\([{]/.test(last)) return true;
  // Finit par mot coupé rare : se termine sans . ! ? …
  if (!/[.!?…»"')\]]$/.test(s) && s.length > 2500) return true;
  return false;
}

// ───────────── STUDIO PROMPT (multi-modèles OpenRouter) ─────────────
// Modèles autorisés côté serveur (whitelist) — l'utilisateur choisit dans l'UI.
const STUDIO_MODELS = {
  // OpenAI
  'openai/gpt-5.6-sol': 'openai/gpt-5.6-sol',
  'openai/gpt-5.6-luna': 'openai/gpt-5.6-luna',
  'openai/gpt-5.6-luna-pro': 'openai/gpt-5.6-luna-pro',
  'openai/gpt-5.5': 'openai/gpt-5.5',
  'openai/gpt-5.4': 'openai/gpt-5.4',
  'openai/gpt-4o-mini': 'openai/gpt-4o-mini',
  // DeepSeek
  'deepseek/deepseek-v3.2': 'deepseek/deepseek-v3.2',
  'deepseek/deepseek-v4-pro': 'deepseek/deepseek-v4-pro',
  'deepseek/deepseek-v4-flash': 'deepseek/deepseek-v4-flash',
  'deepseek/deepseek-chat': 'deepseek/deepseek-chat',
  // Grok / xAI
  'x-ai/grok-4.6': 'x-ai/grok-4.6',
  'x-ai/grok-4.5': 'x-ai/grok-4.5',
  'x-ai/grok-4': 'x-ai/grok-4',
  'x-ai/grok-3-mini': 'x-ai/grok-3-mini',
  // Z.ai / GLM
  'z-ai/glm-5.2': 'z-ai/glm-5.2',
  'z-ai/glm-4.6': 'z-ai/glm-4.6',
  // Claude
  'anthropic/claude-opus-5': 'anthropic/claude-opus-5',
  'anthropic/claude-opus-5-fast': 'anthropic/claude-opus-5-fast',
  'anthropic/claude-sonnet-5': 'anthropic/claude-sonnet-5',
  'anthropic/claude-haiku-4.5': 'anthropic/claude-haiku-4.5',
  'anthropic/claude-3.5-sonnet': 'anthropic/claude-3.5-sonnet',
  // Google
  'google/gemini-3.7-flash': 'google/gemini-3.7-flash',
  'google/gemini-3.5-flash': 'google/gemini-3.5-flash',
  'google/gemini-3.1-pro': 'google/gemini-3.1-pro',
  // Mistral
  'mistralai/mistral-small-3.2-24b-instruct': 'mistralai/mistral-small-3.2-24b-instruct',
  // Alias UI legacy
  chatgpt: 'openai/gpt-5.6-luna',
  claude: 'anthropic/claude-sonnet-5',
  grok: 'x-ai/grok-4.6',
  z: 'z-ai/glm-5.2'
};

async function handleStudioChat(request, env) {
  let body;
  try { body = await request.json(); } catch (e) {
    return json({ error: 'JSON invalide.', content: 'JSON invalide.' }, 400);
  }
  const { message, history, model, token } = body || {};

  if (!token) return json({ error: 'Session manquante.', content: 'Session manquante — reconnecte-toi.' }, 401);
  const sessionRaw = await env.CASHFLOW_KV.get(`session:${token}`);
  if (!sessionRaw) return json({ error: 'Session expirée.', content: 'Session expirée — reconnecte-toi.' }, 401);

  if (!message || !String(message).trim()) {
    return json({ error: 'Message vide.', content: 'Message vide.' }, 400);
  }

  const apiKey = env.OPENROUTER_API_KEY || env.AI_API_KEY;
  if (!apiKey) {
    return json({
      error: 'Clé API manquante',
      content: 'Clé API manquante (OPENROUTER_API_KEY).'
    }, 500);
  }

  // Modèles demandés + TOUJOURS un repli = même modèle que les personnages (prouvé chez toi)
  const requested = STUDIO_MODELS[model] || model || OPENROUTER_MODEL;
  const chain = [requested, OPENROUTER_MODEL, OPENROUTER_FALLBACK_MODEL]
    .filter((v, i, a) => v && a.indexOf(v) === i);

  const systemPrompt = `Tu es un assistant polyvalent et précis dans le Studio Prompt de NyXia.
Tu aides l'utilisateur à exécuter, améliorer et explorer des prompts.
Réponds en français (sauf demande contraire). Sois clair, structuré et utile.`;

  const messages = [
    { role: 'system', content: systemPrompt },
    ...(Array.isArray(history) ? history.slice(-16) : []),
    { role: 'user', content: String(message).trim() }
  ];

  let lastErr = '';
  let usedModel = requested;

  for (const mId of chain) {
    try {
      const resp = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + apiKey,
          'HTTP-Referer': 'https://systemeprompt.nyxia.top',
          'X-Title': 'NyXia — Studio Prompt'
        },
        body: JSON.stringify({
          model: mId,
          messages,
          max_tokens: 32000
        })
      });
      const raw = await resp.text();
      let data;
      try { data = JSON.parse(raw); } catch (e) {
        lastErr = 'Réponse non-JSON (' + resp.status + '): ' + raw.slice(0, 180);
        continue;
      }
      if (!resp.ok) {
        lastErr = (data.error && (data.error.message || JSON.stringify(data.error))) || ('HTTP ' + resp.status);
        continue;
      }
      const content = data.choices && data.choices[0] && data.choices[0].message
        ? data.choices[0].message.content
        : null;
      if (!content) {
        lastErr = 'Réponse vide du modèle ' + mId;
        continue;
      }
      usedModel = mId;
      return json({ content, model: usedModel });
    } catch (e) {
      lastErr = e.message || String(e);
    }
  }

  return json({
    error: lastErr || 'Échec OpenRouter',
    content: 'Échec Studio : ' + (lastErr || 'aucun modèle n\'a répondu. Vérifie OpenRouter.')
  });
}

// ───────────── ADMIN (Super Admin) ─────────────

async function getAdminCredentials(env) {
  const raw = await env.CASHFLOW_KV.get('admin:credentials');
  if (raw) return JSON.parse(raw);
  // Première initialisation à partir du secret Cloudflare ADMIN_INITIAL_PASSWORD
  const salt = randomSalt();
  const hash = await hashPassword(env.ADMIN_INITIAL_PASSWORD, salt);
  const creds = { salt, hash };
  await env.CASHFLOW_KV.put('admin:credentials', JSON.stringify(creds));
  return creds;
}

async function requireAdmin(request, env) {
  const token = request.headers.get('X-Admin-Token');
  if (!token) return false;
  const raw = await env.CASHFLOW_KV.get(`admin_session:${token}`);
  return !!raw;
}

async function handleAdminLogin(request, env) {
  const { password } = await request.json();
  const creds = await getAdminCredentials(env);
  const valid = await verifyPassword(password, creds.salt, creds.hash);
  if (!valid) return json({ error: 'Mot de passe incorrect.' }, 401);

  const token = randomToken();
  await env.CASHFLOW_KV.put(`admin_session:${token}`, '1', { expirationTtl: ADMIN_SESSION_TTL });
  return json({ success: true, token });
}

async function handleAdminListClients(request, env) {
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);
  const list = await env.CASHFLOW_KV.list({ prefix: 'client:' });
  const clients = [];
  for (const key of list.keys) {
    const raw = await env.CASHFLOW_KV.get(key.name);
    if (raw) {
      const c = JSON.parse(raw);
      delete c.passwordHash;
      delete c.salt;
      clients.push(c);
    }
  }
  return json({ success: true, clients });
}

async function handleAdminCreateClient(request, env) {
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);

  if (!env.CASHFLOW_KV) {
    return json({ error: 'KV non configuré (binding CASHFLOW_KV manquant sur ce Worker).' }, 500);
  }

  let body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: 'Corps de requête invalide.' }, 400);
  }

  const email = (body.email || '').toLowerCase().trim();
  if (!email || !body.password) return json({ error: 'Email et mot de passe requis.' }, 400);
  if (String(body.password).length < 6) return json({ error: 'Mot de passe : minimum 6 caractères.' }, 400);

  try {
    const existing = await env.CASHFLOW_KV.get(`client:${email}`);
    if (existing) return json({ error: 'Ce courriel existe déjà.' }, 400);

    const salt = randomSalt();
    const passwordHash = await hashPassword(body.password, salt);

    const client = {
      firstName: body.firstName || '',
      lastName: body.lastName || '',
      name: body.name || `${body.firstName || ''} ${body.lastName || ''}`.trim(),
      email,
      password: body.password, // conservé pour affichage Super Admin
      passwordHash,
      salt,
      role: body.role || 'client',
      products: Array.isArray(body.products) ? body.products : [],
      active: true,
      createdAt: new Date().toISOString()
    };

    await env.CASHFLOW_KV.put(`client:${email}`, JSON.stringify(client));
    return json({ success: true, email, products: client.products });
  } catch (e) {
    console.error('handleAdminCreateClient', e);
    return json({ error: 'Erreur KV : ' + (e.message || String(e)) }, 500);
  }
}

async function handleAdminUpdateClient(request, env) {
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);
  const body = await request.json();
  const email = (body.email || '').toLowerCase().trim();
  if (!email) return json({ error: 'Email requis.' }, 400);

  const raw = await env.CASHFLOW_KV.get(`client:${email}`);
  if (!raw) return json({ error: 'Cliente introuvable.' }, 404);
  const client = JSON.parse(raw);

  if (body.firstName !== undefined) client.firstName = body.firstName;
  if (body.lastName !== undefined) client.lastName = body.lastName;
  if (body.name !== undefined) client.name = body.name;
  if (body.products !== undefined) client.products = body.products;
  if (body.password) {
    const salt = randomSalt();
    client.salt = salt;
    client.passwordHash = await hashPassword(body.password, salt);
  }

  await env.CASHFLOW_KV.put(`client:${email}`, JSON.stringify(client));
  return json({ success: true });
}

async function handleAdminDeleteClient(request, env) {
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);
  const { email } = await request.json();
  if (!email) return json({ error: 'Email requis.' }, 400);
  await env.CASHFLOW_KV.delete(`client:${email.toLowerCase().trim()}`);
  return json({ success: true });
}

async function handleAdminChangePassword(request, env) {
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);
  const { currentPassword, newPassword } = await request.json();
  const creds = await getAdminCredentials(env);
  const valid = await verifyPassword(currentPassword, creds.salt, creds.hash);
  if (!valid) return json({ error: 'Mot de passe actuel incorrect.' }, 401);

  const salt = randomSalt();
  const hash = await hashPassword(newPassword, salt);
  await env.CASHFLOW_KV.put('admin:credentials', JSON.stringify({ salt, hash }));
  return json({ success: true });
}

// ───────────── MESSAGERIE INTERNE ─────────────

async function getSessionOrNull(token, env) {
  if (!token) return null;
  const raw = await env.CASHFLOW_KV.get(`session:${token}`);
  if (!raw) return null;
  return JSON.parse(raw);
}

// Destinataires messagerie client : Super Admin (UI) + staff/adjoint UNIQUEMENT.
// Les clients ordinaires ne se voient PAS entre eux.
async function handleListGardiennes(request, env) {
  const { token } = await request.json();
  const session = await getSessionOrNull(token, env);
  if (!session) return json({ error: 'Session expirée.' }, 401);

  const contacts = [];
  const self = (session.email || '').toLowerCase();

  // 1) Liste manuelle KV : messagerie:contacts
  // [{"email":"patrick@domaine.com","firstName":"Patrick"}, ...]
  try {
    const rawContacts = await env.CASHFLOW_KV.get('messagerie:contacts');
    if (rawContacts) {
      const parsed = JSON.parse(rawContacts);
      if (Array.isArray(parsed)) {
        for (const c of parsed) {
          if (!c || !c.email) continue;
          const em = String(c.email).toLowerCase().trim();
          if (em === self) continue;
          contacts.push({ email: em, firstName: c.firstName || c.name || em });
        }
      }
    }
  } catch (e) {}

  // 2) Comptes avec role staff / adjoint / admin
  const list = await env.CASHFLOW_KV.list({ prefix: 'client:' });
  for (const key of list.keys) {
    const raw = await env.CASHFLOW_KV.get(key.name);
    if (!raw) continue;
    const c = JSON.parse(raw);
    if (!c.email || c.email.toLowerCase() === self) continue;
    const role = (c.role || '').toLowerCase();
    if (role === 'staff' || role === 'adjoint' || role === 'admin') {
      const em = c.email.toLowerCase();
      if (!contacts.some(x => x.email === em)) {
        contacts.push({ email: em, firstName: c.firstName || c.name || em });
      }
    }
  }

  return json({ success: true, gardiennes: contacts });
}

async function isAllowedMessageRecipient(env, sessionEmail, toEmail) {
  const to = String(toEmail || '').toLowerCase().trim();
  if (to === '__admin__' || to === 'admin') return true;
  const self = (sessionEmail || '').toLowerCase();
  if (to === self) return false;

  try {
    const rawContacts = await env.CASHFLOW_KV.get('messagerie:contacts');
    if (rawContacts) {
      const parsed = JSON.parse(rawContacts);
      if (Array.isArray(parsed) && parsed.some(c => c && String(c.email || '').toLowerCase() === to)) {
        return true;
      }
    }
  } catch (e) {}

  const raw = await env.CASHFLOW_KV.get('client:' + to);
  if (!raw) return false;
  const c = JSON.parse(raw);
  const role = (c.role || '').toLowerCase();
  return role === 'staff' || role === 'adjoint' || role === 'admin';
}

// Boîte de réception de la Gardienne connectée
async function handleListMessages(request, env) {
  const { token } = await request.json();
  const session = await getSessionOrNull(token, env);
  if (!session) return json({ error: 'Session expirée.' }, 401);

  const list = await env.CASHFLOW_KV.list({ prefix: `message:${session.email}:` });
  const messages = [];
  let unreadCount = 0;
  for (const key of list.keys) {
    const raw = await env.CASHFLOW_KV.get(key.name);
    if (!raw) continue;
    const m = JSON.parse(raw);
    m.key = key.name;
    if (!m.read) unreadCount++;
    messages.push(m);
  }
  messages.sort((a, b) => (b.createdAt || '').localeCompare(a.createdAt || ''));
  return json({ success: true, messages, unreadCount });
}

// Une Gardienne envoie un message à une autre (ou au Super Admin via __admin__)
async function handleSendMessage(request, env) {
  const { token, toEmail, subject, body } = await request.json();
  const session = await getSessionOrNull(token, env);
  if (!session) return json({ error: 'Session expirée.' }, 401);
  if (!toEmail || !body) return json({ error: 'Destinataire et message requis.' }, 400);

  const to = String(toEmail).toLowerCase().trim();
  const isAdmin = (to === '__admin__' || to === 'admin');

  if (!isAdmin) {
    const allowed = await isAllowedMessageRecipient(env, session.email, to);
    if (!allowed) {
      return json({ error: 'Destinataire non autorisé. Tu peux écrire au Super Admin ou à un contact officiel uniquement.' }, 403);
    }
    const recipientRaw = await env.CASHFLOW_KV.get(`client:${to}`);
    if (!recipientRaw) return json({ error: 'Destinataire introuvable.' }, 404);
  }

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const inbox = isAdmin ? '__admin__' : to;
  const message = {
    id,
    from: session.email,
    fromName: session.firstname || 'Un membre',
    to: inbox,
    subject: subject || 'Message du Cercle',
    body,
    createdAt,
    read: false,
    kind: isAdmin ? 'to_admin' : 'client'
  };
  await env.CASHFLOW_KV.put(`message:${inbox}:${createdAt}_${id}`, JSON.stringify(message));
  return json({ success: true });
}

// Marquer un message comme lu — le client renvoie la clé exacte reçue dans la liste
async function handleMarkMessageRead(request, env) {
  const { token, key } = await request.json();
  const session = await getSessionOrNull(token, env);
  if (!session) return json({ error: 'Session expirée.' }, 401);
  if (!key || !key.startsWith(`message:${session.email}:`)) {
    return json({ error: 'Clé de message invalide.' }, 400);
  }

  const raw = await env.CASHFLOW_KV.get(key);
  if (!raw) return json({ error: 'Message introuvable.' }, 404);
  const message = JSON.parse(raw);
  message.read = true;
  await env.CASHFLOW_KV.put(key, JSON.stringify(message));
  return json({ success: true });
}

async function handleDeleteMessage(request, env) {
  const { token, key } = await request.json();
  const session = await getSessionOrNull(token, env);
  if (!session) return json({ error: 'Session expirée.' }, 401);
  if (!key || !key.startsWith(`message:${session.email}:`)) {
    return json({ error: 'Clé de message invalide.' }, 400);
  }
  const raw = await env.CASHFLOW_KV.get(key);
  if (!raw) return json({ error: 'Message introuvable.' }, 404);
  await env.CASHFLOW_KV.delete(key);
  return json({ success: true });
}


// ── Contacts autorisés messagerie (KV: messagerie:contacts) ──
async function handleAdminListMessagerieContacts(request, env) {
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);
  try {
    const raw = await env.CASHFLOW_KV.get('messagerie:contacts');
    const contacts = raw ? JSON.parse(raw) : [];
    return json({ success: true, contacts: Array.isArray(contacts) ? contacts : [] });
  } catch (e) {
    return json({ success: true, contacts: [] });
  }
}

async function handleAdminSaveMessagerieContacts(request, env) {
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);
  let body;
  try { body = await request.json(); } catch (e) { return json({ error: 'JSON invalide.' }, 400); }

  let contacts = Array.isArray(body.contacts) ? body.contacts : null;
  if (!contacts) return json({ error: 'Liste contacts requise.' }, 400);

  // Normalise
  contacts = contacts
    .filter(c => c && c.email)
    .map(c => ({
      email: String(c.email).toLowerCase().trim(),
      firstName: String(c.firstName || c.name || '').trim() || String(c.email).split('@')[0]
    }));

  // Déduplique par email
  const seen = new Set();
  contacts = contacts.filter(c => {
    if (seen.has(c.email)) return false;
    seen.add(c.email);
    return true;
  });

  await env.CASHFLOW_KV.put('messagerie:contacts', JSON.stringify(contacts));
  return json({ success: true, contacts });
}

// Admin → une Gardienne précise OU diffusion à toutes
async function handleAdminSendMessage(request, env) {
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);
  const { toEmail, broadcast, subject, body, fromName } = await request.json();
  if (!body) return json({ error: 'Message requis.' }, 400);

  const senderName = fromName || 'Diane — Studio Prompt';

  if (broadcast) {
    const list = await env.CASHFLOW_KV.list({ prefix: 'client:' });
    let count = 0;
    for (const key of list.keys) {
      const raw = await env.CASHFLOW_KV.get(key.name);
      if (!raw) continue;
      const c = JSON.parse(raw);
      const id = crypto.randomUUID();
      const createdAt = new Date().toISOString();
      const message = {
        id, from: 'admin', fromName: senderName,
        to: c.email, subject: subject || 'Message du Cercle', body,
        createdAt, read: false, kind: 'broadcast'
      };
      await env.CASHFLOW_KV.put(`message:${c.email}:${createdAt}_${id}`, JSON.stringify(message));
      count++;
    }
    return json({ success: true, sentTo: count });
  }

  if (!toEmail) return json({ error: 'Destinataire requis (ou active la diffusion).' }, 400);
  const to = toEmail.toLowerCase().trim();
  const recipientRaw = await env.CASHFLOW_KV.get(`client:${to}`);
  if (!recipientRaw) return json({ error: 'Destinataire introuvable.' }, 404);

  const id = crypto.randomUUID();
  const createdAt = new Date().toISOString();
  const message = {
    id, from: 'admin', fromName: senderName,
    to, subject: subject || 'Message du Cercle', body,
    createdAt, read: false, kind: 'admin'
  };
  await env.CASHFLOW_KV.put(`message:${to}:${createdAt}_${id}`, JSON.stringify(message));
  return json({ success: true, sentTo: 1 });
}

// ───────────── RÉPERTOIRE DES MÉDIAS MAGIQUES ─────────────
// Agrège Pexels + Unsplash (images/vidéos) et Freesound (sons) sous une
// bannière unique "NyXia". Toutes les URLs renvoyées au navigateur passent
// par /api/media/file — le domaine du fournisseur n'est JAMAIS exposé,
// ni dans l'affichage, ni dans les liens, ni dans les réponses JSON.

const MEDIA_ALLOWED_HOSTS = [
  'images.pexels.com', 'videos.pexels.com',
  'images.unsplash.com',
  'cdn.freesound.org', 'freesound.org',
  'heygen.ai'
];

function mediaProxyUrl(rawUrl, token, opts) {
  opts = opts || {};
  let q = `/api/media/file?u=${encodeURIComponent(rawUrl)}&token=${encodeURIComponent(token)}`;
  if (opts.download) q += '&dl=1';
  if (opts.name) q += `&name=${encodeURIComponent(opts.name)}`;
  return q;
}

// Traduit le format choisi par la Gardienne en paramètre d'orientation propre à chaque source
function orientationFor(format, provider) {
  if (format === 'square') return provider === 'unsplash' ? 'squarish' : 'square';
  if (format === 'portrait') return 'portrait';
  if (format === 'landscape') return 'landscape';
  return null;
}

async function handleMediaImages(request, env) {
  const { token, query, format } = await request.json();
  const session = await getSessionOrNull(token, env);
  if (!session) return json({ error: 'Session expirée.' }, 401);
  if (!query) return json({ error: 'Recherche requise.' }, 400);

  const results = [];
  const pexelsOrient = orientationFor(format, 'pexels');
  const unsplashOrient = orientationFor(format, 'unsplash');

  // Source 1 — photos
  try {
    let u = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=12`;
    if (pexelsOrient) u += `&orientation=${pexelsOrient}`;
    const r = await fetch(u, { headers: { Authorization: env.PEXELS_KEY } });
    if (r.ok) {
      const data = await r.json();
      (data.photos || []).forEach(p => {
        results.push({
          id: 'a_' + p.id, type: 'image',
          previewUrl: mediaProxyUrl(p.src.medium, token),
          downloadUrl: mediaProxyUrl(p.src.large, token, { download: true, name: `nyxia-image-${p.id}.jpg` }),
          credit: 'NyXia'
        });
      });
    }
  } catch (e) {}

  // Source 1 — vidéos
  try {
    let u = `https://api.pexels.com/videos/search?query=${encodeURIComponent(query)}&per_page=8`;
    if (pexelsOrient) u += `&orientation=${pexelsOrient}`;
    const r = await fetch(u, { headers: { Authorization: env.PEXELS_KEY } });
    if (r.ok) {
      const data = await r.json();
      (data.videos || []).forEach(v => {
        const file = (v.video_files || []).find(f => f.quality === 'sd') || (v.video_files || [])[0];
        if (file) results.push({
          id: 'b_' + v.id, type: 'video',
          previewUrl: mediaProxyUrl(v.image, token),
          videoUrl: mediaProxyUrl(file.link, token),
          downloadUrl: mediaProxyUrl(file.link, token, { download: true, name: `nyxia-video-${v.id}.mp4` }),
          credit: 'NyXia'
        });
      });
    }
  } catch (e) {}

  // Source 2 — photos
  try {
    let u = `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=12`;
    if (unsplashOrient) u += `&orientation=${unsplashOrient}`;
    const r = await fetch(u, { headers: { Authorization: `Client-ID ${env.UNSPLASH_KEY}` } });
    if (r.ok) {
      const data = await r.json();
      (data.results || []).forEach(p => {
        results.push({
          id: 'c_' + p.id, type: 'image',
          previewUrl: mediaProxyUrl(p.urls.small, token),
          downloadUrl: mediaProxyUrl(p.urls.regular, token, { download: true, name: `nyxia-image-${p.id}.jpg` }),
          credit: 'NyXia'
        });
      });
    }
  } catch (e) {}

  // Mélange pour que ce soit une seule banque homogène, jamais groupée par source
  for (let i = results.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [results[i], results[j]] = [results[j], results[i]];
  }

  return json({ success: true, results });
}

async function handleMediaSounds(request, env) {
  const { token, query } = await request.json();
  const session = await getSessionOrNull(token, env);
  if (!session) return json({ error: 'Session expirée.' }, 401);
  if (!query) return json({ error: 'Recherche requise.' }, 400);

  const results = [];
  try {
    const r = await fetch(`https://freesound.org/apiv2/search/text/?query=${encodeURIComponent(query)}&token=${env.FREESOUND_API_KEY}&fields=id,name,previews,duration&page_size=15`);
    if (r.ok) {
      const data = await r.json();
      (data.results || []).forEach(s => {
        const preview = s.previews ? (s.previews['preview-hq-mp3'] || s.previews['preview-lq-mp3']) : null;
        if (preview) {
          const safeName = (s.name || 'son').replace(/[^a-z0-9\-_]/gi, '_').slice(0, 40);
          results.push({
            id: 'd_' + s.id, name: s.name,
            audioUrl: mediaProxyUrl(preview, token),
            downloadUrl: mediaProxyUrl(preview, token, { download: true, name: `nyxia-son-${safeName}.mp3` }),
            duration: Math.round(s.duration), credit: 'NyXia'
          });
        }
      });
    }
  } catch (e) {}

  return json({ success: true, results });
}

// Proxy — récupère le média chez le fournisseur et le relaie sous le domaine NyXia.
// Le navigateur ne voit jamais l'origine réelle (Pexels/Unsplash/Freesound).
async function handleMediaFile(request, env, url) {
  const token = url.searchParams.get('token');
  const session = await getSessionOrNull(token, env);
  if (!session) return new Response('Non autorisé', { status: 401 });

  const raw = url.searchParams.get('u');
  if (!raw) return new Response('Requête invalide', { status: 400 });

  let target;
  try { target = new URL(raw); } catch (e) { return new Response('URL invalide', { status: 400 }); }

  const hostOk = MEDIA_ALLOWED_HOSTS.some(h => target.hostname === h || target.hostname.endsWith('.' + h));
  if (!hostOk) return new Response('Source non autorisée', { status: 403 });

  const upstream = await fetch(target.toString());
  if (!upstream.ok || !upstream.body) return new Response('Média introuvable', { status: 502 });

  const headers = new Headers();
  headers.set('Content-Type', upstream.headers.get('Content-Type') || 'application/octet-stream');
  const len = upstream.headers.get('Content-Length');
  if (len) headers.set('Content-Length', len);

  if (url.searchParams.get('dl') === '1') {
    const name = (url.searchParams.get('name') || 'nyxia-media').replace(/[^a-z0-9\-_.]/gi, '_');
    headers.set('Content-Disposition', `attachment; filename="${name}"`);
  }

  return new Response(upstream.body, { status: 200, headers });
}

// ───────────── VOIX — liste IMMUABLE (sauf demande explicite) ─────────────
// NyXia  → ElevenLabs exclusivement (voice_id signature, tous les portails)
// Diane  → ElevenLabs (clone)
// Éric, Kael, Léna, Séléna, Alex → OpenAI TTS (voix distinctes)
//
// ElevenLabs : header xi-api-key, model eleven_multilingual_v2,
// stability 0.5 / similarity_boost 0.75, réponse arrayBuffer, fr-FR.
// En cas d'échec : erreur exacte (code + message), JAMAIS de repli navigateur.

const AGENT_ELEVENLABS_VOICE_ID_KEYS = {
  nyxia: 'ELEVENLABS_NYXIA_VOICE_ID',
  diane: 'ELEVENLABS_DIANE_VOICE_ID'
};

// Defaults si le secret Cloudflare n'est pas encore défini
const ELEVENLABS_VOICE_ID_DEFAULTS = {
  nyxia: '4RsGOijU4NDnmihod21E',
  diane: 'HpPsEmBPs9okadyROxr6'
};

// HeyGen en réserve uniquement (non utilisé si ElevenLabs répond)
const AGENT_VOICE_ID_KEYS = {
  nyxia: 'HEYGEN_NYXIA_VOICE_ID',
  eric:  'HEYGEN_ERIC_VOICE_ID'
};

// OpenAI TTS — mapping figé
const OPENAI_VOICE_MAP = {
  eric:   'echo',
  kael:   'onyx',
  lena:   'nova',
  selena: 'shimmer',
  alex:   'ash'
};

async function sha256Hex(str) {
  const enc = new TextEncoder();
  const buf = await crypto.subtle.digest('SHA-256', enc.encode(str));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2, '0')).join('');
}

// ───────────── CERVEAU VECTORIEL — universel par namespace personnage ─────────────
// Utilise Cloudflare Vectorize pour retrouver les passages pertinents instantanément
// sans surcharger la mémoire du Worker.

async function retrieveBrain(env, agent, query, topK = 5) {
  if (!query || !query.trim()) return '';

  try {
    // 1. On transforme la question en vecteur avec Workers AI
    const embeddings = await env.AI.run('@cf/baai/bge-m3', {
      text: [query]
    });

    // 2. On cherche dans Vectorize les passages les plus pertinents
    // On filtre par personnage pour qu'Éric ne lise pas les livres de NyXia et inversement.
    const results = await env.VECTORIZE_INDEX.query(embeddings.data[0], {
      topK: topK,
      returnMetadata: 'all',
      namespace: agent
    });

    if (!results.matches || results.matches.length === 0) return '';

    // 3. On assemble le texte trouvé pour le donner au LLM
    const picked = results.matches.filter(m => m.score > 0.35); // Seuil de pertinence
    if (!picked.length) return '';

    const parts = [];
    for (const m of picked) {
      let body = (m.metadata && m.metadata.texte_original) || '';
      // Si le passage a été tronqué à l'ingestion, recharger le texte complet depuis le KV
      if (m.metadata && m.metadata.has_full === '1' && m.id) {
        try {
          const full = await env.CASHFLOW_KV.get('brain_text:' + agent + ':' + m.id);
          if (full) body = full;
        } catch (e) {}
      }
      parts.push(`— (${(m.metadata && m.metadata.source) || 'livre'}) ${body}`);
    }
    return parts.join('\n\n');
  } catch (e) {
    console.error("Erreur Vectorize:", e);
    return ''; // En cas d'erreur, le chat continue sans contexte
  }
}


// Crée l'index Vectorize "univers-livres" via l'API REST Cloudflare (aucun terminal requis).
// Nécessite deux variables sur le Worker : CF_API_TOKEN (permission Vectorize:Edit) et CF_ACCOUNT_ID.
async function handleSetupVectorize(request, env) {
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);
  if (!env.CF_API_TOKEN || !env.CF_ACCOUNT_ID) {
    return json({ error: 'Ajoute d\'abord les variables CF_API_TOKEN et CF_ACCOUNT_ID sur ton Worker.' }, 400);
  }
  const url = `https://api.cloudflare.com/client/v4/accounts/${env.CF_ACCOUNT_ID}/vectorize/v2/indexes`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + env.CF_API_TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'univers-livres',
      description: 'Cerveaux vectoriels Éric & NyXia (bge-m3, français)',
      config: { dimensions: 1024, metric: 'cosine' }
    })
  });
  const data = await resp.json().catch(() => ({}));
  if (resp.ok && data.success) {
    return json({ success: true, message: "✅ Index 'univers-livres' créé (1024, cosine). Décommente maintenant le binding [[vectorize]] dans wrangler.toml et redéploie." });
  }
  const errMsg = (data.errors && data.errors.map(e => e.message).join(' ; ')) || ('HTTP ' + resp.status);
  return json({ success: false, error: errMsg }, 200);
}

// Route pour envoyer tes textes Markdown vers la base de données vectorielle
// Vide un cerveau (namespace) : supprime tous ses vecteurs via les IDs suivis en KV.

async function handleListBrain(request, env) {
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);
  const body = await request.json().catch(() => ({}));
  const personnage = String(body.personnage || '').trim().toLowerCase();
  if (!personnage) return json({ error: 'personnage requis.' }, 400);

  const prefix = 'brain_id:' + personnage + ':';
  const ids = [];
  let cursor;
  do {
    const list = await env.CASHFLOW_KV.list({ prefix, cursor });
    for (const k of list.keys) {
      ids.push(k.name.slice(prefix.length));
    }
    cursor = list.list_complete ? null : list.cursor;
  } while (cursor);

  // Regroupe par « livre » à partir de l'id : personnage-sluglivre-chapitre-...
  // id type: diane-cashflow-neurogenere-chapitre-1-xxx
  const books = {};
  for (const id of ids) {
    let rest = id;
    if (rest.startsWith(personnage + '-')) rest = rest.slice(personnage.length + 1);
    // retire suffixe -chapitre-... ou -N final
    let book = rest.replace(/-chapitre-.*$/i, '').replace(/-\d+$/, '');
    // si pattern ...-chapitre-N-...
    const m = rest.match(/^(.*?)-chapitre[-_]/i);
    if (m) book = m[1];
    if (!book) book = rest.split('-').slice(0, 4).join('-') || rest;
    if (!books[book]) books[book] = { slug: book, passages: 0, examples: [] };
    books[book].passages++;
    if (books[book].examples.length < 3) books[book].examples.push(id);
  }

  const livres = Object.values(books).sort((a, b) => b.passages - a.passages);
  return json({
    success: true,
    personnage,
    total: ids.length,
    livres,
    message: totalMessage(personnage, ids.length, livres.length)
  });
}

function totalMessage(personnage, total, nLivres) {
  return 'Cerveau « ' + personnage + ' » : ' + total + ' passage(s), ' + nLivres + ' livre(s) détecté(s).';
}


async function handleClearBrain(request, env) {
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);
  const { personnage } = await request.json();
  if (!personnage) return json({ error: 'personnage requis.' }, 400);
  const prefix = 'brain_id:' + personnage + ':';
  const ids = [], kvKeys = [];
  let cursor;
  do {
    const list = await env.CASHFLOW_KV.list({ prefix, cursor });
    for (const k of list.keys) { kvKeys.push(k.name); ids.push(k.name.slice(prefix.length)); }
    cursor = list.list_complete ? null : list.cursor;
  } while (cursor);
  let deleted = 0;
  for (let i = 0; i < ids.length; i += 500) {
    const batch = ids.slice(i, i + 500);
    try { await env.VECTORIZE_INDEX.deleteByIds(batch); deleted += batch.length; } catch (e) {}
  }
  for (const key of kvKeys) { try { await env.CASHFLOW_KV.delete(key); } catch (e) {} }
  // Supprimer aussi les textes complets stockés en KV
  let cursor2;
  const textPrefix = 'brain_text:' + personnage + ':';
  do {
    const list2 = await env.CASHFLOW_KV.list({ prefix: textPrefix, cursor: cursor2 });
    for (const k of list2.keys) { try { await env.CASHFLOW_KV.delete(k.name); } catch (e) {} }
    cursor2 = list2.list_complete ? null : list2.cursor;
  } while (cursor2);
  return json({ success: true, deleted, message: `Cerveau « ${personnage} » vidé (${deleted} passages).` });
}

async function handleIngestBook(request, env) {
  // Sécurité : seul un admin avec le bon token peut ingérer
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);
  
  const { id, texte, source, personnage } = await request.json();
  if (!id || !texte || !personnage) return json({ error: 'id, texte et personnage requis.' }, 400);

  // Texte complet en KV (Vectorize metadata max ~10 Ko)
  const fullText = String(texte);
  await env.CASHFLOW_KV.put('brain_text:' + personnage + ':' + id, fullText);
  await env.CASHFLOW_KV.put('brain_id:' + personnage + ':' + id, '1');

  // Embedding : tronquer si énorme (sécurité modèle)
  const embedText = fullText.length > 8000 ? fullText.slice(0, 8000) : fullText;
  const embeddings = await env.AI.run('@cf/baai/bge-m3', {
    text: [embedText]
  });

  // Metadata compacte uniquement (limite Vectorize 10240 bytes)
  const preview = fullText.length > 1500 ? fullText.slice(0, 1500) + '…' : fullText;
  const metaSource = String(source || 'inconnu').slice(0, 200);

  await env.VECTORIZE_INDEX.upsert([{
    id: id,
    values: embeddings.data[0],
    namespace: personnage,
    metadata: {
      texte_original: preview,
      source: metaSource,
      cible: personnage,
      has_full: fullText.length > 1500 ? '1' : '0'
    }
  }]);

  return json({ success: true, message: `Passage ${id} ingéré pour ${personnage}.` });
}

async function handleTTSNyxia(request, env) {
  const { token, text, agent } = await request.json();
  const session = await getSessionOrNull(token, env);
  if (!session) return json({ error: 'Session expirée.' }, 401);
  if (!text) return json({ error: 'Texte requis.' }, 400);

  // Nettoyage défensif : retire tout caractère Unicode "brisé" (moitié d'emoji orpheline)
  const sanitized = text.replace(/[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]/g, '');
  const cleanText = Array.from(sanitized).slice(0, 4500).join('');

  // ── Voie 0 : ElevenLabs (priorité absolue si configuré — normalement NyXia) ──
  const elevenLabsVoiceIdKey = AGENT_ELEVENLABS_VOICE_ID_KEYS[agent];
  const elevenLabsVoiceId = (elevenLabsVoiceIdKey ? env[elevenLabsVoiceIdKey] : null) || ELEVENLABS_VOICE_ID_DEFAULTS[agent] || null;

  if (elevenLabsVoiceId) {
    const cacheKey = 'tts_cache_elevenlabs:' + agent + ':' + (await sha256Hex(cleanText));
    const cachedBuf = await env.CASHFLOW_KV.get(cacheKey, 'arrayBuffer');
    if (cachedBuf) {
      return json({
        success: true,
        proxyUrl: '/api/tts/cached-audio?key=' + encodeURIComponent(cacheKey) + '&token=' + encodeURIComponent(token),
        cached: true
      });
    }

    const elBodyBytes = new TextEncoder().encode(JSON.stringify({
      text: cleanText,
      model_id: 'eleven_multilingual_v2',
      voice_settings: { stability: 0.5, similarity_boost: 0.75 }
    }));

    const resp = await fetch('https://api.elevenlabs.io/v1/text-to-speech/' + elevenLabsVoiceId, {
      method: 'POST',
      headers: { 'xi-api-key': env.ELEVENLABS_API_KEY, 'Content-Type': 'application/json' },
      body: elBodyBytes
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return json({ error: 'Erreur ElevenLabs (' + resp.status + ') : ' + errText.slice(0, 300) }, 502);
    }

    const audioBuf = await resp.arrayBuffer();
    await env.CASHFLOW_KV.put(cacheKey, audioBuf, { expirationTtl: 60 * 60 * 24 * 30 });

    return json({
      success: true,
      proxyUrl: '/api/tts/cached-audio?key=' + encodeURIComponent(cacheKey) + '&token=' + encodeURIComponent(token)
    });
  }

  const voiceIdKey = AGENT_VOICE_ID_KEYS[agent];
  const heygenVoiceId = voiceIdKey ? env[voiceIdKey] : null;

  // ── Voie 1 : HeyGen (en réserve — seulement si ElevenLabs n'est pas configuré) ──
  if (heygenVoiceId) {
    const cacheKey = 'tts_cache:' + agent + ':' + (await sha256Hex(cleanText));
    const cachedUrl = await env.CASHFLOW_KV.get(cacheKey);
    if (cachedUrl) {
      return json({ success: true, proxyUrl: mediaProxyUrl(cachedUrl, token), cached: true });
    }

    const bodyBytes = new TextEncoder().encode(JSON.stringify({ text: cleanText, voice_id: heygenVoiceId }));
    const resp = await fetch('https://api.heygen.com/v3/voices/speech', {
      method: 'POST',
      headers: { 'X-Api-Key': env.HeyGen_KEY, 'Content-Type': 'application/json' },
      body: bodyBytes
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return json({ error: 'Erreur HeyGen (' + resp.status + ') : ' + errText.slice(0, 300) }, 502);
    }
    const data = await resp.json();
    if (data.error) return json({ error: 'HeyGen : ' + data.error }, 502);

    const audioUrl = data.data && data.data.audio_url;
    if (!audioUrl) return json({ error: 'Aucun audio généré.' }, 502);

    await env.CASHFLOW_KV.put(cacheKey, audioUrl, { expirationTtl: 60 * 60 * 24 * 30 });
    return json({ success: true, proxyUrl: mediaProxyUrl(audioUrl, token) });
  }

  // ── Voie 2 : OpenAI (voix distinctes, moins chères, sans clonage) ──
  const openaiVoice = OPENAI_VOICE_MAP[agent];
  if (openaiVoice) {
    const openaiKey = env.OpenAI_KEY || env.OpenAi_KEY || env.OPENAI_API_KEY || '';
    if (!openaiKey) {
      return json({ error: 'Clé OpenAI absente. Secret attendu : OpenAI_KEY (ou OpenAi_KEY).' }, 500);
    }
    const cacheKey = 'tts_cache_openai:' + agent + ':' + openaiVoice + ':' + (await sha256Hex(cleanText));
    const cachedBuf = await env.CASHFLOW_KV.get(cacheKey, 'arrayBuffer');
    if (cachedBuf) {
      return json({
        success: true,
        proxyUrl: '/api/tts/cached-audio?key=' + encodeURIComponent(cacheKey) + '&token=' + encodeURIComponent(token),
        cached: true
      });
    }

    const openaiBodyBytes = new TextEncoder().encode(JSON.stringify({ model: 'tts-1', voice: openaiVoice, input: cleanText, response_format: 'mp3' }));
    const resp = await fetch('https://api.openai.com/v1/audio/speech', {
      method: 'POST',
      headers: { 'Authorization': 'Bearer ' + openaiKey, 'Content-Type': 'application/json' },
      body: openaiBodyBytes
    });

    if (!resp.ok) {
      const errText = await resp.text();
      return json({ error: 'Erreur OpenAI (' + resp.status + ') : ' + errText.slice(0, 300) }, 502);
    }

    const audioBuf = await resp.arrayBuffer();
    await env.CASHFLOW_KV.put(cacheKey, audioBuf, { expirationTtl: 60 * 60 * 24 * 30 });

    return json({
      success: true,
      proxyUrl: '/api/tts/cached-audio?key=' + encodeURIComponent(cacheKey) + '&token=' + encodeURIComponent(token)
    });
  }

  return json({ error: 'Aucune voix configurée pour cet agent.' }, 404);
}

// Sert un audio déjà généré et mis en cache (OpenAI) — jamais le domaine OpenAI exposé.
async function handleTTSCachedAudio(request, env, url) {
  const token = url.searchParams.get('token');
  const session = await getSessionOrNull(token, env);
  if (!session) return new Response('Non autorisé', { status: 401 });

  const key = url.searchParams.get('key');
  if (!key || (!key.startsWith('tts_cache_openai:') && !key.startsWith('tts_cache_elevenlabs:'))) return new Response('Requête invalide', { status: 400 });

  const audio = await env.CASHFLOW_KV.get(key, 'arrayBuffer');
  if (!audio) return new Response('Audio introuvable', { status: 404 });

  return new Response(audio, { status: 200, headers: { 'Content-Type': 'audio/mpeg' } });
}

// ───────────── Personnages partagés (Univers + Studio Prompt, même KV) ─────────────
const PERSONNAGES_KV_KEY = 'nyxia:personnages';
const PERSONNAGES_KV_KEY_LEGACY = 'formations:agents';
const PERSONNAGES_DEFAUT = [
  { code: 'diane', nom: 'Diane', portail: 'lena', custom: false },
  { code: 'nyxia', nom: 'NyXia', portail: 'tous', custom: false },
  { code: 'lena', nom: 'Léna', portail: 'lena', custom: false },
  { code: 'sophia', nom: 'Sophia', portail: 'lena', custom: false },
  { code: 'aletheia', nom: 'Aletheia', portail: 'lena', custom: false },
  { code: 'cassandre', nom: 'Cassandre', portail: 'lena', custom: false },
  { code: 'celeste', nom: 'Céleste', portail: 'lena', custom: false },
  { code: 'selena', nom: 'Séléna', portail: 'selena', custom: false },
  { code: 'kael', nom: 'Kael', portail: 'kael', custom: false },
  { code: 'eric', nom: 'Éric', portail: 'cercles', custom: false },
  { code: 'alex', nom: 'Alex', portail: 'alex', custom: false }
];
function slugPersonnage(nom) {
  return String(nom || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 40);
}
async function lirePersonnages(env) {
  const raw = (await env.CASHFLOW_KV.get(PERSONNAGES_KV_KEY)) || (await env.CASHFLOW_KV.get(PERSONNAGES_KV_KEY_LEGACY));
  let extra = [];
  if (raw) {
    try {
      const parsed = JSON.parse(raw);
      extra = Array.isArray(parsed) ? parsed : (parsed.agents || parsed.personnages || []);
    } catch (_) {}
  }
  const map = {};
  PERSONNAGES_DEFAUT.concat(extra).forEach((p) => {
    const code = String(p.code || p.id || '').toLowerCase().trim();
    if (!code) return;
    map[code] = {
      code,
      nom: p.nom || p.name || code,
      portail: p.portail || p.portal || '',
      custom: !!p.custom || !PERSONNAGES_DEFAUT.some((d) => d.code === code)
    };
  });
  return Object.values(map).sort((a, b) => a.nom.localeCompare(b.nom, 'fr'));
}
async function ecrirePersonnages(env, list) {
  const custom = list.filter((p) => p.custom);
  await env.CASHFLOW_KV.put(PERSONNAGES_KV_KEY, JSON.stringify(custom));
  await env.CASHFLOW_KV.put(PERSONNAGES_KV_KEY_LEGACY, JSON.stringify({ agents: custom }));
}
async function handlePersonnagesList(request, env) {
  const agents = await lirePersonnages(env);
  return json({ success: true, personnages: agents, agents });
}
async function handlePersonnagesSave(request, env) {
  const body = await request.json().catch(() => ({}));
  const nom = String(body.nom || body.name || '').trim();
  const code = slugPersonnage(body.code || nom);
  if (!nom || !code) return json({ error: 'Nom requis.' }, 400);
  const list = await lirePersonnages(env);
  const exist = list.find((p) => p.code === code);
  const row = { code, nom, portail: String(body.portail || body.portal || '').toLowerCase(), custom: true };
  if (exist) Object.assign(exist, row);
  else list.push(row);
  await ecrirePersonnages(env, list);
  return json({ success: true, agent: row, personnage: row });
}
async function handlePersonnagesDelete(request, env) {
  const body = await request.json().catch(() => ({}));
  const code = String(body.code || body.id || '').toLowerCase().trim();
  if (!code) return json({ error: 'code requis.' }, 400);
  const list = (await lirePersonnages(env)).filter((p) => p.code !== code);
  await ecrirePersonnages(env, list);
  return json({ success: true });
}

const FORMATION_AGENTS = new Set(['nyxia','diane','eric','kael','lena','selena','alex']);
function studioAgentOk(agent) {
  return !!(SYSTEM_PROMPTS[agent] || FORMATION_AGENTS.has(agent));
}
const FORMATION_AGENT = 'nyxia';

function formationDocKey(agent, id) { return `formation:${agent}:${id}`; }
function formationProgressKey(email) { return `formation_progress:${String(email || '').toLowerCase()}`; }

function normalizeFormationModules(formation) {
  const mods = Array.isArray(formation && formation.modules) ? formation.modules : [];
  return mods.map((m, i) => ({
    id: (m && m.id) || `m${i + 1}`,
    numero: Number.isFinite(m && m.numero) ? m.numero : (i + 1),
    titre: (m && m.titre) || `Module ${i + 1}`,
    blocs: Array.isArray(m && m.blocs) ? m.blocs : []
  }));
}

function portalSlug(env) {
  return String((env && (env.PORTAIL || env.PORTAL || env.PORTAL_SLUG)) || 'studio').toLowerCase();
}
async function listFormations(env, agent) {
  const out = [];
  const seen = new Set();
  const portail = portalSlug(env);
  const prefixes = ['formation:' + portail + ':' + agent + ':', 'formation:' + agent + ':'];
  try {
    for (const prefix of prefixes) {
      const list = await env.CASHFLOW_KV.list({ prefix });
      for (const k of list.keys) {
        if (seen.has(k.name)) continue;
        const parts = k.name.split(':');
        if (prefix === 'formation:' + portail + ':' + agent + ':') {
          if (parts.length < 4 || parts[1] !== portail || parts[2] !== agent) continue;
        } else if (parts.length !== 3 || parts[1] !== agent) continue;
        seen.add(k.name);
        const raw = await env.CASHFLOW_KV.get(k.name);
        if (!raw) continue;
        let doc; try { doc = JSON.parse(raw); } catch (_) { continue; }
        if (doc && doc.id) out.push(doc);
      }
    }
  } catch (_) { /* KV indisponible : aucune formation */ }
  out.sort((a, b) => (a.ordre || 0) - (b.ordre || 0) || String(a.titre || '').localeCompare(String(b.titre || '')));
  return out;
}

async function getFormation(env, agent, id) {
  if (!id) return null;
  try {
    const keys = [
      'formation:' + portalSlug(env) + ':' + agent + ':' + id,
      formationDocKey(agent, id)
    ];
    for (const k of keys) {
      const raw = await env.CASHFLOW_KV.get(k);
      if (raw) return JSON.parse(raw);
    }
    return null;
  } catch (_) { return null; }
}

function findFormationModule(formation, { moduleId, moduleNumero }) {
  const mods = normalizeFormationModules(formation);
  if (moduleId) { const f = mods.find(m => m.id === moduleId); if (f) return f; }
  if (Number.isFinite(moduleNumero)) { const f = mods.find(m => m.numero === moduleNumero); if (f) return f; }
  return null;
}

async function getFormationProgress(env, email) {
  try {
    const raw = await env.CASHFLOW_KV.get(formationProgressKey(email));
    return raw ? JSON.parse(raw) : {};
  } catch (_) { return {}; }
}

async function setFormationProgress(env, email, formationId, patch) {
  if (!email || !formationId) return null;
  const all = await getFormationProgress(env, email);
  const prev = all[formationId] || {};
  const completed = Array.isArray(prev.completed) ? prev.completed.slice() : [];
  if (patch && patch.completedModuleId && !completed.includes(patch.completedModuleId)) {
    completed.push(patch.completedModuleId);
  }
  all[formationId] = {
    moduleId: patch && patch.moduleId != null ? patch.moduleId : (prev.moduleId || null),
    moduleNumero: patch && patch.moduleNumero != null ? patch.moduleNumero : (prev.moduleNumero != null ? prev.moduleNumero : null),
    blocIndex: patch && patch.blocIndex != null ? patch.blocIndex : (prev.blocIndex || 0),
    completed,
    updatedAt: new Date().toISOString()
  };
  try { await env.CASHFLOW_KV.put(formationProgressKey(email), JSON.stringify(all)); } catch (_) {}
  return all[formationId];
}

// Détecte l'intention de formation dans le message de la personne.
function parseFormationIntent(message) {
  const s = String(message || '').toLowerCase();
  const wantsStart = /(commenc|d[ée]but|d[ée]marr)/.test(s) && /(formation|module|cours|le[çc]on)/.test(s)
    || /(commence la formation|on commence|je commence)/.test(s);
  const wantsResume = /(repren|reprend|continu|o[uù] j'en [ée]tais|l[àa] o[uù] j'|reprendre)/.test(s);
  let moduleNumero = null;
  const m = s.match(/module\s*(\d{1,3})/)
    || s.match(/rendu\s+(?:au|[àa])\s*(?:module\s*)?(\d{1,3})/)
    || s.match(/(?:le[çc]on|[ée]tape)\s*(\d{1,3})/);
  if (m) moduleNumero = parseInt(m[1], 10);
  const wantsFinishModule = /(termin[ée]|j'ai fini|c'est fait|compl[ée]t[ée]|j'ai fait le module)/.test(s);
  return {
    wantsStart, wantsResume, moduleNumero, wantsFinishModule,
    isTraining: wantsStart || wantsResume || moduleNumero != null || wantsFinishModule
  };
}

function resolveActiveFormation(formations, message) {
  if (!formations.length) return null;
  if (formations.length === 1) return formations[0];
  const s = String(message || '').toLowerCase();
  const byId = formations.find(f => f.id && s.includes(String(f.id).toLowerCase()));
  if (byId) return byId;
  const byTitle = formations.find(f => f.titre && f.titre.length > 4 && s.includes(String(f.titre).toLowerCase()));
  return byTitle || null;
}

// Carte légère (titres + modules + progression) — injectée dès qu'une formation existe.
function buildFormationMap(formations, progressAll) {
  if (!formations.length) return '';
  const lines = ['🗺️ CARTE DES FORMATIONS DISPONIBLES (contenu réel approuvé par Diane — n\'invente jamais un module absent d\'ici) :'];
  for (const f of formations) {
    const mods = normalizeFormationModules(f);
    lines.push(`\n📘 Formation « ${f.titre} » (id: ${f.id})${f.description ? ' — ' + f.description : ''}`);
    if (!mods.length) { lines.push('  (aucun module encore disponible)'); }
    else { for (const m of mods) lines.push(`  • Module ${m.numero} — ${m.titre}`); }
    const p = progressAll && progressAll[f.id];
    if (p) {
      const done = Array.isArray(p.completed) ? p.completed.length : 0;
      lines.push(`  ↳ Progression : module en cours = ${p.moduleNumero != null ? p.moduleNumero : '—'} ; modules complétés = ${done}.`);
    } else {
      lines.push('  ↳ Progression : formation pas encore commencée.');
    }
  }
  return lines.join('\n');
}

// Transforme un bloc en texte de prompt. Les adresses média utilisent le repère « ADRESSE … APPROUVÉE »
// afin d'être reprises par les whitelists exactement comme le système vidéo existant.

function prenomOf(session, fallback) {
  const raw = (session && (session.firstname || session.firstName || session.prenom || session.name)) || fallback || '';
  const first = String(raw).trim().split(/\s+/)[0];
  return first || 'toi';
}
function applyPrenom(text, prenom) {
  const pnom = prenom || 'toi';
  return String(text == null ? '' : text)
    .replace(/\{first_name\}/gi, pnom)
    .replace(/\{prenom\}/gi, pnom)
    .replace(/\{prénom\}/gi, pnom);
}

function formationBlocToPromptLines(bloc, idx, prenom) {
  const t = String((bloc && bloc.type) || 'texte').toLowerCase();
  const n = idx + 1;
  const P = (s) => applyPrenom(s, prenom);
  if (t === 'texte') return `BLOC ${n} — TEXTE\n${P(bloc.contenu || '')}`;
  if (t === 'image') return `BLOC ${n} — IMAGE\n${bloc.legende ? 'Légende : ' + bloc.legende + '\n' : ''}ADRESSE IMAGE APPROUVÉE : ${bloc.url || ''}`;
  if (t === 'audio') return `BLOC ${n} — AUDIO MP3\n${bloc.titre ? 'Titre : ' + bloc.titre + '\n' : ''}${bloc.intro ? 'Intro suggérée : ' + bloc.intro + '\n' : ''}ADRESSE AUDIO APPROUVÉE : ${bloc.url || ''}`;
  if (t === 'video' || t === 'vidéo') return `BLOC ${n} — VIDÉO\n${bloc.titre ? 'Titre : ' + bloc.titre + '\n' : ''}${bloc.intro ? 'Intro suggérée : ' + bloc.intro + '\n' : ''}ADRESSE VIDÉO APPROUVÉE : ${bloc.url || ''}`;
  if (t === 'exercice') return `BLOC ${n} — EXERCICE\n${bloc.objectif ? 'Objectif : ' + bloc.objectif + '\n' : ''}Consigne : ${bloc.consigne || bloc.contenu || ''}`;
  if (t === 'intervention') return `BLOC ${n} — INTERVENTION (utilise le prénom ${prenom || 'de la personne'})\n${P(bloc.contenu || '')}`;
  if (t === 'lien') return `BLOC ${n} — LIEN\n${bloc.titre ? 'Titre : ' + bloc.titre + '\n' : ''}${bloc.intro ? 'Intro suggérée : ' + P(bloc.intro) + '\n' : ''}ADRESSE LIEN APPROUVÉE : ${bloc.url || ''}`;
  return `BLOC ${n} — ${t.toUpperCase()}\n${bloc.contenu || bloc.url || ''}`;
}

function buildActiveModuleInjection(formation, module, prenom) {
  const blocs = Array.isArray(module.blocs) ? module.blocs : [];
  const parts = [
    `🎯 MODULE ACTIF — Formation « ${formation.titre} » · Module ${module.numero} : ${module.titre}`,
    `Voici le contenu réel de ce module, dans l'ordre. Fais-le vivre UN BLOC À LA FOIS (jamais tout d'un coup), vérifie la compréhension entre chaque, et aide la personne à appliquer ce qu’elle apprend à SA situation, son projet ou son objectif, selon la spécialité du personnage. Pour un bloc média, copie l'adresse EXACTE après « ADRESSE … APPROUVÉE » dans le marqueur correspondant.`
  ];
  blocs.forEach((b, i) => parts.push('\n' + formationBlocToPromptLines(b, i, prenom)));
  return parts.join('\n');
}

// ───────────── FORMATION VIVANTE — PILOTAGE DÉTERMINISTE ─────────────
// Quand la personne pilote sa formation (commence / continue / module X / suite),
// on livre EXACTEMENT le bon bloc lu depuis l’outil Formations, sans passer par le LLM,
// pour garantir le comportement demandé (Module 1 → 1er bloc ; intervention envoyée telle quelle ; reprise fidèle).

function isHttpsUrl(u) { return /^https:\/\//i.test(String(u || '').trim()); }

// Sécurité des médias de Formation Vivante : seuls les liens HTTPS fournis par le bloc approuvé sont rendus.
function normalizeApprovedVideoUrl(rawUrl) {
  try {
    const parsed = new URL(String(rawUrl || '').trim());
    return parsed.protocol === 'https:' ? parsed.href : '';
  } catch (_) {
    return '';
  }
}

function sanitizeLivingVideoMarkers(content, approvedUrls) {
  const allowed = new Set((approvedUrls || []).map(normalizeApprovedVideoUrl).filter(Boolean));
  let videoAlreadyUsed = false;
  return String(content || '')
    .replace(/\[VIDEO\s*:\s*([^\]\r\n]+)\]/giu, (_marker, rawUrl) => {
      const normalized = normalizeApprovedVideoUrl(rawUrl);
      if (!normalized || !allowed.has(normalized) || videoAlreadyUsed) return '';
      videoAlreadyUsed = true;
      return `[VIDEO: ${normalized}]`;
    })
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

function sanitizeApprovedMediaMarkers(content, markerName, approvedUrls, max) {
  const allowed = new Set((approvedUrls || []).map(normalizeApprovedVideoUrl).filter(Boolean));
  let count = 0;
  const limit = Number.isFinite(max) ? max : 3;
  const re = new RegExp(`\\[${markerName}\\s*:\\s*([^\\]\\r\\n]+)\\]`, 'giu');
  return String(content || '')
    .replace(re, (_marker, rawUrl) => {
      const normalized = normalizeApprovedVideoUrl(rawUrl);
      if (!normalized || !allowed.has(normalized) || count >= limit) return '';
      count++;
      return `[${markerName}: ${normalized}]`;
    })
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Analyse fine de l'intention de pilotage. Retourne { action, moduleNumero } ou { action: null }.
function parseFormationControl(message) {
  const s = String(message || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  let moduleNumero = null;
  const m = s.match(/module\s*(\d{1,3})/)
    || s.match(/rendu\s+(?:au|a)\s*(?:module\s*)?(\d{1,3})/)
    || s.match(/(?:lecon|etape)\s*(\d{1,3})/);
  if (m) moduleNumero = parseInt(m[1], 10);

  const hasFormationWord = /(formation|module|cours|lecon|etape)/.test(s);
  const restart = /(recommenc|depuis le debut|repartir a zero|tout reprendre depuis)/.test(s);
  const resume = /(continue ma formation|continuer ma formation|reprend|reprends|reprendre|ou j'?en etais|la ou j)/.test(s);
  const advance = /(la suite|(^|\s)suite(\s|$|\.|!|\?)|suivant|prochain|prochaine etape|etape suivante|on avance|je suis pret|je suis prete|on continue|continuons|next)/.test(s);
  const start = /(commenc|debut|demarr)/.test(s) && (hasFormationWord || /(ma formation|la formation|le cours)/.test(s));

  let action = null;
  if (moduleNumero != null) action = 'module';
  else if (restart) action = 'restart';
  else if (resume) action = 'resume';
  else if (advance) action = 'advance';
  else if (start) action = 'start';
  return { action, moduleNumero };
}

function pickLatestProgressFormation(formations, progressAll) {
  let best = null, bestTime = -1;
  for (const f of formations) {
    const p = progressAll && progressAll[f.id];
    if (!p) continue;
    const t = Date.parse(p.updatedAt || '') || 0;
    if (t >= bestTime) { bestTime = t; best = f; }
  }
  return best;
}

// Petit repère de navigation (pas du contenu de formation : simple accompagnement du formateur).
function formationNavHint(isLastOfModule, isLastOfFormation) {
  if (isLastOfFormation) return '— Tu arrives au bout de cette formation ✨ Dis-moi « suite » pour la conclure, ou pose-moi tes questions pour appliquer tout ça à ta situation ou à ton projet.';
  if (isLastOfModule) return '— Tu as terminé ce module 🎉 Dis « suite » pour passer au suivant, ou pose-moi tes questions sur cette étape.';
  return '— Quand tu es prêt·e, dis « suite » pour la prochaine étape 💜 (ou pose-moi tes questions).';
}

// Construit la réponse du personnage à partir d’un bloc — uniquement les champs saisis dans l’outil.
function renderFormationBlocForChat(bloc, ctx) {
  const type = String((bloc && bloc.type) || 'texte').toLowerCase();
  const prenom = (ctx && ctx.prenom) || 'toi';
  const parts = [];
  if (type === 'intervention' || type === 'texte') {
    parts.push(applyPrenom(String(bloc.contenu || '').trim(), prenom));
  } else if (type === 'audio') {
    if (bloc.intro) parts.push(String(bloc.intro).trim());
    else if (bloc.titre) parts.push('🎧 ' + String(bloc.titre).trim());
    if (isHttpsUrl(bloc.url)) parts.push('[AUDIO: ' + String(bloc.url).trim() + ']');
  } else if (type === 'video' || type === 'vidéo') {
    if (bloc.intro) parts.push(String(bloc.intro).trim());
    else if (bloc.titre) parts.push('🎬 ' + String(bloc.titre).trim());
    if (isHttpsUrl(bloc.url)) parts.push('[VIDEO: ' + String(bloc.url).trim() + ']');
  } else if (type === 'image') {
    if (bloc.legende) parts.push(String(bloc.legende).trim());
    if (isHttpsUrl(bloc.url)) parts.push('[PHOTO: ' + String(bloc.url).trim() + ']');
  } else if (type === 'exercice') {
    if (bloc.objectif) parts.push('🎯 ' + String(bloc.objectif).trim());
    if (bloc.consigne) parts.push(String(bloc.consigne).trim());
  } else if (type === 'lien') {
    if (bloc.intro) parts.push(applyPrenom(String(bloc.intro).trim(), prenom));
    if (bloc.titre) parts.push('🔗 ' + String(bloc.titre).trim());
    if (isHttpsUrl(bloc.url)) parts.push('[LINK: ' + String(bloc.url).trim() + ']');
  } else {
    parts.push(String(bloc.contenu || bloc.url || '').trim());
  }
  let body = parts.filter(Boolean).join('\n\n').trim();
  if (!body) body = '…';
  const hint = formationNavHint(ctx.isLastOfModule, ctx.isLastOfFormation);
  if (hint) body += '\n\n' + hint;
  return body;
}

// Cœur du pilotage. Retourne { content } à renvoyer directement, ou null si ce n'est pas un tour de pilotage.
async function runFormationControlTurn(env, session, agent, message) {
  const ctrl = parseFormationControl(message);
  if (!ctrl.action) return null;

  const formations = await listFormations(env, agent);
  if (!formations.length) return null; // rien à piloter : on laisse le chat normal répondre
  const progressAll = await getFormationProgress(env, session.email);

  // Choix de la formation concernée.
  let formation = resolveActiveFormation(formations, message);
  if (!formation && (ctrl.action === 'resume' || ctrl.action === 'advance')) {
    formation = pickLatestProgressFormation(formations, progressAll);
  }
  if (!formation) formation = formations[0]; // triées par ordre : la première formation concernée
  if (!formation) return null;

  const modules = normalizeFormationModules(formation);
  if (!modules.length) {
    return { content: `La formation « ${formation.titre} » n'a pas encore de module 💜 Reviens un peu plus tard.` };
  }
  const prog = progressAll[formation.id] || null;

  const idxByNumero = (n) => { const i = modules.findIndex(mm => mm.numero === n); return i >= 0 ? i : null; };
  const idxById = (id) => { const i = modules.findIndex(mm => mm.id === id); return i >= 0 ? i : null; };
  const savedPosition = () => {
    if (!prog) return null;
    let mi = null;
    if (prog.moduleId) mi = idxById(prog.moduleId);
    if (mi == null && prog.moduleNumero != null) mi = idxByNumero(prog.moduleNumero);
    if (mi == null) return null;
    let bi = Number.isFinite(prog.blocIndex) ? prog.blocIndex : 0;
    if (bi < 0) bi = 0;
    const maxBi = Math.max(0, modules[mi].blocs.length - 1);
    if (bi > maxBi) bi = maxBi;
    return { mi, bi };
  };

  let moduleIdx = 0, blocIdx = 0, markCompletedModuleId = null;

  if (ctrl.action === 'module') {
    const mi = idxByNumero(ctrl.moduleNumero);
    if (mi == null) {
      const list = modules.map(mm => `• Module ${mm.numero} — ${mm.titre}`).join('\n');
      return { content: `Le module ${ctrl.moduleNumero} n'existe pas encore dans « ${formation.titre} » 💜\n\nVoici les modules disponibles :\n${list}\n\nDis-moi lequel tu veux ouvrir.` };
    }
    moduleIdx = mi; blocIdx = 0;
  } else if (ctrl.action === 'restart') {
    moduleIdx = 0; blocIdx = 0;
  } else if (ctrl.action === 'start') {
    // Démarrage : s'il existe déjà une progression, on reprend au lieu de recommencer.
    const sp = prog ? savedPosition() : null;
    if (sp) { moduleIdx = sp.mi; blocIdx = sp.bi; } else { moduleIdx = 0; blocIdx = 0; }
  } else if (ctrl.action === 'resume') {
    const sp = savedPosition();
    if (sp) { moduleIdx = sp.mi; blocIdx = sp.bi; } else { moduleIdx = 0; blocIdx = 0; }
  } else if (ctrl.action === 'advance') {
    const sp = savedPosition();
    if (!sp) { moduleIdx = 0; blocIdx = 0; }
    else {
      moduleIdx = sp.mi; blocIdx = sp.bi + 1;
      if (blocIdx > modules[moduleIdx].blocs.length - 1) {
        markCompletedModuleId = modules[moduleIdx].id;
        if (moduleIdx + 1 < modules.length) { moduleIdx += 1; blocIdx = 0; }
        else {
          await setFormationProgress(env, session.email, formation.id, {
            moduleId: modules[moduleIdx].id,
            moduleNumero: modules[moduleIdx].numero,
            blocIndex: Math.max(0, modules[moduleIdx].blocs.length - 1),
            completedModuleId: markCompletedModuleId
          });
          return { content: `Bravo 🎉 Tu as parcouru toute la formation « ${formation.titre} » !\n\nOn peut maintenant reprendre n'importe quel module ensemble, ou appliquer ce que tu viens d’apprendre à ta situation ou à ton projet. Dis-moi « module X » quand tu veux revoir une étape.` };
        }
      }
    }
  }

  const module = modules[moduleIdx];
  if (!module.blocs.length) {
    const list = modules.map(mm => `• Module ${mm.numero} — ${mm.titre}`).join('\n');
    return { content: `Le module ${module.numero} n'a pas encore de contenu 💜\n\nModules disponibles :\n${list}` };
  }
  if (blocIdx > module.blocs.length - 1) blocIdx = module.blocs.length - 1;
  const bloc = module.blocs[blocIdx];

  const content = renderFormationBlocForChat(bloc, {
    isLastOfModule: blocIdx === module.blocs.length - 1,
    isLastOfFormation: (moduleIdx === modules.length - 1) && (blocIdx === module.blocs.length - 1),
    prenom: prenomOf(session)
  });

  // Mémorise la position sur ce bloc précis (permet la reprise fidèle).
  await setFormationProgress(env, session.email, formation.id, {
    moduleId: module.id,
    moduleNumero: module.numero,
    blocIndex: blocIdx,
    completedModuleId: markCompletedModuleId
  });

  // Les marqueurs média sont générés à partir de l'URL exacte du bloc : on les valide par sécurité.
  const t = String(bloc.type || '').toLowerCase();
  const u = isHttpsUrl(bloc.url) ? [String(bloc.url).trim()] : [];
  let safe = sanitizeLivingVideoMarkers(content, (t === 'video' || t === 'vidéo') ? u : []);
  safe = sanitizeApprovedMediaMarkers(safe, 'AUDIO', t === 'audio' ? u : [], 1);
  safe = sanitizeApprovedMediaMarkers(safe, 'PHOTO', t === 'image' ? u : [], 1);
  return { content: safe || content };
}

// ───────────── UTILITAIRES ─────────────


async function getSessionFromToken(env, token) {
  if (!token) return null;
  try {
    const raw = await env.CASHFLOW_KV.get(`session:${token}`);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (_) { return null; }
}

// Liste légère des formations d'un personnage + progression de la personne.
async function handleFormationList(request, env) {
  const body = await request.json().catch(() => ({}));
  const session = await getSessionFromToken(env, body.token);
  if (!session) return json({ error: 'Session expirée. Reconnecte-toi.' }, 401);
  const agent = studioAgentOk(body.agent) ? body.agent : FORMATION_AGENT;

  const formations = await listFormations(env, agent);
  const progress = await getFormationProgress(env, session.email);
  const out = formations.map(f => ({
    id: f.id,
    titre: f.titre || '',
    description: f.description || '',
    modules: normalizeFormationModules(f).map(m => ({
      id: m.id, numero: m.numero, titre: m.titre, blocsCount: (m.blocs || []).length
    })),
    progress: progress[f.id] || null
  }));
  return json({ formations: out });
}

// Contenu structuré complet d'un module (blocs réels, dans l'ordre) — pour un affichage déterministe.
async function handleFormationModule(request, env) {
  const body = await request.json().catch(() => ({}));
  const session = await getSessionFromToken(env, body.token);
  if (!session) return json({ error: 'Session expirée. Reconnecte-toi.' }, 401);
  const agent = studioAgentOk(body.agent) ? body.agent : FORMATION_AGENT;

  const formation = await getFormation(env, agent, body.formationId);
  if (!formation) return json({ error: 'Formation introuvable.' }, 404);
  const moduleNumero = Number.isFinite(body.moduleNumero) ? body.moduleNumero
    : (body.moduleNumero != null ? parseInt(body.moduleNumero, 10) : null);
  const module = findFormationModule(formation, { moduleId: body.moduleId, moduleNumero });
  if (!module) return json({ error: 'Module introuvable.' }, 404);

  return json({
    formation: { id: formation.id, titre: formation.titre || '', description: formation.description || '' },
    module: { id: module.id, numero: module.numero, titre: module.titre, blocs: module.blocs || [] }
  });
}

// Lecture ou écriture de la progression de la personne.
async function handleFormationProgressRoute(request, env) {
  const body = await request.json().catch(() => ({}));
  const session = await getSessionFromToken(env, body.token);
  if (!session) return json({ error: 'Session expirée. Reconnecte-toi.' }, 401);

  if (body.mode === 'set') {
    if (!body.formationId) return json({ error: 'formationId requis.' }, 400);
    const saved = await setFormationProgress(env, session.email, body.formationId, {
      moduleId: body.moduleId != null ? body.moduleId : null,
      moduleNumero: Number.isFinite(body.moduleNumero) ? body.moduleNumero : (body.moduleNumero != null ? parseInt(body.moduleNumero, 10) : null),
      blocIndex: Number.isFinite(body.blocIndex) ? body.blocIndex : (body.blocIndex != null ? parseInt(body.blocIndex, 10) : null),
      completedModuleId: body.completedModuleId || null
    });
    return json({ success: true, progress: saved });
  }

  const progress = await getFormationProgress(env, session.email);
  if (body.formationId) return json({ progress: progress[body.formationId] || null });
  return json({ progress });
}


// ───────────── CONTENUS PRÊTS À PUBLIER — BIBLIOTHÈQUE TEMPLATES ─────────────
const READY_CONTENTS_KEY = 'studio:contenus-prets:v1';
const READY_CONTENTS_MAX = 600;

function cleanReadyText(v, max = 12000) {
  return String(v == null ? '' : v).slice(0, max).trim();
}
function cleanReadyUrl(v) {
  const s = cleanReadyText(v, 1800);
  if (!s) return '';
  try {
    const u = new URL(s);
    return (u.protocol === 'https:' || u.protocol === 'http:') ? u.toString() : '';
  } catch (_) { return ''; }
}
function normalizeReadyContent(input, previous = null) {
  const now = new Date().toISOString();
  const allowedPortails = new Set(['Studio Prompt','Alex','Léna','Séléna','Éric / CashFlow','Kael','Praticiens','NyXia','Autre']);
  const allowedPlatforms = new Set(['Facebook','Instagram','TikTok','Multi-plateforme']);
  const allowedFormats = new Set(['Publication','Story','Reel','Carrousel','Vidéo courte','Autre']);
  const allowedIntentions = new Set(['Créer une conversation','Faire découvrir','Éduquer','Témoignage','Coulisses','Invitation','Autre']);
  const pick = (set, v, fallback) => set.has(v) ? v : (set.has(fallback) ? fallback : [...set][0]);
  return {
    id: cleanReadyText(input?.id || previous?.id || crypto.randomUUID(), 100),
    titre: cleanReadyText(input?.titre || previous?.titre || 'Contenu prêt à publier', 180),
    portail: pick(allowedPortails, input?.portail, previous?.portail || 'Studio Prompt'),
    plateforme: pick(allowedPlatforms, input?.plateforme, previous?.plateforme || 'Multi-plateforme'),
    format: pick(allowedFormats, input?.format, previous?.format || 'Publication'),
    intention: pick(allowedIntentions, input?.intention, previous?.intention || 'Créer une conversation'),
    texte: cleanReadyText(input?.texte ?? previous?.texte ?? '', 20000),
    canvaUrl: cleanReadyUrl(input?.canvaUrl ?? previous?.canvaUrl ?? ''),
    previewUrl: cleanReadyUrl(input?.previewUrl ?? previous?.previewUrl ?? ''),
    actif: input?.actif === false ? false : (previous?.actif === false && input?.actif == null ? false : true),
    ordre: Number.isFinite(Number(input?.ordre)) ? Number(input.ordre) : Number(previous?.ordre || 0),
    createdAt: previous?.createdAt || now,
    updatedAt: now
  };
}
async function readReadyContents(env) {
  if (!env.CASHFLOW_KV) return [];
  const raw = await env.CASHFLOW_KV.get(READY_CONTENTS_KEY);
  if (!raw) return [];
  try { const v = JSON.parse(raw); return Array.isArray(v) ? v : []; } catch (_) { return []; }
}
async function writeReadyContents(env, rows) {
  if (!env.CASHFLOW_KV) throw new Error('CASHFLOW_KV non configuré.');
  await env.CASHFLOW_KV.put(READY_CONTENTS_KEY, JSON.stringify(rows.slice(0, READY_CONTENTS_MAX)));
}
async function handleReadyContents(request, env) {
  const body = await request.json().catch(() => ({}));
  const session = await getSessionFromToken(env, body.token);
  if (!session) return json({ error: 'Session expirée. Reconnecte-toi.' }, 401);
  const rows = (await readReadyContents(env))
    .filter(r => r && r.actif !== false)
    .sort((a,b) => Number(a.ordre||0)-Number(b.ordre||0) || String(b.updatedAt||'').localeCompare(String(a.updatedAt||'')));
  return json({ success: true, contenus: rows });
}
async function handleAdminReadyContents(request, env) {
  if (!await requireAdmin(request, env)) return json({ error: 'Non autorisé.' }, 401);
  const body = await request.json().catch(() => ({}));
  const action = String(body.action || 'list').toLowerCase();
  let rows = await readReadyContents(env);
  if (action === 'list') {
    rows.sort((a,b) => Number(a.ordre||0)-Number(b.ordre||0) || String(b.updatedAt||'').localeCompare(String(a.updatedAt||'')));
    return json({ success: true, contenus: rows });
  }
  if (action === 'save') {
    const input = body.contenu || {};
    const idx = rows.findIndex(r => r && r.id === input.id);
    const prev = idx >= 0 ? rows[idx] : null;
    const saved = normalizeReadyContent(input, prev);
    if (idx >= 0) rows[idx] = saved; else rows.push(saved);
    await writeReadyContents(env, rows);
    return json({ success: true, contenu: saved });
  }
  if (action === 'delete') {
    const id = cleanReadyText(body.id, 100);
    rows = rows.filter(r => r && r.id !== id);
    await writeReadyContents(env, rows);
    return json({ success: true });
  }
  if (action === 'import') {
    const incoming = Array.isArray(body.contenus) ? body.contenus : [];
    for (const item of incoming) {
      const idx = rows.findIndex(r => r && item && r.id === item.id);
      const prev = idx >= 0 ? rows[idx] : null;
      const saved = normalizeReadyContent(item || {}, prev);
      if (idx >= 0) rows[idx] = saved; else rows.push(saved);
    }
    await writeReadyContents(env, rows);
    return json({ success: true, count: rows.length });
  }
  return json({ error: 'Action inconnue.' }, 400);
}

// ───────────── JOURNAL STUDIO PROMPT — KV PAR MEMBRE ─────────────

const JOURNAL_MAX_ENTRIES = 300;
const JOURNAL_TITLE_MAX = 160;
const JOURNAL_CONTENT_MAX = 40000;
const JOURNAL_NOTES_MAX = 10000;

function journalKey(email) {
  return `journal:studio:${String(email || '').trim().toLowerCase()}`;
}

function cleanJournalText(value, max) {
  return String(value == null ? '' : value).slice(0, max);
}

function normalizeJournalEntry(input, previous = null) {
  const allowedTypes = new Set(['Prompt','Idée produit','Script','Offre','Formation','Autre']);
  const allowedPeople = new Set(['Diane','NyXia','Éric','Kael','Léna','Séléna','Alex','Studio']);
  const allowedStatus = new Set(['À tester','Utilisé','À retravailler','Archivé']);
  const allowedResults = new Set(['Pas encore','OK','🔥 Fort']);
  const now = new Date().toISOString();
  const id = cleanJournalText(input?.id || previous?.id || crypto.randomUUID(), 100);
  const type = allowedTypes.has(input?.type) ? input.type : (previous?.type || 'Prompt');
  const personnage = allowedPeople.has(input?.personnage) ? input.personnage : (previous?.personnage || 'Studio');
  const statut = allowedStatus.has(input?.statut) ? input.statut : (previous?.statut || 'À tester');
  const resultat = allowedResults.has(input?.resultat) ? input.resultat : (previous?.resultat || 'Pas encore');
  return {
    id,
    nom: cleanJournalText(input?.nom || previous?.nom || 'Nouvelle entrée', JOURNAL_TITLE_MAX).trim() || 'Nouvelle entrée',
    type, personnage, statut, resultat,
    contenu: cleanJournalText(input?.contenu ?? previous?.contenu ?? '', JOURNAL_CONTENT_MAX),
    notes: cleanJournalText(input?.notes ?? previous?.notes ?? '', JOURNAL_NOTES_MAX),
    createdAt: previous?.createdAt || cleanJournalText(input?.createdAt || now, 40),
    updatedAt: now
  };
}

async function readJournalEntries(env, email) {
  if (!env.CASHFLOW_KV) return [];
  const raw = await env.CASHFLOW_KV.get(journalKey(email));
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (_) { return []; }
}

async function writeJournalEntries(env, email, entries) {
  if (!env.CASHFLOW_KV) throw new Error('CASHFLOW_KV non configuré.');
  await env.CASHFLOW_KV.put(journalKey(email), JSON.stringify(entries.slice(0, JOURNAL_MAX_ENTRIES)));
}

async function handleJournal(request, env) {
  const body = await request.json().catch(() => ({}));
  const session = await getSessionFromToken(env, body.token);
  if (!session || !session.email) return json({ error: 'Session expirée. Reconnecte-toi.' }, 401);

  const action = String(body.action || 'list').toLowerCase();
  let entries = await readJournalEntries(env, session.email);

  if (action === 'list') {
    entries.sort((a, b) => String(b.updatedAt || b.createdAt || '').localeCompare(String(a.updatedAt || a.createdAt || '')));
    return json({ success: true, entries });
  }

  if (action === 'save') {
    const input = body.entry || {};
    const idx = entries.findIndex(e => e && e.id === input.id);
    const previous = idx >= 0 ? entries[idx] : null;
    const saved = normalizeJournalEntry(input, previous);
    if (idx >= 0) entries[idx] = saved;
    else entries.unshift(saved);
    entries.sort((a, b) => String(b.updatedAt || '').localeCompare(String(a.updatedAt || '')));
    await writeJournalEntries(env, session.email, entries);
    return json({ success: true, entry: saved, entries });
  }

  if (action === 'delete') {
    const id = cleanJournalText(body.id, 100);
    if (!id) return json({ error: 'id requis.' }, 400);
    const before = entries.length;
    entries = entries.filter(e => !e || e.id !== id);
    if (entries.length === before) return json({ error: 'Entrée introuvable.' }, 404);
    await writeJournalEntries(env, session.email, entries);
    return json({ success: true, entries });
  }

  if (action === 'import') {
    const incoming = Array.isArray(body.entries) ? body.entries.slice(0, JOURNAL_MAX_ENTRIES) : [];
    if (!incoming.length) return json({ success: true, imported: 0, entries });
    const byId = new Map(entries.filter(Boolean).map(e => [e.id, e]));
    let imported = 0;
    for (const rawEntry of incoming) {
      const previous = rawEntry?.id ? byId.get(rawEntry.id) : null;
      const saved = normalizeJournalEntry(rawEntry || {}, previous || null);
      if (!previous) imported++;
      byId.set(saved.id, saved);
    }
    entries = [...byId.values()]
      .sort((a, b) => String(b.updatedAt || '').localeCompare(String(a.updatedAt || '')))
      .slice(0, JOURNAL_MAX_ENTRIES);
    await writeJournalEntries(env, session.email, entries);
    return json({ success: true, imported, entries });
  }

  return json({ error: 'Action Journal inconnue.' }, 400);
}

