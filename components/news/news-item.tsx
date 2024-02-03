import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Pressable, PressableProps } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { NewsItemDto } from '../../types/news-api.type';
import { cn } from '../../utils/common.utils';
import { formatHu } from '../../utils/date.utils';
import { StyledText } from '../base/text';

interface NewsItemProps extends Omit<PressableProps, 'onPress' | 'onPressIn' | 'onPressOut'> {
  newsItem: NewsItemDto;
}

export function NewsItem({ newsItem, className, ...props }: NewsItemProps) {
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
      className={cn(
        'mb-5 rounded-xl bg-white space-y-2 p-3 shadow-md shadow-slate-500/10',
        {
          'bg-slate-50': isPressed,
        },
        className
      )}
      {...props}
    >
      <StyledText className='text-xl' numberOfLines={2}>
        {newsItem.title}
      </StyledText>
      <StyledText className='text-slate-500'>{formatHu(new Date(newsItem.timestamp))}</StyledText>
      <StyledText className='text-slate-500' numberOfLines={2}>
        {newsItem.briefContent}
      </StyledText>
    </Pressable>
  );
}
