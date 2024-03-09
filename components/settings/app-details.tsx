import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import React, { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Platform, View } from 'react-native';

import { MessagingService } from '../../services/messaging.service';
import { StyledText } from '../base/text';

export function AppDetails() {
  const [userId, setUserId] = useState<string | null>(null);
  const appVersion = useMemo(() => {
    const update = Updates.updateId ?? '?';
    const appVersion = Constants.expoConfig?.version ?? '?';
    const versionCode =
      Platform.OS === 'android' ? Constants.expoConfig?.android?.versionCode : Constants.expoConfig?.ios?.buildNumber;
    return `${appVersion} (${versionCode ?? '?'}) - ${update}`;
  }, []);

  const appName = Constants.expoConfig?.name ?? 'App';

  const { t } = useTranslation();

  useEffect(() => {
    MessagingService.getUserId().then(setUserId);
  }, []);

  return (
    <View className='items-center space-y-2'>
      <StyledText className='text-slate-500'>{appName}</StyledText>
      <StyledText className='text-slate-500'>{appVersion}</StyledText>
      <StyledText className='text-slate-500'>UID: {userId}</StyledText>
      <StyledText className='text-slate-500 text-center'>{t('settings.author')}</StyledText>
      <StyledText className='text-slate-500'>{new Date().getFullYear()}.</StyledText>
    </View>
  );
}
