import { get, post } from "../axios";
import { BASE_URL, SERVICE, VERSION } from "../constant";

const prefix_url: string = BASE_URL + SERVICE.user + VERSION; // 请求前缀
const suffix_url = {
    getAll: '',
}

export const userAPI = {
    getAll() {
        return get(prefix_url + suffix_url.getAll)
    },
}