import { Link } from 'expo-router';
import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Screen } from '../../../components/base/screen';
import { ErrorMessage } from '../../../components/common/error-message';
import { Header } from '../../../components/common/header';
import { StyledButton } from '../../../components/common/styled-button';
import { Title } from '../../../components/common/title';
import { LocationFilter } from '../../../components/schedule/elements/location-filter';
import { PresentationItemSkeletonList } from '../../../components/schedule/layouts/presentation-item-skeleton-list';
import { PresentationList } from '../../../components/schedule/layouts/presentation-list';
import { useConference } from '../../../hooks/use-conference';

export default function PresentationListPage() {
  const [filter, setFilter] = useState<string>();
  const { data, isError, isLoading } = useConference();
  const { t } = useTranslation();
  const filterOptions = useMemo(() => {
    const options = new Set<string>();
    data?.presentations.forEach((presentation) => options.add(presentation.room));
    return options;
  }, [data?.presentations]);

  const filteredPresentations = useMemo(() => {
    return filter
      ? data?.presentations?.filter((presentation) => presentation.room === filter) ?? []
      : data?.presentations ?? [];
  }, [data?.presentations, filter]);

  return (
    <Screen analyticsScreenName='presentation'>
      <Header>
        <Title>{t('presentations.title')}</Title>
      </Header>
      <Link href='/presentation/favorite-presentations' asChild>
        <StyledButton variant='outline' rightIcon='arrow-right' className='mt-4 mx-5'>
          {t('presentations.favorites')}
        </StyledButton>
      </Link>
      <LocationFilter current={filter} options={[...filterOptions]} onChange={setFilter} className='mt-4' />
      {isLoading && <PresentationItemSkeletonList />}
      {!isError && !isLoading && <PresentationList presentations={filteredPresentations} />}
      {isError && <ErrorMessage>{t('presentations.error')}</ErrorMessage>}
    </Screen>
  );
}
