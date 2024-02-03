import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { FavoriteEventStorageService } from '../services/favorite-event.service';
import { NotificationService } from '../services/notification.service';
import { PresentationDto } from '../types/conference-api.type';
import { FavoritePresentation } from '../types/favorite-event.type';

type FavoritePresentationsContextType =
  | {
      favoritePresentations: FavoritePresentation[];
      addFavoritePresentation: (presentation: PresentationDto) => void;
      removeFavoritePresentation: (presentationSlug: string) => void;
      isFavoritePresentation: (presentationSlug: string) => boolean;
    }
  | undefined;

const FavoritePresentationsContext = createContext<FavoritePresentationsContextType>(undefined);

export function FavoritePresentationsProvider({ children }: PropsWithChildren) {
  const [favoritePresentations, setFavoritePresentations] = useState<FavoritePresentation[]>([]);

  async function addFavoritePresentation(presentation: PresentationDto) {
    const notificationId = await NotificationService.scheduleEventNotification(presentation);
    const favoritePresentation: FavoritePresentation = { slug: presentation.slug, notificationId };
    setFavoritePresentations((prev) => [...prev, favoritePresentation]);
    FavoriteEventStorageService.addFavoriteEvent(favoritePresentation);
  }

  function removeFavoritePresentation(eventId: string) {
    const favoriteEvent = favoritePresentations.find((item) => item.slug === eventId);
    setFavoritePresentations((prev) => prev.filter((item) => item.slug !== eventId));
    FavoriteEventStorageService.removeFavoriteEvent(eventId);
    NotificationService.removeScheduledNotification(favoriteEvent?.notificationId);
  }

  function isFavoritePresentation(eventId: string) {
    return favoritePresentations.some((item) => item.slug === eventId);
  }

  useEffect(() => {
    FavoriteEventStorageService.listFavoriteEvents().then(setFavoritePresentations);
  }, []);

  return (
    <FavoritePresentationsContext.Provider
      value={{
        favoritePresentations,
        addFavoritePresentation,
        removeFavoritePresentation,
        isFavoritePresentation,
      }}
    >
      {children}
    </FavoritePresentationsContext.Provider>
  );
}

export function useFavoritePresentations() {
  const context = useContext(FavoritePresentationsContext);
  if (context === undefined) {
    throw new Error('useFavoritePresentations must be used within a FavoriteEventsProvider');
  }
  return context;
}
