# castrotranslations.net

Bilingual (PT-BR / EN) static website for Patricia Castro — translation, interpretation, and language teaching services.

Hosted on Cloudflare Workers (static assets).

## Structure

```
├── index.html / index.en.html           # Home
├── servicos.html / servicos.en.html      # Services
├── sobre.html / sobre.en.html            # About
├── contato.html / contato.en.html        # Contact
├── politicas.html / politicas.en.html    # Policies (refund, cancellation, legal)
├── privacidade.html / privacidade.en.html # Privacy (LGPD)
├── 404.html / 404.en.html               # Custom 404
├── wrangler.jsonc                        # Cloudflare Workers config
├── assets/
│   ├── css/style.css
│   ├── js/lang-switcher.js
│   └── img/logo.svg, favicon.svg
├── sitemap.xml
└── robots.txt
```

## Deploy

GitHub repo + Cloudflare Workers. `npx wrangler deploy` from project root after `git pull`.

## Stack

Pure static — HTML5 + CSS3 + vanilla JS. No dependencies, no backend, no CMS.