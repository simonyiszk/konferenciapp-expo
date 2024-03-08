import { useQuery } from '@tanstack/react-query';

import { NewsService } from '../services/news.service';
import { NewsDto } from '../types/news-api.type';

const REFRESH_INTERVAL = 1000 * 60; // 1 minute

export function useNews() {
  return useQuery<NewsDto>({
    queryKey: ['news'],
    queryFn: NewsService.getNewsData,
    refetchInterval: REFRESH_INTERVAL,
  });
}
