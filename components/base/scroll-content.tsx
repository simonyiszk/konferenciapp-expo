import { ScrollView, ScrollViewProps } from 'react-native';

import { cn } from '../../utils/common.utils';

export function ScrollContent({ className, ...props }: ScrollViewProps) {
  return (
    <ScrollView
      className={cn('px-5 pt-5', className)}
      contentContainerStyle={{
        paddingBottom: 130,
      }}
      {...props}
    ></ScrollView>
  );
}
