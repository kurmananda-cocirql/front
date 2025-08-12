// src/services/workshopService.js
import ApiService from '../api/apiService';
import { API_ENDPOINTS } from '../api/apiEndpoints';

class WorkshopService extends ApiService {
  constructor() {
    super(API_ENDPOINTS.WORKSHOP.BASE);
  }

  getAllWorkshops() {
    return this.getAll('/admin/all');
  }

  createWorkshop(data) {
    this.validateWorkshopData(data);
    return this.create(data, '/admin/create');
  }

  validateWorkshopData(data, isRequired = true) {
    const requiredFields = [
      'name', 'description', 'shortName', 'shortDescription',
      'availableSlots', 'categoryId', 'startDate', 'endDate',
      'maxParticipants', 'fees', 'mode',
    ];

    if (isRequired) {
      const missing = requiredFields.filter(f => !data[f]);
      if (missing.length) throw new Error(`Missing: ${missing.join(', ')}`);
    }
  }
}

export const workshopService = new WorkshopService();
