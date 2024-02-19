import { Feather } from '@expo/vector-icons';
import { View, ViewProps } from 'react-native';

import { extendedColors } from '../../theme/extendedColors';
import { cn } from '../../utils/common.utils';
import { StyledText } from '../base/text';

export function ErrorMessage({ className, children, ...props }: ViewProps) {
  return (
    <View className={cn('gap-x-2 m-5 flex-row items-center justify-center', className)} {...props}>
      <Feather name='alert-circle' size={24} color={extendedColors.red['500']} />
      <StyledText className='text-red-500 text-xl'>{children}</StyledText>
    </View>
  );
}
