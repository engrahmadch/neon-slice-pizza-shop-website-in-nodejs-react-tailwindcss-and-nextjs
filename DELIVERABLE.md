# Neon Slice Pizza Portfolio - Production Codebase Deliverable

## Project Tree

```text
pizza-shop/
├─ components/
│  ├─ ContactForm.jsx
│  ├─ Footer.jsx
│  ├─ Header.jsx
│  ├─ Hero.jsx
│  ├─ Layout.jsx
│  ├─ LocationMap.jsx
│  ├─ MenuCarousel.jsx
│  └─ Story.jsx
├─ data/
│  └─ menu.json
├─ pages/
│  ├─ _app.js
│  ├─ _document.js
│  └─ index.js
├─ public/
│  └─ images/
│     ├─ hero-image.png
│     ├─ menu-image-1.avif ... menu-image-6.jpg
│     ├─ our-story.avif
│     └─ (no local map image required)
├─ styles/
│  └─ globals.css
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ eslint.config.js
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ README.md
└─ tailwind.config.js
```

## Code Snippets

### package.json

```json
{
  "name": "pizza-portfolio",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "build:static": "cross-env NEXT_OUTPUT_EXPORT=true next build",
    "start": "next start",
    "lint": "eslint .",
    "format": "prettier --write ."
  },
  "dependencies": {
    "@heroicons/react": "^2.2.0",
    "framer-motion": "^11.15.0",
    "next": "14.2.35",
    "react": "18.3.1",
    "react-dom": "18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^8.57.1",
    "@next/eslint-plugin-next": "^14.2.35",
    "autoprefixer": "^10.4.20",
    "cross-env": "^7.0.3",
    "eslint": "^8.57.1",
    "eslint-config-prettier": "^9.1.0",
    "eslint-plugin-react": "^7.37.2",
    "globals": "^15.12.0",
    "postcss": "^8.4.49",
    "prettier": "^3.4.1",
    "tailwindcss": "^3.4.16"
  },
  "engines": {
    "node": ">=18.0.0",
    "npm": ">=9.0.0"
  }
}
```

### next.config.js

```js
/** @type {import('next').NextConfig} */
const isStaticExport = process.env.NEXT_OUTPUT_EXPORT === 'true';

const nextConfig = {
  reactStrictMode: true,
  ...(isStaticExport
    ? {
        output: 'export',
        images: {
          unoptimized: true,
        },
      }
    : {}),
};

module.exports = nextConfig;
```

### postcss.config.js

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF4500',
        secondary: '#0A0A0A',
        accent: '#00FFFF',
      },
      fontFamily: {
        futurist: ['Orbitron', 'sans-serif'],
        body: ['Exo 2', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.4), 0 0 24px rgba(0, 255, 255, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 18px rgba(0, 255, 255, 0.95), 0 0 36px rgba(0, 255, 255, 0.45)',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        glow: 'glow 2.5s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      backgroundImage: {
        'noise-grid':
          'radial-gradient(circle at 1px 1px, rgba(0, 255, 255, 0.08) 1px, transparent 0)',
      },
      boxShadow: {
        neon: '0 0 0 1px rgba(0, 255, 255, 0.35), inset 0 0 28px rgba(0, 255, 255, 0.08)',
      },
    },
  },
  plugins: [],
};
```

### eslint.config.js

```js
const js = require('@eslint/js');
const globals = require('globals');
const reactPlugin = require('eslint-plugin-react');
const nextPlugin = require('@next/eslint-plugin-next');
const prettierConfig = require('eslint-config-prettier');

module.exports = [
  {
    ignores: ['node_modules/**', '.next/**', 'out/**'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: reactPlugin,
      '@next/next': nextPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      'react/jsx-uses-vars': 'error',
      'react/react-in-jsx-scope': 'off',
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
  prettierConfig,
];
```

### styles/globals.css

```css
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;500;600;700&family=Orbitron:wght@500;700;900&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: #ff4500;
  --color-secondary: #0a0a0a;
  --color-accent: #00ffff;
}

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-secondary text-white antialiased;
    font-family: 'Exo 2', sans-serif;
    min-height: 100vh;
    background-image:
      radial-gradient(circle at 14% 16%, rgba(255, 69, 0, 0.2), transparent 40%),
      radial-gradient(circle at 86% 2%, rgba(0, 255, 255, 0.18), transparent 28%),
      linear-gradient(145deg, #050505 0%, #0a0a0a 55%, #101010 100%);
    background-attachment: fixed;
  }

  h1,
  h2,
  h3,
  h4,
  .font-futurist {
    font-family: 'Orbitron', sans-serif;
  }
}

@layer components {
  .section-shell {
    @apply mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8;
  }

  .neon-border {
    box-shadow:
      0 0 0 1px rgba(0, 255, 255, 0.35),
      inset 0 0 28px rgba(0, 255, 255, 0.08);
  }

  .scanlines {
    position: relative;
  }

  .scanlines::after {
    content: '';
    pointer-events: none;
    position: absolute;
    inset: 0;
    background: linear-gradient(
      transparent 0,
      rgba(0, 255, 255, 0.03) 40%,
      transparent 60%
    );
    background-size: 100% 8px;
    mix-blend-mode: screen;
  }
}
```

### pages/_app.js

```js
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
```

### pages/_document.js

```js
import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0A0A0A" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>
      <body className="selection:bg-primary/80 selection:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
```

### pages/index.js

```js
import fs from 'node:fs/promises';
import path from 'node:path';
import Head from 'next/head';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import LocationMap from '../components/LocationMap';
import MenuCarousel from '../components/MenuCarousel';
import Story from '../components/Story';

export default function Home({ menu, menuError }) {
  return (
    <>
      <Head>
        <title>Neon Slice Pizza Shop</title>
        <meta
          name="description"
          content="A futuristic pizza-shop experience built with Next.js, React, and Tailwind CSS."
        />
      </Head>
      <Layout>
        <Hero />
        <MenuCarousel items={menu} menuError={menuError} />
        <Story />
        <LocationMap />
        <ContactForm />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let menu = [];
  let menuError = false;

  try {
    const filePath = path.join(process.cwd(), 'data', 'menu.json');
    const rawMenu = await fs.readFile(filePath, 'utf8');
    const parsed = JSON.parse(rawMenu);

    if (Array.isArray(parsed)) {
      menu = parsed;
    } else {
      menuError = true;
    }
  } catch {
    menuError = true;
  }

  return {
    props: {
      menu,
      menuError,
    },
  };
}
```

### components/Layout.jsx

```jsx
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-secondary text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 bg-noise-grid bg-[size:20px_20px] opacity-40"
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
```

### components/Header.jsx

```jsx
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Story', href: '#story' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-accent/20 bg-black/45 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between">
        <Link href="#home" className="group flex items-center gap-2" aria-label="Go to home">
          <motion.span
            animate={{
              textShadow: [
                '0 0 5px rgba(0,255,255,0.35)',
                '0 0 15px rgba(0,255,255,0.95)',
                '0 0 5px rgba(0,255,255,0.35)',
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            className="font-futurist text-lg font-bold tracking-[0.22em] text-accent"
          >
            NEON SLICE
          </motion.span>
          <span className="h-2 w-2 animate-glow rounded-full bg-primary" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-futurist text-xs uppercase tracking-[0.18em] text-white/85 transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="rounded-lg border border-accent/50 p-2 text-accent md:hidden"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
        </button>
      </div>

      {isOpen && (
        <motion.nav
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="border-t border-accent/20 bg-black/85 px-4 py-3 md:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="space-y-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="block rounded-md px-3 py-2 font-futurist text-sm tracking-[0.14em] text-white/85 transition hover:bg-accent/10 hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
}
```

### components/Hero.jsx

```jsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="home" className="relative isolate flex min-h-screen items-center overflow-hidden pt-20">
      {!imageError ? (
        <Image
          src="/images/hero-image.png"
          alt="Futuristic pizza presentation"
          fill
          priority
          className="object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <div
          role="img"
          aria-label="Hero image unavailable"
          className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary to-black"
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/70 to-secondary" />

      <div className="section-shell relative z-10 py-16 sm:py-20">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-futurist text-xs uppercase tracking-[0.24em] text-accent"
        >
          Futuristic Pizza Experience
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-4 max-w-3xl font-futurist text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl"
        >
          Ignite Your Taste Buds With Neon-Fired Pizza
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg"
        >
          Bold crusts. Electric flavors. A sleek dining atmosphere inspired by midnight city lights
          and precision-crafted recipes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <Link
            href="#contact"
            className="rounded-full bg-primary px-7 py-3 font-futurist text-sm uppercase tracking-[0.16em] text-white transition hover:scale-105 hover:bg-[#ff5e2c]"
          >
            Book Now
          </Link>
          <Link
            href="#menu"
            className="rounded-full border border-accent/70 bg-black/40 px-7 py-3 font-futurist text-sm uppercase tracking-[0.16em] text-accent transition hover:scale-105 hover:bg-accent/10"
          >
            Explore Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
```

### components/MenuCarousel.jsx

```jsx
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

function MenuImage({ src, alt }) {
  const [isBroken, setIsBroken] = useState(false);

  if (isBroken || !src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-secondary/90 p-4 text-center text-sm text-white/80">
        Image unavailable
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      loading="lazy"
      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 28vw"
      className="object-cover transition duration-500 group-hover:scale-105"
      onError={() => setIsBroken(true)}
    />
  );
}

function MenuCard({ item, index }) {
  return (
    <article className="group w-full overflow-hidden rounded-3xl border border-accent/25 bg-black/40 neon-border">
      <div className="relative h-56 w-full bg-secondary/80">
        <MenuImage src={item.image} alt={item.title} />
      </div>
      <div className="flex items-center justify-between px-5 py-4">
        <div>
          <h3 className="font-futurist text-lg font-semibold text-white">{item.title}</h3>
          <p className="mt-1 text-xs uppercase tracking-[0.14em] text-accent">Signature #{index + 1}</p>
        </div>
        <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 font-futurist text-sm text-primary">
          {item.price}
        </span>
      </div>
    </article>
  );
}

export default function MenuCarousel({ items, menuError }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const updateDragLimit = () => {
      if (!viewportRef.current || !trackRef.current) {
        setDragLimit(0);
        return;
      }

      const fullWidth = trackRef.current.scrollWidth;
      const visibleWidth = viewportRef.current.offsetWidth;
      setDragLimit(Math.max(fullWidth - visibleWidth, 0));
    };

    updateDragLimit();
    window.addEventListener('resize', updateDragLimit);

    return () => window.removeEventListener('resize', updateDragLimit);
  }, [items]);

  return (
    <section id="menu" className="section-shell py-20 sm:py-24">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-futurist text-xs uppercase tracking-[0.22em] text-accent">Menu Carousel</p>
          <h2 className="mt-2 font-futurist text-3xl font-bold sm:text-4xl">Electric Flavor Collection</h2>
        </div>
        <p className="max-w-xl text-sm text-white/70">
          Swipe on mobile or drag the desktop carousel to discover our featured creations.
        </p>
      </div>

      {menuError && (
        <div
          role="status"
          className="mb-6 rounded-xl border border-primary/50 bg-primary/10 px-4 py-3 text-sm text-primary"
        >
          Menu unavailable right now. Please check back soon.
        </div>
      )}

      {!menuError && items.length === 0 && (
        <div
          role="status"
          className="rounded-xl border border-accent/40 bg-black/50 px-4 py-3 text-sm text-white/80"
        >
          No menu items are available.
        </div>
      )}

      {items.length > 0 && (
        <>
          <div className="grid gap-4 md:hidden">
            {items.map((item, index) => (
              <MenuCard key={`${item.title}-${index}`} item={item} index={index} />
            ))}
          </div>

          <div ref={viewportRef} className="hidden overflow-hidden rounded-3xl md:block">
            <motion.div
              ref={trackRef}
              drag="x"
              dragConstraints={{ left: -dragLimit, right: 0 }}
              whileTap={{ cursor: 'grabbing' }}
              className="flex cursor-grab gap-6 py-2"
              aria-label="Draggable menu carousel"
            >
              {items.map((item, index) => (
                <div key={`${item.title}-${index}`} className="w-[280px] shrink-0 lg:w-[320px]">
                  <MenuCard item={item} index={index} />
                </div>
              ))}
            </motion.div>
          </div>
        </>
      )}
    </section>
  );
}
```

### components/Story.jsx

```jsx
import Image from 'next/image';
import { useState } from 'react';

export default function Story() {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="story" className="section-shell py-20 sm:py-24">
      <div className="grid items-stretch gap-8 md:grid-cols-2">
        <div className="relative min-h-[320px] overflow-hidden rounded-3xl border border-accent/20">
          {!imageError ? (
            <Image
              src="/images/our-story.avif"
              alt="Chefs preparing pizza in futuristic kitchen"
              fill
              loading="lazy"
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div
              role="img"
              aria-label="Story image unavailable"
              className="absolute inset-0 bg-gradient-to-br from-secondary via-black to-primary/30"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="font-futurist text-xs uppercase tracking-[0.22em] text-accent">Since 2016</p>
            <p className="mt-2 text-sm text-white/90">Blending fire, speed, and precision in every slice.</p>
          </div>
        </div>

        <article className="scanlines rounded-3xl border border-primary/25 bg-black/45 p-6 sm:p-8 lg:p-10 neon-border">
          <p className="font-futurist text-xs uppercase tracking-[0.22em] text-accent">Our Story</p>
          <h2 className="mt-3 font-futurist text-3xl font-bold leading-tight sm:text-4xl">
            Crafted In A Future-Forward Kitchen
          </h2>
          <p className="mt-5 text-white/80">
            Neon Slice started as a midnight experiment by chefs obsessed with precision and bold
            flavor combinations. We engineered a menu where every topping has purpose and every
            bite balances texture, heat, and aroma.
          </p>
          <p className="mt-4 text-white/80">
            Our dough ferments for 48 hours, our sauces are roasted for depth, and our finishing
            process uses rapid high-heat cycles to lock in flavor. The result is a pizza profile that
            feels both familiar and completely new.
          </p>
          <div className="mt-7 inline-flex rounded-full border border-accent/50 bg-accent/10 px-5 py-2 font-futurist text-xs uppercase tracking-[0.18em] text-accent">
            Flavor Meets Innovation
          </div>
        </article>
      </div>
    </section>
  );
}
```

### components/LocationMap.jsx

```jsx
export default function LocationMap() {
  const address = '13th Street. 47 W 13th St, New York, NY 10011';
  const mapEmbedUrl =
    'https://www.google.com/maps?q=47%20W%2013th%20St%2C%20New%20York%2C%20NY%2010011&z=16&output=embed';
  const mapExternalUrl =
    'https://www.google.com/maps/search/?api=1&query=47+W+13th+St,+New+York,+NY+10011';

  return (
    <section id="location" className="section-shell py-20 sm:py-24">
      <div className="mb-7">
        <p className="font-futurist text-xs uppercase tracking-[0.22em] text-accent">Find Us</p>
        <h2 className="mt-2 font-futurist text-3xl font-bold sm:text-4xl">Location</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <div className="relative min-h-[300px] overflow-hidden rounded-3xl border border-accent/25 bg-black/40">
          <iframe
            title="Map preview for 47 W 13th St, New York, NY 10011"
            src={mapEmbedUrl}
            loading="lazy"
            className="absolute inset-0 h-full w-full border-0"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={address}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <aside className="rounded-3xl border border-primary/30 bg-black/50 p-6 neon-border">
          <h3 className="font-futurist text-xl text-white">Visit Neon Slice</h3>
          <p className="mt-3 text-sm text-white/80">{address}</p>
          <p className="mt-2 text-sm text-white/80">Open Daily: 11:00 AM - 11:00 PM</p>
          <p className="mt-2 text-sm text-white/80">Phone: +1 (555) 010-4242</p>
          <a
            href={mapExternalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full border border-accent/50 px-4 py-2 font-futurist text-[10px] uppercase tracking-[0.16em] text-accent transition hover:bg-accent/10"
          >
            Open In Google Maps
          </a>
          <a
            href="#contact"
            className="mt-3 inline-block rounded-full bg-primary px-5 py-2 font-futurist text-xs uppercase tracking-[0.16em] text-white transition hover:bg-[#ff5e2c]"
          >
            Reserve Table
          </a>
        </aside>
      </div>
    </section>
  );
}
```

### components/ContactForm.jsx

```jsx
import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const initialValues = {
  name: '',
  email: '',
  message: '',
};

function validate(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!values.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'A valid email is required.';
  }

  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const submitPayload = async (payload) => {
    setIsSubmitting(true);

    try {
      if (typeof navigator !== 'undefined' && !navigator.onLine) {
        throw new Error('offline');
      }

      setToast({
        type: 'success',
        message: 'Message sent (demo)',
      });
      setValues(initialValues);
      setErrors({});
    } catch {
      setToast({
        type: 'error',
        message: 'Message failed to send in demo mode.',
        retryPayload: payload,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      setToast({
        type: 'error',
        message: 'Please fix the highlighted fields.',
      });
      return;
    }

    await submitPayload(values);
  };

  const updateField = (fieldName) => (event) => {
    setValues((previous) => ({
      ...previous,
      [fieldName]: event.target.value,
    }));
  };

  return (
    <section id="contact" className="section-shell py-20 sm:py-24">
      <div className="mx-auto max-w-3xl rounded-3xl border border-accent/20 bg-black/55 p-6 sm:p-8 neon-border">
        <p className="font-futurist text-xs uppercase tracking-[0.22em] text-accent">Contact</p>
        <h2 className="mt-3 font-futurist text-3xl font-bold sm:text-4xl">Send Us A Message</h2>
        <p className="mt-3 text-white/75">
          This form is UI-only for portfolio demonstration and does not submit to a backend service.
        </p>

        <form className="mt-8 space-y-5" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-white/85">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={values.name}
              onChange={updateField('name')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              className="w-full rounded-xl border border-accent/30 bg-secondary/70 px-4 py-3 text-white outline-none ring-accent/60 transition focus:ring"
            />
            {errors.name && (
              <p id="name-error" className="mt-2 text-sm text-primary">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white/85">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={values.email}
              onChange={updateField('email')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              className="w-full rounded-xl border border-accent/30 bg-secondary/70 px-4 py-3 text-white outline-none ring-accent/60 transition focus:ring"
            />
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-primary">
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-white/85">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={updateField('message')}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              className="w-full rounded-xl border border-accent/30 bg-secondary/70 px-4 py-3 text-white outline-none ring-accent/60 transition focus:ring"
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-sm text-primary">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="rounded-full bg-primary px-6 py-3 font-futurist text-sm uppercase tracking-[0.16em] text-white transition hover:bg-[#ff5e2c] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 24 }}
            role="status"
            className="fixed bottom-5 right-5 z-[60] w-[calc(100%-2.5rem)] max-w-sm rounded-xl border border-accent/40 bg-black/85 p-4 shadow-neon"
          >
            <div className="flex items-start gap-3">
              {toast.type === 'success' ? (
                <CheckCircleIcon className="h-5 w-5 shrink-0 text-accent" />
              ) : (
                <ExclamationTriangleIcon className="h-5 w-5 shrink-0 text-primary" />
              )}

              <p className="text-sm text-white/90">{toast.message}</p>

              <button
                type="button"
                onClick={() => setToast(null)}
                className="ml-auto rounded p-1 text-white/70 transition hover:text-white"
                aria-label="Dismiss notification"
              >
                <XMarkIcon className="h-4 w-4" />
              </button>
            </div>

            {toast.type === 'error' && toast.retryPayload && (
              <button
                type="button"
                onClick={() => submitPayload(toast.retryPayload)}
                className="mt-3 rounded-full border border-accent/50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-accent transition hover:bg-accent/10"
              >
                Retry
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
```

### components/Footer.jsx

```jsx
import {
  CameraIcon,
  GlobeAltIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/outline';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Menu', href: '#menu' },
  { label: 'Story', href: '#story' },
  { label: 'Location', href: '#location' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'Website', href: '#', Icon: GlobeAltIcon },
  { label: 'Instagram', href: '#', Icon: CameraIcon },
  { label: 'Video', href: '#', Icon: PlayCircleIcon },
];

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-accent/20 bg-black/65">
      <div className="section-shell grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="font-futurist text-lg tracking-[0.2em] text-accent">NEON SLICE</h3>
          <p className="mt-3 max-w-sm text-sm text-white/70">
            Futuristic pizza craftsmanship designed for bold flavor seekers.
          </p>
        </div>

        <div>
          <h4 className="font-futurist text-xs uppercase tracking-[0.2em] text-white/85">Quick Links</h4>
          <ul className="mt-4 flex flex-wrap gap-3 text-sm text-white/75">
            {quickLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="rounded-full border border-accent/30 px-3 py-1 transition hover:animate-glow hover:border-accent hover:text-accent"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-futurist text-xs uppercase tracking-[0.2em] text-white/85">Social</h4>
          <div className="mt-4 flex items-center gap-3">
            {socialLinks.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="rounded-full border border-accent/45 bg-accent/5 p-2 text-accent transition hover:animate-glow hover:bg-accent/15"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-accent/15 py-4 text-center text-xs text-white/60">
        Copyright {new Date().getFullYear()} Neon Slice. Built for portfolio showcase.
      </div>
    </footer>
  );
}
```

### data/menu.json

```json
[
  { "title": "Margherita", "price": "$12", "image": "/images/menu-image-1.avif" },
  { "title": "Pepperoni Blast", "price": "$14", "image": "/images/menu-image-2.jpg" },
  { "title": "Truffle Mushroom", "price": "$16", "image": "/images/menu-image-3.avif" },
  { "title": "Vegan Delight", "price": "$13", "image": "/images/menu-image-4.avif" },
  { "title": "Seafood Supreme", "price": "$18", "image": "/images/menu-image-5.jpg" },
  { "title": "Four Cheese", "price": "$15", "image": "/images/menu-image-6.jpg" }
]
```

## README.md Content

````md
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
````

## Optional Design Mockup Description

- Visual language: a black-core interface with electric orange action elements and cyan glow highlights.
- Hero: edge-to-edge cinematic image, heavy-weight futuristic typography, dual CTA cluster.
- Menu: card-based food tiles with neon borders and draggable desktop rail for kinetic interaction.
- Story and location: asymmetrical split cards to avoid template-like layouts and maintain visual rhythm.
- Motion strategy: only meaningful transitions (logo pulse, reveal transitions, carousel drag), avoiding over-animation.
