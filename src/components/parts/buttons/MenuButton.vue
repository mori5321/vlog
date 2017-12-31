<template>
  <div id="submit" v-on:click="addFeed">Submit</div>
</template>

<script>

import axios from "axios"

export default {
  name: 'MenuButton',
  props: ['input'],
  methods: {
    addFeed(e) {
      let _this = this;

      axios.post("http://localhost:3000/feeds",
        {
          feed: {
            text: this.input
          }
        }
      ).then(function(res) {
        _this.$router.push({ path: "/"})
      })
      e.preventDefault();
    }
  }
}
</script>

<style src="./button.css"></style>
<style>
  #submit {
    bottom: 80px;
    right: 30px;
  }
</style>