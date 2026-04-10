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