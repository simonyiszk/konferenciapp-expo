import { TextProps } from 'react-native';

import { cn } from '../../utils/common.utils';
import { StyledText } from '../base/text';

export function Subtitle({ children, className, ...props }: TextProps) {
  return (
    <StyledText className={cn('text-xl text-background-400 mt-3', className)} {...props}>
      {children}
    </StyledText>
  );
}
