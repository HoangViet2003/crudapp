import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";


const ENDPOINT = "";


const axiosInstance: AxiosInstance = axios.create({
  baseURL: ENDPOINT,
});

axiosInstance.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const token: string | null = localStorage.getItem("access_token");

    if (!token) localStorage.removeItem("access_token");

    config.headers = {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : "",
    };

    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => Promise.reject(error)
);

export default axiosInstance;
