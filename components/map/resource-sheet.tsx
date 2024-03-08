import { useEffect, useState } from 'react';
import { Animated, ViewProps } from 'react-native';

import { MapResource } from '../../types/map.type';
import { useAnimated } from '../../utils/animation.utils';
import { cn } from '../../utils/common.utils';
import { StyledText } from '../base/text';

interface ResourceSheetProps extends ViewProps {
  resource: MapResource | undefined;
}

export function ResourceSheet({ resource, className, ...props }: ResourceSheetProps) {
  const [savedResource, setSavedResource] = useState<MapResource>();
  const animation = useAnimated();

  useEffect(() => {
    if (resource) {
      setSavedResource(resource);
      animation.forward();
    } else {
      animation.backward();
    }
  }, [resource]);
  return (
    <Animated.View
      style={{
        maxHeight: animation.value.current.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 400],
        }),
      }}
      className={cn('bg-white -mt-10 dark:bg-slate-800 pb-32 rounded-t-2xl px-5 pt-5 space-y-2', className)}
      {...props}
    >
      <StyledText className='text-2xl'>
        {savedResource?.title} ({savedResource?.id})
      </StyledText>
      <StyledText className='text-slate-500 text-lg'>{savedResource?.description.hu}</StyledText>
    </Animated.View>
  );
}
