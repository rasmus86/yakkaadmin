import axios, {
    AxiosError,
    AxiosResponse,
    InternalAxiosRequestConfig,
} from 'axios';
import {useAuth} from '@/composables/useAuth';

export const requestInterceptorToken = (config: InternalAxiosRequestConfig) => {
    const {accessToken} = useAuth();
    const localConfig = {...config};
    localConfig.headers['Content-Type'] = 'application/json;charset=UTF-8';
    localConfig.headers['X-Requested-With'] = 'XMLHttpRequest';
    localConfig.headers['Access-Control-Allow-Origin'] = '*';
    if (accessToken) {
        localConfig.headers.Authorization = `Bearer ${accessToken}`;
    }
    return localConfig;
};

// Create an axios instance
const api = axios.create({
    baseURL: import.meta.env.VITE_APP_BACKEND_URL,
});

api.interceptors.request.use(requestInterceptorToken);

// Request Interceptors
api.interceptors.request.use(
    async (request: InternalAxiosRequestConfig) => request,
);

// Response Interceptors
api.interceptors.response.use(
    async (response: AxiosResponse) => response,
    async (error: AxiosError) => Promise.reject(error),
);

export {api};
