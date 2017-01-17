import Axios from 'axios';
import Auth from './auth'

/**
 * Http client for performing ajax call to the API
 */
let http = Axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    // baseURL: process.env.API
});

/**
 * Add 'Authorization' header to the http request
 */
http.interceptors.request.use(config => {
    let AUTH_TOKEN = Auth.getToken();
    config.headers['Authorization'] = `JWT ${AUTH_TOKEN}`;
    return config
}, error => {
    return Promise.reject(error);
});

/**
 * Configure the baseURL
 *
 * baseURL will be prepended to url unless url is absolute
 *
 * TODO: append the trailing slash and make it append a different in case of production
 * @type {string}
 */
http.defaults.baseURL = process.env.API;

export default http;