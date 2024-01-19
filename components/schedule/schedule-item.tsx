import { format } from 'date-fns';
import { Image, Pressable, View } from 'react-native';

import { ScheduleEvent } from '../../types/schedule-event.type';
import { StyledText } from '../base/text';
import { ScheduleStatusIndicator } from './schedule-status-indicator';

interface ScheduleItem {
  event: ScheduleEvent;
}

export function ScheduleItem({ event }: ScheduleItem) {
  const startTime = format(new Date(event.start), 'HH:mm');
  const endTime = format(new Date(event.end), 'HH:mm');
  return (
    <Pressable className='mb-5 rounded-xl bg-white flex-row p-3 items-center shadow-md shadow-slate-500/10'>
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
