import { useFocusEffect } from 'expo-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { PresentationDto } from '../../../types/conference-api.type';
import { isPresentationCurrent, isPresentationUpcoming } from '../../../utils/presentation.utils';
import { StyledText } from '../../base/text';
import { PresentationItem } from '../elements/presentation-item';

interface HomePresentationListProps {
  presentations: PresentationDto[];
}

export function HomePresentationList({ presentations }: HomePresentationListProps) {
  const [date, setDate] = useState(new Date());
  const filteredPresentations = useMemo(
    () => presentations.filter((event) => isPresentationUpcoming(event) || isPresentationCurrent(event)),
    [presentations, date]
  );
  const { t } = useTranslation();

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

  if (filteredPresentations.length === 0) {
    return <StyledText className='mx-5 text-center my-10'>{t('home.empty')}</StyledText>;
  }

  return filteredPresentations.map((presentation, index) => (
    <PresentationItem key={index} presentation={presentation} />
  ));
}
