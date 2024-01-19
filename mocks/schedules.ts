import { addMinutes, subMinutes } from 'date-fns';

import { ScheduleEvent } from '../types/schedule-event.type';

export const schedule: ScheduleEvent[] = [
  {
    title: 'Korábbi esemény valamilyen hosszú címmel',
    presenter: 'Valamilyen Előadó Hosszú Névvel Ráadásul',
    presenterImage: 'https://picsum.photos/200',
    location: 'IB028',
    start: subMinutes(new Date(), 15).toISOString(),
    end: subMinutes(new Date(), 0).toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl',
  },
  {
    title: 'Jelenlegi esemény valamilyen hosszú címmel',
    presenter: 'Valamilyen Előadó Hosszú Névvel Ráadásul',
    presenterImage: 'https://picsum.photos/200',
    location: 'IB028',
    start: new Date().toISOString(),
    end: addMinutes(new Date(), 15).toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl',
  },
  {
    title: 'Következő esemény valamilyen hosszú címmel',
    presenter: 'Valamilyen Előadó Hosszú Névvel Ráadásul',
    presenterImage: 'https://picsum.photos/200',
    location: 'IB028',
    start: addMinutes(new Date(), 15).toISOString(),
    end: addMinutes(new Date(), 30).toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl',
  },
  {
    title: 'Későbbi esemény valamilyen hosszú címmel',
    presenter: 'Valamilyen Előadó Hosszú Névvel Ráadásul',
    presenterImage: 'https://picsum.photos/200',
    location: 'IB028',
    start: addMinutes(new Date(), 30).toISOString(),
    end: addMinutes(new Date(), 45).toISOString(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod, nisl eget aliquam ultrices, nunc nisl aliquet nunc, vitae aliquam nisl',
  },
];
