<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () {
    axios.get('/data.json').then((res) => {
      console.log(res)
    })
    // console.log(axios.get('/data.json')) // 返回的是 Promise
  }
}
</script>
