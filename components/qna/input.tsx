import { useRef, useState } from 'react';
import { KeyboardAvoidingView, Platform, TextInput, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { extendedColors } from '../../theme/extendedColors';
import { StyledButton } from '../common/styled-button';

interface InputProps {
  placeholder: string;
  onSubmit: (text: string) => void;
  disabled?: boolean;
}

const MIN_CHARACTERS_TO_SEND = 5;

export function Input({ placeholder, onSubmit, disabled = false }: InputProps) {
  const ref = useRef<TextInput>(null);
  const insets = useSafeAreaInsets();
  const [value, setValue] = useState('');

  const onSend = () => {
    if (value.length < MIN_CHARACTERS_TO_SEND) return;
    ref.current?.clear();
    ref.current?.blur();
    onSubmit(value);
    setValue('');
  };

  const isDisabled = value.length < MIN_CHARACTERS_TO_SEND || disabled;

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={0}
      behavior='position'
      style={{ paddingBottom: insets.bottom + 100 }}
      className='justify-end absolute w-full bottom-0'
      enabled={Platform.OS === 'ios'}
    >
      <View className='mx-5 flex-row space-x-3 rounded-xl bg-white dark:bg-background-800 px-3 py-2 shadow-md max-h-60'>
        <TextInput
          ref={ref}
          returnKeyType='send'
          placeholderTextColor={extendedColors.background['500'] + '80'}
          autoCapitalize='sentences'
          textAlignVertical='center'
          blurOnSubmit
          multiline
          className='flex-1 text-background-900 dark:text-white font-inter-regular self-center'
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.nativeEvent.text)}
          onSubmitEditing={onSend}
          editable={!disabled}
        />
        <StyledButton
          disabled={isDisabled}
          className='rounded-full p-1 h-8 w-8 self-end'
          leftIcon='arrow-up'
          onPress={onSend}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
