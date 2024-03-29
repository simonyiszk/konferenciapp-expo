import AsyncStorage from '@react-native-async-storage/async-storage';

import { FavoritePresentation } from '../types/favorite-event.type';

export class FavoriteEventStorageService {
  static async listFavoriteEvents(): Promise<FavoritePresentation[]> {
    try {
      const favoriteEvents = await AsyncStorage.getItem('favoriteEvents');
      if (!favoriteEvents) {
        await this.saveFavoriteEvents([]);
        return [];
      }
      return JSON.parse(favoriteEvents || '[]');
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  static async addFavoriteEvent(favorite: FavoritePresentation): Promise<void> {
    try {
      const favoriteEvents = await this.listFavoriteEvents();
      const newFavoriteEvents = [...favoriteEvents, favorite];
      await this.saveFavoriteEvents(newFavoriteEvents);
    } catch (error) {
      console.log(error);
    }
  }

  static async removeFavoriteEvent(eventId: string): Promise<void> {
    try {
      const favoriteEvents = await this.listFavoriteEvents();
      const newFavoriteEvents = favoriteEvents.filter((favoriteEvent) => favoriteEvent.slug !== eventId);
      await this.saveFavoriteEvents(newFavoriteEvents);
    } catch (error) {
      console.log(error);
    }
  }

  static async isFavoriteEvent(eventId: string): Promise<boolean> {
    try {
      const favoriteEvents = await this.listFavoriteEvents();
      return favoriteEvents.some((favoriteEvent) => favoriteEvent.slug === eventId);
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  private static async saveFavoriteEvents(favoriteEvents: FavoritePresentation[]): Promise<void> {
    try {
      await AsyncStorage.setItem('favoriteEvents', JSON.stringify(favoriteEvents));
    } catch (error) {
      console.log(error);
    }
  }
}
