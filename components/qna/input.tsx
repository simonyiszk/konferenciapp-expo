import { useRef, useState } from 'react';
import { TextInput, View } from 'react-native';

import { extendedColors } from '../../theme/extendedColors';
import { useKeyboardOffset } from '../../utils/keyboard.utils';
import { StyledButton } from '../common/styled-button';

interface InputProps {
  placeholder: string;
  onSubmit: (text: string) => void;
  disabled?: boolean;
}

const MIN_CHARACTERS_TO_SEND = 5;

export function Input({ placeholder, onSubmit, disabled = false }: InputProps) {
  const ref = useRef<TextInput>(null);
  const [value, setValue] = useState('');
  const keyboardOffset = useKeyboardOffset();
  const onSend = () => {
    if (value.length < MIN_CHARACTERS_TO_SEND) return;
    ref.current?.clear();
    onSubmit(value);
    setValue('');
  };
  return (
    <View
      style={{
        bottom: Math.max(130, keyboardOffset + 16),
      }}
      className='absolute left-0 right-0 mx-5 flex-row space-x-3 rounded-2xl bg-white dark:bg-slate-800 px-3 py-2 shadow-md max-h-60'
    >
      <TextInput
        ref={ref}
        returnKeyType='send'
        placeholderTextColor={extendedColors.slate['500'] + '80'}
        autoCapitalize='sentences'
        textAlignVertical='center'
        blurOnSubmit
        multiline
        className='flex-1 text-slate-900 dark:text-white font-raleway-regular self-center'
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.nativeEvent.text)}
        onSubmitEditing={onSend}
        editable={!disabled}
      />
      <StyledButton className='rounded-full p-1 h-8 w-8 self-end' leftIcon='arrow-up' onPress={onSend} />
    </View>
  );
}
