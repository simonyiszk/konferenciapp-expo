import { PropsWithChildren } from 'react';
import { G, Rect, RectProps } from 'react-native-svg';

import { extendedColors } from '../../../theme/extendedColors';

interface MapTableProps extends PropsWithChildren<Omit<RectProps, 'onPress' | 'id'>> {
  id: string;
  onPress: (id: string) => void;
  selectedResource?: string;
}

export function MapTable({
  id,
  selectedResource,
  onPress,
  children,
  rx = 2,
  width = 30,
  height = 10,
  ...props
}: MapTableProps) {
  const color = selectedResource === id ? extendedColors.primary['500'] : extendedColors.background['500'];
  return (
    <G id={id} onPress={() => onPress(id)}>
      <Rect width={width} height={height} fill={color} rx={rx} {...props} />
      {children}
    </G>
  );
}
