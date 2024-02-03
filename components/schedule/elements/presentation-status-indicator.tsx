import { View } from 'react-native';

import { PresentationDto } from '../../../types/conference-api.type';
import { cn } from '../../../utils/common.utils';
import { isPresentationCurrent, isPresentationUpcoming } from '../../../utils/presentation.utils';

interface PresentationStatusIndicatorProps {
  presentation: PresentationDto;
}

export function PresentationStatusIndicator({ presentation }: PresentationStatusIndicatorProps) {
  const isCurrent = isPresentationCurrent(presentation);
  const isUpcoming = isPresentationUpcoming(presentation);
  return (
    <View
      className={cn('p-1 rounded-full', {
        hidden: !isCurrent && !isUpcoming,
        'bg-yellow-400/30': isUpcoming,
        'bg-green-400/30': isCurrent,
      })}
    >
      <View
        className={cn('w-5 h-5 rounded-full', {
          'bg-yellow-400': isUpcoming,
          'bg-green-400': isCurrent,
        })}
      />
    </View>
  );
}
