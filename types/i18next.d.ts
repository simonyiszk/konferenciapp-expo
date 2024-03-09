import { resources } from '../services/i18n_data';

declare module 'i18next' {
  interface CustomTypeOptions {
    fallbackLng: 'hu';
    defaultNS: 'ns1';
    resources: {
      ns1: typeof resources.hu.translation;
    };
  }
}
