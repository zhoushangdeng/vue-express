import axios from "axios";
import { getToken } from '@/util/auth'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
const service = axios.create({
    baseURL: '/api',
    withCredentials: false,
    timeout: 10000 // request timeout
});
// 发起请求之前的拦截器

service.interceptors.request.use(
    config => {
        NProgress.start()
        config.headers['Authorization'] = getToken().token || '';
        config.headers['id'] = getToken().id || '';
        return config;
    },
    error => {
        Promise.reject(error);
    }
);
// 响应拦截器
service.interceptors.response.use(
    (response: any) => {
        const res = response.data;
        NProgress.done();
        if (response.status !== 200) {
            return Promise.reject(new Error(res.message || "Error"));
        } else {
            return res;
        }
    },
    error => {
        return Promise.reject(error);
    }
);
export default service;