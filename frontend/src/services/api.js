import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Land Holdings API
export const landAPI = {
  getAll: () => api.get('/lands'),
  getById: (id) => api.get(`/lands/${id}`),
  create: (data) => api.post('/lands', data),
  update: (id, data) => api.put(`/lands/${id}`, data),
  delete: (id) => api.delete(`/lands/${id}`),
  getStats: () => api.get('/lands/stats'),
};

// Irrigation API
export const irrigationAPI = {
  getAll: () => api.get('/irrigation'),
  getById: (id) => api.get(`/irrigation/${id}`),
  create: (data) => api.post('/irrigation', data),
  update: (id, data) => api.put(`/irrigation/${id}`, data),
  delete: (id) => api.delete(`/irrigation/${id}`),
  getStats: () => api.get('/irrigation/stats'),
};

// Cropping Pattern API
export const croppingAPI = {
  getAll: () => api.get('/cropping'),
  getById: (id) => api.get(`/cropping/${id}`),
  create: (data) => api.post('/cropping', data),
  update: (id, data) => api.put(`/cropping/${id}`, data),
  delete: (id) => api.delete(`/cropping/${id}`),
  getStats: () => api.get('/cropping/stats'),
};

// Wells API
export const wellAPI = {
  getAll: () => api.get('/wells'),
  getById: (id) => api.get(`/wells/${id}`),
  create: (data) => api.post('/wells', data),
  update: (id, data) => api.put(`/wells/${id}`, data),
  delete: (id) => api.delete(`/wells/${id}`),
  getStats: () => api.get('/wells/stats'),
};

// Dashboard API
export const dashboardAPI = {
  getStats: () => api.get('/dashboard/stats'),
};

export default api;
