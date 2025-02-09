import { Feather } from '@expo/vector-icons';
import { useNavigation } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { PressableProps, View } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { extendedColors } from '../../../theme/extendedColors';
import { NewsItemDto } from '../../../types/news-api.type';
import { formatHu } from '../../../utils/date.utils';
import { ItemCard } from '../../base/item-card';
import { StyledText } from '../../base/text';

interface NewsItemProps extends Omit<PressableProps, 'onPress' | 'onPressIn' | 'onPressOut'> {
  newsItem: NewsItemDto;
}

export function NewsItem({ newsItem, ...props }: NewsItemProps) {
  const router = useNavigation<NativeStackNavigationProp<{ 'news-details': { id: string } }>>();
  const { t } = useTranslation();
  const onPress = () => {
    router.navigate('news-details', { id: newsItem.url });
  };
  return (
    <ItemCard className='space-y-2' onPress={onPress} {...props}>
      {newsItem.highlighted && (
        <View className='flex-row space-x-1 items-center'>
          <Feather name='alert-circle' size={15} color={extendedColors.red['500']} />
          <StyledText className='text-red-500'>{t('news.highlight')}</StyledText>
        </View>
      )}
      <StyledText className='text-xl' numberOfLines={2}>
        {newsItem.title}
      </StyledText>
      <StyledText className='text-background-400'>{formatHu(new Date(newsItem.timestamp))}</StyledText>
      <StyledText className='text-background-400' numberOfLines={2}>
        {newsItem.briefContent}
      </StyledText>
    </ItemCard>
  );
}
