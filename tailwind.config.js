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