import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { usePostHog } from 'posthog-react-native';
import { PropsWithChildren, useEffect } from 'react';
import { Appearance } from 'react-native';

import { useConference } from '../../hooks/use-conference';
import { useNews } from '../../hooks/use-news';
import i18n from '../../services/i18-next';
import { MessagingService } from '../../services/messaging.service';
import { SettingsStorageService } from '../../services/settings-storage.service';

SplashScreen.preventAutoHideAsync();

export function Splash({ children }: PropsWithChildren) {
  const conference = useConference();
  const news = useNews();
  const posthog = usePostHog();

  useEffect(() => {
    SettingsStorageService.loadSettings().then((settings) => {
      Appearance.setColorScheme(settings.mode === 'default' ? null : settings.mode);
      i18n.changeLanguage(settings.language);
    });
    MessagingService.init();
    MessagingService.getUserId().then((userId) => {
      posthog.identify(userId);
    });
  }, []);

  const [loaded, error] = useFonts({
    Grotesk: require('../../assets/fonts/Grotesk.ttf'),
    InterTight: require('../../assets/fonts/InterTight.ttf'),
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
