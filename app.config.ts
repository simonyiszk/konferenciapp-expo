import { ConfigContext } from '@expo/config';
import { config } from 'dotenv';
import * as env from 'env-var';
config();

const EXPO_PUBLIC_API_BASE_URL = env.get('EXPO_PUBLIC_API_BASE_URL').required().asString();
const EXPO_PUBLIC_DISABLE_ANALYTICS = env.get('EXPO_PUBLIC_DISABLE_ANALYTICS').default('false').asBool();

export default ({ config }: ConfigContext) => {
  return {
    ...config,
    extra: {
      apiBaseUrl: EXPO_PUBLIC_API_BASE_URL,
      disableAnalytics: EXPO_PUBLIC_DISABLE_ANALYTICS,
      ...config.extra,
    },
  };
};
