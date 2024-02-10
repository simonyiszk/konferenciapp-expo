import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { Pressable, View, ViewProps } from 'react-native';

import { colors } from '../../theme/colors';
import { cn } from '../../utils/common.utils';
import { Separator } from './separator';

interface HeaderProps extends ViewProps {
  corner?: React.ReactNode;
}

export function Header({ children, className, corner, ...props }: HeaderProps) {
  const navigation = useNavigation();
  const showBackButton = navigation.canGoBack();
  return (
    <View className={cn('space-y-5 mx-5', className)} {...props}>
      {(showBackButton || corner) && (
        <View className='flex flex-row items-center justify-between'>
          {showBackButton && (
            <Pressable onPress={navigation.goBack}>
              <Feather name='arrow-left' size={30} color={colors.primary['500']} />
            </Pressable>
          )}
          {corner}
        </View>
      )}
      {children}
      <Separator className='my-0' />
    </View>
  );
}
