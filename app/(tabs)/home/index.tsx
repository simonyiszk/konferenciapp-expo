import { useFeatureFlag } from 'posthog-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Screen } from '../../../components/base/screen';
import { ScrollContent } from '../../../components/base/scroll-content';
import { ErrorMessage } from '../../../components/common/error-message';
import { Header } from '../../../components/common/header';
import { SectionTitle } from '../../../components/common/sectiontitle';
import { Separator } from '../../../components/common/separator';
import { StatusMessage } from '../../../components/common/status-message';
import { Title } from '../../../components/common/title';
import { HomeNewsList } from '../../../components/news/layouts/home-news-list';
import { NewsItemSkeletonList } from '../../../components/news/layouts/news-item-skeleton-list';
import { HomePresentationList } from '../../../components/schedule/layouts/home-presentation-list';
import { PresentationItemSkeletonList } from '../../../components/schedule/layouts/presentation-item-skeleton-list';
import { useConference } from '../../../hooks/use-conference';
import { useNews } from '../../../hooks/use-news';

export default function HomePage() {
  const conference = useConference();
  const news = useNews();
  const { t } = useTranslation();
  const isArchive = useFeatureFlag('archive_mode');

  return (
    <Screen analyticsScreenName='home'>
      <Header>
        <Title>{t('home.mainTitle')}</Title>
      </Header>

      <ScrollContent>
        {isArchive && (
          <>
            <StatusMessage type='warning'>{t('home.archive')}</StatusMessage>
            <Separator className='mb-5' />
          </>
        )}

        <SectionTitle>{t('home.presentationTitle')}</SectionTitle>
        {conference.isLoading && <PresentationItemSkeletonList className='mx-0' />}
        {conference.isError && <ErrorMessage>{t('home.error')}</ErrorMessage>}
        {!conference.isError && !conference.isLoading && (
          <HomePresentationList presentations={conference.data?.presentations ?? []} />
        )}
        <Separator className='mb-5' />
        <SectionTitle>{t('home.newsTitle')}</SectionTitle>
        {news.isLoading && <NewsItemSkeletonList />}
        {news.data && <HomeNewsList news={news.data.news} />}
      </ScrollContent>
    </Screen>
  );
}
