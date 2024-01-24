import { Stack } from 'expo-router';

export default function ScheduleStackLayout() {
  return (
    <Stack
      initialRouteName='index'
      screenOptions={{
        headerShown: false,
        contentStyle: {
          height: '100%',
          backgroundColor: 'transparent',
        },
      }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen name='details' />
    </Stack>
  );
}
