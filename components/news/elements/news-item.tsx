import { useNavigation } from 'expo-router';
import { PressableProps } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { NewsItemDto } from '../../../types/news-api.type';
import { formatHu } from '../../../utils/date.utils';
import { ItemCard } from '../../base/item-card';
import { StyledText } from '../../base/text';

interface NewsItemProps extends Omit<PressableProps, 'onPress' | 'onPressIn' | 'onPressOut'> {
  newsItem: NewsItemDto;
}

export function NewsItem({ newsItem, ...props }: NewsItemProps) {
  const router = useNavigation<NativeStackNavigationProp<{ 'news-details': { id: string } }>>();
  const onPress = () => {
    router.navigate('news-details', { id: newsItem.url });
  };
  return (
    <ItemCard onPress={onPress} {...props}>
      <StyledText className='text-xl' numberOfLines={2}>
        {newsItem.title}
      </StyledText>
      <StyledText className='text-slate-500'>{formatHu(new Date(newsItem.timestamp))}</StyledText>
      <StyledText className='text-slate-500' numberOfLines={2}>
        {newsItem.briefContent}
      </StyledText>
    </ItemCard>
  );
}
