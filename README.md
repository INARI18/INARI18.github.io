# Portfolio

Vite + React + TypeScript. Deploy em GitHub Pages via Actions.

## Dev

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck
npm run build
npm run preview
```

## Estrutura

- `src/styles/colors.css` — paleta (CSS vars). Mude aqui pra trocar cores.
- `src/styles/global.css` — reset, scanlines, primitives (`.container`, `.sec-title`…).
- `src/styles/animations.css` — `@keyframes` compartilhados + scroll-reveal.
- `src/data/*` — conteúdo editável (experiência, projetos, roles, stack, socials).
- `src/components/*` — um diretório por componente com `.tsx` + `.module.css`.
- `src/hooks/*` — `useTypewriter`, `useScrollReveal`, `useStars`.

## Deploy

Repo deve ser criado no GitHub como `INARI18.github.io` (user page).
Push na `main` dispara o workflow em `.github/workflows/deploy.yml`.
Habilitar Settings → Pages → Source = **GitHub Actions**.
Site sai em `https://inari18.github.io/`.
