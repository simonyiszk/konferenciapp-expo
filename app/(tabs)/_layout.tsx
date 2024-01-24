import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabbarBackground } from '../../components/tabbar/tabbar-background';
import { TabbarIcon } from '../../components/tabbar/tabbar-icon';
import { TabbarLabel } from '../../components/tabbar/tabbar-label';
import { colors } from '../../theme/colors';

export default function TabsLayout() {
  const { top, bottom, left, right } = useSafeAreaInsets();
  return (
    <Tabs
      initialRouteName='home'
      backBehavior='none'
      sceneContainerStyle={{
        backgroundColor: 'transparent',
        paddingTop: top + 10,
        paddingLeft: left,
        paddingRight: right,
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary['500'],
        tabBarLabel: TabbarLabel,
        tabBarBackground: TabbarBackground,
        tabBarStyle: {
          position: 'absolute',
          bottom: bottom + 10,
          borderTopWidth: 0,
          marginHorizontal: 20,
          paddingBottom: 10,
          paddingTop: 10,
          height: 70,
          elevation: 10,
        },
      }}
    >
      <Tabs.Screen
        name='home'
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
  );
}
