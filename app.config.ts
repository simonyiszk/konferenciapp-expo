import { ConfigContext } from '@expo/config';
import { config } from 'dotenv';
import * as env from 'env-var';
config();

const EXPO_PUBLIC_POSTHOG_API_KEY = env.get('EXPO_PUBLIC_POSTHOG_API_KEY').default('').asString();

export default ({ config }: ConfigContext) => {
  return {
    ...config,
    extra: {
      posthogApiKey: EXPO_PUBLIC_POSTHOG_API_KEY,
      ...config.extra,
    },
  };
};
