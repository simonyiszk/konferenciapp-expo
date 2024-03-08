import { Tabs } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { TabbarBackground } from '../../components/tabbar/tabbar-background';
import { TabbarIcon } from '../../components/tabbar/tabbar-icon';
import { TabbarLabel } from '../../components/tabbar/tabbar-label';
import { useNotificationObserver } from '../../hooks/use-notification-observer';
import { extendedColors } from '../../theme/extendedColors';

export default function TabsLayout() {
  useNotificationObserver();
  const { top, bottom, left, right } = useSafeAreaInsets();
  const { t } = useTranslation();
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
        tabBarInactiveTintColor: extendedColors.slate['500'],
        tabBarActiveTintColor: extendedColors.primary['500'],
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
          title: t('tabbar.home'),
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} name='home' />,
        }}
      />
      <Tabs.Screen
        name='presentation'
        options={{
          title: t('tabbar.schedule'),
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} name='calendar' />,
        }}
      />
      <Tabs.Screen
        name='map'
        options={{
          title: t('tabbar.map'),
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} name='map' />,
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          title: t('tabbar.settings'),
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ focused }) => <TabbarIcon focused={focused} name='settings' />,
        }}
      />
    </Tabs>
  );
}
