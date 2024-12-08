import React from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, PressableProps, View, ViewProps } from 'react-native';

import { cn } from '../../../utils/common.utils';
import { StyledText } from '../../base/text';

interface LocationFilterProps extends ViewProps {
  current: string | undefined;
  options: string[];
  onChange: (location: string | undefined) => void;
}

export function LocationFilter({ current, options, onChange, className, ...props }: LocationFilterProps) {
  const { t } = useTranslation();
  return (
    <View
      className={cn(
        'flex flex-row space-x-2 bg-background-200 dark:bg-background-800 mx-5 rounded-lg justify-evenly p-1',
        className
      )}
      {...props}
    >
      <FilterButton
        testID='location-filter-option-all'
        isSelected={typeof current === 'undefined'}
        onPress={() => onChange(undefined)}
      >
        {t('presentations.allFilter')}
      </FilterButton>
      {options.map((option) => (
        <FilterButton
          key={option}
          testID={`location-filter-option-${option}`}
          isSelected={current === option}
          onPress={() => onChange(option)}
        >
          {option}
        </FilterButton>
      ))}
    </View>
  );
}

interface FilterButtonProps extends PressableProps {
  children: string;
  isSelected: boolean;
}

function FilterButton({ children, isSelected, className, ...props }: FilterButtonProps) {
  return (
    <Pressable
      className={cn(
        'bg-transparent flex-1 items-center justify-center py-1 rounded-md transition-colors duration-300 ease-in-out active:bg-background-50 active:dark:bg-background-700',
        {
          'bg-white dark:bg-background-600': isSelected,
        },
        className
      )}
      {...props}
    >
      <StyledText
        className={cn('text-background-400 text-xl', {
          'text-background-900 dark:text-white': isSelected,
        })}
      >
        {children}
      </StyledText>
    </Pressable>
  );
}
