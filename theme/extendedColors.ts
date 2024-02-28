import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const extendedColors: Record<string, Record<number, string>> = {
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
  ...fullConfig.theme?.colors,
};
