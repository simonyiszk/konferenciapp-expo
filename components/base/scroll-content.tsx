import { ScrollView, View, ViewProps } from 'react-native';

import { cn } from '../../utils/common.utils';

export function ScrollContent({ className, ...props }: ViewProps) {
  return (
    <ScrollView>
      <View className={cn('mx-5 mb-32 mt-5', className)} {...props} />
    </ScrollView>
  );
}
