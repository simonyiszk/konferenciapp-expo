import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Appearance } from 'react-native';

import { Screen } from '../../components/base/screen';
import { ScrollContent } from '../../components/base/scroll-content';
import { Header } from '../../components/common/header';
import { Setting } from '../../components/common/settings/setting';
import { Title } from '../../components/common/title';
import { AppDetails } from '../../components/settings/app-details';
import i18n from '../../services/i18-next';
import { SettingsStorageService } from '../../services/settings-storage.service';
import { SettingsType } from '../../types/settings.type';

export default function SettingsPage() {
  const [settings, setSettings] = useState<SettingsType>({ language: 'hu', mode: 'light', notifications: false });

  useEffect(() => {
    SettingsStorageService.loadSettings().then(setSettings);
  }, []);

  useEffect(() => {
    SettingsStorageService.saveSettings(settings);
  }, [settings]);

  const setLanguage = (newLng: string) => {
    i18n.changeLanguage(newLng);
    setSettings((prevState) => ({ ...prevState, language: newLng }));
  };

  const setMode = (colorScheme: string) => {
    switch (colorScheme) {
      case 'default':
        setColorScheme(null);
        break;
      case 'dark':
        setColorScheme('dark');
        break;
      case 'light':
        setColorScheme('light');
        break;
    }
  };
  const setColorScheme = (colorScheme: 'dark' | 'light' | null) => {
    Appearance.setColorScheme(colorScheme);
    setSettings((prevState) => ({ ...prevState, mode: colorScheme ?? 'default' }));
  };
  // const toggleNotifications = (notifications: boolean) =>
  //   setSettings((prevState) => ({ ...prevState, notifications: notifications }));

  const { t } = useTranslation();
  return (
    <Screen analyticsScreenName='settings'>
      <Header>
        <Title>{t('settings.title')}</Title>
      </Header>
      <ScrollContent>
        <Setting
          icon='globe'
          label={t('settings.language')}
          availableValues={[
            { label: 'Magyar', value: 'hu' },
            { label: 'English', value: 'en' },
          ]}
          currentValue={settings?.language ?? 'hu'}
          onChange={setLanguage}
        />
        <Setting
          icon={
            settings.mode == 'default'
              ? Appearance.getColorScheme() === 'light'
                ? 'sun'
                : 'moon'
              : settings.mode == 'light'
                ? 'sun'
                : 'moon'
          }
          label={t('settings.darkMode')}
          availableValues={[
            { label: t('settings.default'), value: 'default' },
            { label: t('settings.dark'), value: 'dark' },
            { label: t('settings.light'), value: 'light' },
          ]}
          currentValue={settings?.mode ?? 'light'}
          onChange={setMode}
        />
        {/*<SettingToggle*/}
        {/*  icon={settings?.notifications === true ? 'bell' : 'bell-off'}*/}
        {/*  label={t('settings.notifications')}*/}
        {/*  currentValue={settings?.notifications ?? false}*/}
        {/*  onChange={toggleNotifications}*/}
        {/*/>*/}
        <AppDetails />
      </ScrollContent>
    </Screen>
  );
}
