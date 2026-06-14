# Nietzsche Ressentiment Site

En svensk Next.js-sajt om Friedrich Nietzsches begrepp ressentiment. Projektet
använder TypeScript, Tailwind CSS och en filbaserad MDX-blogg.

## Kom igång

```bash
npm install
npm run dev
```

Öppna sedan `http://localhost:3000`.

## Struktur

- `app/` innehåller App Router-sidor.
- `content/blog/` innehåller MDX-inlägg med frontmatter. Inlägg publiceras som rot-URL:er, exempelvis `/ressentiment-idag`.
- `components/` innehåller återanvändbara UI-komponenter.
- `public/images/nietzsche-hero.png` är den genererade hero-bilden.

## Blogg

Lägg till ett nytt inlägg som `.mdx` i `content/blog/`:

```mdx
---
title: "Titel"
description: "Kort ingress"
date: "2026-06-14"
readingTime: "5 min lasning"
---

Din text här.
```
