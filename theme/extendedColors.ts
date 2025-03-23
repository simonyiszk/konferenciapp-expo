import resolveConfig from 'tailwindcss/resolveConfig';

import tailwindConfig from '../tailwind.config';

const fullConfig = resolveConfig(tailwindConfig);

export const extendedColors: Record<string, Record<number, string>> = {
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
  ...fullConfig.theme?.colors,
};
