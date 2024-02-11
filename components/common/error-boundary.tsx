import { ErrorBoundaryProps } from 'expo-router';
import { ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { StyledButton } from './styled-button';
import { Subtitle } from './subtitle';
import { Title } from './title';

export function ErrorBoundary(props: ErrorBoundaryProps) {
  const { top, bottom, left, right } = useSafeAreaInsets();
  return (
    <View
      className='bg-blue-500 items-center justify-center flex-1 space-y-5'
      style={{
        paddingTop: top,
        paddingBottom: bottom,
        paddingLeft: left + 20,
        paddingRight: right + 20,
      }}
    >
      <Title className='text-white'>Hopp, ez elszállt :(</Title>
      <ScrollView>
        <Subtitle className='text-white/50 flex-shrink'>{props.error.message}</Subtitle>
      </ScrollView>
      <Subtitle className='text-white/50'>Kérlek ezt jelezd a fejlesztőknek!</Subtitle>
      <StyledButton onPress={props.retry} className='bg-blue-900'>
        Újrapróbálkozás
      </StyledButton>
    </View>
  );
}
