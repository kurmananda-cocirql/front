
import axiosInstance from './axiosInstance';

// 🟢 GET all workshops (Admin)
export const getWorkshops = async () => {
  try {
    const response = await axiosInstance.get('/api/workshop/admin/all');
    return response.data; // return only the data part
  } catch (error) {
    console.error('Error fetching workshops:', error);
    throw error;
  }
};

// 🟡 CREATE a new workshop (data passed as object)
export const createWorkshop = async (dataArray) => {
  try {
    // Convert array to object if needed
    const payload = Array.isArray(dataArray) ? Object.fromEntries(dataArray) : dataArray;
    const response = await axiosInstance.post('/api/workshop/admin/create', payload);
    return response.data;
  } catch (error) {
    console.error('Error creating workshop:', error);
    throw error;
  }
};

// 🔵 UPDATE an existing workshop
export const updateWorkshop = async (id, dataArray) => {
  try {
    const payload = Array.isArray(dataArray) ? Object.fromEntries(dataArray) : dataArray;
    const response = await axiosInstance.patch(`/api/workshop/admin/${id}`, payload);
    return response.data;
  } catch (error) {
    console.error(`Error updating workshop ${id}:`, error);
    throw error;
  }
};

// 🔴 DELETE a workshop
export const deleteWorkshop = async (id) => {
  try {
    const response = await axiosInstance.delete(`/api/workshop/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting workshop ${id}:`, error);
    throw error;
  }
};
