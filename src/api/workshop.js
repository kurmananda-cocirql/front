import axiosInstance from './axiosInstance';

export const getWorkshops = () => axiosInstance.get('/api/workshop/admin/all');

export const createWorkshop = (data) =>
  axiosInstance.post('/api/workshop/admin/create', data);

export const updateWorkshop = (id, data) =>
  axiosInstance.patch(`/api/workshop/admin/${id}`, data);

export const deleteWorkshop = (id) =>
  axiosInstance.delete(`/api/workshop/${id}`);
