// Language switcher — toggles between X.html and X.en.html
(function(){
  'use strict';
  function init(){
    var path = window.location.pathname;
    var isEN = path.indexOf('.en.html') !== -1;
    // Detect current page base (strip .en.html or .html)
    var base;
    if (isEN) {
      base = path.replace('.en.html', '.html');
    } else {
      base = path;
    }
    // Build opposite URL
    var opposite;
    if (isEN) {
      opposite = base; // EN → PT
    } else {
      // PT → EN: replace .html with .en.html
      opposite = base.replace('.html', '.en.html');
    }
    // Update lang switcher links
    var ptLink = document.querySelector('.lang-switch a[hreflang="pt-BR"]');
    var enLink = document.querySelector('.lang-switch a[hreflang="en"]');
    if (ptLink) ptLink.href = isEN ? opposite : path;
    if (enLink) enLink.href = isEN ? path : opposite;
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();