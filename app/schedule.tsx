import { View } from 'react-native';

import { Header } from '../components/common/header';
import { Title } from '../components/common/title';
import { Schedule, ScheduleListItem } from '../components/schedule/schedule-list-item';

interface SchedulePageProps {}

const schedule: Schedule[] = [
  {
    title: 'Lorem ipsum dolor sit amet',
    presenter: 'Lorem ipsum',
    presenterImage: 'https://picsum.photos/200',
    location: 'IB028',
    start: '2021-05-07T09:00:00.000Z',
    end: '2021-05-07T10:00:00.000Z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl',
  },
];

export default function SchedulePage({}: SchedulePageProps) {
  return (
    <View>
      <Header>
        <Title>Programterv</Title>
      </Header>
      <View className='mt-5'>
        {schedule.map((item, index) => (
          <ScheduleListItem key={index} schedule={item} />
        ))}
      </View>
    </View>
  );
}
