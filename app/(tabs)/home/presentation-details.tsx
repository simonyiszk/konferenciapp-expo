import { PresentationDetailsPage } from '../../../components/schedule/presentation-details-page';
import { useSafeId } from '../../../utils/common.utils';

export default function PresentationDetails() {
  const slug = useSafeId();
  return <PresentationDetailsPage slug={slug} />;
}
