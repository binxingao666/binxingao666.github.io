# Binxin Gao - Personal Website

A distinctive, narrative-driven personal website for Binxin Gao, PhD researcher at the University of Maryland.

## 🎨 Design Philosophy

This site combines three visual directions:
- **Curator's Study**: Gallery-like sophistication with warm neutrals
- **Ink & Algorithm**: Subtle Chinese cultural elements (Chinese typography, ink-inspired accents)
- **Storyteller's Journal**: Editorial warmth with narrative-driven copy

**Core theme**: *"Pursuing net positive impact, driven by curiosity."*

## 🛠 Tech Stack

- **Build Tool**: Vite (fast dev server, optimized production builds)
- **Languages**: Vanilla HTML, CSS, JavaScript (no heavy frameworks)
- **Fonts**: Google Fonts (Playfair Display, Inter, Noto Serif SC)
- **Deployment**: Static files, deployable anywhere

## 📁 Project Structure

```
personalwebsite/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Design system + all styles
├── js/
│   └── main.js         # Interactions + animations
├── assets/
│   └── images/         # (Add your images here)
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the site.

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

The built files will be in the `dist/` folder.

## 🌐 Deployment

This is a static site that can be deployed to:

### Vercel
```bash
npm i -g vercel
vercel
```

### Netlify
Drag and drop the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

### GitHub Pages
1. Push to GitHub
2. Go to Settings → Pages
3. Set source to `dist/` folder

## ✏️ Customization

### Update Content
All content is in `index.html`. Edit sections directly.

### Change Colors
Modify CSS custom properties in `css/style.css`:
```css
:root {
  --bg-primary: #FAF8F5;
  --accent-primary: #C4785A;
  /* ... */
}
```

### Add Photos
1. Add images to `assets/images/`
2. Reference in HTML: `<img src="/assets/images/your-photo.jpg" alt="Description">`

### Add Blog Posts
Currently a placeholder. For a full blog, consider:
- Static site generators (Astro, 11ty)
- Headless CMS (Contentful, Notion API)

## 🎯 Design Decisions

| Decision | Rationale |
|----------|-----------|
| Warm ivory background | Feels approachable yet sophisticated, avoids clinical white |
| Playfair Display for headlines | Editorial elegance, distinct from tech-generic sans-serifs |
| Chinese name in header | Celebrates bicultural identity without overemphasis |
| Terracotta accent | Warm, earthy, connects to both Western and Eastern palettes |
| Subtle ink stroke decoration | Signature visual motif without being literal or cliché |
| Timeline visualization | Tells the non-linear career story at a glance |
| Email copy-to-clipboard | Modern UX touch, reduces friction |

## ♿ Accessibility

- Semantic HTML with proper heading hierarchy
- Keyboard navigation support
- Focus-visible styles
- Respects `prefers-reduced-motion`
- Good color contrast (WCAG AA)
- Alt text ready for images

## 📄 License

Personal project. Feel free to use as inspiration for your own site.

---

*Crafted with curiosity. © 2026 Binxin Gao.*
