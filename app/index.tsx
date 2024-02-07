import { Redirect } from 'expo-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    i18n.changeLanguage('hu');
  });

  return <Redirect href='/(tabs)/home' />;
}
