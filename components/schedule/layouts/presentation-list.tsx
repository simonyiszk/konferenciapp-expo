import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';

import { useTick } from '../../../hooks/use-tick';
import { PresentationDto } from '../../../types/conference-api.type';
import { isPresentationPast } from '../../../utils/presentation.utils';
import { StyledText } from '../../base/text';
import { PresentationItem } from '../elements/presentation-item';

interface PresentationListProps {
  presentations: PresentationDto[];
}

export function PresentationList({ presentations }: PresentationListProps) {
  useTick();
  const ref = useRef<FlatList>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (ref.current && presentations.length > 0) {
      const firstUpcomingIndex = presentations.findIndex((presentation) => !isPresentationPast(presentation));
      if (firstUpcomingIndex !== -1) ref.current.scrollToIndex({ index: firstUpcomingIndex, animated: true });
    }
  }, []);

  if (presentations.length === 0) {
    return <StyledText className='mx-5 text-center my-10'>{t('presentations.empty')}</StyledText>;
  }

  return (
    <FlatList
      ref={ref}
      onScrollToIndexFailed={(info) => {
        setTimeout(() => {
          ref.current?.scrollToIndex({ index: info.index, animated: true });
        }, 100);
      }}
      contentContainerStyle={{ paddingBottom: 130 }}
      data={presentations}
      className='px-5 pt-5'
      renderItem={(listInfo) => <PresentationItem presentation={listInfo.item} />}
    />
  );
}
