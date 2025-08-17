// src/services/categoryService.js
import ApiService from '../api/apiService';
import { API_ENDPOINTS } from '../api/apiEndpoints';

class CategoryService extends ApiService {
  constructor() {
    super(API_ENDPOINTS.CATEGORY.BASE);
  }

  getAllCategories() {
    return this.getAll('/all');
  }

  createCategory(data) {
    return this.create(data, '/create');
  }
}

export const categoryService = new CategoryService();
