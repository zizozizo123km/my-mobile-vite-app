// src/constants/apiEndpoints.js

/**
 * Centralized API Endpoint Definitions.
 * This structure allows for easy management and modification of API routes.
 */

// --- AUTHENTICATION ENDPOINTS ---
export const AUTH_ENDPOINTS = {
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  REFRESH_TOKEN: '/auth/refresh',
  LOGOUT: '/auth/logout',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
};

// --- USER MANAGEMENT ENDPOINTS ---
export const USER_ENDPOINTS = {
  PROFILE: '/users/profile',
  UPDATE_PROFILE: '/users/profile', // PATCH or PUT
  GET_USER_BY_ID: (id) => `/users/${id}`,
  GET_ALL_USERS: '/users',
};

// --- DATA / ITEMS ENDPOINTS (Example Feature) ---
export const ITEM_ENDPOINTS = {
  BASE: '/items',
  GET_ALL: '/items',
  CREATE: '/items',
  GET_BY_ID: (id) => `/items/${id}`,
  UPDATE_BY_ID: (id) => `/items/${id}`,
  DELETE_BY_ID: (id) => `/items/${id}`,
};

// --- CONFIGURATION / SYSTEM ENDPOINTS ---
export const SYSTEM_ENDPOINTS = {
  HEALTH_CHECK: '/system/health',
  CONFIG: '/system/config',
};

// Optional: Group all endpoints for easier import if needed
export const API_ENDPOINTS = {
  AUTH: AUTH_ENDPOINTS,
  USERS: USER_ENDPOINTS,
  ITEMS: ITEM_ENDPOINTS,
  SYSTEM: SYSTEM_ENDPOINTS,
};