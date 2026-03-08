import { format, isSameDay, parse } from 'date-fns';
import { hu } from 'date-fns/locale';

import { CONFERENCE_DATE } from '../config/env.config';

export function formatHu(date: Date): string {
  return format(date, 'MM. dd. - HH:mm', { locale: hu });
}

export function isConferenceDay(): boolean {
  const targetDateStr = CONFERENCE_DATE;
  if (!targetDateStr) {
    return true;
  }

  const targetDate = parse(targetDateStr, 'yyyy-MM-dd', new Date());
  if (isNaN(targetDate.getTime())) {
    return true;
  }

  return isSameDay(new Date(), targetDate);
}

export function getFullDate(time: string): Date {
  const [hours, minutes] = time.split(':').map(Number);
  const date = new Date(CONFERENCE_DATE);
  date.setHours(hours, minutes, 0, 0);
  return date;
}
