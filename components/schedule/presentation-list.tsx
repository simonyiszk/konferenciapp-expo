import { FlatList } from 'react-native';

import { PresentationDto } from '../../types/conference-api.type';
import { StyledText } from '../base/text';
import { PresentationItem } from './presentation-item';

interface PresentationListProps {
  presentations: PresentationDto[];
}

export function PresentationList({ presentations }: PresentationListProps) {
  if (presentations.length === 0) {
    return <StyledText className='mx-5 text-center my-10'>Nincs megjeleníthető előadás.</StyledText>;
  }
  return (
    <FlatList
      data={presentations}
      className='flex-grow px-5'
      renderItem={(listInfo) => <PresentationItem presentation={listInfo.item} />}
    />
  );
}
