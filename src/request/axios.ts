import { getToken } from '@/utils';
import axios from 'axios';
import qs from 'qs';
import { showDialog, showNotify } from 'vant';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

const axiosInstance = axios.create({
    timeout: 1000 * 5
})

// 请求拦截器
axiosInstance.interceptors.request.use(
    config => {
        let token = getToken(); //　获取token
        if (token) {
            config.headers.Authorization = 'Basic:' + token;
        }
        // post方法对数据进行处理
        if (config.method == 'post' && !config.headers['Content-Type']) {
            if (Object.prototype.toString.call(config.data) !== '[object FormData]') {
                config.data = qs.stringify(config.data); //post 下对数据进行处理
            }
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    });

// 响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        if (response.status === 201 || response.status === 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况
    error => {
        if (typeof error.response == 'object' && error.response.status) {
            switch (error.response.status) {
                case 401:
                    showDialog({
                        message: '登录状态失效，请重新登录',
                        theme: 'round-button',
                        confirmButtonColor: '#1989fa'
                    }).then(() => {
                        // on close
                    });
                    break;
                case 403:
                    showNotify({ type: 'danger', message: '权限不足' });
                    break;
                case 404:
                    showNotify({ type: 'danger', message: '系统维护中' });
                    break;
                default:
            }
            return Promise.reject(error.response);
        } else {
            return Promise.reject(error);
        }
    }
);



export function get(url: string, params?: any): Promise<any> {
    return new Promise((resolve, reject) => {
        axiosInstance.get(url, {
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

export function post(url: string, params?: any, config?: any): Promise<any> {
    return new Promise((resolve, reject) => {
        axiosInstance.post(url, qs.stringify(params), config).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

export function postJson(url: string, params?: any, config?: any): Promise<any> {
    return new Promise((resolve, reject) => {
        axiosInstance.post(url, params, config).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err.data)
        })
    })
}

export function del(url: string, params?: any): Promise<any> {
    return new Promise((resolve, reject) => {
        axiosInstance.delete(url, {
            params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err)
        })
    });
}

export const getJSONHeader = () => {
    return {
        headers: {
            'Content-Type': 'application/json'
        }
    }
}