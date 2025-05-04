import { addSeconds } from 'date-fns';
import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Updates from 'expo-updates';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable } from 'react-native';

import { MessagingService } from '../../services/messaging.service';
import { NotificationService } from '../../services/notification.service';
import { StyledText } from '../base/text';

const editionName: string | undefined = Constants.expoConfig?.extra?.editionName;

export function AppDetails() {
  const [userId, setUserId] = useState<string | null>(null);
  const [pressCount, setPressCount] = useState(0);
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

  const handlePress = () => {
    const newCount = pressCount + 1;
    setPressCount(newCount);

    if (newCount === 5) {
      console.log('Showing notification');
      NotificationService.showNotification({
        content: {
          title: 'Debug Info',
          body: `App Version: ${appVersion}\nUser ID: ${userId}\nEdition: ${editionName || 'N/A'}`,
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.DATE,
          date: addSeconds(new Date(), 5),
        },
      });
      setPressCount(0);
    }
  };

  return (
    <Pressable className='items-center space-y-2' onPress={handlePress}>
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
    </Pressable>
  );
}
