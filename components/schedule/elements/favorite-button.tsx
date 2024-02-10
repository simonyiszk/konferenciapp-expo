import { AntDesign } from '@expo/vector-icons';
import { useMemo } from 'react';
import { Pressable } from 'react-native';

import { useFavoritePresentations } from '../../../contexts/favorite-presentations.context';
import { PresentationDto } from '../../../types/conference-api.type';

interface FavoriteButtonProps {
  presentation: PresentationDto;
}

export function FavoriteButton({ presentation }: FavoriteButtonProps) {
  const { isFavoritePresentation, addFavoritePresentation, removeFavoritePresentation } = useFavoritePresentations();

  const isFavorite = useMemo(() => isFavoritePresentation(presentation.slug), [presentation, isFavoritePresentation]);

  const onPress = () => {
    if (isFavorite) {
      removeFavoritePresentation(presentation.slug);
    } else {
      addFavoritePresentation(presentation);
    }
  };

  return (
    <Pressable onPress={onPress}>
      <AntDesign name={isFavorite ? 'star' : 'staro'} color={isFavorite ? '#eab308' : 'gray'} size={30} />
    </Pressable>
  );
}
