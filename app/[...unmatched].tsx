import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { SafeAreaView } from 'react-native';

import { StyledButton } from '../components/common/styled-button';
import { Subtitle } from '../components/common/subtitle';
import { Title } from '../components/common/title';
import { usePageView } from '../utils/analytics.utils';

export default function Unmatched() {
  const { canGoBack, back } = useRouter();
  const { t } = useTranslation();
  usePageView('unmatched');
  return (
    <SafeAreaView className='items-center justify-center flex-grow space-y-5'>
      <Title className='text-center'>{t('unmatched.main')}</Title>
      <Subtitle className='text-center'>{t('unmatched.sub')}</Subtitle>
      {canGoBack() && (
        <StyledButton leftIcon='arrow-left' onPress={back}>
          {t('unmatched.back')}
        </StyledButton>
      )}
    </SafeAreaView>
  );
}
