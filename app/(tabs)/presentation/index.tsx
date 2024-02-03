import React from 'react';

import { Screen } from '../../../components/base/screen';
import { ErrorMessage } from '../../../components/common/error-message';
import { Header } from '../../../components/common/header';
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
      {isLoading && <PresentationItemSkeletonList />}
      {!isError && !isLoading && <PresentationList presentations={data?.presentations ?? []} />}
      {isError && <ErrorMessage>Nem sikerült betölteni az előadásokat</ErrorMessage>}
    </Screen>
  );
}
