import PostHog from 'posthog-react-native';

import { POSTHOG_API_KEY } from './env.config';

export const posthog = new PostHog(POSTHOG_API_KEY);
