// 添加请求拦截器
import axios from "axios";
import {getLocalStorage} from "@/utils/utils";

const serve = new axios.create({
    timeout: 1000 * 30
})
serve.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.baseURL = "http://192.168.107:80"
    let token = getLocalStorage("token")
    config.headers.token = (token && token.value) || '';
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
serve.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;

}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    alert("服务器出问题了")
    return error
});

export default serve