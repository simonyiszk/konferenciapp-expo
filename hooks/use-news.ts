import { useQuery } from '@tanstack/react-query';

import {NewsEvent} from "../types/news-event.type";
import {news} from "../mocks/news";

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
