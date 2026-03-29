# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
npm run dev      # Development server (http://localhost:3000)
npm run build    # Production build (ESLint + TypeScript errors will fail the build)
npm start        # Start production server
npm run lint     # Lint code
```

No test framework is configured.

## Project Overview

Next.js 16 portfolio website (React 19, TypeScript, CSS Modules). Single-page app with all sections rendered on one page. Deployed to Vercel.

### Key Architecture

- **Data-Driven Content**: All content lives in JSON files in `src/data/`. Edit JSON to update content — no code changes needed. Each section component imports its corresponding JSON file directly (e.g., `import skillsJson from '@/data/skills.json'`).
- **Theme System**: `ThemeContext` (React Context) manages light/dark toggle. Persists to `localStorage`, falls back to system preference. Switches via `data-theme` attribute on `<html>`, which toggles CSS variables defined in `globals.css`.
- **Scroll Animations**: `useAnimateOnScroll` hook (`src/animations/`) uses Intersection Observer to drive the `AnimatedElement` wrapper component. Supports animation types: `fade-up`, `fade-down`, `fade-left`, `fade-right`, `zoom-in`, `zoom-out` with configurable delay/duration/threshold via CSS custom properties (`--delay`, `--duration`).
- **Layout**: `RootLayout` (server) → `ThemeProvider` (client) → `MainLayout` (client: Header + main + Footer). All section components are client components (`'use client'`).

### Section Rendering Order

`src/app/page.tsx` renders all sections in this order: Hero → About → Experience → Skills → Education → Projects → Testimonials → Contact. Each section is a self-contained component in `src/components/sections/{name}/`.

### CSS Variable System

`globals.css` defines the design token system used across all CSS Modules:
- Colors: `--primary`, `--secondary`, `--background`, `--foreground`, `--border`
- Spacing scale: `--space-1` through `--space-24`
- Typography: `--font-sans` (Inter), `--font-mono` (JetBrains Mono)
- Transitions: `--transition-fast`, `--transition-normal`, `--transition-slow`
- Border radius: `--radius-sm` through `--radius-full`
- Dark mode overrides via `[data-theme="dark"]` selector

### Component Patterns

- **Section filtering**: Skills and Projects sections use `activeCategory` state with filter buttons to show/hide items by category.
- **Testimonials carousel**: Auto-rotates every 8 seconds, pauses on manual dot selection, auto-resumes after 10 seconds of inactivity.
- **Hero typing animation**: Progressively displays text character-by-character (80ms/char) with blinking cursor.
- **Contact form**: Real-time validation, 60-second cooldown after successful submission.

### Path Alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`). Always use `@/` imports.

### Build Configuration

`next.config.ts` enforces strict TypeScript builds (`ignoreBuildErrors: false`). ESLint is run separately via `eslint .` (Next.js 16 removed built-in eslint config from `next.config.ts`). Security headers (CSP, HSTS, X-Frame-Options, etc.) are configured in `next.config.ts` `headers()`.

### ESLint Configuration

`eslint.config.mjs` uses native flat config from `eslint-config-next@16` (no `FlatCompat` wrapper). Lint command: `npm run lint` → `eslint .`.

### Asset Locations

- Profile images: `public/images/`
- Company logos: `public/images/companies/`
- Skill icons: `public/images/skills/` (SVG)
- Project images: `public/projects/`
- Resume PDFs: `public/resume/`

## EmailJS Integration

Contact form uses EmailJS for client-side email. Required env vars in `.env.local`:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

Template variables: `{{name}}`, `{{email}}`, `{{subject}}`, `{{message}}`

## PM2 Services

| Port | Name | Type |
|------|------|------|
| 3000 | portfolio-3000 | Next.js |

**Terminal Commands:**
```bash
pm2 start ecosystem.config.cjs   # First time
pm2 start all                    # After first time
pm2 stop all / pm2 restart all
pm2 start portfolio-3000 / pm2 stop portfolio-3000
pm2 logs / pm2 status / pm2 monit
pm2 save                         # Save process list
pm2 resurrect                    # Restore saved list
```
