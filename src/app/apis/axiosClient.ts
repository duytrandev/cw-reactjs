import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export const axiosClient = axios.create({
    // baseURL: 'https://6544c1325a0b4b04436ce94a.mockapi.io/',
    baseURL: 'http://localhost:3000/api',
    headers:{
        'Content-Type':'application/json',
    }
})

// Add a request interceptor
axiosClient.interceptors.request.use(function (config: InternalAxiosRequestConfig) {
    // Do something before request is sent
    const isAuthPath = config.url?.includes('/auth')
    if(!isAuthPath){
      const token = localStorage.getItem('access_token')
      if(token){
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// const config: AxiosRequestConfig = {}
// axiosClient(config);

// Add a response interceptor
axiosClient.interceptors.response.use(function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });