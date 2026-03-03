import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linking, Text, View } from 'react-native';

import { StyledButton } from './styled-button';

export function HomePrText() {
  const { t } = useTranslation();

  return (
    <View className='flex-1 items-center justify-center p-6 mt-10 gap-6'>
      <Text className='text-center text-lg font-medium opacity-80 text-black dark:text-white'>{t('home.prText')}</Text>
      <View className='gap-2 items-center justify-center w-full'>
        <Text className='text-center text-base opacity-70 text-black dark:text-white'>
          {t('home.prRegistrationPre')}
        </Text>
        <StyledButton
          variant='primary'
          className='w-full'
          onPress={() => Linking.openURL(t('home.prRegistrationLink'))}
        >
          {t('home.prRegistrationBtn')}
        </StyledButton>
      </View>
    </View>
  );
}
