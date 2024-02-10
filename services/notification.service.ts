import { isBefore } from 'date-fns';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import { PresentationDto } from '../types/conference-api.type';

export class NotificationService {
  static notificationEnabled = false;

  private static async registerForPushNotifications() {
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.HIGH,
      });
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    this.notificationEnabled = existingStatus === 'granted';
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      this.notificationEnabled = status === 'granted';
    }
  }

  static async scheduleEventNotification(presentation: PresentationDto) {
    await this.registerForPushNotifications();
    if (!presentation.startTime) {
      console.log('Event start time is not defined, not scheduling notification');
      return;
    }
    if (!this.notificationEnabled) {
      console.log('Notification permission not granted, not scheduling notification');
      return;
    }
    if (isBefore(new Date(presentation.startTime), new Date())) {
      console.log('Event is in the past, not scheduling notification');
      return;
    }

    const triggerDate = new Date(presentation.startTime);

    return await Notifications.scheduleNotificationAsync({
      content: {
        title: presentation.title,
        body: `Hamarosan kezdődik a(z) ${presentation.room} teremben!`,
        data: { tab: 'presentation', screen: 'presentation-details', slug: presentation.slug },
      },
      trigger: triggerDate,
    });
  }

  static async removeScheduledNotification(notificationId: string | undefined): Promise<void> {
    if (!notificationId) return;
    await Notifications.cancelScheduledNotificationAsync(notificationId);
  }
}
