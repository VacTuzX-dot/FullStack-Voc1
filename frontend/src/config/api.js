// API Configuration
// Change this URL based on your deployment environment

// Production (Vercel)
// export const API_BASE_URL = 'https://backend-nextjs-virid.vercel.app';

// Local Development
// export const API_BASE_URL = "http://localhost:3000";

// Production (Custom domain)
export const API_BASE_URL = "https://013backend.meo.in.th";

// API Endpoints
export const API_ENDPOINTS = {
  login: `${API_BASE_URL}/login`,
  logout: `${API_BASE_URL}/logout`,
  register: `${API_BASE_URL}/api/users`,
  users: `${API_BASE_URL}/api/users`,
  userById: (id) => `${API_BASE_URL}/api/users/${id}`,
};
