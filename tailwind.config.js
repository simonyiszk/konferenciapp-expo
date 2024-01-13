/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.tsx', './app/**/*.tsx', './app/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway'],
        'raleway-bold': ['RalewayBold'],
        'raleway-light': ['RalewayLight'],
      },
      colors: {
        primary: {
          100: '#f6dee5',
          200: '#eebdcb',
          300: '#e59db2',
          400: '#dd7c98',
          500: '#d45b7e',
          600: '#aa4965',
          700: '#7f374c',
          800: '#552432',
          900: '#2a1219',
        },
      },
    },
  },
  plugins: [],
};
