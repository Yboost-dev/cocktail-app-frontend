import axios from 'axios';
import config from './config';

const httpClient = axios.create({
    baseURL: config.apiUrl,
    timeout: 10000,
    headers: { 'Content-Type': 'application/json' }
});

// Intercepteur de requête pour ajouter un token d'authentification
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

// Gestion des erreurs globales
httpClient.interceptors.response.use(
    (response) => response,
    (error) => {
        // Vérification du code d'erreur spécifique
        if (error.response) {
            const status = error.response.status;
            const message = error.response.data?.message || 'Une erreur est survenue';

            // Exemple de gestion d'erreur pour les statuts 401 (Non autorisé)
            if (status === 401) {
                // Redirection vers la page de connexion si l'utilisateur n'est pas authentifié
                window.location.href = '/login';
            } else if (status === 500) {
                console.error('Erreur serveur :', message);
            }

            if (status === 400) {
                console.error('Erreur de validation:', message);
            }

            return Promise.reject({ message, status });
        }

        // Erreur réseau ou autre problème
        return Promise.reject({ message: 'Problème de réseau ou serveur injoignable' });
    }
);

export default httpClient;
