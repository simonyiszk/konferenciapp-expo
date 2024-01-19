import { differenceInHours, format, isAfter, isBefore } from 'date-fns';
import { Image, Pressable, View } from 'react-native';

import { ScheduleEvent } from '../../types/schedule-event.type';
import { cn } from '../../utils/common.utils';
import { StyledText } from '../base/text';

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

function ScheduleStatusIndicator({ event }: ScheduleItem) {
  const isCurrent = isScheduleCurrent(event) || true;
  const isUpcoming = isScheduleUpcoming(event);
  return (
    <View
      className={cn('p-1 rounded-full', {
        hidden: !isCurrent && !isUpcoming,
        'bg-yellow-400/30': isUpcoming,
        'bg-green-400/30': isCurrent,
      })}
    >
      <View
        className={cn('w-5 h-5 rounded-full', {
          'bg-yellow-400': isUpcoming,
          'bg-green-400': isCurrent,
        })}
      />
    </View>
  );
}

function isScheduleCurrent(schedule: ScheduleEvent) {
  const now = new Date();
  const start = new Date(schedule.start);
  const end = new Date(schedule.end);
  return isBefore(start, now) && isAfter(end, now);
}

function isScheduleUpcoming(schedule: ScheduleEvent) {
  const now = new Date();
  const start = new Date(schedule.start);
  return differenceInHours(start, now) < 1;
}
