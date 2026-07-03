// Language switcher — ensures correct active state on PT/EN toggle
(function(){
  'use strict';
  function init(){
    var path = window.location.pathname;
    var isEN = path.indexOf('.en.html') !== -1;
    var ptLink = document.querySelector('.lang-switch a[hreflang="pt-BR"]');
    var enLink = document.querySelector('.lang-switch a[hreflang="en"]');
    if (ptLink) {
      ptLink.classList.toggle('active', !isEN);
      if (isEN) ptLink.href = path.replace('.en.html', '.html');
    }
    if (enLink) {
      enLink.classList.toggle('active', isEN);
      if (!isEN) enLink.href = path.replace('.html', '.en.html');
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();