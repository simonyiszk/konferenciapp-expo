import { Header } from '../../components/common/header';
import { Title } from '../../components/common/title';
import { ScheduleList } from '../../components/schedule/schedule-list';
import { useSchedule } from '../../hooks/use-schedule';

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
  const { data } = useSchedule();

  return (
    <>
      <Header>
        <Title>Simonyi Konferencia</Title>
      </Header>
      <ScheduleList schedule={data ?? []} filterToCurrent filterToUpcoming />
    </>
  );
}
