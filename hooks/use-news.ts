import { useQuery } from '@tanstack/react-query';

import { NewsService } from '../services/news.service';
import { NewsDto } from '../types/news-api.type';

export function useNews() {
  return useQuery<NewsDto>({
    queryKey: ['news'],
    queryFn: NewsService.getNewsData,
  });
}
