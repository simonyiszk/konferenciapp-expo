import { TextProps } from 'react-native';

import { cn } from '../../utils/common.utils';
import { StyledText } from '../base/text';

export function SectionTitle({ children, className, ...props }: TextProps) {
  return (
    <StyledText className={cn('text-2xl mx-5 mb-3', className)} {...props}>
      {children}
    </StyledText>
  );
}
