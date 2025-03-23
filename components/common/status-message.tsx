import { Feather } from '@expo/vector-icons';
import { ComponentProps } from 'react';
import { useColorScheme, View, ViewProps } from 'react-native';

import { extendedColors } from '../../theme/extendedColors';
import { cn } from '../../utils/common.utils';
import { StyledText } from '../base/text';

interface StatusMessageProps extends ViewProps {
  type: 'success' | 'error' | 'warning' | 'info';
}

export function StatusMessage({ className, children, type }: StatusMessageProps) {
  const iconColor = useColorScheme() === 'dark' ? DarkIconColors[type] : LightIconColors[type];
  return (
    <View
      className={cn(
        'rounded-md p-2 flex-row gap-2 items-center',
        {
          'bg-green-100 dark:bg-green-900': type === 'success',
          'bg-red-100 dark:bg-red-900': type === 'error',
          'bg-yellow-100 dark:bg-yellow-900': type === 'warning',
          'bg-blue-100 dark:bg-blue-900': type === 'info',
        },
        className
      )}
    >
      <Feather size={20} name={StatusIcons[type]} color={iconColor} />
      <StyledText className='text-black dark:text-white flex-1'>{children}</StyledText>
    </View>
  );
}

const StatusIcons: Record<StatusMessageProps['type'], ComponentProps<typeof Feather>['name']> = {
  success: 'check-circle',
  error: 'alert-circle',
  warning: 'alert-triangle',
  info: 'info',
};

const LightIconColors: Record<StatusMessageProps['type'], string> = {
  success: extendedColors.green[700],
  error: extendedColors.red[700],
  warning: extendedColors.yellow[700],
  info: extendedColors.blue[700],
};

const DarkIconColors: Record<StatusMessageProps['type'], string> = {
  success: extendedColors.green[300],
  error: extendedColors.red[300],
  warning: extendedColors.yellow[300],
  info: extendedColors.blue[300],
};
