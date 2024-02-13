import React from 'react';
import { useTranslation } from 'react-i18next';

import { Screen } from '../../../components/base/screen';
import { ErrorMessage } from '../../../components/common/error-message';
import { Header } from '../../../components/common/header';
import { Title } from '../../../components/common/title';
import { PresentationItemSkeletonList } from '../../../components/schedule/layouts/presentation-item-skeleton-list';
import { PresentationList } from '../../../components/schedule/layouts/presentation-list';
import { useFavoritePresentationsList } from '../../../hooks/use-favorite-presentations-list';

export default function FavoritePresentationsScreen() {
  const { data, isLoading, isError } = useFavoritePresentationsList();
  const { t } = useTranslation();
  return (
    <Screen analyticsScreenName='favorite-presentations'>
      <Header>
        <Title>{t('presentations.favoritesTitle')}</Title>
      </Header>
      {isLoading && <PresentationItemSkeletonList />}
      {!isError && !isLoading && <PresentationList presentations={data ?? []} />}
      {isError && <ErrorMessage>{t('presentations.error')}</ErrorMessage>}
    </Screen>
  );
}
