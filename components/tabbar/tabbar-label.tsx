import { PropsWithChildren } from 'react';

import { StyledText } from '../base/text';

interface TabbarLabelProps extends PropsWithChildren {
  color: string;
}

export function TabbarLabel({ color, children }: TabbarLabelProps) {
  return (
    <StyledText
      className='text-xs'
      style={{
        color,
      }}
    >
      {children}
    </StyledText>
  );
}
