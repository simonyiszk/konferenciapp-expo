import { View, ViewProps } from 'react-native';

import { cn } from '../../utils/common.utils';

export function ItemHighlight({ className, ...props }: ViewProps) {
  return <View className={cn('absolute top-0 right-0 bottom-0 w-1', className)} {...props} />;
}
