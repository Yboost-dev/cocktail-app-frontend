import config from '../config';
import httpClient from '../httpClient';
import Cookies from 'js-cookie';

export const Login = async (credentials) => {
    try {
        const response = await httpClient.post(`${config.apiUrl}/auth/login`, credentials);

        if (response.data.error) {
            throw new Error(response.data.message);
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
            console.log('Erreur lors de la connexion :', error.message);
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
            throw new Error(response.data.message);
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

export const logout = () => {
    Cookies.remove('__session');
};

export const getUser = async () => {
    try {
        const token = Cookies.get('__session');
        if (!token) {
            return null;  // If no token, return null indicating user is not authenticated
        }

        // Make the API request with the Authorization header
        const response = await httpClient.get(`${config.apiUrl}/auth`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        // Return the user data from the API response
        return response.data;
    } catch (error) {
        // Log the error for better debugging
        console.error('Error fetching user data:', error);

        if (error.response && error.response.status === 401) {
            // Unauthorized - log the user out
            logout();
            return null;  // Return null to indicate no valid user
        } else {
            // Any other errors (e.g., network issues) should also return null
            return null;
        }
    }
};

