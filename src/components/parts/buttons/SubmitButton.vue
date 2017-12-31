<template>
  <div id="submit" v-on:click="addFeed">Submit</div>
</template>

<script>

import axios from "axios"

export default {
  name: 'SubmitButton',
  props: ['input'],
  methods: {
    addFeed(e) {
      let _this = this;

      // ここの挙動マジ謎
      let params = new URLSearchParams();
      params.append('text', this.input)

      axios({
        method: 'post',
        url: 'http://localhost:3000/feeds',
        data: params
      }).then(function(res) {
        _this.$router.push({ path: "/" })
      }).catch(function(err) {
        console.log(err);
      })

      e.preventDefault();
    }
  }
}
</script>

<style src="./button.css"></style>
<style scoped>

</style>