<template>
  <div class="home">
  </div>
</template>

<script>
// 错误处理：请求错误时进行的处理
import axios from 'axios'
export default {
  name: 'axios3-5',
  components: {
  },
  created () {
    // 请求拦截器
    axios.interceptors.request.use(
      config => {
        return config
      }, err => {
        return Promise.reject(err)
        // 常见错误：401请求超时，404接口未找到
      }
    )
    // 响应拦截器
    axios.interceptors.response.use(
      err => {
        return err
      }, err => {
        return Promise.reject(err)
      }
    )
    axios.get('/data.json').then(res => {
      console.log(res)
    }).catch(err => {
      // 错误都会到这里
      console.log(err)
    })
    // 上面代码中，有一个接口报错，就会 catch ，多个会多次 catch，很乱
    // 例子：在实际开发过程中，一般会添加统一的错误处理
    // 请求拦截器
    let instance = axios.create({})
    instance.interceptors.request.use(
      config => {
        return config
      }, err => {
        // 请求错误 一般 http 状态码以 4 开头
        // 常见：401 超时，404 not found
        $('#modal').show()
        setTimeOut(()=> {
          $('#modal').hide()
        }, 2000)
        return Promise.reject(err)
      }
    )
    // 响应拦截器
    instance.interceptors.response.use(
      res => {
        return res
      }, err => {
        // 响应错误处理 一般 http 状态码以 5 开头
        // 常见： 500 系统错误，502 系统重启
        $('#modal').show()
        setTimeOut(()=> {
          $('#modal').hide()
        }, 2000)
        return Promise.reject(err)
      }
    )
    instance.get('/data.json'),then(res => {
      console.log(res)
    }).catch(err => { // 如果只需要弹窗，不需要写 catch，还有其他处理可写到 catch 里
      console.log(err)
    })
  }
}
</script>
