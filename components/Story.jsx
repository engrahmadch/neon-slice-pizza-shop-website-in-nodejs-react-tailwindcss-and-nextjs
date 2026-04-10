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