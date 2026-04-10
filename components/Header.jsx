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