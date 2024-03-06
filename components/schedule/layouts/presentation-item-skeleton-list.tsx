import { ViewProps } from 'react-native';

import { PresentationItemSkeleton } from '../elements/presentation-item-skeleton';

export function PresentationItemSkeletonList(props: ViewProps) {
  return Array.from({ length: 2 }, (_, i) => <PresentationItemSkeleton key={i} {...props} />);
}
