# Neon Slice Pizza Portfolio

## Project Overview

Neon Slice is a static, portfolio-ready pizza-shop website built with Next.js, React, and Tailwind CSS.
It uses a modern futuristic aesthetic with electric orange, deep black, and neon cyan branding.

The site includes:

- Sticky animated header
- Full-screen hero with CTA
- Responsive menu carousel with mobile fallback grid
- Story section
- Static location map section
- Contact form UI (no backend)
- Footer with social and quick links

## Tech Stack

- Node.js (>=18)
- Next.js 14 (Pages Router + SSG)
- React 18+
- Tailwind CSS
- Framer Motion
- Heroicons
- ESLint + Prettier
- PostCSS + Autoprefixer

## Setup

```bash
npm install
```

Place the image assets in `public/images`:

- `hero-image.png`
- `menu-image-1.avif`
- `menu-image-2.jpg`
- `menu-image-3.avif`
- `menu-image-4.avif`
- `menu-image-5.jpg`
- `menu-image-6.jpg`
- `our-story.avif`

The location section uses a real embedded Google Maps preview for:

- `13th Street. 47 W 13th St, New York, NY 10011`

## Development

```bash
npm run dev
```

Open `http://localhost:3000`.

## Build

```bash
npm run build
```

To start a production server:

```bash
npm run start
```

Lint and format:

```bash
npm run lint
npm run format
```

## Deploy

### Vercel

- Import repository into Vercel.
- Framework preset: Next.js.
- Build command: `npm run build`.

### Static Export Hosts

For pure static-only hosts, run:

```bash
npm run build:static
```

This generates an export-ready `out` directory using `output: 'export'` mode.

## Design Decisions

- Uses Pages Router with `getStaticProps` for static content and predictable SSG output.
- Menu data is loaded from `data/menu.json` at build time.
- Neon visual language is achieved via Tailwind theme extensions and minimal custom CSS.
- Componentized architecture keeps sections isolated and reusable.

## Accessibility Notes

- Semantic HTML landmarks and heading structure.
- Keyboard-accessible links and buttons.
- Form fields include labels and error states with ARIA attributes.
- Sufficient visual contrast against dark backgrounds.

## Performance Targets

- Lighthouse goals: >=90 for Performance, Accessibility, Best Practices, and SEO.
- Non-critical media is lazy loaded.
- SSG and static JSON data keep runtime overhead low.

## Browser Support

- Latest Chrome, Firefox, Safari, Edge.
- Graceful degradation for legacy browsers (reduced visual effects when unsupported).

## Suggested Portfolio Validation

- Test responsive layouts at 320px, 480px, 768px, 1024px, 1280px, and 1440px.
- Verify image fallback cards by temporarily renaming one file in `public/images`.
- Toggle network offline mode in DevTools and submit the contact form to test retry flow.