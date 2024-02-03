import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Pressable, View } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { NewsItemDto } from '../../types/news-api.type';
import { cn } from '../../utils/common.utils';
import { StyledText } from '../base/text';

interface NewsItemProps {
  newsItem: NewsItemDto;
}

export function NewsItem({ newsItem }: NewsItemProps) {
  const router = useNavigation<NativeStackNavigationProp<{ 'news-details': { id: string } }>>();
  const [isPressed, setIsPressed] = useState(false);
  const onPress = () => {
    router.navigate('news-details', { id: newsItem.url });
  };
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      className={cn('mb-5 rounded-xl bg-white flex-row p-3 items-center shadow-md shadow-slate-500/10', {
        'bg-slate-50': isPressed,
      })}
    >
      <View className='flex-col gap-2 flex-1 mx-2'>
        <StyledText className='text-xl' numberOfLines={1}>
          {newsItem.title}
        </StyledText>
      </View>
    </Pressable>
  );
}
