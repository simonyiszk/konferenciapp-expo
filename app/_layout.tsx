import { QueryClientProvider } from '@tanstack/react-query';
import { Slot } from 'expo-router';
import { PostHogProvider } from 'posthog-react-native';
import { StatusBar, useColorScheme, View } from 'react-native';

import { ErrorBoundary } from '../components/common/error-boundary';
import { Splash } from '../components/common/splash';
import { posthog } from '../config/posthog.config';
import { queryClient } from '../config/query-client.config';
import { FavoritePresentationsProvider } from '../contexts/favorite-presentations.context';

export { ErrorBoundary };

export default function MainLayout() {
  const colorScheme = useColorScheme();
  return (
    <PostHogProvider client={posthog}>
      <QueryClientProvider client={queryClient}>
        <Splash>
          <FavoritePresentationsProvider>
            <View className='bg-background-50 dark:bg-background-900 flex-1'>
              <StatusBar
                barStyle={colorScheme === 'dark' ? 'light-content' : 'dark-content'}
                backgroundColor={colorScheme === 'dark' ? '#0a0809' : '#eaeaea'}
                translucent
              />
              <Slot />
            </View>
          </FavoritePresentationsProvider>
        </Splash>
      </QueryClientProvider>
    </PostHogProvider>
  );
}
