import axios from 'axios';

import { posthog } from './posthog.config';

const featureFlagName = 'api_base_url';
const DEFAULT_API_URL = 'https://konf-api.kir-dev.hu';

console.log(`[Axios] Initializing with baseURL: ${DEFAULT_API_URL}`);

export const axiosInstance = axios.create({
  baseURL: DEFAULT_API_URL,
});

posthog.onFeatureFlag(featureFlagName, () => {
  const baseUrl = posthog.getFeatureFlagPayload(featureFlagName);
  if (baseUrl) {
    const newBaseUrl = baseUrl.toString();
    console.log(`[Axios] PostHog updated baseURL to: ${newBaseUrl}`);
    axiosInstance.defaults.baseURL = newBaseUrl;
  } else {
    console.log(`[Axios] PostHog feature flag payload empty, keeping: ${axiosInstance.defaults.baseURL}`);
  }
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`[Axios Request] ${config.method?.toUpperCase()} ${config.baseURL}${config.url}`, config.data ?? '');
    return config;
  },
  (error) => {
    console.error(`[Axios Request Error]`, error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`[Axios Response] ${response.status} ${response.config.url}`, response.data);
    return response;
  },
  (error) => {
    console.error(
      `[Axios Response Error] ${error.response?.status} ${error.config?.url}`,
      error.response?.data ?? error.message
    );
    return Promise.reject(error);
  }
);
