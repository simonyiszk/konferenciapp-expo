import { useState } from 'react';
import { GestureResponderEvent, Pressable, PressableProps } from 'react-native';

import { cn } from '../../utils/common.utils';

export function ItemCard({ className, onPressIn, onPressOut, ...props }: PressableProps) {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = (event: GestureResponderEvent) => {
    setIsPressed(true);
    onPressIn?.(event);
  };

  const handlePressOut = (event: GestureResponderEvent) => {
    setIsPressed(false);
    onPressOut?.(event);
  };
  return (
    <Pressable
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      className={cn(
        'mb-5 rounded-xl bg-white p-3 shadow-md shadow-slate-500/10 relative overflow-hidden',
        {
          'bg-slate-50': isPressed,
        },
        className
      )}
      {...props}
    />
  );
}
