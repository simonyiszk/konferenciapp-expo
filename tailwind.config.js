/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.tsx', './app/**/*.tsx', './app/**/*.ts'],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Grotesk'],
        inter: ['InterTight'],
        raleway: ['Raleway'],
        'raleway-bold': ['RalewayBold'],
        'raleway-light': ['RalewayLight'],
      },
      colors: {
        primary: {
          100: '#fce8dc',
          200: '#f9d0b8',
          300: '#f7b995',
          400: '#f4a171',
          500: '#f18a4e',
          600: '#c16e3e',
          700: '#91532f',
          800: '#60371f',
          900: '#301c10',
        },
        background: {
          50: '#eaeaea',
          100: '#d6d4d5',
          200: '#ada9ac',
          300: '#837f82',
          400: '#5a5459',
          500: '#31292f',
          600: '#272126',
          700: '#1d191c',
          800: '#141013',
          900: '#0a0809',
        },
        'text-dark': '#31292F',
        'text-light': '#DEE2D5',
      },
    },
  },
  plugins: [],
};
