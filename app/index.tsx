import { Redirect } from 'expo-router';
import { useEffect } from 'react';

import i18n from '../services/i18-next';

export default function App() {
  useEffect(() => {
    i18n.changeLanguage('hu');
  }, []);

  return <Redirect href='/(tabs)/home' />;
}
