import { useNews } from './use-news';

export function useNewsItem(id: string) {
  const { data, ...rest } = useNews();
  const item = data?.find((item) => item.id === id);
  return { data: item, ...rest };
}
