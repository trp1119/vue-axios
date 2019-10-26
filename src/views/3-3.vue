<template>
  <div class="home">
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'axios3-3',
  components: {
  },
  created () {
    // 实际开发
    // 情景：有两种请求接口（两种后端服务） http://localhost:9090 http://localhost:9091
    let instance = axios.create({
      baseURL: 'http://localhost:9090',
      timeout: 1000
    })
    let instance1 = axios.create({
      baseURL: 'http://localhost:9091',
      timeout: 3000
    })
    // instance 使用的配置：baseUrl, timeout, url, method, params
    instance.get('/contact.list', {
      params: {}
    }).then((res) => {
      console.log(res)
    })
    // instance1 使用的配置：baseUrl, timeout: 5000, url, method, params
    instance1.get('/contact.list', {
      timeout: 5000,
      params: {}
    }).then((res) => {
      console.log(res)
    })
  }
}
</script>
