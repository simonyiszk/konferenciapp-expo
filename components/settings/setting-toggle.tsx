import { Feather } from '@expo/vector-icons';
import React, { ComponentProps } from 'react';
import { Switch, View, ViewProps } from 'react-native';

import { extendedColors } from '../../theme/extendedColors';
import { StyledText } from '../base/text';

interface SettingsToggleProps extends ViewProps {
  label: string;
  currentValue: boolean;
  onChange: (newValue: boolean) => void;
  icon?: ComponentProps<typeof Feather>['name'];
}

export function SettingToggle({ label, currentValue, onChange, icon }: SettingsToggleProps) {
  return (
    <View className='flex-row justify-between items-center flex-1 py-2 mb-5 rounded-xl bg-white dark:bg-slate-800 active:bg-slate-50 active:dark:bg-slate-700 px-3 shadow-md shadow-slate-500/10 relative overflow-hidden h-fit'>
      <View className='flex-row items-center'>
        {icon && <Feather name={icon} color={extendedColors.slate['400']} size={20} />}
        <StyledText className='text-xl pl-1'>{label}</StyledText>
      </View>
      <View className='flex-row items-center'>
        <Switch
          trackColor={{ false: 'slate-200', true: extendedColors.primary['200'] }}
          thumbColor={currentValue ? extendedColors.primary['500'] : extendedColors.slate['500']}
          onValueChange={onChange}
          value={currentValue}
        />
      </View>
    </View>
  );
}
