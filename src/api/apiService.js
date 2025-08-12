// src/api/apiService.js
import axiosInstance from './axiosInstance';

class ApiService {
  constructor(baseEndpoint) {
    this.baseEndpoint = baseEndpoint;
  }

  getAll(path = '') {
    return axiosInstance.get(`${this.baseEndpoint}${path}`);
  }

  getById(id, path = '') {
    return axiosInstance.get(`${this.baseEndpoint}${path}/${id}`);
  }

  create(data, path = '') {
    return axiosInstance.post(`${this.baseEndpoint}${path}`, data);
  }

  update(id, data, path = '') {
    return axiosInstance.patch(`${this.baseEndpoint}${path}/${id}`, data);
  }

  delete(id, path = '') {
    return axiosInstance.delete(`${this.baseEndpoint}${path}/${id}`);
  }

  customRequest(method, path, data = null) {
    return axiosInstance({
      method,
      url: `${this.baseEndpoint}${path}`,
      data,
    });
  }
}

export default ApiService;
