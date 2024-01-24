import { useSchedule } from './use-schedule';

export function useScheduleItem(id: string) {
  const { data, ...rest } = useSchedule();
  const item = data?.find((item) => item.id === id);
  return { data: item, ...rest };
}
