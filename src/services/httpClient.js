import axios from 'axios';
import config from './config';
import {logout} from "./auth/authService";

const httpClient = axios.create({
    baseURL: config.apiUrl,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

httpClient.interceptors.request.use(
    (request) => {
        const token = localStorage.getItem('token');
        if (token) {
            request.headers.Authorization = `Bearer ${token}`;
        }
        return request;
    },
    (error) => {
        return Promise.reject(error);
    }
);

httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response) {
            const status = error.response.status;
            const message = error.response.data?.message || 'Une erreur est survenue';

            if (status === 401) {
                logout();
            } else if (status === 500) {
                console.error('Erreur serveur :', message);
            }
            if (status === 400) {
                console.error('Erreur de validation:', message);
            }

            return Promise.reject({ message, status });
        }

        return Promise.reject({ message: 'Problème de réseau ou serveur injoignable' });
    }
);

export default httpClient;
