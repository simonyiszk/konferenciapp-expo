import { Pressable, PressableProps } from 'react-native';

import { cn } from '../../utils/common.utils';

export function ItemCard({ className, ...props }: PressableProps) {
  return (
    <Pressable
      className={cn(
        'mb-5 rounded-xl bg-white dark:bg-background-800 active:bg-background-50 active:dark:bg-background-700 p-3 shadow-md shadow-background-500/10 relative overflow-hidden',
        className
      )}
      {...props}
    />
  );
}
