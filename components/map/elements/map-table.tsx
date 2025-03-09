import { PropsWithChildren } from 'react';
import { Circle, G, Rect, RectProps, Text } from 'react-native-svg';

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
  x = 0,
  y = 0,
  transform = '',
  ...props
}: MapTableProps) {
  const color = selectedResource === id ? extendedColors.primary['500'] : extendedColors.background['500'];
  return (
    <G id={id} onPress={() => onPress(id)}>
      <Rect x={x} y={y} width={width} height={height} fill={color} rx={rx} {...props} transform={transform} />
      {children}
      <Circle
        cx={Number(x) + Number(width) / 2}
        cy={Number(y) + Number(height) / 2}
        r={10}
        fill={color}
        transform={transform}
      />
      <Text
        x={Number(x) + Number(width) / 2}
        y={Number(y) + Number(height)}
        fill='white'
        fontSize={12}
        fontWeight='bold'
        textAnchor='middle'
        transform={transform}
      >
        {id}
      </Text>
    </G>
  );
}
