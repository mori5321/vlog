<template>
  <div id="submit" v-on:click="addFeed">Submit</div>
</template>

<script>

import axios from "axios"
import Api from '@/services/Api'

export default {
  name: 'SubmitButton',
  props: ['input'],
  methods: {
    addFeed(e) {
      let _this = this;

      // ここの挙動マジ謎
      let params = new URLSearchParams();
      params.append('text', this.input)

      Api().post('/feeds',
        params,
        { headers: { "Authorization": "Token " + this.$store.getters.token } }
      ).then(function(res) {
        console.log(res)
        _this.$router.push({ path: "/" })
      }).catch(function(err) {
        console.log(err)
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