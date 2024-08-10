import { get, post, del } from "../axios";
import { BASE_URL, SERVICE, VERSION } from "../constant";

const prefix_url: string = BASE_URL + SERVICE.upload + VERSION; // 请求前缀
const suffix_url = {
    uploadImg: '/image',
}

export const uploadAPI = {
    uploadImg(param: any) {
        return post(prefix_url + suffix_url.uploadImg, param)
    }
}