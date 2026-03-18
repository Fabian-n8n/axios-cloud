# Axios Cloud

> Enterprise cloud infrastructure built for the next generation.
> Infinite scale. Zero latency. Absolute reliability.

---

## Overview

Axios Cloud is a high-end marketing landing page for a cloud computing platform, inspired by the design language of Vercel, Cloudflare, and Linear. Built with React 18, Vite 5, Tailwind CSS, and shadcn/ui.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Build | Vite 5 |
| UI Framework | React 18 |
| Styling | Tailwind CSS + Custom CSS |
| Components | shadcn/ui |
| Icons | lucide-react |
| Fonts | Inter + JetBrains Mono (Google Fonts) |

## Project Structure

```
/
├── index.html              # Vite entry point
├── src/
│   ├── main.jsx            # React root
│   ├── App.jsx             # Root component, mounts all sections
│   ├── index.css           # Global styles + CSS custom properties
│   ├── lib/
│   │   └── utils.js        # cn() helper for Tailwind class merging
│   ├── hooks/
│   │   ├── useScrollReveal.js   # IntersectionObserver reveal animation
│   │   ├── useNavScroll.js      # Navbar scroll-state
│   │   └── useCounter.js        # Animated number counter
│   └── components/
│       ├── ui/                  # shadcn/ui base components
│       │   ├── button.jsx
│       │   ├── badge.jsx
│       │   └── card.jsx
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── LogoMarquee.jsx
│       ├── Stats.jsx
│       ├── Services.jsx
│       ├── Features.jsx
│       ├── Infrastructure.jsx
│       ├── Pricing.jsx
│       ├── Testimonials.jsx
│       ├── CTABanner.jsx
│       └── Footer.jsx
├── public/
│   └── favicon.svg
├── components.json         # shadcn/ui configuration
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── package.json
```

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Design System

### Colors
- **Background**: `#060a14` (deep navy black)
- **Elevated**: `#0a1020`
- **Card**: `#0d1528`
- **Accent Blue**: `#3b82f6`
- **Accent Cyan**: `#06b6d4`
- **Accent Purple**: `#8b5cf6`

### Typography
- **Body**: Inter (300–900 weights)
- **Mono/Code**: JetBrains Mono

### Design Tokens
CSS custom properties live in `:root` in `src/index.css`. All colors, spacing, and shadows are tokenized and mapped to Tailwind.

## Adding shadcn/ui Components

```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
npx shadcn@latest add badge
```

Components land in `src/components/ui/`.

## Page Sections

1. **Navbar** — Sticky nav with blur backdrop, CTA button
2. **Hero** — Full-screen animated grid background, headline, CTAs
3. **Logo Marquee** — Scrolling enterprise customer logos
4. **Stats** — Animated counters: uptime, regions, latency, customers
5. **Services** — Core service tiles: Compute, Storage, Network, AI/ML, Security, Database
6. **Features** — Deep feature highlights with visual accents
7. **Infrastructure** — Global network map / data center visualization
8. **Pricing** — Three-tier pricing cards
9. **Testimonials** — Enterprise customer quotes
10. **CTA Banner** — Sign-up call to action
11. **Footer** — Links, legal, social
