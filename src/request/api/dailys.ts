import { get, post, del } from "../axios";
import { BASE_URL, SERVICE, VERSION } from "../constant";

const prefix_url: string = BASE_URL + SERVICE.daily + VERSION; // 请求前缀
const suffix_url = {
    list: '/list',
    detail: '/detail',
    add: '/add',
    update: '/update',
    del: '/del',
}

export const dailyAPI = {
    list() {
        return get(prefix_url + suffix_url.list)
    },
    detail(param: any) {
        return get(prefix_url + suffix_url.detail, param)
    },
    add(param: any) {
        return post(prefix_url + suffix_url.add, param)
    },
    update(param: any) {
        return post(prefix_url + suffix_url.update, param)
    },
    del(param: any) {
        return del(prefix_url + suffix_url.del, param)
    },
}