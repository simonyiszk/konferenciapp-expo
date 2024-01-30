import * as Notifications from 'expo-notifications';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';

//From: https://docs.expo.dev/versions/latest/sdk/notifications/#handle-push-notifications-with-navigation
export function useNotificationObserver() {
  const router = useRouter();
  useEffect(() => {
    let isMounted = true;

    function redirect(notification: Notifications.Notification) {
      const tab = notification.request.content.data?.tab;
      const screen = notification.request.content.data?.screen;
      const id = notification.request.content.data?.id;
      if (tab) router.push({ pathname: tab });
      if (screen) router.push({ pathname: `${tab}/${screen}`, params: { id } });
    }

    Notifications.getLastNotificationResponseAsync().then((response) => {
      if (!isMounted || !response?.notification) {
        return;
      }
      redirect(response?.notification);
    });

    const subscription = Notifications.addNotificationResponseReceivedListener((response) => {
      redirect(response.notification);
    });

    return () => {
      isMounted = false;
      subscription.remove();
    };
  }, []);
}
