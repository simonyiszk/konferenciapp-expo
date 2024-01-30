import { useQuery } from '@tanstack/react-query';

import { news } from '../mocks/news';
import { NewsEvent } from '../types/news-event.type';

export function useNews() {
  return useQuery<NewsEvent[]>({
    queryKey: ['news'],
    queryFn: getNews,
  });
}

const delay = 0;

function getNews(): Promise<NewsEvent[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(news);
    }, delay);
  });
}
