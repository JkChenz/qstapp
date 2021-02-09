import Request from 'luch-request' // 使用npm
import {webconfig} from './webconfig'
import {Base64} from 'js-base64';

const http = new Request();

http.setConfig((config) => { /* config 为默认全局配置*/
    config = webconfig
    return config
})

http.interceptors.request.use((config) => { // 可使用async await 做异步操作
  config.header['Blade-Auth'] = `Basic ${Base64.encode(`${webconfig.clientId}:${webconfig.clientSecret}`)}`;
  // if(getToken().token)
  // {
	 //  config.headers['Blade-Auth'] = 'bearer ' + getToken().token
  // }
  return config
}, error => { 
  return Promise.reject(error)
})

http.interceptors.response.use((res) => { /* 对响应成功做点什么 可使用async await 做异步操作*/
  //获取状态码
  const status = res.data.code || res.statusCode;
  const statusWhiteList = webconfig.statusWhiteList || [];
  const message = res.data.msg || res.data.error_description || '未知错误';
  //如果在白名单里则自行catch逻辑处理
  if (statusWhiteList.includes(status)) return Promise.reject(res);
  
  if (status === 401) uni.reLaunch({url: 'login'});
  // 如果请求为非200否者默认统一处理
  if (status !== 200) {
    uni.showToast({
        title: message,
        icon: "none"
    })
    return Promise.reject(new Error(message))
  }
  return res;
}, (error) => { /*  对响应错误做点什么 （statusCode !== 200）*/
  uni.showToast({
      title: "请检查网络",
      icon: "none"
  })
  return Promise.reject(error)
})
export const get = http.get
export const post = http.post
export default http

