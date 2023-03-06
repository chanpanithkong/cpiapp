import axiosClient from './axiosClient';

const exchangeRateApi = {
  getAll: (params) => {
    const url = '/';
    return axiosClient.get(url, { params });
  }
};
export default exchangeRateApi;
