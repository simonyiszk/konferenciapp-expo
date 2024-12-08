import { View, ViewProps } from 'react-native';

import { usePageView } from '../../utils/analytics.utils';
import { cn } from '../../utils/common.utils';

interface ScreenProps extends ViewProps {
  analyticsScreenName?: string;
}

export function Screen({ className, analyticsScreenName, ...props }: ScreenProps) {
  usePageView(analyticsScreenName);
  return <View className={cn('bg-background-50 dark:bg-background-900 flex-1', className)} {...props} />;
}
