import { Text, TextProps } from 'react-native';

import { cn } from '../../utils/common.utils';

export function StyledText({ className, ...props }: TextProps) {
  return <Text className={cn('font-inter text-background-800 dark:text-background-100', className)} {...props} />;
}
