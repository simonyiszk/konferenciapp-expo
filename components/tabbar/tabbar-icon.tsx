import { Feather } from '@expo/vector-icons';

import { extendedColors } from '../../theme/extendedColors';

export function TabbarIcon({
  focused,
  name,
}: {
  focused: boolean;
  name: React.ComponentProps<typeof Feather>['name'];
}) {
  return (
    <Feather name={name} size={28} color={focused ? extendedColors.primary['500'] : extendedColors.background['500']} />
  );
}
