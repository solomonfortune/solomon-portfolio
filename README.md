# Solomon Buwule — Portfolio

A premium, minimalist personal portfolio built with React + Vite. Four sections, dark/light theme, scroll-triggered motion, and a live Medium feed.

## Stack

- React 19 + Vite
- Plain JavaScript (no TypeScript)
- Modern CSS with CSS custom properties (no CSS framework)
- [Framer Motion](https://www.framer.com/motion/) for animation
- [lucide-react](https://lucide.dev/) for icons (GitHub/LinkedIn are hand-rolled SVGs — recent lucide-react versions dropped brand glyphs)

## Getting started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Project structure

```
src/
  components/     Reusable UI pieces (cards, nav, icons, theme toggle, Reveal wrapper)
  sections/       The four page sections (Hero, About, Experience, BlogContact)
  context/        Theme context (dark/light, persisted to localStorage)
  hooks/          useMediumFeed — fetches your Medium RSS feed
  styles/         theme.css (design tokens) + global.css (base styles, utilities)
  utils/data.js   All portfolio content lives here — copy, skills, experience, projects
```

## Customizing content

Almost everything you'd want to change lives in **`src/utils/data.js`**: your bio, skills, experience, projects, and contact links. Edit that one file for most content updates.

## Adding your real photo

Right now the hero uses a generated placeholder (initials in a gradient frame) in `src/components/Portrait.jsx`. To swap in a real photo:

1. Drop your image into `src/assets/` (e.g. `portrait.jpg`)
2. In `Portrait.jsx`, replace the `<svg>` block inside `.portrait-frame` with:
   ```jsx
   import portraitImg from '../assets/portrait.jpg';
   // ...
   <img src={portraitImg} alt="Solomon Buwule" />
   ```

## Medium blog integration

The Blog & Contact section fetches your latest 3 posts live from `https://medium.com/@solomonbuwule` via the public [rss2json](https://rss2json.com/) API (no key required for low volume). If the request fails for any reason (rate limits, network restrictions, ad blockers), it falls back to a single "Read my latest writing on Medium" card so the section never looks broken.

If you later want guaranteed reliability, consider:
- Signing up for a free rss2json API key and adding it as a query param in `src/hooks/useMediumFeed.js`
- Or pre-fetching posts at build time with a small script instead of client-side fetching

## Theme system

Dark mode is the default identity; light mode is a full alternate palette (see `src/styles/theme.css`). Theme choice is stored in `localStorage` under `portfolio-theme`, and a small inline script in `index.html` applies it before React mounts, so there's no flash of the wrong theme on load.

## Deployment

### Vercel
```bash
npm install -g vercel
vercel
```
Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.

### Netlify
```bash
npm run build
```
Drag the `dist/` folder into Netlify, or connect the repo with build command `npm run build` and publish directory `dist`.

### GitHub Pages
1. `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": { "deploy": "npm run build && gh-pages -d dist" }
   ```
3. Set `base: '/<repo-name>/'` in `vite.config.js`
4. `npm run deploy`

## Accessibility & performance notes

- All interactive elements have visible focus states (`:focus-visible`)
- `prefers-reduced-motion` is respected — animations shorten to near-zero for users who request it
- Semantic landmarks (`header`, `main`, `section`, `footer`) and labeled nav/buttons throughout
- No layout-shifting web fonts beyond the initial load; system font fallbacks are in place
