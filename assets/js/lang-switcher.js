// Language switcher — toggles active state on PT/EN links
// The hrefs are hardcoded per-page in the HTML; no JS override needed.
// Detects EN by checking for ".en" in the pathname (handles both
// "/index.en.html" and "/index.en" — Workers strips the .html extension).
(function(){
  'use strict';
  function init(){
    var path = window.location.pathname;
    var isEN = path.indexOf('.en') !== -1;
    var ptLink = document.querySelector('.lang-switch a[hreflang="pt-BR"]');
    var enLink = document.querySelector('.lang-switch a[hreflang="en"]');
    if (ptLink) ptLink.classList.toggle('active', !isEN);
    if (enLink) enLink.classList.toggle('active', isEN);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();