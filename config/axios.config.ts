import axios from 'axios';

import { posthog } from './posthog.config';

const featureFlagName = 'api_base_url';

export const axiosInstance = axios.create({
  baseURL: '',
});

posthog.onFeatureFlag(featureFlagName, () => {
  const baseUrl = posthog.getFeatureFlagPayload(featureFlagName);
  axiosInstance.defaults.baseURL = baseUrl?.toString() ?? '';
});
