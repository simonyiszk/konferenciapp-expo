import { format } from 'date-fns';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { useFavoritePresentations } from '../../contexts/favorite-presentations.context';
import { PresentationDto } from '../../types/conference-api.type';
import { cn } from '../../utils/common.utils';
import { isPresentationPast } from '../../utils/presentation.utils';
import { StyledText } from '../base/text';
import { PresentationStatusIndicator } from './presentation-status-indicator';

interface PresentationItemProps {
  presentation: PresentationDto;
}

export function PresentationItem({ presentation }: PresentationItemProps) {
  const { isFavoritePresentation } = useFavoritePresentations();
  const router = useNavigation<NativeStackNavigationProp<{ 'presentation-details': { id: string } }>>();
  const [isPressed, setIsPressed] = useState(false);
  const startTime = format(new Date(presentation.startTime), 'HH:mm');
  const endTime = format(new Date(presentation.endTime), 'HH:mm');
  const isPast = isPresentationPast(presentation);
  const isFavorite = isFavoritePresentation(presentation.slug);
  const onPress = () => {
    router.navigate('presentation-details', { id: presentation.slug });
  };
  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      className={cn('mb-5 rounded-xl bg-white flex-row p-3 items-center shadow-md shadow-slate-500/10', {
        'opacity-50': isPast,
        'bg-slate-50': isPressed && !isPast,
        'border-yellow-500 border-r-4': isFavorite,
      })}
    >
      <Image source={{ uri: presentation.presenter.pictureUrl }} className='rounded-full h-14 w-14' />
      <View className='flex-col gap-2 flex-1 mx-2'>
        <StyledText className='text-xl' numberOfLines={1}>
          {presentation.title}
        </StyledText>
        <View className='flex-row overflow-hidden'>
          <StyledText className='text-slate-500 flex-shrink' numberOfLines={1}>
            {presentation.presenter.name}
          </StyledText>
          <StyledText className='text-slate-500' numberOfLines={1}>
            {' '}
            • {startTime} - {endTime}
          </StyledText>
        </View>
      </View>
      <PresentationStatusIndicator presentation={presentation} />
    </Pressable>
  );
}
