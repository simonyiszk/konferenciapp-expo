import { useNavigation } from 'expo-router';
import { Image, PressableProps, View } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { ARCHIVE } from '../../../config/env.config';
import { useFavoritePresentations } from '../../../contexts/favorite-presentations.context';
import { ConferenceService } from '../../../services/conference.service';
import { PresentationDto } from '../../../types/conference-api.type';
import { cn } from '../../../utils/common.utils';
import { isPresentationPast } from '../../../utils/presentation.utils';
import { ItemCard } from '../../base/item-card';
import { StyledText } from '../../base/text';
import { ItemHighlight } from '../../common/item-highlight';
import { PresentationStatusIndicator } from './presentation-status-indicator';

interface PresentationItemProps extends Omit<PressableProps, 'onPress' | 'onPressIn' | 'onPressOut'> {
  presentation: PresentationDto;
}

export function PresentationItem({ presentation, className, ...props }: PresentationItemProps) {
  const { isFavoritePresentation } = useFavoritePresentations();
  const router = useNavigation<NativeStackNavigationProp<{ 'presentation-details': { id: string } }>>();
  const isPast = isPresentationPast(presentation) && !ARCHIVE;
  const isFavorite = isFavoritePresentation(presentation.slug);
  const startTime = ConferenceService.getFormattedTimestamp(presentation.startTime);
  const endTime = ConferenceService.getFormattedTimestamp(presentation.endTime);
  const onPress = () => {
    router.navigate('presentation-details', { id: presentation.slug });
  };
  return (
    <ItemCard
      className={cn(
        'flex-row items-center',
        {
          'opacity-50': isPast,
        },
        className
      )}
      onPress={onPress}
      {...props}
    >
      <Image source={{ uri: presentation.presenter.pictureUrl }} className='rounded-full h-14 w-14' />
      <View className='flex-col gap-2 flex-1 mx-2'>
        <StyledText className='text-xl' numberOfLines={1}>
          {presentation.title}
        </StyledText>
        <View className='flex-row overflow-hidden'>
          <StyledText className='text-background-400 flex-shrink' numberOfLines={1}>
            {presentation.presenter.name}
          </StyledText>
          <StyledText className='text-background-400' numberOfLines={1}>
            {' '}
            • {startTime} - {endTime}
          </StyledText>
        </View>
      </View>
      <PresentationStatusIndicator presentation={presentation} />
      {isFavorite && <ItemHighlight className='bg-yellow-500' />}
    </ItemCard>
  );
}
