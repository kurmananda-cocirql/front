import axiosInstance from './axiosInstance';

export const getCategories = () => axiosInstance.get('/api/workshop/admin/category/all');

export const createCategory = (data) =>
  axiosInstance.post('/api/workshop/admin/category/create', data);

export const deleteCategory = (id) =>
  axiosInstance.delete(`/api/workshop/admin/category/${id}`);

export const updateCategory = (id, data) =>
  axiosInstance.patch(`/api/workshop/admin/category/${id}`, data);
