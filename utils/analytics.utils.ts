import { useEffect } from 'react';

import { AnalyticsService } from '../services/analytics.service';

export function usePageView(location?: string) {
  useEffect(() => {
    if (!location) return;
    AnalyticsService.sendPageView(location);
  }, []);
}
