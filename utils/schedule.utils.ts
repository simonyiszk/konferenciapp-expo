import { differenceInMinutes, isAfter, isBefore } from 'date-fns';

import { ScheduleEvent } from '../types/schedule-event.type';

export function isScheduleEventPast(schedule: ScheduleEvent) {
  const now = new Date();
  const end = new Date(schedule.end);
  return isBefore(end, now);
}

export function isScheduleEventCurrent(schedule: ScheduleEvent) {
  const now = new Date();
  const start = new Date(schedule.start);
  const end = new Date(schedule.end);
  return isBefore(start, now) && isAfter(end, now);
}

export function isScheduleEventUpcoming(schedule: ScheduleEvent) {
  const now = new Date();
  const start = new Date(schedule.start);
  return isAfter(start, now) && differenceInMinutes(start, now) < 15;
}
