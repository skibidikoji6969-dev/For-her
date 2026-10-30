# a little book for you

A mobile-first, sky-blue flipbook apology site. React + Vite + plain CSS. No backend, no tracking, no external assets (fonts are bundled via @fontsource).

## Run locally
    npm install
    npm run dev        # open the printed URL (also reachable from your phone on the same Wi-Fi)

## Build
    npm run build      # outputs ./dist
    npm run preview    # test the production build

## Deploy free
- Netlify: drag the `dist` folder onto app.netlify.com/drop, or connect a repo (build: `npm run build`, publish: `dist`).
- Cloudflare Pages: build command `npm run build`, output directory `dist`.
- GitHub Pages: push to a repo's `main` branch, then Settings > Pages > Source: GitHub Actions. The included workflow deploys it. (`base: './'` in vite.config.js makes subpaths work.)
