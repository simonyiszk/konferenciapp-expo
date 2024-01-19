import { FlatList } from 'react-native';

import { Header } from '../components/common/header';
import { Title } from '../components/common/title';
import { ScheduleItem } from '../components/schedule/schedule-item';
import { useSchedule } from '../hooks/use-schedule';

interface SchedulePageProps {}

export default function SchedulePage({}: SchedulePageProps) {
  const { data } = useSchedule();
  return (
    <>
      <Header>
        <Title>Programterv</Title>
      </Header>
      <FlatList
        data={data ?? []}
        className='flex-grow px-5'
        renderItem={(listInfo) => <ScheduleItem event={listInfo.item} />}
      />
    </>
  );
}
