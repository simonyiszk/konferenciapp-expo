import Constants from 'expo-constants';

export const POSTHOG_API_KEY = Constants.expoConfig?.extra?.posthogApiKey ?? '';
