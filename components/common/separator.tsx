import React from 'react';
import { View, ViewProps } from 'react-native';

import { cn } from '../../utils/common.utils';

export function Separator({ className, ...props }: ViewProps) {
  return <View className={cn('w-20 h-1 rounded-full bg-slate-300 my-5', className)} {...props} />;
}
