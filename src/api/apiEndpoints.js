// src/api/apiEndpoints.js
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/user/login',
    SIGNUP: '/api/user/create',
    REFRESH: '/api/user/refresh',
    LOGOUT: '/api/user/logout',
  },
  USER: {
    PROFILE: '/api/user/profile',
    UPDATE_PROFILE: '/api/user/profile/update',
  },
  WORKSHOP: {
    BASE: '/api/workshop',
    ADMIN: {
      ALL: '/api/workshop/admin/all',
      CREATE: '/api/workshop/admin/create',
      UPDATE: (id) => `/api/workshop/admin/${id}`,
      DELETE: (id) => `/api/workshop/${id}`,
    },
    PUBLIC: {
      ALL: '/api/workshop/public/all',
      BY_ID: (id) => `/api/workshop/${id}`,
      BY_CATEGORY: (categoryId) => `/api/workshop/category/${categoryId}`,
      ENROLL: (id) => `/api/workshop/${id}/enroll`,
    },
  },
  CATEGORY: {
    BASE: '/api/workshop/admin/category',
    ALL: '/api/workshop/admin/category/all',
    CREATE: '/api/workshop/admin/category/create',
    UPDATE: (id) => `/api/workshop/admin/category/${id}`,
    DELETE: (id) => `/api/workshop/admin/category/${id}`,
  },
};
