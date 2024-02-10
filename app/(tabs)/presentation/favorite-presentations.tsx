import React from 'react';

import { Screen } from '../../../components/base/screen';
import { ErrorMessage } from '../../../components/common/error-message';
import { Header } from '../../../components/common/header';
import { Title } from '../../../components/common/title';
import { PresentationItemSkeletonList } from '../../../components/schedule/layouts/presentation-item-skeleton-list';
import { PresentationList } from '../../../components/schedule/layouts/presentation-list';
import { useFavoritePresentationsList } from '../../../hooks/use-favorite-presentations-list';

export default function FavoritePresentationsScreen() {
  const { data, isLoading, isError } = useFavoritePresentationsList();
  return (
    <Screen>
      <Header>
        <Title>Kedvenc előadásaim</Title>
      </Header>
      {isLoading && <PresentationItemSkeletonList />}
      {!isError && !isLoading && <PresentationList presentations={data ?? []} />}
      {isError && <ErrorMessage>Nem sikerült betölteni az előadásokat</ErrorMessage>}
    </Screen>
  );
}
