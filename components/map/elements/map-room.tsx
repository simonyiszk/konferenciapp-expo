import { PropsWithChildren } from 'react';
import { G, Path, PathProps, Rect, RectProps } from 'react-native-svg';

import { colors } from '../../../theme/colors';

interface MapRoomProps extends PropsWithChildren<Omit<RectProps & PathProps, 'onPress' | 'id'>> {
  id: string;
  onPress?: (id: string) => void;
  selectedResource?: string;
  highlight?: boolean;
}

export function MapRoom({
  id,
  selectedResource,
  onPress,
  children,
  highlight,
  strokeLinejoin = 'round',
  strokeWidth = 7,
  fillOpacity = 0.3,
  ...props
}: MapRoomProps) {
  const color =
    selectedResource === id ? colors.primary['500'] : highlight ? colors.primary['800'] : colors.slate['500'];
  const comp =
    'width' in props ? (
      <Rect
        stroke={color}
        fill={color}
        fillOpacity={fillOpacity}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        {...props}
      />
    ) : (
      <Path
        stroke={color}
        fill={color}
        fillOpacity={fillOpacity}
        strokeWidth={strokeWidth}
        strokeLinejoin={strokeLinejoin}
        {...props}
      />
    );

  return (
    <G id={id} onPressOut={onPress ? () => onPress(id) : undefined}>
      {comp}
      {children}
    </G>
  );
}
