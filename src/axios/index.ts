import axios, { AxiosInstance } from 'axios';

const baseURL = 'https://dummyjson.com/carts';

const axiosInstance: AxiosInstance = axios.create({
    baseURL,
});

export default axiosInstance;