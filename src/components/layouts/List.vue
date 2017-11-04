<template>
  <div>
    <div v-for="feed in feeds">
      <div class="container">
        <p class="title">{{ feed.title }}</p>
        <p class="date">2017-11-01</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'List',
  data () {
    return {
      feeds: [],
      errors: []
    }
  },
  created() {
    axios.get('http://localhost:3000/feeds')
    .then(response => {
      this.feeds = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>

.container {
  position: relative;
  height: 65px;
  width: 80vw;
  margin: 25px auto;
  padding-left: 8px;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
  box-shadow: 0 2px 5px rgba(0,0,0,0.26);
  cursor: pointer;
}

.container:hover {
  background-color: #ECF4FF;
}

.title {
  margin: 0;
  font-size: 18px;
  height: 100%;
  width: 70%;
  display: flex;
  align-items: center; /* 縦方向 */
  justify-content: left; /* 横方向 */
}

.date {
  position: absolute;
  font-size: 14px;
  right: 20px;
  bottom: 5px;
  margin: 0;
  color: #A7A6BB;
}


</style>