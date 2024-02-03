import { PresentationItemSkeleton } from '../elements/presentation-item-skeleton';

export function PresentationItemSkeletonList() {
  return Array.from({ length: 2 }, (_, i) => <PresentationItemSkeleton key={i} />);
}
