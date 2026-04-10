import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = () => {
    if (!viewportRef.current) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const { scrollLeft, scrollWidth, clientWidth } = viewportRef.current;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  };

  const scrollCards = (direction) => {
    if (!viewportRef.current) {
      return;
    }

    const distance = Math.max(viewportRef.current.clientWidth * 0.8, 280);
    viewportRef.current.scrollBy({
      left: direction * distance,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    updateScrollState();

    if (!viewportRef.current) {
      return undefined;
    }

    const viewport = viewportRef.current;

    viewport.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      viewport.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [items]);

  return (
    <section id="menu" className="section-shell py-20 sm:py-24">
      <div className="mb-8">
        <div>
          <p className="font-futurist text-xs uppercase tracking-[0.22em] text-accent">Our Menu</p>
          <h2 className="mt-2 font-futurist text-3xl font-bold sm:text-4xl">Electric Flavor Collection</h2>
        </div>
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

          <div className="relative hidden md:block">
            <button
              type="button"
              onClick={() => scrollCards(-1)}
              disabled={!canScrollLeft}
              aria-label="Scroll menu left"
              className="absolute left-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-accent/60 bg-black/75 p-2 text-accent transition hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => scrollCards(1)}
              disabled={!canScrollRight}
              aria-label="Scroll menu right"
              className="absolute right-3 top-1/2 z-20 -translate-y-1/2 rounded-full border border-accent/60 bg-black/75 p-2 text-accent transition hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>

            <div
              ref={viewportRef}
              className="overflow-x-auto rounded-3xl scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              aria-label="Scrollable menu carousel"
            >
              <div className="flex gap-6 py-2 pr-2">
                {items.map((item, index) => (
                  <div key={`${item.title}-${index}`} className="w-[280px] shrink-0 lg:w-[320px]">
                    <MenuCard item={item} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}