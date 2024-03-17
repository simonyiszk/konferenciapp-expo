import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Animated, Pressable, View } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { extendedColors } from '../../../theme/extendedColors';
import { usePulseAnimation } from '../../../utils/animation.utils';
import { cn } from '../../../utils/common.utils';
import { ItemCard } from '../../base/item-card';
import { StyledText } from '../../base/text';

interface QnaButtonProps {
  slug: string;
  highlight?: boolean;
}

export function QnaButton({ slug, highlight }: QnaButtonProps) {
  const [promptOpen, setPromptOpen] = useState(highlight ?? false);
  const animation = usePulseAnimation(1000);
  const router = useNavigation<NativeStackNavigationProp<{ qna: { id: string } }>>();
  const onPress = () => {
    router.navigate('qna', { id: slug });
  };
  return (
    <View className='relative'>
      <Pressable onPress={onPress}>
        <Animated.View
          style={{
            opacity: highlight ? animation.opacity : 1,
          }}
          className={cn({
            'bg-primary-500 rounded-full p-2': highlight,
          })}
        >
          <Feather
            name='message-circle'
            color={highlight ? 'white' : extendedColors.slate[500]}
            size={highlight ? 26 : 30}
          />
        </Animated.View>
      </Pressable>
      {promptOpen && (
        <ItemCard
          onPress={onPress}
          className='absolute top-full right-1/2 shadow-md w-40 rounded-tr-none flex-row items-center space-x-2'
        >
          <Pressable onPress={() => setPromptOpen(false)}>
            <Feather name='x' size={20} color={extendedColors.slate[300]} />
          </Pressable>
          <View>
            <StyledText className='text-xl font-raleway-bold'>Kérdezz</StyledText>
            <StyledText>az előadótól!</StyledText>
          </View>
        </ItemCard>
      )}
    </View>
  );
}
