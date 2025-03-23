import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { MessagingService } from '../../services/messaging.service';
import { StyledText } from '../base/text';

const editionName: string | undefined = Constants.expoConfig?.extra?.editionName;

export function AppDetails() {
  const [userId, setUserId] = useState<string | null>(null);
  const appVersion = useMemo(() => {
    const update = Updates.updateId ?? '?';
    const appVersion = Constants.expoConfig?.version ?? '?';
    return `${appVersion} - ${update}`;
  }, []);

  const appName = Constants.expoConfig?.name ?? 'App';

  const { t } = useTranslation();

  useEffect(() => {
    MessagingService.getUserId().then(setUserId);
  }, []);

  return (
    <View className='items-center space-y-2'>
      <StyledText className='text-background-400 dark:text-background-400'>{appName}</StyledText>
      {editionName && (
        <StyledText className='text-background-400 dark:text-background-400'>
          {editionName} {t('settings.edition')}
        </StyledText>
      )}
      <StyledText className='text-background-400 dark:text-background-400'>{appVersion}</StyledText>
      <StyledText className='text-background-400 dark:text-background-400'>UID: {userId}</StyledText>
      <StyledText className='text-background-400 dark:text-background-400 text-center'>
        {t('settings.author')}
      </StyledText>
      <StyledText className='text-background-400 dark:text-background-400'>{new Date().getFullYear()}.</StyledText>
    </View>
  );
}
