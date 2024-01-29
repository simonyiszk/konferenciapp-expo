import { format } from 'date-fns';
import { useNavigation } from 'expo-router';
import { useState } from 'react';
import { Image, Pressable, View } from 'react-native';
import { NativeStackNavigationProp } from 'react-native-screens/native-stack';

import { useFavoriteEvents } from '../../contexts/favorite-events.context';
import { ScheduleEvent } from '../../types/schedule-event.type';
import { cn } from '../../utils/common.utils';
import { isScheduleEventPast } from '../../utils/schedule.utils';
import { StyledText } from '../base/text';
import { ScheduleStatusIndicator } from './schedule-status-indicator';

interface ScheduleItem {
  event: ScheduleEvent;
}

export function ScheduleItem({ event }: ScheduleItem) {
  const { isFavoriteEvent } = useFavoriteEvents();
  const router = useNavigation<NativeStackNavigationProp<{ 'schedule-details': { id: string } }>>();
  const [isPressed, setIsPressed] = useState(false);
  const startTime = format(new Date(event.start), 'HH:mm');
  const endTime = format(new Date(event.end), 'HH:mm');
  const isPast = isScheduleEventPast(event);
  const isFavorite = isFavoriteEvent(event.id);
  const onPress = () => {
    router.navigate('schedule-details', { id: event.id });
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
      <Image source={{ uri: event.presenterImage }} className='rounded-full h-14 w-14' />
      <View className='flex-col gap-2 flex-1 mx-2'>
        <StyledText className='text-xl' numberOfLines={1}>
          {event.title}
        </StyledText>
        <View className='flex-row overflow-hidden'>
          <StyledText className='text-slate-500 flex-shrink' numberOfLines={1}>
            {event.presenter}
          </StyledText>
          <StyledText className='text-slate-500' numberOfLines={1}>
            {' '}
            • {startTime} - {endTime}
          </StyledText>
        </View>
      </View>
      <ScheduleStatusIndicator event={event} />
    </Pressable>
  );
}
