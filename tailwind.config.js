/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#25D366',
        'dark-bg': '#0b0b0b',
        'dark-card': '#1a1a1a',
      },
      fontFamily: {
        sans: ['League Spartan', 'sans-serif'],
        display: ['League Gothic', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
