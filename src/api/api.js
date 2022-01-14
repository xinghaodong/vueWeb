import axios from 'axios'
//import QS from "qs"

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL, //请求地址
    timeout: 50000
})
const baseUrl = process.env.VUE_APP_BASE_URL
const ROOT_PATH  = "https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples" //折线图
console.log(baseUrl, '当前环境','mock.apipost.cn为开发环境')
// request 拦截器
// 可以自请求发送前对请求做一些处理
// 比如统一加token，对请求参数统一加密
const token = localStorage.getItem('userToken') == null ? null : localStorage.getItem('userToken');
request.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json;charset=utf-8';
    config.headers['token'] = token; // 设置请求头
    // config.params.token = token;
    return config
}, error => {
    return Promise.reject(error)
});

// response 响应拦截器
// 可以在接口响应后统一处理结果
request.interceptors.response.use(
    response => {
        // 对响应数据做点什么，比如
        if (response.code == 404) {
            //做些什么 跳转到404页面 等等
        }
        let res = response.data;
        // 如果是返回的文件
        if (response.config.responseType === 'blob') {
            return res
        }
        // 兼容服务端返回的字符串数据
        if (typeof res === 'string') {
            res = res ? JSON.parse(res) : res
        }
        return res;
    },
    error => {
        console.log('err' + error) // for debug
        return Promise.reject(error)
    }
)
/** 
 * get方法，对应get请求 
 * @param {String} url 请求的url地址 
 * @param {Object} params 请求时携带的参数
 */
export const oGet = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url 请求的url地址
 * @param {Object} params 请求时携带的参数
 */
export const oPost = (url, params) => {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
//接口方法 地址
export default {
    //登录
    login(params) { return oPost(baseUrl + "/login", params) },
    //用户管理列表
    userList(params) { return oGet(baseUrl + '/app/mock/project/5e884b31-5ab0-474f-ad4a-ee0304ba4f3c/json', params) },
    //获取首页折线图
    getline(params) { return oGet(ROOT_PATH +'/data/asset/data/life-expectancy-table.json', params) }
}