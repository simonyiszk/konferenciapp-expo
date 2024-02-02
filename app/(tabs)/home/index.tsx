import React from 'react';

import { Screen } from '../../../components/base/screen';
import { ErrorMessage } from '../../../components/common/error-message';
import { Header } from '../../../components/common/header';
import { SectionTitle } from '../../../components/common/sectiontitle';
import { Separator } from '../../../components/common/separator';
import { Title } from '../../../components/common/title';
import { NewsList } from '../../../components/news/news-list';
import { PresentationItemSkeleton } from '../../../components/schedule/presentation-item-skeleton';
import { PresentationList } from '../../../components/schedule/presentation-list';
import { useConference } from '../../../hooks/use-conference';
import { news } from '../../../mocks/news';

interface HomePageProps {}

export default function HomePage({}: HomePageProps) {
  const conference = useConference();

  return (
    <Screen>
      <Header>
        <Title>Simonyi Konferencia</Title>
      </Header>
      <SectionTitle>Előadások</SectionTitle>
      {conference.isLoading && [0, 1].map((i) => <PresentationItemSkeleton key={i} />)}
      {conference.isError && <ErrorMessage>Nem sikerült betölteni az előadásokat</ErrorMessage>}
      {!conference.isError && !conference.isLoading && (
        <PresentationList presentations={conference.data?.presentations ?? []} filterToCurrent filterToUpcoming />
      )}
      <Separator className='mx-5' />
      <SectionTitle>Hírek</SectionTitle>
      <NewsList news={news} />
    </Screen>
  );
}
