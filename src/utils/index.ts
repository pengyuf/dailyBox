import { showNotify } from "vant";

/**
 * @description 获取token
 */
export function getToken() {
    const sysToken: string = window.localStorage.getItem('sysToken') || ''
    return sysToken
}


/**
 * 
 * @description 判断接口是否成功
 * @param {*} data 请求返回的数据
 */
export function checkRequest(data: any) {
    if (data.status == '0000' || data.status == 200 || data.status == '200' || data.success) {
        return true;
    }
    return false;
}


/**
 * 
 * @param {*} res 请求返回的数据
 * @param {*} explain 自定义错误说明
 */
export function errorToast(res: any, explain?: string) {
    showNotify({ type: 'danger', message: `${res.message || res.msg || explain || '失败'}` });
}