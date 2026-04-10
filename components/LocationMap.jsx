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