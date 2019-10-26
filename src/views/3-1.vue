<template>
  <div class="home">
  </div>
</template>

<script>
// axios 实例
// 后端接口地址有多个，并且超时时长不一样
import axios from 'axios'
export default {
  name: 'axios3-1',
  components: {
  },
  created () {
    let instance = axios.create({
      baseUrl: 'http://localhost:8080',
      timeout: 1000 // 超时时长，接口超时，报401。客户端发起 http 请求后，如果服务端长时间没有返回数据，这时接口就会报超时，401。具体超时时长由后端定义。
    })
    let axios2 = axios.create({
      baseUrl: 'http://localhost:9090',
      timeout: 5000 
    })
    instance.get('/data.json').then((res) => {
      console.log(res)
    })
    axios2.get('/data.json').then((res) => {
      console.log(res)
    })
  }
}
</script>
