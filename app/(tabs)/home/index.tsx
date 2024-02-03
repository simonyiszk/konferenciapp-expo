import React from 'react';

import { Screen } from '../../../components/base/screen';
import { ScrollContent } from '../../../components/base/scroll-content';
import { ErrorMessage } from '../../../components/common/error-message';
import { Header } from '../../../components/common/header';
import { SectionTitle } from '../../../components/common/sectiontitle';
import { Separator } from '../../../components/common/separator';
import { Title } from '../../../components/common/title';
import { HomeNewsList } from '../../../components/news/home-news-list';
import { HomePresentationList } from '../../../components/schedule/home-presentation-list';
import { PresentationItemSkeleton } from '../../../components/schedule/presentation-item-skeleton';
import { useConference } from '../../../hooks/use-conference';
import { useNews } from '../../../hooks/use-news';

export default function HomePage() {
  const conference = useConference();
  const news = useNews();
  return (
    <Screen>
      <Header>
        <Title>Simonyi Konferencia</Title>
      </Header>
      <ScrollContent>
        <SectionTitle>Előadások</SectionTitle>
        {conference.isLoading && [0, 1].map((i) => <PresentationItemSkeleton key={i} />)}
        {conference.isError && <ErrorMessage>Nem sikerült betölteni az előadásokat</ErrorMessage>}
        {!conference.isError && !conference.isLoading && (
          <HomePresentationList presentations={conference.data?.presentations ?? []} />
        )}
        <Separator />
        <SectionTitle>Hírek</SectionTitle>
        {news.data && <HomeNewsList news={news.data.news} />}
      </ScrollContent>
    </Screen>
  );
}
