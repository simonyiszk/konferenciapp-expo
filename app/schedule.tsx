import { Header } from '../components/common/header';
import { Title } from '../components/common/title';
import { ScheduleList } from '../components/schedule/schedule-list';
import { useSchedule } from '../hooks/use-schedule';

interface SchedulePageProps {}

export default function SchedulePage({}: SchedulePageProps) {
  const { data } = useSchedule();
  return (
    <>
      <Header>
        <Title>Programterv</Title>
      </Header>
      <ScheduleList schedule={data ?? []} />
    </>
  );
}
