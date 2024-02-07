import { Link } from 'expo-router';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { Screen } from '../../../components/base/screen';
import { ErrorMessage } from '../../../components/common/error-message';
import { Header } from '../../../components/common/header';
import { StyledButton } from '../../../components/common/styled-button';
import { Title } from '../../../components/common/title';
import { PresentationItemSkeletonList } from '../../../components/schedule/layouts/presentation-item-skeleton-list';
import { PresentationList } from '../../../components/schedule/layouts/presentation-list';
import { useConference } from '../../../hooks/use-conference';

export default function PresentationListPage() {
  const { data, isError, isLoading } = useConference();
  const { t } = useTranslation();
  return (
    <Screen analyticsScreenName='presentation'>
      <Header>
        <Title>{t('presentations.title')}</Title>
      </Header>
      <Link href='/presentation/favorite-presentations' asChild>
        <StyledButton variant='outline' rightIcon='arrow-right' className='mt-4 mx-5'>
          Kedvenceim
        </StyledButton>
      </Link>
      {isLoading && <PresentationItemSkeletonList />}
      {!isError && !isLoading && <PresentationList presentations={data?.presentations ?? []} />}
      {isError && <ErrorMessage>{t('presentations.error')}</ErrorMessage>}
    </Screen>
  );
}
