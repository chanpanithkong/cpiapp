import axiosClient from './axiosClient';

const exchangeRateApi = {
  getAll: (params) => {
    const url = '/products';
    return axiosClient.get(url, { params });
  }
};
export default exchangeRateApi;
