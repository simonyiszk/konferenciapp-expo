import { NewsItemSkeleton } from '../elements/news-item-skeleton';

export function NewsItemSkeletonList() {
  return Array.from({ length: 2 }, (_, i) => <NewsItemSkeleton key={i} />);
}
