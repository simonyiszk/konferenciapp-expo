import axios from 'axios';

import { API_BASE_URL } from './env.config';

export const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});
