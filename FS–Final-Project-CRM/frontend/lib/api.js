import axios from 'axios';
import { getToken, clearSession } from './auth';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api',
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.request.use(config => {
  const token = getToken();
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status === 401 && typeof window !== 'undefined') {
      clearSession();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const messageFromError = error =>
  error?.response?.data?.message || error?.message || 'Something went wrong. Please try again.';

export default api;
