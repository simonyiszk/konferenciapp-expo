import { FlatList } from 'react-native';

import { NewsEvent } from '../../types/news-event.type';
import { NewsItem } from './news-item';

interface NewsListProps {
  news: NewsEvent[];
}

export function NewsList({ news }: NewsListProps) {
  return (
    <FlatList data={news} className='flex-grow px-5' renderItem={(listInfo) => <NewsItem event={listInfo.item} />} />
  );
}
