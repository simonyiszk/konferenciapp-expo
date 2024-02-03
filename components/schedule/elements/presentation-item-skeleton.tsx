import React from 'react';
import { ViewProps } from 'react-native';

import { cn } from '../../../utils/common.utils';
import { SkeletonRectangle } from '../../common/skeleton';

export function PresentationItemSkeleton({ className, ...props }: ViewProps) {
  return <SkeletonRectangle className={cn('h-20 mb-5 mx-5', className)} {...props} />;
}
