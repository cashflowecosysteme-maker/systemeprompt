/* NyXia — signalement des limites Nano Banana Pro sans altérer le moteur actuel. */
(function(){
  'use strict';
  const sel=document.getElementById('nyxiaImageModel'),transparent=document.getElementById('transparent');
  if(!sel||!transparent)return;
  const info=document.createElement('div');info.style.cssText='font-size:11px;color:#e8cf9e;margin:-5px 0 10px';
  sel.closest('.field').insertAdjacentElement('afterend',info);
  function sync(){
    const nano=sel.value==='nano-banana-pro';
    transparent.disabled=nano;
    if(nano)transparent.checked=false;
    info.textContent=nano?'Nano Banana Pro : génération et modification. Fond transparent non garanti. Vérifie les coûts par génération.':'';
  }
  sel.addEventListener('change',sync);sync();
})();
