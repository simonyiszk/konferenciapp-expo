import { TextInput, View } from 'react-native';

import { extendedColors } from '../../theme/extendedColors';
import { useKeyboardOffset } from '../../utils/keyboard.utils';
import { StyledButton } from '../common/styled-button';

interface InputProps {
  placeholder: string;
  onSubmit: (text: string) => void;
  disabled?: boolean;
}

export function Input({ placeholder, onSubmit, disabled = false }: InputProps) {
  const keyboardOffset = useKeyboardOffset();
  return (
    <View
      style={{
        bottom: Math.max(130, keyboardOffset + 16),
      }}
      className='absolute left-0 right-0 mx-5 flex-row space-x-3 rounded-2xl bg-white dark:bg-slate-800 px-3 py-2 shadow-md max-h-60'
    >
      <TextInput
        returnKeyType='send'
        placeholderTextColor={extendedColors.slate['500'] + '80'}
        autoCapitalize='sentences'
        textAlignVertical='center'
        blurOnSubmit
        multiline
        className='flex-1 text-slate-900 dark:text-white font-raleway-regular self-center'
        placeholder={placeholder}
        onSubmitEditing={(e) => onSubmit(e.nativeEvent.text)}
        editable={!disabled}
      />
      <StyledButton className='rounded-full p-1 h-8 w-8 self-end' leftIcon='arrow-up' />
    </View>
  );
}
