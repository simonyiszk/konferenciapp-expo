import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native';

import { StyledButton } from '../components/common/styled-button';
import { Subtitle } from '../components/common/subtitle';
import { Title } from '../components/common/title';
import { usePageView } from '../utils/analytics.utils';

export default function Unmatched() {
  const { canGoBack, back } = useRouter();
  usePageView('unmatched');
  return (
    <SafeAreaView className='items-center justify-center flex-grow space-y-5'>
      <Title className='text-center'>Ismeretlen képernyőre jutottál</Title>
      <Subtitle className='text-center'>Ilyet mi itt nem tartunk</Subtitle>
      {canGoBack() && (
        <StyledButton leftIcon='arrow-left' onPress={back}>
          Vissza
        </StyledButton>
      )}
    </SafeAreaView>
  );
}
