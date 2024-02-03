import { useNewsItem } from '../../../hooks/use-news-item';
import { Screen } from '../../base/screen';
import { ScrollContent } from '../../base/scroll-content';
import { StyledText } from '../../base/text';
import { ErrorMessage } from '../../common/error-message';
import { Header } from '../../common/header';
import { SkeletonParagraph } from '../../common/skeletons/skeleton-paragraph';
import { SkeletonTitle } from '../../common/skeletons/skeleton-title';
import { Title } from '../../common/title';

interface NewsDetailsPageProps {
  id: string;
}

export function NewsDetailsPage({ id }: NewsDetailsPageProps) {
  const { data, error, isLoading } = useNewsItem(id);
  if (!data) return <Screen />;
  return (
    <Screen>
      <Header>
        {isLoading && <SkeletonTitle />}
        {data.title && <Title>{data.title}</Title>}
      </Header>
      <ScrollContent>
        {error && (
          <ErrorMessage>Hiba történt a hír betöltése közben. Lehet, hogy ez a hír nem is létezik?</ErrorMessage>
        )}
        {isLoading && <SkeletonParagraph />}
        <StyledText className='text-xl'>{data?.content}</StyledText>
      </ScrollContent>
    </Screen>
  );
}
