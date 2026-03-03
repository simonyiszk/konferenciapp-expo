import axios from 'axios';

import { posthog } from './posthog.config';

const featureFlagName = 'api_base_url';
const DEFAULT_API_URL = 'https://konf-api.kir-dev.hu';

export const axiosInstance = axios.create({
  baseURL: DEFAULT_API_URL,
});

posthog.onFeatureFlag(featureFlagName, () => {
  const baseUrl = posthog.getFeatureFlagPayload(featureFlagName);
  if (baseUrl) {
    const newBaseUrl = baseUrl.toString();
    axiosInstance.defaults.baseURL = newBaseUrl;
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
