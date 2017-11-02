<template>
  <div id="app">
    <MainHeader></MainHeader>
    <div id="content">
      <h1>V-log</h1>
      <p>This is a blog service built in Vue.js</p>
      <p>Created by Nishimori.Daisuke</p>
      <!-- <el-date-picker v-model="datetime" type="date" placeholder="日時を選択してください。"></el-date-picker> -->
    </div>
    <Markdown></Markdown>
  </div>
</template>

<script>
import MainHeader from "./components/global/Header/Header"
import Markdown from "./components/Markdown/Markdown"

export default {
  name: 'app',
  data () {
    return {
      datetime: ''
    }
  },
  components: {
    MainHeader,
    Markdown
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#content {
  color: white;
  padding: 30px 0px;
  background-image: url("http://free-photos-ls02.gatag.net/images/lgf01a201401241800.jpg");
  opacity: 10;
}
</style>
