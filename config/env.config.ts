import Constants from 'expo-constants';

export const API_BASE_URL = Constants.expoConfig?.extra?.apiBaseUrl;
export const DISABLE_ANALYTICS = Constants.expoConfig?.extra?.disableAnalytics;
export const QNA_API_BASE_URL = Constants.expoConfig?.extra?.qnaApiBaseUrl;
export const ENABLE_QNA = Constants.expoConfig?.extra?.enableQna ?? true;
export const ARCHIVE = Constants.expoConfig?.extra?.archive ?? false;
