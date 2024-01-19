import { ScheduleEvent } from '../types/schedule-event.type';

export const schedule: ScheduleEvent[] = [
  {
    title: 'Első esemény cím ami kicsit hosszabb is ráadásul',
    presenter: 'Valamilyen Előadó Hosszú Névvel Ráadásul',
    presenterImage: 'https://picsum.photos/200',
    location: 'IB028',
    start: '2021-05-07T09:00:00.000Z',
    end: '2021-05-07T10:00:00.000Z',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl',
  },
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
