import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { useTick } from '../../../hooks/use-tick';
import { PresentationDto } from '../../../types/conference-api.type';
import { isPresentationCurrent, isPresentationUpcoming } from '../../../utils/presentation.utils';
import { StyledText } from '../../base/text';
import { PresentationItem } from '../elements/presentation-item';

interface HomePresentationListProps {
  presentations: PresentationDto[];
}

export function HomePresentationList({ presentations }: HomePresentationListProps) {
  const tick = useTick();
  const filteredPresentations = useMemo(
    () => presentations.filter((event) => isPresentationUpcoming(event) || isPresentationCurrent(event)),
    [presentations, tick.date]
  );
  const { t } = useTranslation();

  if (filteredPresentations.length === 0) {
    return <StyledText className='mx-5 text-center my-10'>{t('home.empty')}</StyledText>;
  }

  return filteredPresentations.map((presentation, index) => (
    <PresentationItem key={index} presentation={presentation} />
  ));
}
