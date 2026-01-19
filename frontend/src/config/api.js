// API Configuration
// Change this URL based on your deployment environment

// Production (Vercel)
// export const API_BASE_URL = 'https://backend-nextjs-virid.vercel.app';

// Self-hosted (Docker on local network)
// export const API_BASE_URL = 'http://localhost:3102';
// export const API_BASE_URL = 'http://192.168.0.234:3102';

// Production (Custom domain)
export const API_BASE_URL = "http://localhost:3000";

// API Endpoints
export const API_ENDPOINTS = {
  login: `${API_BASE_URL}/api/auth/login`,
  register: `${API_BASE_URL}/api/auth/register`,
  users: `${API_BASE_URL}/api/users`,
  userById: (id) => `${API_BASE_URL}/api/users/${id}`,
};
