<template>
  <div class="home">
  </div>
</template>

<script>
// axios 配置参数有哪些
import axios from 'axios'
export default {
  name: 'axios3-2',
  components: {
  },
  created () {
    // 创建 axios 实例
    axios.create({
      baseURL: 'http://localhost:8080', // 请求的域名，基本地址
      timeout: 1000, // 请求超时时长（ms） 请求接口，如果数据量比较大，后端处理时间比较长，一旦超过这个时间，后端返回401超时。为什么这么做？因为一旦请求时间比较长，就会阻塞后端内容，给后端服务器造成压力，这时需要及时释放不需要的内容（超时内容）。除后端设置外，前端也需要设置，如超时请求取消。
      url: '/data.json', // 请求路径
      method: 'get, post, put, patch, delete', // 请求方法
      headers: { // 请求头
        token: '', // 用于登录鉴权
      },
      params: {}, // 请求参数拼接在 url 上
      data: {}, // 请求参数放在 请求体 上
    }),
    // 哪些地方可以进行参数配置
    // 1. axios 全局配置
    axios.defaults.timeout = 1000
    axios.defaults.baseURL = 'http://localhost:8080'
    // 2. axios 实例配置
    let instance = axios.create('配置参数')
    let instance = axios.create()
    instance.defaults.timeout = 3000
    // 3. axios 请求配置
    axios.get('/data.json')
    instance.get('/data.json', {
      timeout: 5000
    })
    // 优先级 3>2>1
  }
}
</script>
