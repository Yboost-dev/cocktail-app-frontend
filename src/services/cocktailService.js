import { get, post } from './api';
import config from './config';

export const getCocktails = async () => {
    return await get(`${config.apiUrl}/cocktails`);
};

export const getCocktailById = async (id) => {
    return await get(`${config.apiUrl}/cocktails/${id}`);
};

export const addCocktail = async (cocktailData) => {
    return await post(`${config.apiUrl}/cocktails`, cocktailData);
};

// Autres méthodes pour update, delete, etc.
