import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { PropsWithChildren, useEffect } from 'react';
import { Appearance } from 'react-native';

import { useConference } from '../../hooks/use-conference';
import { useNews } from '../../hooks/use-news';
import i18n from '../../services/i18-next';
import { SettingsStorageService } from '../../services/settings-storage.service';

SplashScreen.preventAutoHideAsync();

export function Splash({ children }: PropsWithChildren) {
  const conference = useConference();
  const news = useNews();

  useEffect(() => {
    SettingsStorageService.loadSettings().then((settings) => {
      Appearance.setColorScheme(settings.mode === 'default' ? null : settings.mode);
      i18n.changeLanguage(settings.language);
    });
  }, []);

  const [loaded, error] = useFonts({
    Raleway: require('../../assets/fonts/Raleway-Regular.ttf'),
    RalewayBold: require('../../assets/fonts/Raleway-Bold.ttf'),
    RalewayLight: require('../../assets/fonts/Raleway-Light.ttf'),
  });

  const dataReady = !conference.isPending && !news.isPending;

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded && dataReady) SplashScreen.hideAsync();
  }, [loaded, dataReady]);

  if (!loaded) return null;

  return children;
}
