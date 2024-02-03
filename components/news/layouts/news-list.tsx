import { FlatList } from 'react-native';

import { NewsItemDto } from '../../../types/news-api.type';
import { NewsItem } from '../elements/news-item';

interface NewsListProps {
  news: NewsItemDto[];
}

export function NewsList({ news }: NewsListProps) {
  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 130 }}
      data={news}
      className='flex-grow px-5 pt-5'
      renderItem={(listInfo) => <NewsItem newsItem={listInfo.item} />}
    />
  );
}
