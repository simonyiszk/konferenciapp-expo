import { Feather } from '@expo/vector-icons';

import { colors } from '../../theme/colors';

export function TabbarIcon({
  focused,
  name,
}: {
  focused: boolean;
  name: React.ComponentProps<typeof Feather>['name'];
}) {
  return <Feather name={name} size={30} color={focused ? colors.primary['500'] : 'gray'} />;
}
