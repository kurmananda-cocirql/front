// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL:'http://31.97.224.12:14001',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to every request if exists
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
