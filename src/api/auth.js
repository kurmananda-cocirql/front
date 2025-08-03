import axiosInstance from './axiosInstance';

export const login = async (email, password) => {
  const res = await axiosInstance.post('/api/user/login', { email, password });
  const token = res.data.data.access_token;
  localStorage.setItem('access_token', token);
  return res.data;
};

export const signup = async (data) => {
  const res = await axiosInstance.post('/api/user/create', data);
  return res.data;
};
