import { QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { View } from 'react-native';

import { Splash } from '../components/common/splash';
import { queryClient } from '../config/query-client.config';
import { FavoritePresentationsProvider } from '../contexts/favorite-presentations.context';

export default function MainLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Splash>
        <FavoritePresentationsProvider>
          <View className='bg-slate-100 dark:bg-slate-900 min-h-screen'>
            <Slot />
          </View>
        </FavoritePresentationsProvider>
      </Splash>
    </QueryClientProvider>
  );
}
