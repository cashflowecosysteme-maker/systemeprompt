/* NyXia — ajout non destructif : image de référence + analyse + dictée */
(function(){
  'use strict';
  const $=id=>document.getElementById(id);
  const file=$('nyxia-image-file'),attach=$('nyxia-attach'),eye=$('nyxia-eye'),mic=$('nyxia-mic'),remove=$('nyxia-remove-image'),status=$('nyxia-attachment-status'),input=$('chat-input');
  if(!file||!attach||!eye||!mic||!remove||!status||!input)return;
  window.nyxiaAttachedImage=null;
  window.nyxiaClearAttachedImage=function(){window.nyxiaAttachedImage=null;file.value='';status.textContent='';remove.hidden=true;};
  attach.addEventListener('click',()=>file.click());
  file.addEventListener('change',()=>{
    const f=file.files&&file.files[0];if(!f)return;
    if(!['image/jpeg','image/png','image/webp'].includes(f.type)){status.textContent='Format accepté : JPG, PNG ou WEBP.';file.value='';return;}
    if(f.size>5*1024*1024){status.textContent='Image trop volumineuse : maximum 5 Mo.';file.value='';return;}
    const reader=new FileReader();
    reader.onload=()=>{window.nyxiaAttachedImage=String(reader.result);status.textContent='📎 '+f.name+' — image prête';remove.hidden=false;};
    reader.onerror=()=>{status.textContent='Impossible de lire cette image.';};reader.readAsDataURL(f);
  });
  remove.addEventListener('click',()=>window.nyxiaClearAttachedImage());
  eye.addEventListener('click',()=>{
    if(!window.nyxiaAttachedImage){status.textContent='Joins d’abord une image avec 📎.';return;}
    const instruction='Analyse précisément cette image : sujet, composition, cadrage, perspective, lumière, couleurs, textures, arrière-plan, style, éléments distinctifs et texte visible. Décris uniquement ce qui est observable, sans inventer de détails. Termine par une description exploitable pour créer un prompt visuel.';
    input.value=input.value.trim()?input.value.trim()+'\n\n'+instruction:instruction;
    input.dispatchEvent(new Event('input',{bubbles:true}));input.focus();
  });
  const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SpeechRecognition){mic.title='Dictée vocale non prise en charge par ce navigateur';mic.setAttribute('aria-label','Dictée indisponible');mic.disabled=true;mic.style.opacity='.45';return;}
  let rec=null,recording=false;
  mic.addEventListener('click',()=>{
    if(recording&&rec){rec.stop();return;}
    rec=new SpeechRecognition();rec.lang='fr-CA';rec.interimResults=false;rec.continuous=false;
    rec.onstart=()=>{recording=true;mic.textContent='⏹️';status.textContent='🎙️ Dictée en cours…';};
    rec.onresult=e=>{const words=Array.from(e.results).map(r=>r[0].transcript).join(' ').trim();if(words){input.value+=(input.value.trim()?' ':'')+words;input.dispatchEvent(new Event('input',{bubbles:true}));input.focus();}};
    rec.onerror=e=>{status.textContent='Dictée indisponible : '+e.error;};
    rec.onend=()=>{recording=false;mic.textContent='🎙️';if(status.textContent==='🎙️ Dictée en cours…')status.textContent='Dictée terminée.';};
    try{rec.start();}catch(e){status.textContent='Microphone indisponible.';}
  });
})();
