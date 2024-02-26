import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Screen } from '../../components/base/screen';
import { ScrollContent } from '../../components/base/scroll-content';
import { Header } from '../../components/common/header';
import { Setting } from '../../components/common/setting';
import { Title } from '../../components/common/title';

export default function SettingsPage() {
  const [colorScheme, setColorScheme] = useState('dark');
  const { t } = useTranslation();
  return (
    <Screen analyticsScreenName='settings'>
      <Header>
        <Title>{t('settings.title')}</Title>
      </Header>
      <ScrollContent>
        <Setting
          label={t('settings.darkMode')}
          availableValues={[
            { label: 'Dark', value: 'dark' },
            { label: 'Light', value: 'light' },
          ]}
          currentValue={colorScheme}
          onChange={setColorScheme}
        />
      </ScrollContent>
    </Screen>
  );
}
