import axios from 'axios';

export const tesonetAxios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 1000,
});
