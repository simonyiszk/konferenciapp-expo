import { TextProps } from 'react-native';

import { cn } from '../../utils/common.utils';
import { StyledText } from '../base/text';

export function Title({ children, className, ...props }: TextProps) {
  return (
    <StyledText className={cn('text-2xl mt-5 font-inter', className)} {...props}>
      {children}
    </StyledText>
  );
}
