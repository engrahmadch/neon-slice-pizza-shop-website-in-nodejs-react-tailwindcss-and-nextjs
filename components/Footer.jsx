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