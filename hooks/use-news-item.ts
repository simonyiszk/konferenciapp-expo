import { useQuery } from '@tanstack/react-query';

import { MockNewsService } from '../services/mock-news.service';

export function useNewsItem(id: string) {
  return useQuery({
    queryKey: ['news', id],
    queryFn: () => MockNewsService.getNewsItemData(),
  });
}
