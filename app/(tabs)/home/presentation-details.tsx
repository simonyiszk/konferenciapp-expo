import { PresentationDetailsPage } from '../../../components/schedule/layouts/presentation-details-page';
import { useSafeId } from '../../../utils/common.utils';

export default function PresentationDetails() {
  const slug = useSafeId();
  return <PresentationDetailsPage slug={slug} />;
}
