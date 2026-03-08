import { ConfigContext } from '@expo/config';
import { format } from 'date-fns';
import { config } from 'dotenv';
import * as env from 'env-var';
config();

const EXPO_PUBLIC_POSTHOG_API_KEY = env.get('EXPO_PUBLIC_POSTHOG_API_KEY').required().asString();
const EXPO_PUBLIC_EDITION_NAME = env.get('EXPO_PUBLIC_EDITION_NAME').default('').asString();
const EXPO_PUBLIC_CONFERENCE_DATE = env
  .get('EXPO_PUBLIC_CONFERENCE_DATE')
  .default(format(new Date(), 'yyyy-MM-dd'))
  .asString();

export default ({ config }: ConfigContext) => {
  return {
    ...config,
    extra: {
      posthogApiKey: EXPO_PUBLIC_POSTHOG_API_KEY,
      editionName: EXPO_PUBLIC_EDITION_NAME,
      conferenceDate: EXPO_PUBLIC_CONFERENCE_DATE,
      ...config.extra,
    },
  };
};
