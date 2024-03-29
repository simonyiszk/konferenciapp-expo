import { PresentationDetailsPage } from '../../../components/schedule/layouts/presentation-details-page';
import { useSafeId } from '../../../utils/common.utils';

export default function ScheduleEventDetails() {
  const slug = useSafeId();
  return <PresentationDetailsPage slug={slug} />;
}
