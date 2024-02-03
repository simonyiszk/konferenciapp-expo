import { TextProps } from 'react-native';

import { cn } from '../../utils/common.utils';
import { StyledText } from '../base/text';

export function Subtitle({ children, className, ...props }: TextProps) {
  return (
    <StyledText className={cn('text-2xl text-slate-500 mt-3', className)} {...props}>
      {children}
    </StyledText>
  );
}
