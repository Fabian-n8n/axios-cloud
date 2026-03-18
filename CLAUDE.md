# CLAUDE.md — Axios Cloud

## Project Overview
Axios Cloud is an enterprise cloud computing services marketing website. Single-page React app with scroll animations, animated stat counters, a grid/particle hero, service tiles, pricing cards, and a global infrastructure visualization.

## Tech Stack
| Layer | Technology |
|-------|-----------|
| Build | Vite 5 ✅ |
| UI Framework | React 18 ✅ |
| Styling | Tailwind CSS + Custom CSS ✅ |
| Components | shadcn/ui ✅ |
| Icons | lucide-react ✅ |

## Design Language
- **Inspired by**: Vercel, Cloudflare, Linear, AWS — dark technical aesthetic
- **Theme**: Deep navy/black backgrounds, electric blue + cyan accents
- **Feel**: Precise, data-driven, high-trust enterprise

## Project Structure
```
/
├── index.html
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css               # CSS vars + global styles
│   ├── lib/utils.js            # cn() helper
│   ├── hooks/
│   │   ├── useScrollReveal.js
│   │   ├── useNavScroll.js
│   │   └── useCounter.js
│   └── components/
│       ├── ui/                 # shadcn/ui primitives
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
├── public/favicon.svg
├── components.json
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## Running Locally
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # preview production build
```

## Styling Notes
- CSS custom properties live in `:root` in `src/index.css`
- Primary accent: `#3b82f6` (blue-500), mapped to `accent` in Tailwind
- Secondary accent: `#06b6d4` (cyan-500), mapped to `accent-cyan`
- Tertiary: `#8b5cf6` (purple), mapped to `accent-purple`
- Reveal animations: `.reveal` + `.stagger-children` driven by `useScrollReveal`
- Grid background: `bg-grid-pattern` + `bg-grid` Tailwind utilities
- Do NOT remove CSS variables — used by both custom CSS and shadcn tokens

## Adding shadcn/ui Components
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add dialog
```

## Key Sections & Notes
- **Hero**: Animated grid + radial glow, no video — pure CSS atmosphere
- **Stats**: `useCounter` hook drives number animations on scroll entry
- **Services**: 6-tile grid, each with icon + gradient border on hover
- **Infrastructure**: CSS-only world map dots visualization
- **Pricing**: Three cards (Starter / Pro / Enterprise), middle card highlighted
- **Tailwind first**: All new sections use Tailwind classes, not new custom CSS
