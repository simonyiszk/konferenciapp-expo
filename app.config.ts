import { ConfigContext } from '@expo/config';
import { config } from 'dotenv';
import * as env from 'env-var';
config();

const EXPO_PUBLIC_POSTHOG_API_KEY = env.get('EXPO_PUBLIC_POSTHOG_API_KEY').required().asString();
const EXPO_PUBLIC_EDITION_NAME = env.get('EXPO_PUBLIC_EDITION_NAME').default('').asString();

export default ({ config }: ConfigContext) => {
  return {
    ...config,
    extra: {
      posthogApiKey: EXPO_PUBLIC_POSTHOG_API_KEY,
      editionName: EXPO_PUBLIC_EDITION_NAME,
      ...config.extra,
    },
  };
};
