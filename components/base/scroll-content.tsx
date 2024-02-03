import { ScrollView, View, ViewProps } from 'react-native';

import { cn } from '../../utils/common.utils';

export function ScrollContent({ className, ...props }: ViewProps) {
  return (
    <ScrollView>
      <View className={cn('mx-5 pb-40', className)} {...props} />
    </ScrollView>
  );
}
