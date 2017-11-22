<template>
  <transition name="fade">
    <div>
      <div class="main-title">
        <h1>Diary</h1>
        <p>written by Singing JavaScript Engineer</p>
      </div>
      <div v-for="feed in feeds">
        <router-link :to="'/feed/'+feed.id">
          <FeedPanel :feed="feed"></FeedPanel>
        </router-link>
      </div>
    </div>
  </transition>
</template>

<script>
import axios from 'axios'
import FeedPanel from './FeedPanel'

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

  },
  components: {
    FeedPanel
  }
}
</script>

<style scoped>

.main-title {
  margin: 0 0 70px;
}

.fade-enter-active {
  transition: all 0.5s
}

.fade-enter {
  opacity: 0;
}

.fade-leave {
  opacity: 0;
}


</style>