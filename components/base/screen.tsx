import { View, ViewProps } from 'react-native';

import { usePageView } from '../../utils/analytics.utils';
import { cn } from '../../utils/common.utils';

interface ScreenProps extends ViewProps {
  analyticsScreenName?: string;
}

export function Screen({ className, analyticsScreenName, ...props }: ScreenProps) {
  usePageView(analyticsScreenName);
  return <View className={cn('bg-slate-100 dark:bg-slate-900 h-full', className)} {...props} />;
}
