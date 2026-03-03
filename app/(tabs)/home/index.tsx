import { useFeatureFlag } from 'posthog-react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Logo } from '../../../components/base/logo';
import { Screen } from '../../../components/base/screen';
import { ScrollContent } from '../../../components/base/scroll-content';
import { ErrorMessage } from '../../../components/common/error-message';
import { Header } from '../../../components/common/header';
import { HomePrText } from '../../../components/common/home-pr-text';
import { SectionTitle } from '../../../components/common/sectiontitle';
import { Separator } from '../../../components/common/separator';
import { StatusMessage } from '../../../components/common/status-message';
import { HomePresentationList } from '../../../components/schedule/layouts/home-presentation-list';
import { PresentationItemSkeletonList } from '../../../components/schedule/layouts/presentation-item-skeleton-list';
import { useConference } from '../../../hooks/use-conference';
import { useNews } from '../../../hooks/use-news';
import { isConferenceDay } from '../../../utils/date.utils';

export default function HomePage() {
  const conference = useConference();
  const news = useNews();
  const { t } = useTranslation();
  const isArchive = useFeatureFlag('archive_mode');
  const showPresentations = isConferenceDay();

  return (
    <Screen analyticsScreenName='home'>
      <Header>
        <Logo />
      </Header>

      <ScrollContent>
        {isArchive && (
          <>
            <StatusMessage type='warning'>{t('home.archive')}</StatusMessage>
            <Separator className='mb-5' />
          </>
        )}

        {showPresentations && (
          <>
            <SectionTitle>{t('home.presentationTitle')}</SectionTitle>
            {conference.isLoading && <PresentationItemSkeletonList className='mx-0' />}
            {conference.isError && <ErrorMessage>{t('home.error')}</ErrorMessage>}
            {!conference.isError && !conference.isLoading && (
              <HomePresentationList presentations={conference.data?.presentations ?? []} />
            )}
            <Separator className='mb-5' />
          </>
        )}
        
        {!showPresentations && <HomePrText />}

        {/* 
        <SectionTitle>{t('home.newsTitle')}</SectionTitle>
        {news.isLoading && <NewsItemSkeletonList />}
        {news.data && <HomeNewsList news={news.data.news} />}
        */}
      </ScrollContent>
    </Screen>
  );
}
