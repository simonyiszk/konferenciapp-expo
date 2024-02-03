import { ViewProps } from 'react-native';

import { cn } from '../../../utils/common.utils';
import { SkeletonRectangle } from '../skeleton';

export function SkeletonParagraph({ className, ...props }: ViewProps) {
  return Array.from({ length: 10 }).map((_, index) => (
    <SkeletonRectangle key={index} className={cn('h-5 mb-2', className)} {...props} />
  ));
}
