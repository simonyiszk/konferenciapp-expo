import { ConfigContext } from '@expo/config';
import { config } from 'dotenv';
import * as env from 'env-var';
config();

const API_BASE_URL = env.get('API_BASE_URL').required().asString();

export default ({ config }: ConfigContext) => {
  return {
    ...config,
    extra: {
      apiBaseUrl: API_BASE_URL,
      ...config.extra,
    },
  };
};
