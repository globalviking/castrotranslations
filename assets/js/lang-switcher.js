// Language switcher — ensures correct active state on PT/EN toggle
// Only overrides href when the pathname actually contains .html/.en.html;
// otherwise keeps the hardcoded href from the HTML (handles root "/" and clean URLs).
(function(){
  'use strict';
  function init(){
    var path = window.location.pathname;
    var isEN = path.indexOf('.en.html') !== -1;
    var ptLink = document.querySelector('.lang-switch a[hreflang="pt-BR"]');
    var enLink = document.querySelector('.lang-switch a[hreflang="en"]');
    if (ptLink) {
      ptLink.classList.toggle('active', !isEN);
      if (isEN) {
        var newHref = path.replace('.en.html', '.html');
        if (newHref !== path) ptLink.href = newHref;
      }
    }
    if (enLink) {
      enLink.classList.toggle('active', isEN);
      if (!isEN) {
        var newHref = path.replace('.html', '.en.html');
        if (newHref !== path) enLink.href = newHref;
      }
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();