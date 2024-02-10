import { useFavoritePresentations } from '../contexts/favorite-presentations.context';
import { useConference } from './use-conference';

export function useFavoritePresentationsList() {
  const { data, ...rest } = useConference();
  const { isFavoritePresentation } = useFavoritePresentations();
  const items = data?.presentations.filter((item) => isFavoritePresentation(item.slug));
  return { data: items, ...rest };
}
