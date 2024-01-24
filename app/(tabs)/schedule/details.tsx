import { useLocalSearchParams } from 'expo-router';
import { View } from 'react-native';

import { ScheduleDetailsPage } from '../../../components/schedule/schedule-details-page';

export default function ScheduleEventDetails() {
  const { id } = useLocalSearchParams();
  const safeId = Array.isArray(id) ? id[0] : id ?? '';
  return (
    <View className='bg-slate-100 flex-grow'>
      <ScheduleDetailsPage id={safeId} />
    </View>
  );
}
