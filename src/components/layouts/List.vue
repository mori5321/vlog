<template>
  <transition name="fade">
    <div>
      <div class="main-title">
        <h1>Diary</h1>
        <p>This is just a diary of Daisuke</p>
      </div>
      <div v-for="feed in feeds">
        <router-link :to="'/feed/'+feed.id">
          <div class="container">
            <p class="title">{{ feed.title }}</p>
            <p class="date">{{ feed.created_at }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </transition>
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
  },
  methods: {

  }
}
</script>

<style scoped>

.main-title {
  margin: 0 0 70px;
}

.container {
  position: relative;
  height: 65px;
  width: 80vw;
  margin: 25px auto;
  padding-left: 8px;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
  box-shadow: 0 1px 2px rgba(0,0,0,0.26);
  cursor: pointer;
  top: 0;
  left: 0;
}

.container:hover {
  background-color: #ECF4FF;
  box-shadow: 0 3px 5px rgba(0,0,0,0.26);
  top: -3px;
  left: -3px;
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

.fade-enter-active {
  transition: all 0.5s
}

.fade-enter {
  opacity: 0;
  position: relative;
  top: 30px;
}


</style>