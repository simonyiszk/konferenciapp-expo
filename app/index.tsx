import { View } from 'react-native';

import { StyledText } from '../components/base/text';

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
  return (
    <View>
      <StyledText className='text-red-500 ml-5'>Hello there!</StyledText>
    </View>
  );
}
