import { Feather } from '@expo/vector-icons';
import { Pressable, PressableProps, useColorScheme } from 'react-native';

import { cn } from '../../utils/common.utils';

export function SheetCloseButton({ onPress, className, ...props }: PressableProps) {
  const colorScheme = useColorScheme();
  return (
    <Pressable
      onPress={onPress}
      className={cn('bg-black/10 dark:bg-white/10 p-2 rounded-full w-fit h-fit absolute right-5 top-2', className)}
      {...props}
    >
      <Feather name='x' size={20} color={colorScheme === 'dark' ? 'white' : 'black'} />
    </Pressable>
  );
}
