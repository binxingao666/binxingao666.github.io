# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Personal academic website for Binxin Gao (PhD student at UMD). Built with vanilla HTML/CSS/JS and Vite. No frameworks.

## Commands

```bash
npm install        # Install dependencies (just Vite)
npm run dev        # Dev server at localhost:5173
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

## Deployment

Pushes to `main` trigger a GitHub Actions workflow (`.github/workflows/deploy.yml`) that builds with Vite and deploys to GitHub Pages. The `dev/bx` branch is used for development.

## Architecture

Single-page site with three source files:

- **`index.html`** — All content lives here. Sections: Hero, About, Projects, Publications, Service, Blog (placeholder), Contact. Content updates are made by editing this file directly.
- **`css/style.css`** — Complete design system. CSS custom properties (design tokens) defined in `:root` for colors, typography, spacing, transitions. BEM naming convention throughout (e.g., `.project-card__title`, `.nav__link--active`).
- **`js/main.js`** — Scroll-driven nav hide/show, IntersectionObserver fade-in animations, mobile menu toggle, email copy-to-clipboard, smooth scrolling, reduced-motion support.

## Key Conventions

- CSS uses BEM methodology: `.block__element--modifier`
- Design tokens are all in `:root` custom properties at the top of `style.css`
- Asset paths use root-relative URLs in HTML/CSS (e.g., `/css/style.css`, `/assets/images/...`) with Vite's `base: './'` resolving them for production
- Fonts loaded from Google Fonts: Playfair Display (headings), Inter (body), Noto Serif SC / Noto Sans SC (Chinese text)
- Responsive breakpoints: 1024px, 768px, 480px
- Section backgrounds use faint game-inspired imagery (`journey-bg.png`, `cosmos-bg.png`) as subtle Easter eggs
