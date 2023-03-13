import axiosClient from './axiosClient';

const exchangeRateApi = {
  getAll: (params) => {
    const url = '/userslist';
    return axiosClient.get(url, { params });
  },
  get: (params) => {
    const url = '/categorieslist';
    return axiosClient.get(url, { params });
  }
};
export default exchangeRateApi;
