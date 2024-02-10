import { Link } from 'expo-router';
import React from 'react';

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
  return (
    <Screen>
      <Header>
        <Title>Programterv</Title>
      </Header>
      <Link href='/presentation/favorite-presentations' asChild>
        <StyledButton variant='outline' rightIcon='arrow-right' className='mt-4 mx-5'>
          Kedvenceim
        </StyledButton>
      </Link>
      {isLoading && <PresentationItemSkeletonList />}
      {!isError && !isLoading && <PresentationList presentations={data?.presentations ?? []} />}
      {isError && <ErrorMessage>Nem sikerült betölteni az előadásokat</ErrorMessage>}
    </Screen>
  );
}
