import { format } from 'date-fns';

import { usePresentation } from '../../../hooks/use-presentation';
import { Screen } from '../../base/screen';
import { ScrollContent } from '../../base/scroll-content';
import { StyledText } from '../../base/text';
import { Header } from '../../common/header';
import { Subtitle } from '../../common/subtitle';
import { Title } from '../../common/title';
import { FavoriteButton } from '../elements/favorite-button';

interface ScheduleDetailsPageProps {
  slug: string;
}

export function PresentationDetailsPage({ slug }: ScheduleDetailsPageProps) {
  const { data } = usePresentation(slug);
  if (!data) return <></>;
  const startDate = format(new Date(data.startTime), 'HH:mm');
  const endDate = format(new Date(data.endTime), 'HH:mm');
  return (
    <Screen>
      <Header>
        <Title>{data?.title}</Title>
        <Subtitle>
          {data?.room} • {startDate} - {endDate}
        </Subtitle>
      </Header>
      <ScrollContent>
        <StyledText className='text-xl'>{data?.description}</StyledText>
      </ScrollContent>
      <FavoriteButton presentation={data} />
    </Screen>
  );
}
