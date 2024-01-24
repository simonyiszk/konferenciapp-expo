import { format } from 'date-fns';

import { useScheduleItem } from '../../hooks/use-schedule-item';
import { Screen } from '../base/screen';
import { StyledText } from '../base/text';
import { Header } from '../common/header';
import { Subtitle } from '../common/subtitle';
import { Title } from '../common/title';

interface ScheduleDetailsPageProps {
  id: string;
}

export function ScheduleDetailsPage({ id }: ScheduleDetailsPageProps) {
  const { data } = useScheduleItem(id);
  if (!data) return <></>;
  const startDate = format(new Date(data.start), 'HH:mm');
  const endDate = format(new Date(data.end), 'HH:mm');
  return (
    <Screen>
      <Header>
        <Title>{data?.title}</Title>
        <Subtitle>
          {data?.location} • {startDate} - {endDate}
        </Subtitle>
      </Header>
      <StyledText className='mx-5 text-xl'>{data?.description}</StyledText>
    </Screen>
  );
}
