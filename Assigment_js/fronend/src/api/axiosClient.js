import axios from 'axios';

export const axiosClient = axios.create({
  // baseURL: 'https://603778fe54350400177227c5.mockapi.io',
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-Type': 'application/json',
  },
});