/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        burnham: {
          50: '#ecfdf4',
          100: '#d1fae4',
          200: '#a7f3cd',
          300: '#6ee7b3',
          400: '#34d393',
          500: '#10b97b',
          600: '#059664',
          700: '#047853',
          800: '#065f43',
          900: '#064e39',
          950: '#022e22',
        },
      },
    },
  },
  plugins: [],
};
