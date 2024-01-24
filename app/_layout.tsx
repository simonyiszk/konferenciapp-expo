import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

import { queryClient } from '../config/query-client.config';
import { FavoriteEventsProvider } from '../contexts/favorite-events.context';

export default function MainLayout() {
  const [loaded, error] = useFonts({
    Raleway: require('../assets/fonts/Raleway-Regular.ttf'),
    RalewayBold: require('../assets/fonts/Raleway-Bold.ttf'),
    RalewayLight: require('../assets/fonts/Raleway-Light.ttf'),
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <FavoriteEventsProvider>
        <View className='bg-slate-100 min-h-screen'>
          <Slot />
        </View>
      </FavoriteEventsProvider>
    </QueryClientProvider>
  );
}
