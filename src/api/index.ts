import axios from "axios";
import { getAccessToken, clearAuth } from "../utils/token";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {

        const token = getAccessToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response.data,
    (error) => {

        if (error.response?.status === 401) {

            clearAuth();

            window.location.href = "/sign-in";
        }

        return Promise.reject(error);
    }
);

const api = {
    get: <T>(url: string, config?: any) =>
        instance.get<any, T>(url, config),

    post: <T>(url: string, data?: any, config?: any) =>
        instance.post<any, T>(url, data, config),

    put: <T>(url: string, data?: any, config?: any) =>
        instance.put<any, T>(url, data, config),

    patch: <T>(url: string, data?: any, config?: any) =>
        instance.patch<any, T>(url, data, config),

    delete: <T>(url: string, config?: any) =>
        instance.delete<any, T>(url, config),
};

export default api;
