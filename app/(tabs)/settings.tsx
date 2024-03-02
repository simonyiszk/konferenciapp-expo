import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Screen } from '../../components/base/screen';
import { ScrollContent } from '../../components/base/scroll-content';
import { Header } from '../../components/common/header';
import { Setting } from '../../components/common/settings/setting';
import { SettingToggle } from '../../components/common/settings/setting-toggle';
import { Title } from '../../components/common/title';
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

  const setLanguage = (newLng: string) => setSettings((prevState) => ({ ...prevState, language: newLng }));
  const setColorScheme = (colorScheme: string) => setSettings((prevState) => ({ ...prevState, mode: colorScheme }));
  const toggleNotifications = (notifications: boolean) =>
    setSettings((prevState) => ({ ...prevState, notifications: notifications }));

  const { t } = useTranslation();
  return (
    <Screen analyticsScreenName='settings'>
      <Header>
        <Title>{t('settings.title')}</Title>
      </Header>
      <ScrollContent>
        <Setting
          label={t('settings.language')}
          availableValues={[
            { label: 'Magyar', value: 'hu' },
            { label: 'English', value: 'en' },
          ]}
          currentValue={settings?.language ?? 'hu'}
          onChange={setLanguage}
        />
        <Setting
          label={t('settings.darkMode')}
          availableValues={[
            { label: 'Rendszer alapján', value: 'default' },
            { label: 'Dark', value: 'dark' },
            { label: 'Light', value: 'light' },
          ]}
          currentValue={settings?.mode ?? 'light'}
          onChange={setColorScheme}
        />
        <SettingToggle
          label={'Notification'}
          currentValue={settings?.notifications ?? false}
          onChange={toggleNotifications}
        />
      </ScrollContent>
    </Screen>
  );
}
