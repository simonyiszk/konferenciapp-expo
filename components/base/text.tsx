import { Text, TextProps } from 'react-native';

import { cn } from '../../utils/common.utils';

export function StyledText({ className, ...props }: TextProps) {
  return (
    <Text
      style={{
        fontFamily: 'Raleway',
        fontWeight: 'normal',
      }}
      className={cn('font-raleway text-slate-800 dark:text-slate-100', className)}
      {...props}
    />
  );
}
