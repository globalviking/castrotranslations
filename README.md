# castrotranslations.net

Bilingual (PT-BR / EN) static website. Translation, interpretation, and language teaching services.

Hosted on Cloudflare Pages.

## Structure

```
├── index.html / index.en.html         # Home
├── servicos.html / servicos.en.html    # Services
├── sobre.html / sobre.en.html          # About
├── contato.html / contato.en.html      # Contact
├── politicas.html / politicas.en.html   # Policies (refund, cancellation, legal)
├── privacidade.html / privacidade.en.html  # Privacy (LGPD)
├── assets/
│   ├── css/style.css
│   ├── js/lang-switcher.js
│   └── img/logo.svg, favicon.svg
├── sitemap.xml
└── robots.txt
```

## Deploy

GitHub repo connected to Cloudflare Pages. `git push main` triggers automatic deploy.

## Stack

Pure static — HTML5 + CSS3 + vanilla JS. No dependencies, no backend, no CMS.