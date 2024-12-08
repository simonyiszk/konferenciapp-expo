import { useQuery } from '@tanstack/react-query';

import { MockNewsService } from '../services/mock-news.service';
import { NewsDto } from '../types/news-api.type';

const REFRESH_INTERVAL = 1000 * 60; // 1 minute

export function useNews() {
  return useQuery<NewsDto>({
    queryKey: ['news'],
    queryFn: MockNewsService.getNewsData,
    refetchInterval: REFRESH_INTERVAL,
  });
}
