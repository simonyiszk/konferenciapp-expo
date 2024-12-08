import { QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { View } from 'react-native';

import { ErrorBoundary } from '../components/common/error-boundary';
import { Splash } from '../components/common/splash';
import { queryClient } from '../config/query-client.config';
import { FavoritePresentationsProvider } from '../contexts/favorite-presentations.context';

export { ErrorBoundary };

export default function MainLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Splash>
        <FavoritePresentationsProvider>
          <View className='bg-background-50 dark:bg-background-900 flex-1'>
            <Slot />
          </View>
        </FavoritePresentationsProvider>
      </Splash>
    </QueryClientProvider>
  );
}
