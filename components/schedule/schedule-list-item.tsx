import { differenceInHours, format, isAfter, isBefore } from 'date-fns';
import { Image, Pressable, View } from 'react-native';

import { cn } from '../../utils/common.utils';
import { StyledText } from '../base/text';

export type Schedule = {
  title: string;
  description: string;
  location: string;
  start: string;
  end: string;
  presenter: string;
  presenterImage: string;
};

interface ScheduleListItemProps {
  schedule: Schedule;
}

export function ScheduleListItem({ schedule }: ScheduleListItemProps) {
  const startTime = format(new Date(schedule.start), 'HH:mm');
  const endTime = format(new Date(schedule.end), 'HH:mm');
  return (
    <Pressable className='rounded-xl bg-white flex-row p-3 items-center shadow-md shadow-slate-500/30'>
      <Image source={{ uri: schedule.presenterImage }} className='rounded-full h-14 w-14' />
      <View className='flex-col gap-2 flex-1 mx-2'>
        <StyledText className='text-xl' numberOfLines={1}>
          {schedule.title}
        </StyledText>
        <StyledText className='text-slate-500' numberOfLines={1}>
          {schedule.presenter} • {startTime} - {endTime}
        </StyledText>
      </View>
      <ScheduleStatusIndicator schedule={schedule} />
    </Pressable>
  );
}

function ScheduleStatusIndicator({ schedule }: ScheduleListItemProps) {
  const isCurrent = isScheduleCurrent(schedule) || true;
  const isUpcoming = isScheduleUpcoming(schedule);
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

function isScheduleCurrent(schedule: Schedule) {
  const now = new Date();
  const start = new Date(schedule.start);
  const end = new Date(schedule.end);
  return isBefore(start, now) && isAfter(end, now);
}

function isScheduleUpcoming(schedule: Schedule) {
  const now = new Date();
  const start = new Date(schedule.start);
  return differenceInHours(start, now) < 1;
}
