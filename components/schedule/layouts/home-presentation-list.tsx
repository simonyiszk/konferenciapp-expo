import { useMemo } from 'react';

import { PresentationDto } from '../../../types/conference-api.type';
import { isPresentationCurrent, isPresentationUpcoming } from '../../../utils/presentation.utils';
import { StyledText } from '../../base/text';
import { PresentationItem } from '../elements/presentation-item';

interface HomePresentationListProps {
  presentations: PresentationDto[];
}

export function HomePresentationList({ presentations }: HomePresentationListProps) {
  const filteredPresentations = useMemo(
    () => presentations.filter((event) => isPresentationUpcoming(event) || isPresentationCurrent(event)),
    [presentations]
  );

  if (filteredPresentations.length === 0) {
    return <StyledText className='mx-5 text-center my-10'>Nincs megjeleníthető előadás.</StyledText>;
  }

  return filteredPresentations.map((presentation, index) => (
    <PresentationItem key={index} presentation={presentation} />
  ));
}
