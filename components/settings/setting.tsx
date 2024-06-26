import { Feather } from '@expo/vector-icons';
import React, { ComponentProps, useState } from 'react';
import { Pressable, View, ViewProps } from 'react-native';

import { extendedColors } from '../../theme/extendedColors';
import { StyledText } from '../base/text';

interface SettingsProps extends ViewProps {
  label: string;
  availableValues: { label: string; value: string }[];
  currentValue: string;
  onChange: (newValue: string) => void;
  icon?: ComponentProps<typeof Feather>['name'];
}
export function Setting({ label, availableValues, currentValue, onChange, icon }: SettingsProps) {
  const [open, setOpen] = useState(false);
  const currentOption = availableValues.find((av) => av.value === currentValue);
  const toggleOpen = () => setOpen((prevState) => !prevState);
  const onSelect = (selectedValue: string) => {
    setOpen(false);
    onChange(selectedValue);
  };

  return (
    <View
      testID='setting'
      className='mb-5 rounded-xl bg-white dark:bg-slate-800 active:bg-slate-50 active:dark:bg-slate-700 px-3 shadow-md shadow-slate-500/10'
    >
      <Pressable testID='setting-header' className='flex-row justify-between items-center py-5' onPress={toggleOpen}>
        <View className='flex-row items-center'>
          {icon && <Feather testID='setting-icon' name={icon} color={extendedColors.slate['400']} size={20} />}
          <StyledText testID='setting-label' className='text-xl pl-1'>
            {label}
          </StyledText>
        </View>
        <View className='flex-row items-center'>
          <StyledText testID='setting-current-label' className='text-xl text-slate-400'>
            {currentOption?.label}
          </StyledText>
          <Feather
            testID='setting-open-icon'
            name={open ? 'chevron-down' : 'chevron-right'}
            color={extendedColors.slate['400']}
            size={20}
          />
        </View>
      </Pressable>
      {open &&
        availableValues.map((option) => (
          <Pressable
            key={option.value}
            testID={`setting-option-${option.value}`}
            className='flex-row justify-between items-center border-t border-slate-200 dark:border-slate-700 py-2'
            onPress={() => onSelect(option.value)}
          >
            <StyledText testID={`setting-option-${option.value}-label`} className='text-xl'>
              {option.label}
            </StyledText>
            {option.value === currentValue && (
              <Feather
                testID={`setting-option-${option.value}-selected`}
                name={'check'}
                color={extendedColors.primary['500']}
                size={20}
              />
            )}
          </Pressable>
        ))}
    </View>
  );
}
