import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';

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
    <SafeAreaView className='bg-slate-100 min-h-screen'>
      <Slot />
    </SafeAreaView>
  );
}
