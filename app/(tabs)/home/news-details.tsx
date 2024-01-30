import { NewsDetailsPage } from '../../../components/news/news-details-page';
import { useSafeId } from '../../../utils/common.utils';

export default function NewsDetails() {
    const id = useSafeId();
    return <NewsDetailsPage id={id} />;
}
