import { Feather } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Pressable, View, ViewProps } from 'react-native';

import { extendedColors } from '../../theme/extendedColors';
import { StyledText } from '../base/text';

interface SettingsProps extends ViewProps {
  label: string;
  availableValues: { label: string; value: string }[];
  currentValue: string;
  onChange: (newValue: string) => void;
}
export function Setting({
  children,
  className,
  label,
  availableValues,
  currentValue,
  onChange,
  ...props
}: SettingsProps) {
  const [open, setOpen] = useState(false);
  const currentOption = availableValues.find((av) => av.value === currentValue);
  const toggleOpen = () => setOpen((prevState) => !prevState);
  const onSelect = (selectedValue: string) => {
    setOpen(false);
    onChange(selectedValue);
  };

  return (
    <View className='mb-5 rounded-xl bg-white dark:bg-slate-800 active:bg-slate-50 active:dark:bg-slate-700 px-3 shadow-md shadow-slate-500/10 relative overflow-hidden'>
      <Pressable className='flex-row justify-between items-center flex-1 py-2' onPress={toggleOpen}>
        <StyledText>{label}</StyledText>
        <View className='flex-row items-center'>
          <StyledText>{currentOption?.label}</StyledText>
          <Feather name={open ? 'chevron-down' : 'chevron-right'} color={extendedColors.slate['500']} size={20} />
        </View>
      </Pressable>
      {open &&
        availableValues.map((option) => (
          <Pressable
            key={option.value}
            className='flex-row justify-between items-center flex-1 border-t border-slate-200 py-2'
            onPress={() => onSelect(option.value)}
          >
            <StyledText>{option.label}</StyledText>
            {option.value === currentValue && (
              <Feather name={'check'} color={extendedColors.primary['500']} size={20} />
            )}
          </Pressable>
        ))}
    </View>
  );
}
