import { FlatList } from 'react-native';

import { NewsItemDto } from '../../types/news-api.type';
import { NewsItem } from './news-item';

interface NewsListProps {
  news: NewsItemDto[];
}

export function NewsList({ news }: NewsListProps) {
  return <FlatList data={news} className='px-5' renderItem={(listInfo) => <NewsItem newsItem={listInfo.item} />} />;
}
