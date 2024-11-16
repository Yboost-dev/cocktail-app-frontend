import httpClient from './httpClient';

export const get = (url, options) => httpClient.get(url, options);
export const post = (url, data, options) => httpClient.post(url, data, options);
export const put = (url, data, options) => httpClient.put(url, data, options);
export const del = (url, options) => httpClient.delete(url, options);
