import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';

import { PresentationDto } from '../../../types/conference-api.type';
import { isPresentationPast } from '../../../utils/presentation.utils';
import { StyledText } from '../../base/text';
import { PresentationItem } from '../elements/presentation-item';

interface PresentationListProps {
  presentations: PresentationDto[];
}

export function PresentationList({ presentations }: PresentationListProps) {
  const [date, setDate] = useState(new Date());
  const ref = useRef<FlatList>(null);
  const { t } = useTranslation();

  useEffect(() => {
    if (ref.current && presentations.length > 0) {
      const firstUpcomingIndex = presentations.findIndex((presentation) => !isPresentationPast(presentation));
      if (firstUpcomingIndex !== -1) ref.current.scrollToIndex({ index: firstUpcomingIndex, animated: true });
    }
  }, [ref.current, presentations, date]);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000 * 15);
    return () => clearInterval(interval);
  }, []);

  useFocusEffect(
    useCallback(() => {
      setDate(new Date());
    }, [])
  );

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
