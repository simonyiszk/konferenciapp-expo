import { View, ViewProps } from 'react-native';

import { cn } from '../../utils/common.utils';

export function Screen({ className, ...props }: ViewProps) {
  return <View className={cn('bg-slate-100 h-full', className)} {...props} />;
}
