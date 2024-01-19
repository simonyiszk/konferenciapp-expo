import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { SplashScreen, Tabs } from 'expo-router';
import { useEffect } from 'react';
import { Platform, SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabbarBackground } from '../components/tabbar/tabbar-background';
import { TabbarIcon } from '../components/tabbar/tabbar-icon';
import { TabbarLabel } from '../components/tabbar/tabbar-label';
import { queryClient } from '../config/query-client.config';
import { colors } from '../theme/colors';

export default function MainLayout() {
  const { top, bottom } = useSafeAreaInsets();
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
      <SafeAreaView className='bg-slate-100 min-h-screen'>
        <Tabs
          backBehavior='none'
          sceneContainerStyle={{
            backgroundColor: 'transparent',
            marginTop: Platform.OS === 'android' ? top + 10 : undefined,
            paddingBottom: Platform.OS === 'android' ? bottom + 10 : undefined,
          }}
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.primary['500'],
            tabBarLabel: TabbarLabel,
            tabBarBackground: TabbarBackground,
            tabBarStyle: {
              borderTopWidth: 0,
              marginHorizontal: 20,
              paddingBottom: 10,
              paddingTop: 10,
              height: 70,
              marginBottom: 10,
              elevation: 10,
            },
          }}
        >
          <Tabs.Screen
            name='index'
            options={{
              title: 'Főoldal',
              tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} name='home' />,
            }}
          />
          <Tabs.Screen
            name='schedule'
            options={{
              title: 'Programterv',
              tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} name='calendar' />,
            }}
          />
          <Tabs.Screen
            name='map'
            options={{
              title: 'Térkép',
              tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} name='map' />,
            }}
          />
        </Tabs>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
