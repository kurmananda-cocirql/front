// src/services/authService.js
import axiosInstance from '../api/axiosInstance';
import { API_ENDPOINTS } from '../api/apiEndpoints';

export const authService = {
  async login(email, password) {
    try {
      const res = await axiosInstance.post(API_ENDPOINTS.AUTH.LOGIN, { email, password });
      const token = res.data.data.access_token;
      localStorage.setItem('access_token', token);
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Login failed');
    }
  },

  async signup(data) {
    try {
      const res = await axiosInstance.post(API_ENDPOINTS.AUTH.SIGNUP, data);
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Signup failed');
    }
  },

  logout() {
    localStorage.removeItem('access_token');
  },

  getToken() {
    return localStorage.getItem('access_token');
  },

  isAuthenticated() {
    return !!this.getToken();
  },
};
