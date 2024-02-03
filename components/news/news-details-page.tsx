import { useNewsItem } from '../../hooks/use-news-item';
import { Screen } from '../base/screen';
import { ScrollContent } from '../base/scroll-content';
import { StyledText } from '../base/text';
import { ErrorMessage } from '../common/error-message';
import { Header } from '../common/header';
import { SkeletonRectangle } from '../common/skeleton';
import { Title } from '../common/title';

interface NewsDetailsPageProps {
  id: string;
}

export function NewsDetailsPage({ id }: NewsDetailsPageProps) {
  const { data, error, isLoading } = useNewsItem(id);
  if (!data) return <Screen />;
  return (
    <Screen>
      <Header>
        {isLoading && <SkeletonRectangle className='h-10' />}
        {data.title && <Title>{data.title}</Title>}
      </Header>
      <ScrollContent>
        {error && (
          <ErrorMessage>Hiba történt a hír betöltése közben. Lehet, hogy ez a hír nem is létezik?</ErrorMessage>
        )}
        <StyledText className='text-xl'>{data?.content}</StyledText>
      </ScrollContent>
    </Screen>
  );
}
