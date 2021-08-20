import axios from 'axios';

export const axiosClient = axios.create({
  // baseURL: 'https://603778fe54350400177227c5.mockapi.io',
  baseURL: 'http://127.0.0.1:8000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});