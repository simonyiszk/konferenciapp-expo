import { AntDesign } from '@expo/vector-icons';
import { useMemo } from 'react';
import { Pressable } from 'react-native';

import { useFavoriteEvents } from '../../contexts/favorite-events.context';

interface FavoriteButtonProps {
  eventId: string;
}

export function FavoriteButton({ eventId }: FavoriteButtonProps) {
  const { isFavoriteEvent, addFavoriteEvent, removeFavoriteEvent } = useFavoriteEvents();

  const isFavorite = useMemo(() => isFavoriteEvent(eventId), [eventId, isFavoriteEvent]);

  const onPress = () => {
    if (isFavorite) {
      removeFavoriteEvent(eventId);
    } else {
      addFavoriteEvent(eventId);
    }
  };

  return (
    <Pressable
      className='absolute right-5 bottom-36 shadow-md shadow-slate-500/30 p-5 bg-white rounded-xl'
      onPress={onPress}
    >
      <AntDesign name={isFavorite ? 'star' : 'staro'} color={isFavorite ? 'orange' : 'gray'} size={30} />
    </Pressable>
  );
}
