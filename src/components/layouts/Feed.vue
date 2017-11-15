<template>
  <div id="feed">
    <div id="markdown-display" v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
;(function() {
  var renderer = new marked.Renderer()
  renderer.code = function(code, language) {
    return '<pre'+'><code class="hljs">' + hljs.highlightAuto(code).value + '</code></pre>';
    // 参考サイト: http://phiary.me/marked-js-highlight-js, https://qiita.com/59naga/items/7d46155715416561aa60
   };

  marked.setOptions({
    renderer: renderer,
  });
})();

import axios from 'axios'
export default {
  name: 'Markdown',
  data () {
    return {
      feed: ""
    }
  },
  created() {
    axios.get('http://localhost:3000/feeds/' + this.$route.params.id)
    .then(response => {
      this.feed = response.data.text
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.feed, { sanitize: true })
    }
  }
}
</script>

<style scoped>
#feed {
  padding: 20px 80px;
  text-align: left;
}
</style>