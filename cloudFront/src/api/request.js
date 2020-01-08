import axios from 'axios'
// import Cookie from 'js-cookie'

let service;
console.log(process.env.NODE_ENV)
if(process.env.NODE_ENV==='development'){
  service = axios.create({
    baseURL:'http://localhost:3000',
    timeout: 5000 // 请求超时时间
  })
}else{
  service = axios.create({
    url_base:'https://www.yuedong-tech.com',
    baseURL:'https://www.yuedong-tech.com/yd-hub-api/v1',
    img_url:'https://www.yuedong-tech.com/yd-hub-api/file/uploadImg',
    timeout: 5000 // 请求超时时间
  })
}


// request拦截器
service.interceptors.request.use(config => {
//   config.headers['access_token'] = Cookie.get('token') // 让每个请求携带自定义token 请根据实际情况自行修改
  // config.headers['session_key'] = getToken()
  return config
}, error => {
  // Do something with request error
  console.log(error) // for debug
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
  /**
  * code为非20000是抛错 可结合自己业务进行修改
  */
    const res = response.data
    console.log(res)
    if (res.code !== 200) {
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default service