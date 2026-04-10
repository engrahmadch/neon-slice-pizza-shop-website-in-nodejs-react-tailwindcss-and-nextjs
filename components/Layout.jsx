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