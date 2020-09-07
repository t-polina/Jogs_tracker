import axios from 'axios';

axios.interceptors.request.use(function (config) {
    const token = localStorage.getItem('token');
    if (token) { config.headers['Authorization'] = 'Bearer ' + token; }
    return config;
}, function (error) {
    return Promise.reject(error);
});
const requestWithHeaders = axios;
export default requestWithHeaders;