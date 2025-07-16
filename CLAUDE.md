# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development server
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

## Project Architecture

This is a Next.js 15 portfolio website built with TypeScript and CSS Modules. The project follows a modern React architecture with:

### Key Architecture Patterns

- **Data-Driven Content**: All content is stored in JSON files in `src/data/` for easy customization
- **Theme System**: Global theme management via React Context with localStorage persistence
- **CSS Modules**: Component-scoped styling with CSS variables for theming
- **Scroll Animations**: Custom intersection observer hook for viewport-based animations
- **Single Page Application**: All sections rendered on a single page with smooth scrolling

### Core Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata from JSON
│   ├── page.tsx           # Home page with all sections
│   └── globals.css        # Global styles and CSS variables
├── components/
│   ├── layout/            # Layout components (Header, Footer, MainLayout)
│   ├── sections/          # Page sections (Hero, About, Experience, etc.)
│   └── ThemeToggle.tsx    # Theme switching component
├── context/
│   └── ThemeContext.tsx   # Theme state management
├── data/                  # JSON configuration files
├── animations/
│   └── useAnimateOnScroll.ts # Custom animation hook
```

### Data Configuration System

All content is configurable via JSON files in `src/data/`:

- `metadata.json` - SEO metadata, OpenGraph, Twitter cards
- `hero.json` - Hero section content and profile image
- `about.json` - About section, stats, and resume link
- `experience.json` - Work history with company logos
- `skills.json` - Technical skills with SVG icons
- `education.json` - Academic background
- `projects.json` - Portfolio projects with images
- `testimonials.json` - Professional recommendations
- `contact.json` - Contact information and social links
- `header.json` - Navigation configuration
- `footer.json` - Footer content and social links

### Theme System

The application uses a sophisticated theme system:

- CSS variables defined in `globals.css` for light/dark themes
- `ThemeContext` provides global theme state with localStorage persistence
- `data-theme` attribute on document element switches CSS variables
- System preference detection with fallback to light theme

### Animation System

Custom scroll-based animations using `useAnimateOnScroll` hook:

- Intersection Observer API for viewport detection
- Configurable threshold and trigger options
- CSS transitions handle the actual animation effects

### Asset Management

- Profile images: `public/images/`
- Company logos: `public/images/companies/`
- Skill icons: `public/images/skills/` (SVG format)
- Project images: `public/projects/`
- Resume PDFs: `public/resume/`

## EmailJS Integration

Contact form uses EmailJS for client-side email sending. Required environment variables:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
```

## Development Notes

- Uses Inter font via Google Fonts
- Vercel Analytics integrated in layout
- CSS Modules for component styling
- TypeScript strict mode enabled
- ESLint with Next.js configuration
- Responsive design with mobile-first approach

## Content Updates

To update portfolio content, edit the corresponding JSON files in `src/data/`. The website will automatically reflect changes after rebuild. No code changes required for content updates.