import { View } from 'react-native';

import { ScheduleEvent } from '../../types/schedule-event.type';
import { cn } from '../../utils/common.utils';
import { isScheduleCurrent, isScheduleUpcoming } from '../../utils/schedule.utils';

interface ScheduleStatusIndicatorProps {
  event: ScheduleEvent;
}

export function ScheduleStatusIndicator({ event }: ScheduleStatusIndicatorProps) {
  const isCurrent = isScheduleCurrent(event);
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
