<template>
  <div id="submit" v-on:click="addFeed">Submit</div>
</template>

<script>

import axios from "axios"

export default {
  name: 'SubmitButton',
  props: ['input'],
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    addFeed(e) {
      let _this = this;
      console.log(this);

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


<style scoped>
  #submit {
    position: fixed;
    bottom: 20px;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100px;
    text-align: center;
    box-shadow: 0 2px 5px rgba(0,0,0,0.26);
    height: 40px;
    cursor: pointer;
    color: #fff;
    background: #706D7F;
    border: 1px solid transparent;
    transition: all .3s;
  }

  #submit:hover {
    background: #fff;
    color: #706D7F;
    border: 1px solid #D1D9E5;
  }
</style>