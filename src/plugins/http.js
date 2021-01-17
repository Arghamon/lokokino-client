import axios from 'axios';
import { GetUser, SetUser } from '../utils/Storage';

const instance = axios.create();

// instance.defaults.baseURL = process.env.REACT_APP_BASE_URL;
instance.defaults.baseURL = 'http://localhost:4000';


instance.interceptors.request.use((request) => {

  const user = GetUser();

  request.headers = {
    ...user ? { 'Authorization': `Bearer ${user.token}` } : {},
    'Content-Type': 'application/json',
    ...request.headers,
  };

  return request;
},
  error => {
    Promise.reject(error)
  });

instance.interceptors.response.use(
  (response) => response,

  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const access_token = await refreshAccessToken();
      originalRequest.headers['Authorization'] = 'bearer ' + access_token;
      return axios(originalRequest);
    }
    return Promise.reject(error);
  });

async function refreshAccessToken() {
  const user = GetUser();

  const { data } = await axios.post(`http://localhost:4000/manage/refresh`, { refreshToken: user?.refreshToken });
  SetUser(data);
  return data?.token;
}


export default instance;
