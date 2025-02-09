import { useQuery } from '@tanstack/react-query';
import { useFeatureFlag } from 'posthog-react-native';

import { MockNewsService } from '../services/mock-news.service';
import { NewsService } from '../services/news.service';

export function useNewsItem(id: string) {
  const mockEnabled = useFeatureFlag('mock_data');

  return useQuery({
    queryKey: ['news', id],
    queryFn: () => {
      if (mockEnabled) {
        return MockNewsService.getNewsItemData();
      }
      return NewsService.getNewsItemData(id);
    },
  });
}
