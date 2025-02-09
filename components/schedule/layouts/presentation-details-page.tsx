import { useFeatureFlag } from 'posthog-react-native';

import { usePresentation } from '../../../hooks/use-presentation';
import { ConferenceService } from '../../../services/conference.service';
import { isPresentationCurrent } from '../../../utils/presentation.utils';
import { Screen } from '../../base/screen';
import { ScrollContent } from '../../base/scroll-content';
import { StyledText } from '../../base/text';
import { Header } from '../../common/header';
import { SkeletonParagraph } from '../../common/skeletons/skeleton-paragraph';
import { SkeletonTitle } from '../../common/skeletons/skeleton-title';
import { Subtitle } from '../../common/subtitle';
import { Title } from '../../common/title';
import { FavoriteButton } from '../elements/favorite-button';
import { QnaButton } from '../elements/qna-button';

interface ScheduleDetailsPageProps {
  slug: string;
}

export function PresentationDetailsPage({ slug }: ScheduleDetailsPageProps) {
  const { data, isLoading } = usePresentation(slug);
  const enableQna = useFeatureFlag('enable_qna');
  const startTime = ConferenceService.getFormattedTimestamp(data?.startTime ?? '');
  const endTime = ConferenceService.getFormattedTimestamp(data?.endTime ?? '');
  const isCurrent = data ? isPresentationCurrent(data) : false;
  return (
    <Screen analyticsScreenName={`presentation-details/` + slug}>
      <Header
        corner={
          <>
            {data && <FavoriteButton presentation={data} />}
            {enableQna && <QnaButton highlight={isCurrent} slug={slug} />}
          </>
        }
      >
        {isLoading && <SkeletonTitle />}
        {data && (
          <>
            <Title>{data?.title}</Title>
            <Subtitle>
              {data.room} • {startTime} - {endTime}
            </Subtitle>
            <Subtitle>{data.presenter.name}</Subtitle>
          </>
        )}
      </Header>
      <ScrollContent>
        {isLoading && <SkeletonParagraph />}
        {data && <StyledText className='text-xl'>{data.description}</StyledText>}
      </ScrollContent>
    </Screen>
  );
}
