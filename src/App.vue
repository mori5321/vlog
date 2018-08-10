<template>
  <div id="app">
    <MainHeader></MainHeader>
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
  font-family: 'Helvetica Neue';
  font-weight: 200;
  /*font-family: PingFang SC Hiragino Sans GB, Microsoft YaHei, Arial,sans-serif;;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;*/
  text-align: center;
}

#content {
  padding: 100px 0px 60px;
}

a {
  text-decoration: none;
  color: #706D7F;
}

</style>
