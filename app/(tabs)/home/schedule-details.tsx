import { ScheduleDetailsPage } from '../../../components/schedule/schedule-details-page';
import { useSafeId } from '../../../utils/common.utils';

export default function ScheduleEventDetails() {
  const id = useSafeId();
  return <ScheduleDetailsPage id={id} />;
}
