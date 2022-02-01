import axios from 'axios';
import { environment } from '~/configs';

const api = axios.create({
  baseURL: environment.apiUrl,
});
api.interceptors.response.use(
  (response) => response,
  (error) => {
    console.log('api error', JSON.stringify(error, null, 2));
    return Promise.reject(error);
  },
);

export default api;
