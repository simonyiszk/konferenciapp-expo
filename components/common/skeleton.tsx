import { Animated, ViewProps } from 'react-native';

import { usePulseAnimation } from '../../utils/animation.utils';
import { cn } from '../../utils/common.utils';

export function SkeletonRectangle({ className, style, ...props }: ViewProps) {
  const { opacity } = usePulseAnimation();
  return <Animated.View className={cn('bg-slate-200 rounded-xl', className)} style={[{ opacity }, style]} {...props} />;
}
