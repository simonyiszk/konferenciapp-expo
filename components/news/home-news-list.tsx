import { NewsItemDto } from '../../types/news-api.type';
import { StyledText } from '../base/text';
import { NewsItem } from './news-item';

interface HomeNewsListProps {
  news: NewsItemDto[];
}

export function HomeNewsList({ news }: HomeNewsListProps) {
  if (news.length === 0) {
    return <StyledText className='text-center my-10'>Nincs megjeleníthető hír.</StyledText>;
  }
  return news.map((newsItem, index) => <NewsItem key={index} newsItem={newsItem} />);
}
