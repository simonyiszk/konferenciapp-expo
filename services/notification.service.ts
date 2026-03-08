import { isBefore, subMinutes } from 'date-fns';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import { PresentationDto } from '../types/conference-api.type';
import { getFullDate } from '../utils/date.utils';

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
    console.log('Registering for push notifications', presentation);
    if (!presentation.startTime) {
      console.log('Event start time is not defined, not scheduling notification');
      return;
    }
    if (!this.notificationEnabled) {
      console.log('Notification permission not granted, not scheduling notification');
      return;
    }
    const now = new Date();
    const startDate = getFullDate(presentation.startTime);
    console.log('Start date', startDate);
    if (isBefore(startDate, now)) {
      console.log('Event is in the past, not scheduling notification');
      return;
    }

    let triggerDate = subMinutes(startDate, 5);
    if (isBefore(triggerDate, now)) {
      triggerDate = new Date(now.getTime() + 1000);
    }

    const trigger: Notifications.DateTriggerInput = {
      type: Notifications.SchedulableTriggerInputTypes.DATE,
      date: triggerDate.getTime(),
    };
    if (Platform.OS === 'android') {
      trigger.channelId = 'default';
    }

    console.log('Scheduling notification', trigger);

    return await Notifications.scheduleNotificationAsync({
      content: {
        title: presentation.title,
        body: `Hamarosan kezdődik a(z) ${presentation.room} teremben!`,
        data: { tab: 'presentation', screen: 'presentation-details', id: presentation.slug },
      },
      trigger,
    });
  }

  static async removeScheduledNotification(notificationId: string | undefined): Promise<void> {
    if (!notificationId) return;
    await Notifications.cancelScheduledNotificationAsync(notificationId);
  }

  static async showNotification(notification: Notifications.NotificationRequestInput) {
    await this.registerForPushNotifications();
    if (!this.notificationEnabled) {
      console.log('Notification permission not granted, not scheduling notification');
      return;
    }
    return await Notifications.scheduleNotificationAsync(notification);
  }
}
