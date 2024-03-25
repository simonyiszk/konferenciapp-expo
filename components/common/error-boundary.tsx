import { ErrorBoundaryProps } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { usePageView } from '../../utils/analytics.utils';
import { StyledButton } from './styled-button';
import { Subtitle } from './subtitle';
import { Title } from './title';

export function ErrorBoundary(props: ErrorBoundaryProps) {
  const { top, bottom, left, right } = useSafeAreaInsets();
  const { t } = useTranslation();
  usePageView('error');
  return (
    <View
      className='bg-blue-500 items-center justify-center h-full space-y-5'
      style={{
        paddingTop: top,
        paddingBottom: bottom,
        paddingLeft: left + 20,
        paddingRight: right + 20,
      }}
    >
      <Title className='text-white'>{t('errBoundary.main')}</Title>
      <ScrollView>
        <Subtitle testID='error-message' className='text-white/50 flex-shrink'>
          {props.error.message}
        </Subtitle>
      </ScrollView>
      <Subtitle className='text-white/50'>{t('errBoundary.sub')}</Subtitle>
      <StyledButton testID='error-retry' onPress={props.retry} className='bg-blue-900 mb-10'>
        {t('errBoundary.retry')}
      </StyledButton>
    </View>
  );
}
