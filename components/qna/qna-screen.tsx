import { usePresentation } from '../../hooks/use-presentation';
import { useQuestions } from '../../hooks/use-questions';
import { useSafeId } from '../../utils/common.utils';
import { Screen } from '../base/screen';
import { ScrollContent } from '../base/scroll-content';
import { Header } from '../common/header';
import { SkeletonTitle } from '../common/skeletons/skeleton-title';
import { Subtitle } from '../common/subtitle';
import { Title } from '../common/title';
import { QnaAnswer } from './qna-answer';
import { QnaQuestion } from './qna-question';

export function QnaScreen() {
  const id = useSafeId();
  const presentation = usePresentation(id);
  const question = useQuestions();
  return (
    <Screen>
      <Header>
        <Title>Kérdés küldése</Title>
        {presentation.isLoading && <SkeletonTitle />}
        {presentation.data && <Subtitle>{presentation.data.title}</Subtitle>}
      </Header>
      <ScrollContent>
        {question.data && (
          <>
            <QnaQuestion question={question.data[0].text} />
            <QnaAnswer answer='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
          </>
        )}
      </ScrollContent>
    </Screen>
  );
}
