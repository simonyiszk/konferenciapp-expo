import { PropsWithChildren } from 'react';
import { Circle, CircleProps, G } from 'react-native-svg';

import { extendedColors } from '../../../theme/extendedColors';

interface MapIconProps extends PropsWithChildren<Omit<CircleProps, 'onPress' | 'id'>> {
  id: string;
  onPress: (id: string) => void;
  selectedResource?: string;
}

export function MapIcon({ id, onPress, children, selectedResource, r = 25, ...props }: MapIconProps) {
  return (
    <G id={id} onPress={() => onPress(id)}>
      <Circle
        stroke={selectedResource === id ? extendedColors.primary['500'] : undefined}
        strokeWidth={5}
        r={r}
        {...props}
      />
      {children}
    </G>
  );
}
