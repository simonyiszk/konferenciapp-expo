import { format, isSameDay, parse } from 'date-fns';
import { hu } from 'date-fns/locale';

export function formatHu(date: Date): string {
  return format(date, 'MM. dd. - HH:mm', { locale: hu });
}

export function isConferenceDay(): boolean {
  const targetDateStr = process.env.EXPO_PUBLIC_CONFERENCE_DATE;
  if (!targetDateStr) {
    return true;
  }

  const targetDate = parse(targetDateStr, 'yyyy-MM-dd', new Date());
  if (isNaN(targetDate.getTime())) {
    return true;
  }

  return isSameDay(new Date(), targetDate);
}
