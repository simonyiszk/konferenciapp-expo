import { default as nativewindPreset } from 'nativewind/preset';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.tsx', './app/**/*.tsx', './app/**/*.ts'],
  presets: [nativewindPreset],
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
          100: '#fbccd4',
          200: '#f799a9',
          300: '#f3667e',
          400: '#ef3353',
          500: '#eb0028',
          600: '#bc0020',
          700: '#8d0018',
          800: '#5e0010',
          900: '#2f0008',
        },
        background: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'text-dark': '#ffffff',
        'text-light': '#ffffff',
      },
    },
  },
  plugins: [],
};
