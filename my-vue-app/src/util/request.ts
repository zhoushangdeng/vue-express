import axios from "axios";
import { getToken } from '@/util/auth'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const service = axios.create({ baseURL: '/api', withCredentials: false, timeout: 10000 });

service.interceptors.request.use(
    config => {
        NProgress.start()
        config.headers['Authorization'] = getToken().token || '';
        config.headers['id'] = getToken().id || '';
        return config;
    },
    error => Promise.reject(error)
);

service.interceptors.response.use(
    (response: any) => {
        const res = response.data;
        NProgress.done();
        if (response.status !== 200) {
            return Promise.reject(new Error(res.message || "Error"));
        } return res
    },
    error => Promise.reject(error)
);
export default service;