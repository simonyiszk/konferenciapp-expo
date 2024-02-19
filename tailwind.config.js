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
          100: '#f5f1cc',
          200: '#ebe299',
          300: '#e0d466',
          400: '#d6c533',
          500: '#ccb700',
          600: '#a39200',
          700: '#7a6e00',
          800: '#524900',
          900: '#292500',
        },
      },
    },
  },
  plugins: [],
};
