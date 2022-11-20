/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      fontFamily: {
        // astro: "'Astro', sans-serif",
        // tenika: "'Tenika', sans-serif",
        sans: ['var(--font-space-mono)']
      },
    },
  },
  plugins: [],
};