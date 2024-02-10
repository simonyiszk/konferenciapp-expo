import { Feather } from '@expo/vector-icons';
import { forwardRef } from 'react';
import { Pressable, PressableProps, View } from 'react-native';

import { colors } from '../../theme/colors';
import { cn } from '../../utils/common.utils';
import { StyledText } from '../base/text';

type ButtonVariant = 'primary' | 'outline';

const buttonStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-500 active:bg-primary-600',
  outline: 'bg-transparent border-2 border-primary-500 active:bg-primary-100',
};

const textStyles: Record<ButtonVariant, string> = {
  primary: 'text-white',
  outline: 'text-primary-500',
};

interface StyledButtonProps extends Omit<PressableProps, 'children'> {
  children: string;
  leftIcon?: React.ComponentProps<typeof Feather>['name'];
  rightIcon?: React.ComponentProps<typeof Feather>['name'];
  variant?: keyof typeof buttonStyles;
}

const StyledButton = forwardRef<View, StyledButtonProps>(
  ({ children, variant = 'primary', leftIcon, rightIcon, className, ...props }, ref) => {
    return (
      <Pressable
        className={cn(
          buttonStyles[variant],
          'rounded-md',
          'px-4',
          'py-2',
          'shadow-md items-center justify-center flex-row space-x-2',
          className
        )}
        ref={ref}
        {...props}
      >
        {leftIcon && (
          <Feather name={leftIcon} size={24} color={variant === 'primary' ? 'white' : colors.primary['500']} />
        )}
        <StyledText className={cn(textStyles[variant], 'font-raleway-bold text-center text-lg')}>{children}</StyledText>
        {rightIcon && (
          <Feather name={rightIcon} size={24} color={variant === 'primary' ? 'white' : colors.primary['500']} />
        )}
      </Pressable>
    );
  }
);

StyledButton.displayName = 'StyledButton';

export { StyledButton };
