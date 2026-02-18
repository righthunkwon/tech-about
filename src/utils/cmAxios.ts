import axios from 'axios';

const cmAxios = axios.create({
  baseURL: '',
  withCredentials: true,
});

cmAxios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

cmAxios.interceptors.response.use(
  // when 200
  (res) => {
    return res;
  },

  // when except 200
  async (err) => {
    return Promise.reject(err);
  },
);

export default cmAxios;
