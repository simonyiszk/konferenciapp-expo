import { Link } from 'expo-router';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native'; // Make sure to import View

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
  const ButtonNames: string[] = ['Minden előadás', 'IB025', 'IB028'];
  const [RenderMode, setRenderMode] = useState<number>(0);
  // Placeholder function for button click
  const handleButtonClick = (buttonNumber: number) => {
    //console.log(`Button ${buttonNumber} clicked`);
    setRenderMode(buttonNumber);
  };

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
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginTop: 16 }}>
        {[0, 1, 2].map((buttonNumber) => (
          <StyledButton
            key={buttonNumber}
            variant={buttonNumber === RenderMode ? 'primary' : 'outline'}
            style={{ margin: 8 }}
            onPress={() => handleButtonClick(buttonNumber)}
          >
            {t(`${ButtonNames[buttonNumber]}`)}
          </StyledButton>
        ))}
      </View>
      {isLoading && <PresentationItemSkeletonList />}
      {!isError && !isLoading && (
        <PresentationList
          presentations={
            RenderMode === 0
              ? data?.presentations ?? []
              : data?.presentations?.filter((presentation) => presentation.room === ButtonNames[RenderMode]) ?? []
          }
        />
      )}
      {isError && <ErrorMessage>{t('presentations.error')}</ErrorMessage>}
    </Screen>
  );
}
