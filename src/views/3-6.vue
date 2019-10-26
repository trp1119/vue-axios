<template>
  <div class="home">
  </div>
</template>

<script>
// 取消请求：用于取消正在进行的 http 请求
import axios from 'axios'
export default {
  name: 'axios3-6',
  components: {
  },
  created () {
    let source = axios.CancelToken.source() // 生成一个 source 对象， source 对象中有 用于取消请求的 CancelToken
    axios.get('/data.json', {
      // 在 config 请求参数中配置 cancelToken
      cancelToken: source.token
    }).then(res => {
      console.log(res)
    }).catch(err => {
      // 取消请求后，请求进入 catch 中
      console.log(err)
    })
    // 发起取消请求（message 可选）
    source.cancel('cancel http') // message 'cancel http' 非必填，会进入上方 catch 中
    
    // 什么情况下可能遇到取消请求
    // 上一个请求数据量非常大，长时间未返回，用户不想请求了，点击取消请求
  }
}
</script>
