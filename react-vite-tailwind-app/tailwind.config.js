/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#04070A',
        primary: {
          DEFAULT: '#0D64FF',
          hover: '#0A50CC'
        },
        text: {
          DEFAULT: '#ffffff',
          muted: '#8A97A8'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
}