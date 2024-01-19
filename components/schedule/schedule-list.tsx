import { useMemo } from 'react';
import { FlatList } from 'react-native';

import { ScheduleEvent } from '../../types/schedule-event.type';
import { isScheduleEventCurrent, isScheduleEventUpcoming } from '../../utils/schedule.utils';
import { ScheduleItem } from './schedule-item';

interface ScheduleListProps {
  schedule: ScheduleEvent[];
  filterToCurrent?: boolean;
  filterToUpcoming?: boolean;
}

export function ScheduleList({ schedule, filterToCurrent, filterToUpcoming }: ScheduleListProps) {
  const filteredSchedule = useMemo(
    () =>
      schedule.filter(
        (event) =>
          !(filterToCurrent || filterToUpcoming) ||
          (filterToUpcoming && isScheduleEventUpcoming(event)) ||
          (filterToCurrent && isScheduleEventCurrent(event))
      ),
    [schedule, filterToCurrent, filterToUpcoming]
  );
  return (
    <FlatList
      data={filteredSchedule}
      className='flex-grow px-5'
      renderItem={(listInfo) => <ScheduleItem event={listInfo.item} />}
    />
  );
}
