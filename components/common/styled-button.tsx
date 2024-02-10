import { Feather } from '@expo/vector-icons';
import { Pressable, PressableProps } from 'react-native';

import { colors } from '../../theme/colors';
import { cn } from '../../utils/common.utils';
import { StyledText } from '../base/text';

type ButtonVariant = 'primary' | 'outline';

const buttonStyles: Record<ButtonVariant, string> = {
  primary: 'bg-primary-500',
  outline: 'bg-transparent border-2 border-primary-500',
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

export function StyledButton({ className, children, variant = 'primary', ...props }: StyledButtonProps) {
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
      {...props}
    >
      {props.leftIcon && (
        <Feather name={props.leftIcon} size={24} color={variant === 'primary' ? 'white' : colors.primary['500']} />
      )}
      <StyledText className={cn(textStyles[variant], 'font-raleway-bold text-center text-lg')}>{children}</StyledText>
      {props.rightIcon && (
        <Feather name={props.rightIcon} size={24} color={variant === 'primary' ? 'white' : colors.primary['500']} />
      )}
    </Pressable>
  );
}
