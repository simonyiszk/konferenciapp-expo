import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { Pressable, View, ViewProps } from 'react-native';

import { cn } from '../../utils/common.utils';

interface HeaderProps extends ViewProps {}

export function Header({ children, className, ...props }: HeaderProps) {
  const navigation = useNavigation();
  const showBackButton = navigation.canGoBack();
  return (
    <View className={cn('space-y-5 mx-5 mb-5', className)} {...props}>
      {showBackButton && (
        <Pressable onPress={navigation.goBack}>
          <Feather name='arrow-left' size={30} color='#d45b7e' />
        </Pressable>
      )}
      {children}
      <View className='w-20 h-1 rounded-full bg-slate-300' />
    </View>
  );
}
