import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const extendedColors: Record<string, Record<number, string>> = {
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
  ...fullConfig.theme?.colors,
};
