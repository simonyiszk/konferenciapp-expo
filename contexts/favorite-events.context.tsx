import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { FavoriteEventStorageService } from '../services/favorite-event.service';
import { FavoriteEvent } from '../types/favorite-event.type';

type FavoriteEventsContextType =
  | {
      favoriteEvents: FavoriteEvent[];
      addFavoriteEvent: (eventId: string) => void;
      removeFavoriteEvent: (eventId: string) => void;
      isFavoriteEvent: (eventId: string) => boolean;
    }
  | undefined;

const FavoriteEventsContext = createContext<FavoriteEventsContextType>(undefined);

export function FavoriteEventsProvider({ children }: PropsWithChildren) {
  const [favoriteEvents, setFavoriteEvents] = useState<FavoriteEvent[]>([]);

  function addFavoriteEvent(eventId: string) {
    setFavoriteEvents((prev) => [...prev, { eventId }]);
    FavoriteEventStorageService.addFavoriteEvent(eventId);
  }

  function removeFavoriteEvent(eventId: string) {
    setFavoriteEvents((prev) => prev.filter((item) => item.eventId !== eventId));
    FavoriteEventStorageService.removeFavoriteEvent(eventId);
  }

  function isFavoriteEvent(eventId: string) {
    return favoriteEvents.some((item) => item.eventId === eventId);
  }

  useEffect(() => {
    FavoriteEventStorageService.listFavoriteEvents().then(setFavoriteEvents);
  }, []);

  return (
    <FavoriteEventsContext.Provider
      value={{
        favoriteEvents,
        addFavoriteEvent,
        removeFavoriteEvent,
        isFavoriteEvent,
      }}
    >
      {children}
    </FavoriteEventsContext.Provider>
  );
}

export function useFavoriteEvents() {
  const context = useContext(FavoriteEventsContext);
  if (context === undefined) {
    throw new Error('useFavoriteEvents must be used within a FavoriteEventsProvider');
  }
  return context;
}
