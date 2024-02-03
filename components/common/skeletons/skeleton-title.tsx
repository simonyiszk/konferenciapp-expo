import { ViewProps } from 'react-native';

import { cn } from '../../../utils/common.utils';
import { SkeletonRectangle } from '../skeleton';

export function SkeletonTitle({ className, ...props }: ViewProps) {
  return Array.from({ length: 2 }).map((_, index) => (
    <SkeletonRectangle key={index} className={cn('h-10', className)} {...props} />
  ));
}
