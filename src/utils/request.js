import axios from 'axios';
import storage_service from '@/service/storage_service';

const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL,
    timeout: 1000 * 5,
});

instance.interceptors.request.use(function(config) {
    Object.assign(config.headers, { Authorization : `Bearer:${storage_service.get(storage_service.USER_TOKEN)}` })
    return config
}, (err) => {
    return Promise.reject(err)
});

export default instance;
