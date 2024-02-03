import { useQuery } from '@tanstack/react-query';

import { NewsService } from '../services/news.service';

export function useNewsItem(id: string) {
  return useQuery({
    queryKey: ['news', id],
    queryFn: () => NewsService.getNewsItemData(id),
  });
}
