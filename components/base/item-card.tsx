import { Pressable, PressableProps } from 'react-native';

import { cn } from '../../utils/common.utils';

export function ItemCard({ className, ...props }: PressableProps) {
  return (
    <Pressable
      className={cn(
        'mb-5 rounded-xl bg-white active:bg-slate-50 p-3 shadow-md shadow-slate-500/10 relative overflow-hidden',
        className
      )}
      {...props}
    />
  );
}
