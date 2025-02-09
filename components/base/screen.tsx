import { usePostHog } from 'posthog-react-native';
import { useEffect } from 'react';
import { View, ViewProps } from 'react-native';

import { cn } from '../../utils/common.utils';

interface ScreenProps extends ViewProps {
  analyticsScreenName?: string;
}

export function Screen({ className, ...props }: ScreenProps) {
  const posthog = usePostHog();
  useEffect(() => {
    if (props.analyticsScreenName) {
      posthog?.screen(props.analyticsScreenName);
    }
  }, []);
  return <View className={cn('bg-background-50 dark:bg-background-900 flex-1', className)} {...props} />;
}
