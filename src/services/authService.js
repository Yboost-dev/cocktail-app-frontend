import config from './config';
import httpClient from "./httpClient";
import Cookies from 'js-cookie';

export const Login = async (credentials) => {
    try {
        const response = await httpClient.post(`${config.apiUrl}/auth/login`, credentials);

        if (response.data.error) {
            throw new Error(response.data.message)
        }

        const token = response.data.access_token;

        if (token) {
            Cookies.set('__session', token, {
                expires: 30,
                secure: true,
                sameSite: 'Strict',
            });
        }

        return response.data;
    } catch (error) {
        if (error.response || error.message) {
            throw new Error(error.message);
        } else {
            throw new Error('Erreur réseau ou serveur');
        }
    }
};

export const register = async (userData) => {
    try {
        const response = await httpClient.post(`${config.apiUrl}/auth/register`, userData);
        if (response.data.error) {
            throw new Error(response.data.message)
        }
        return response.data;
    } catch (error) {
        if (error.response || error.message) {
            throw new Error(error.message);
        } else {
            throw new Error('Erreur réseau ou serveur');
        }
    }
};
