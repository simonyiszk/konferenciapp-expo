import { useFonts } from 'expo-font';
import { SplashScreen } from 'expo-router';
import { PropsWithChildren, useEffect } from 'react';

import { useConference } from '../../hooks/use-conference';
import { useNews } from '../../hooks/use-news';

export function Splash({ children }: PropsWithChildren) {
  const conference = useConference();
  const news = useNews();

  const [loaded, error] = useFonts({
    Raleway: require('../../assets/fonts/Raleway-Regular.ttf'),
    RalewayBold: require('../../assets/fonts/Raleway-Bold.ttf'),
    RalewayLight: require('../../assets/fonts/Raleway-Light.ttf'),
  });

  const dataReady = conference.status !== 'pending' && news.status !== 'pending';

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded && dataReady) SplashScreen.hideAsync();
  }, [loaded, dataReady]);

  if (!loaded || !dataReady) return null;

  return children;
}
