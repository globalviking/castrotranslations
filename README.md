# castrotranslations.net

Bilingual (PT-BR / EN) static website for Patricia Castro — translation, interpretation, and language teaching services.

Legal entity: Patricia de Paiva e Castro, CNPJ 35.555.848/0001-61.

Hosted on Cloudflare Pages.

## Structure

```
├── index.html / index.en.html           # Home
├── servicos.html / servicos.en.html      # Services
├── sobre.html / sobre.en.html            # About
├── contato.html / contato.en.html        # Contact
├── politicas.html / politicas.en.html    # Policies (refund, cancellation, legal)
├── privacidade.html / privacidade.en.html # Privacy (LGPD)
├── 404.html / 404.en.html               # Custom 404
├── _redirects                            # Cloudflare Pages routing
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