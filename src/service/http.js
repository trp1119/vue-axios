import axios from 'axios'
import service from './contactApi'

// service 循环遍历输出不同的请求方法
let instance = axios.create({
  baseURL: 'http://localhost:9000/api',
  timeout: 1000
})
const Http = {} // 包裹请求方法的容器

// 请求格式/参数的统一
for(let key in service) {
  let api = service[key] // url method
  // 回调地狱
  // axios.get().then(res => {
  //   axios.get().then(res => {
  //      axios.get().then(res => {
  //        回调地狱
  //     }).catch(err => {})
  //   }).catch(err => {})
  // }).catch(err => {})
  // async 作用：避免进入回调地狱
  // let res = await axios.get('url')
  // let res2 = await axios.get('url')
  // let res = null
  // try {
  //   res = await axios.get('url')
  //   res2 = await axios.get('url')
  // }catch(err) {
  //   res = err
  // }
  Http[key] = async function (
    params, // 请求参数（get / delete 用） get -> url / put, post, patch -> data / delete -> url
    isFormData=false, // 标识是否是 form-data 请求
    config={}// 请求参数（put / post / patch 用）
  ) {
    let url = api.url
    let newParams = {}
    // content-type 是否是 form-data 的判断
    if (params && isFormData) {
      newParams = new FormData()
      for (let key in params) {
        newParams.append(key, params[key])
      }
    }else {
      newParams = params
    }
    // 不同请求的判断
    let response = {} // 请求的返回值
    if(api.method === 'put' || api.method === 'post' || api.method === 'patch') {
      try {
        response = await instance[api.method](api.url, newParams)
      }catch(err) {
        response = err
      }
    }else if(api.method === 'delete' || api.method === 'get') {
      config.params = newParams
      try {
        response = await instance[api.method](api.url, config)
      }catch(err) {
        response = err
      }
    }
    return response // 返回响应值
  }
}