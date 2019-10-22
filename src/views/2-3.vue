<template>
  <div class="home">
  </div>
</template>

<script>
// 并发请求：同时进行多个请求，并统一处理返回值
import axios from 'axios'

export default {
  name: 'axios2-3',
  components: {
  },
  created () {
    // axios.all() axios.spread()
    // axiso.all() 参数为数组，数组中每一项为一个请求，axios.spread() 为在 axiso.all() 多个请求完成时，对返回数据进行分割处理
    // 正常单个请求 .then 参数是 res，但并发请求 .then 参数是 axios.spread() 方法
    axios.all(
      [ // 请求顺序按书写顺序
        axios.get('./data.json'),
        axios.get('./city.json')
      ]
    ).then(
      // axios.spread() 方法参数是回调函数，回调函数的参数是上面请求的对应返回值
      axios.spread((dataRes, cityRes) => {
        console.log(dataRes, cityRes)
      })
    )
  }
}
</script>
