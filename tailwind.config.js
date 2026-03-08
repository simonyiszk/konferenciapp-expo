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
          100: '#c7dcee',
          200: '#9fc3e1',
          300: '#78a9d5',
          400: '#5090c9',
          500: '#3677b0',
          600: '#2b5f8d',
          700: '#20486b',
          800: '#163149',
          900: '#0b1a27',
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
