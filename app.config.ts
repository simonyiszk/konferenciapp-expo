import { ConfigContext } from '@expo/config';
import { config } from 'dotenv';
import * as env from 'env-var';
config();

const EXPO_PUBLIC_API_BASE_URL = env.get('EXPO_PUBLIC_API_BASE_URL').required().asString();
const EXPO_PUBLIC_DISABLE_ANALYTICS = env.get('EXPO_PUBLIC_DISABLE_ANALYTICS').default('false').asBool();
const EXPO_PUBLIC_QNA_API_BASE_URL = env.get('EXPO_PUBLIC_QNA_API_BASE_URL').required().asString();
const EXPO_PUBLIC_ENABLE_QNA = env.get('EXPO_PUBLIC_ENABLE_QNA').default('true').asBool();
const EXPO_PUBLIC_ARCHIVE = env.get('EXPO_PUBLIC_ARCHIVE').default('false').asBool();

export default ({ config }: ConfigContext) => {
  return {
    ...config,
    extra: {
      apiBaseUrl: EXPO_PUBLIC_API_BASE_URL,
      disableAnalytics: EXPO_PUBLIC_DISABLE_ANALYTICS,
      qnaApiBaseUrl: EXPO_PUBLIC_QNA_API_BASE_URL,
      enableQna: EXPO_PUBLIC_ENABLE_QNA,
      archive: EXPO_PUBLIC_ARCHIVE,
      ...config.extra,
    },
  };
};
