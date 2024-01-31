import React from 'react';
import { View } from 'react-native';

import { Screen } from '../../../components/base/screen';
import { Header } from '../../../components/common/header';
import { SectionTitle } from '../../../components/common/sectiontitle';
import { Title } from '../../../components/common/title';
import { NewsList } from '../../../components/news/news-list';
import { PresentationList } from '../../../components/schedule/presentation-list';
import { useConference } from '../../../hooks/use-conference';
import { news } from '../../../mocks/news';

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
  const { data } = useConference();

  return (
    <Screen>
      <Header>
        <Title>Simonyi Konferencia</Title>
      </Header>
      <SectionTitle>Előadások</SectionTitle>
      <PresentationList presentations={data?.presentations ?? []} filterToCurrent filterToUpcoming />
      <View className='w-20 h-1 rounded-full bg-slate-300 mx-5 my-5' />
      <SectionTitle>Hírek</SectionTitle>
      <NewsList news={news} />
    </Screen>
  );
}
