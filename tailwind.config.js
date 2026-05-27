/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Archivo', 'sans-serif'],
        mono: ['Chivo Mono', 'monospace'],
        serif: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
      },
      colors: {
        background: '#000D12',
        primary: {
          DEFAULT: '#00B4FD',
          dark: '#003ACE'
        },
        text: {
          DEFAULT: '#E9F4F9',
          muted: 'rgba(233, 244, 249, 0.8)'
        }
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(106.53deg, #00B4FD -5.68%, #003ACE 86.98%)',
      }
    },
  },
  plugins: [],
}