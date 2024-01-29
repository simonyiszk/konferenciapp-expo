import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';

import { FavoriteEventStorageService } from '../services/favorite-event.service';
import { NotificationService } from '../services/notification.service';
import { FavoriteEvent } from '../types/favorite-event.type';
import { ScheduleEvent } from '../types/schedule-event.type';

type FavoriteEventsContextType =
  | {
      favoriteEvents: FavoriteEvent[];
      addFavoriteEvent: (event: ScheduleEvent) => void;
      removeFavoriteEvent: (eventId: string) => void;
      isFavoriteEvent: (eventId: string) => boolean;
    }
  | undefined;

const FavoriteEventsContext = createContext<FavoriteEventsContextType>(undefined);

export function FavoriteEventsProvider({ children }: PropsWithChildren) {
  const [favoriteEvents, setFavoriteEvents] = useState<FavoriteEvent[]>([]);

  async function addFavoriteEvent(event: ScheduleEvent) {
    const notificationId = await NotificationService.scheduleEventNotification(event);
    const favoriteEvent = { eventId: event.id, notificationId };
    setFavoriteEvents((prev) => [...prev, favoriteEvent]);
    FavoriteEventStorageService.addFavoriteEvent(favoriteEvent);
  }

  function removeFavoriteEvent(eventId: string) {
    const favoriteEvent = favoriteEvents.find((item) => item.eventId === eventId);
    setFavoriteEvents((prev) => prev.filter((item) => item.eventId !== eventId));
    FavoriteEventStorageService.removeFavoriteEvent(eventId);
    NotificationService.removeScheduledNotification(favoriteEvent?.notificationId);
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
