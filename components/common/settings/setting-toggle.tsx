import React, { useState } from 'react';
import { Switch, View, ViewProps } from 'react-native';

import { extendedColors } from '../../../theme/extendedColors';
import { StyledText } from '../../base/text';

interface SettingsToggleProps extends ViewProps {
  label: string;
  currentValue: boolean;
  onChange: (newValue: boolean) => void;
}

export function SettingToggle({ label }: SettingsToggleProps) {
  const [enabled, setEnabled] = useState(false);
  const toggleOption = () => setEnabled((prevState) => !prevState);

  return (
    <View className='flex-row justify-between items-center flex-1 py-2 mb-5 rounded-xl bg-white dark:bg-slate-800 active:bg-slate-50 active:dark:bg-slate-700 px-3 shadow-md shadow-slate-500/10 relative overflow-hidden h-fit'>
      <StyledText className='text-xl'>{label}</StyledText>
      <View className='flex-row items-center'>
        <Switch
          trackColor={{ false: 'slate-200', true: extendedColors.primary['200'] }}
          thumbColor={enabled ? extendedColors.primary['500'] : extendedColors.slate['500']}
          onValueChange={toggleOption}
          value={enabled}
        ></Switch>
      </View>
    </View>
  );
}
