import { usePostHog } from 'posthog-react-native';
import { useEffect } from 'react';

export function usePageView(location?: string) {
  const posthog = usePostHog();
  useEffect(() => {
    if (!location) return;
    posthog.screen(location);
  }, []);
}
