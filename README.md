# loguntsovae.digital — Portfolio

A production-ready, single-page portfolio for Aleksei Loguntsov (Senior Backend Engineer). Built with React + Vite + TypeScript, styled with TailwindCSS, animated with Framer Motion, and localized via react-i18next (EN primary, RU secondary).

## Features

- Lightning-fast Vite + React + TypeScript
- TailwindCSS with clean, minimalist UI (Inter font)
- Framer Motion fade/slide animations
- i18n with EN (default) and RU toggle
- Real-time IT experience counter (from Sep 2018)
- Sections: Hero, About, Skills (accordion), Projects (expandable), Looking For, Contacts
- Ready for Netlify/Vercel deploy (SPA redirects included)

## Project Structure

```
/src
  /assets
  /components
  /hooks
  /locales
  /sections
/public
  _redirects
index.html
package.json
postcss.config.js
tailwind.config.js
tsconfig.json
vite.config.ts
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm 9+

### Install

```bash
npm install
```

### Run in dev

```bash
npm run dev
```

Open http://localhost:5173

### Production build

```bash
npm run build
npm run preview
```

### Lint and format

```bash
npm run lint
npm run format
```

## Deploy

- Vercel: Import this repo; framework = Vite; build command `npm run build`; output dir `dist`.
- Netlify: New site from Git; build = `npm run build`; publish = `dist`. SPA routing is handled via `public/_redirects`.

No special base path needed (site root is "/").

## Customization

- Replace `src/assets/profile-placeholder.svg` with your photo, and update import in `Hero` if needed.
- Put your PDF resume at `public/resume.pdf` (the "Resume" button points there).
- Update links in `Projects` and `Contacts` sections.
- Edit copy in `src/locales/en.json` and `src/locales/ru.json`.

## License

MIT — see `LICENSE`.