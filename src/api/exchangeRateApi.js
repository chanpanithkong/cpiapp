import axiosClient from './axiosClient';

const exchangeRateApi = {
  getAll: (params) => {
    const url = '/userslist';
    return axiosClient.get(url, { params });
  },
  get: (params) => {
    const url = '/categorieslist';
    return axiosClient.get(url, { params });
  },
  login: (data) => {
    const url = '/userlogin';
    return axiosClient.post(url, { data });
  }
};
export default exchangeRateApi;
