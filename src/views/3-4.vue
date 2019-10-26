<template>
  <div class="home">
  </div>
</template>

<script>
// 拦截器：在请求或相应被处理前拦截
// 请求拦截器 / 响应拦截器
import axios from 'axios'
export default {
  name: 'axios3-4',
  components: {
  },
  created () {
    // 请求拦截器
    // use 有两个参数，请求前的回调函数和请求错误的回调函数
    axios.interceptors.request.use(
      config => {
        // 在发送请求前做些什么
        return config
      }, err => {
        // 在请求错误的时候做些什么
        return Promimse.reject(err)
      }
    ),
    // 响应拦截器
    // use 有两个参数，请求成功的回调函数和响应错误的回调函数
    axios.interceptors.response.use(
      res => {
        // 请求成功对响应数据处理
        return res
        // axios.get('/').then(res => {
        //   // 请求成功，响应拦截器返回的 res 即 .then 中的 res
        // })
      }, err => {
        // 在响应错误的时候做些什么
        return Promimse.reject(err)
        // axios.get('/').then().catch(err => {
        //   // 请求成功，响应拦截器返回的 err 即 .then 中的 err
        // })
      }
    )
    // 取消拦截器
    let interceptors = axios.interceptors.request.use(
      config => {
        config.headers = {
          auth: true
        }
        return config
      }
    )
    axios.interceptors.request.eject(interceptors) // 取消 interceptors
    // 例子 访问需要登录的接口
    let instance = axios.create({})
    instance.interceptors.request.use(
      config => {
        config.headers.token = ''
        // config.headers = { // 不要采用这个方式，因为 headers 中有很多内容，采用对象这种方式会导致只剩 token
        //   token: ''
        // }
        return config
      }
    )
    // 例子 访问不需要登录的接口
    let instance = axios.create({})
    // 移动开发 等待样式
    let instance_phone = axios.create({})
    instance_phone.interceptors.request.use(config => {
      $('#module').show()
      return config
    })
    instance_phone.interceptors.response.use(res => {
      $('#module').hide()
      return res
    })
  }
}
</script>
