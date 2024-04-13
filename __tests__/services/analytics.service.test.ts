import axios from 'axios';

import { AnalyticsService } from '../../services/analytics.service';

console.debug = jest.fn();
const postSpy = jest.spyOn(axios, 'post');

beforeEach(() => {
  jest.clearAllMocks();
  postSpy.mockImplementation(() => Promise.resolve());
});

it('should post object of an event', () => {
  AnalyticsService.sendPageView('test');
  expect(postSpy).toHaveBeenCalledWith('https://visit.kir-dev.hu/api/event', {
    name: 'pageview',
    domain: 'konferenciapp.kir-dev.hu',
    url: 'com.kir-dev.konferenciapp://localhost/test',
  });
});
