import { post } from "../axios";
import { BASE_URL, SERVICE, VERSION } from "../constant";

const prefix_url: string = BASE_URL + SERVICE.auth + VERSION; // 请求前缀
const suffix_url = {
    login: '/login',
    register: '/register',
}

export const authAPI = {
    login(param: any) {
        return post(prefix_url + suffix_url.login, param)
    },
    register(param: any) {
        return post(prefix_url + suffix_url.register, param)
    },
}