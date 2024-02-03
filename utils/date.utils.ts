import { format } from 'date-fns';
import { hu } from 'date-fns/locale';

export function formatHu(date: Date): string {
  return format(date, 'MM. dd. - HH:mm', { locale: hu });
}
