import { isBefore } from 'date-fns';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import { ScheduleEvent } from '../types/schedule-event.type';

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

  static async scheduleEventNotification(event: ScheduleEvent) {
    await this.registerForPushNotifications();
    if (!this.notificationEnabled) {
      console.log('Notification permission not granted, not scheduling notification');
      return;
    }
    if (isBefore(new Date(event.start), new Date())) {
      console.log('Event is in the past, not scheduling notification');
      return;
    }

    const triggerDate = new Date(event.start);

    return await Notifications.scheduleNotificationAsync({
      content: {
        title: event.title,
        body: `Hamarosan kezdődik a(z) ${event.location} teremben!`,
        data: { tab: 'schedule', screen: 'schedule-details', id: event.id },
      },
      trigger: triggerDate,
    });
  }

  static async removeScheduledNotification(notificationId: string | undefined): Promise<void> {
    if (!notificationId) return;
    await Notifications.cancelScheduledNotificationAsync(notificationId);
  }
}
