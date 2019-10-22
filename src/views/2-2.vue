<template>
  <div></div>
</template>

<script>
/**
 * axios请求方法: get, post, put, patch, delete
 * get: 获取数据
 * post: 提交数据（表单提交 + 文件上传）
 * put: 更新数据（将所有数据推送到后端）
 * patch: 更新数据（只将修改的数据推送到后端）
 * delete: 删除数据
 */

import axios from 'axios'

export default {
  name: 'axios2-2',
  components: {
  },
  created () {
    // get 请求（别名方法）
    axios.get('/data.json', {
      params: { // 传参，参数是个对象，使用 params 接收传递的参数
        id: 12 // 实际请求路径为 http://localhost:8080/data.json?id=12
      }
    }).then((res) => {
      console.log(res)
    })
    // console.log(axios.get('/data.json')) // 返回的是 Promise
    // get 方法另一种写法
    axios({ // axios config配置
      method: 'get',
      url: '/data.json', // 相对路径
      params: {
        id: 12
      }
    }).then(res => {
      console.log(res)
    })
    // post data 格式两种，一种 form-data，一种 application/json
    // form-data 表单提交，图片上传，文件上传
    // application/json
    let data = {
      id: 12
    }
    // post/put/patch 别名方法中，有三种参数，url，data，config
    // post 请求 （别名方法）
    axios.post('/post', data).then((res) => {
      console.log(res)
    })
    // post 方法另一种写法
    axios({
      method: 'post',
      url: '/post',
      data: data
    }).then(res => {
      console.log(res)
    })
    // form-data请求
    let formData = new formData()
    for (let key in data) {
      formData.append(key, data[key])
    }
    axios.post('/post', formData).then((res) => {
      console.log(res)
    })
    // put 请求 （别名方法）
    axios.put('/put', data).then((res) => {
      console.log(res)
    })
    // patch 请求 （别名方法）
    axios.patch('/patch', data).then((res) => {
      console.log(res)
    })
    // delete 请求 （别名方法）
    // delete data参数有时放在 url 内，有时放在请求体内
    // delete 有两个参数，url 和 config
    // 第一种情况，url 上拼接参数
    axios.delete('/delete', {
      params: { // url 上的参数叫 query string
        id: 12
      }
    }).then((res) => {
      console.log(res)
    })
        // 第二种情况，请求体上拼接参数
    axios.delete('/delete', {
      data: { // 请求体上的参数叫 pay load
        id: 12
      }
    }).then((res) => {
      console.log(res)
    })
    // delete 请求另一种写法
    axios({
      method: 'delete',
      url: '/delete',
      params: {
        id: 12
      },
      data: {
        id: 12
      }
    }).then((res) => {
      console.log(res)
    })
  }
}
</script>
