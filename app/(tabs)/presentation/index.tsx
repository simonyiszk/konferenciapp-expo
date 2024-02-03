import React from 'react';

import { Screen } from '../../../components/base/screen';
import { ErrorMessage } from '../../../components/common/error-message';
import { Header } from '../../../components/common/header';
import { Title } from '../../../components/common/title';
import { PresentationItemSkeleton } from '../../../components/schedule/presentation-item-skeleton';
import { PresentationList } from '../../../components/schedule/presentation-list';
import { useConference } from '../../../hooks/use-conference';

export default function PresentationListPage() {
  const { data, isError, isLoading } = useConference();
  return (
    <Screen>
      <Header>
        <Title>Programterv</Title>
      </Header>
      {isLoading && [0, 1, 2, 3].map((i) => <PresentationItemSkeleton key={i} />)}
      {!isError && !isLoading && <PresentationList presentations={data?.presentations ?? []} />}
      {isError && <ErrorMessage>Nem sikerült betölteni az előadásokat</ErrorMessage>}
    </Screen>
  );
}
