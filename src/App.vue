<template>
  <div id="app">
    <MainHeader></MainHeader>
    <div id="title">
      <h1>V-log</h1>
      <p>This is a blog service built in Vue.js</p>
      <p>Created by Nishimori.Daisuke</p>
    </div>
    <div id="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MainHeader from "./components/global/Header/Header"
import Markdown from "./components/Markdown/Markdown"
import List from "./components/layouts/List"

export default {
  name: 'app',
  data () {
    return {
      datetime: ''
    }
  },
  components: {
    MainHeader,
    Markdown,
    List
  }
}
</script>

<style>
body {
  margin: 0;
  color: #706D7F;
}

#app {
  font-family: PingFang SC Hiragino Sans GB, Microsoft YaHei, Arial,sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

#title {
  color: #706D7F;
  padding: 30px 0px;
}

a {
  text-decoration: none;
  color: #706D7F;
}

</style>
