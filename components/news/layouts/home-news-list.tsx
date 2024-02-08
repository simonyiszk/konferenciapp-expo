import { useTranslation } from 'react-i18next';

import { NewsItemDto } from '../../../types/news-api.type';
import { StyledText } from '../../base/text';
import { NewsItem } from '../elements/news-item';

interface HomeNewsListProps {
  news: NewsItemDto[];
}

export function HomeNewsList({ news }: HomeNewsListProps) {
  const { t } = useTranslation();
  if (news.length === 0) {
    return <StyledText className='text-center my-10'>{t('home.noNews')}</StyledText>;
  }
  return news.map((newsItem, index) => <NewsItem key={index} newsItem={newsItem} />);
}
