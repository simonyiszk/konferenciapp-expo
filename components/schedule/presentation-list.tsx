import { useMemo } from 'react';
import { FlatList } from 'react-native';

import { PresentationDto } from '../../types/conference-api.type';
import { isPresentationCurrent, isPresentationUpcoming } from '../../utils/presentation.utils';
import { StyledText } from '../base/text';
import { PresentationItem } from './presentation-item';

interface PresentationListProps {
  presentations: PresentationDto[];
  filterToCurrent?: boolean;
  filterToUpcoming?: boolean;
}

export function PresentationList({ presentations, filterToCurrent, filterToUpcoming }: PresentationListProps) {
  const filteredPresentations = useMemo(
    () =>
      presentations.filter(
        (event) =>
          !(filterToCurrent || filterToUpcoming) ||
          (filterToUpcoming && isPresentationUpcoming(event)) ||
          (filterToCurrent && isPresentationCurrent(event))
      ),
    [presentations, filterToCurrent, filterToUpcoming]
  );
  if (filteredPresentations.length === 0) {
    return <StyledText className='mx-5 text-center my-10'>Nincs megjeleníthető előadás.</StyledText>;
  }
  return (
    <FlatList
      data={filteredPresentations}
      className='flex-grow px-5'
      renderItem={(listInfo) => <PresentationItem presentation={listInfo.item} />}
    />
  );
}
