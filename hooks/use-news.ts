import { useQuery } from '@tanstack/react-query';
import { useFeatureFlag } from 'posthog-react-native';

import { MockNewsService } from '../services/mock-news.service';
import { NewsService } from '../services/news.service';
import { NewsDto } from '../types/news-api.type';

const REFRESH_INTERVAL = 1000 * 60; // 1 minute

export function useNews() {
  const mockEnabled = useFeatureFlag('mock_data');
  return useQuery<NewsDto>({
    queryKey: ['news'],
    queryFn: mockEnabled ? MockNewsService.getNewsData : NewsService.getNewsData,
    refetchInterval: REFRESH_INTERVAL,
  });
}
