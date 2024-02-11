import axios from 'axios';

import { DISABLE_ANALYTICS } from '../config/env.config';

export class AnalyticsService {
  static sendPageView(location: string) {
    const eventBody = {
      name: 'pageview',
      domain: 'konferenciapp.kir-dev.hu',
      url: 'com.kir-dev.konferenciapp://localhost/' + location,
    };

    if (DISABLE_ANALYTICS) {
      console.debug('Analytics event', eventBody);
    } else {
      axios.post('https://visit.kir-dev.hu/api/event', eventBody).catch((error) => {
        console.error('Error during analytics event: ', error);
      });
    }
  }
}
