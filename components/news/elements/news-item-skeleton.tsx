import React from 'react';
import { ViewProps } from 'react-native';

import { cn } from '../../../utils/common.utils';
import { SkeletonRectangle } from '../../common/skeleton';

export function NewsItemSkeleton({ className, ...props }: ViewProps) {
  return <SkeletonRectangle className={cn('h-32 mb-5', className)} {...props} />;
}
