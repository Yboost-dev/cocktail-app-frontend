import config from '../config';
import httpClient from '../httpClient';
import Cookies from 'js-cookie';

export const getUser = async (userId) => {
    try {
        const token = Cookies.get('__session');
        if (!token) {
            throw new Error("Utilisateur non connecté.");
        }

        const response = await httpClient.get(`${config.apiUrl}/user/${userId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        return response.data;
    } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur:', error);
        return null;
    }
};
