import axios from 'axios';
//import * as queryString from 'querystring';
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_EXCHANGE_RATE,
  headers: {
    'Access-Control-Allow-Origin': '*',
    //media type for api xml or json
    'content-type': 'application/xml',
    Accept: 'application/xml'
  }
  //paramsSerializer: (params) => queryString.stringify(params)
});
axiosClient.interceptors.request.use(async (config) => {
  // Handle token here ...
  return config;
});
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);
export default axiosClient;
