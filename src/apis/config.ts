import axios from 'axios';

export const baseInstance = axios.create({
  // baseURL: 'http://localhost:5173',
  baseURL: 'http://reuse.kro.kr',
  // baseURL: 'https://api.re-use.store',
});
