import { useQuery } from '@tanstack/react-query';

import { schedule } from '../mocks/schedules';
import { ScheduleEvent } from '../types/schedule-event.type';

export function useSchedule() {
  return useQuery<ScheduleEvent[]>({
    queryKey: ['schedule'],
    queryFn: getSchedule,
  });
}

const delay = 2000;

function getSchedule(): Promise<ScheduleEvent[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(schedule);
    }, delay);
  });
}
