import { forwardRef } from 'react';
import { ScrollView, ScrollViewProps, ViewStyle } from 'react-native';

import { cn } from '../../utils/common.utils';

interface ScrollContentProps extends ScrollViewProps {
  className?: string;
  contentContainerStyle?: ViewStyle;
}

const ScrollContent = forwardRef<ScrollView, ScrollContentProps>(
  ({ className, contentContainerStyle, ...props }, ref) => {
    return (
      <ScrollView
        ref={ref}
        className={cn('px-5 pt-5', className)}
        contentContainerStyle={{ paddingBottom: contentContainerStyle?.paddingBottom ?? 130, ...contentContainerStyle }}
        {...props}
      />
    );
  }
);

export { ScrollContent };
