import axios from 'axios';

const configureAxios = () => {
  const instance = axios.create();

  instance.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  // instance.defaults.baseURL = 'http://localhost:4000';

  instance.interceptors.request.use((request) => {

    request.headers = {
      'Content-Type': 'application/json',
    };

    return request;
  });
  return instance;
};


const configuredAxios = configureAxios();

export default configuredAxios;
