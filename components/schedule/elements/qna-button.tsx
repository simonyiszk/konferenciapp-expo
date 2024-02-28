import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { Pressable } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { extendedColors } from '../../../theme/extendedColors';

interface QnaButtonProps {
  slug: string;
}

export function QnaButton({ slug }: QnaButtonProps) {
  const router = useNavigation<NativeStackNavigationProp<{ qna: { id: string } }>>();
  const onPress = () => {
    router.navigate('qna', { id: slug });
  };
  return (
    <Pressable onPress={onPress}>
      <Feather name='message-circle' color={extendedColors.slate['500']} size={30} />
    </Pressable>
  );
}
