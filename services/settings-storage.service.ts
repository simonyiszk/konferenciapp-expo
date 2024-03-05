import AsyncStorage from '@react-native-async-storage/async-storage';

import { SettingsType } from '../types/settings.type';

export class SettingsStorageService {
  static async loadSettings(): Promise<SettingsType> {
    try {
      const settings = await AsyncStorage.getItem('settings');
      if (!settings) {
        const defaultSettings: SettingsType = { language: 'hu', mode: 'light', notifications: true };
        await this.saveSettings(defaultSettings);
        return defaultSettings;
      }
      return JSON.parse(settings);
    } catch (error) {
      console.log(error);
      return { language: 'hu', mode: 'light', notifications: true };
    }
  }

  static async saveSettings(settings: SettingsType): Promise<void> {
    try {
      await AsyncStorage.setItem('settings', JSON.stringify(settings));
    } catch (error) {
      console.log(error);
    }
  }
}
