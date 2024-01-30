import React from 'react';
import { View } from 'react-native';

import { Screen } from '../../../components/base/screen';
import { Header } from '../../../components/common/header';
import { Menutitle } from '../../../components/common/menutitle';
import { Title } from '../../../components/common/title';
import { NewsList } from '../../../components/news/news-list';
import { ScheduleList } from '../../../components/schedule/schedule-list';
import { useSchedule } from '../../../hooks/use-schedule';
import { news } from '../../../mocks/news';

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
  const { data } = useSchedule();

  return (
    <Screen>
      <Header>
        <Title>Simonyi Konferencia</Title>
      </Header>
      <Menutitle>Előadások</Menutitle>
      <ScheduleList schedule={data ?? []} filterToCurrent filterToUpcoming />
      <View className='w-20 h-1 rounded-full bg-slate-300 mx-5 my-5' />
      <Menutitle>Hírek</Menutitle>
      <NewsList news={news}></NewsList>
    </Screen>
  );
}
