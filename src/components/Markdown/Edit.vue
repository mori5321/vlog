<template>
  <transition name="fade">
    <div id="editor">
      <textarea :value="input" @input="update"></textarea>
      <div id="markdown-display" v-html="compiledMarkdown"></div>
      <!-- <MenuButton></MenuButton> -->
      <UpdateButton :input="input"></UpdateButton>
    </div>
  </transition>
</template>

<script>
;(function() {
  var renderer = new marked.Renderer()
  renderer.code = function(code, language) {
    return '<pre'+'><code class="hljs">' + hljs.highlightAuto(code).value + '</code></pre>';
    // 参考サイト: http://phiary.me/marked-js-highlight-js, https://qiita.com/59naga/items/7d46155715416561aa60
   };

  marked.setOptions({
    breaks: true,
    renderer: renderer,
    table: true
  });
})();

import axios from "axios"
import UpdateButton from "@/components/parts/buttons/UpdateButton"
import MenuButton from "@/components/parts/buttons/MenuButton"
import Api from '@/services/Api'

export default {
  name: 'Markdown',
  data () {
    return {
      input: "# ",
      feed: ""
    }
  },
  created() {
    Api().get("/feeds/" + this.$route.params.id)
    .then(response => {
      this.input = response.data.text
    })
    .catch(e => {
      this.errors.push(e)
    })
  },
  computed: {
    compiledMarkdown: function() {
      return marked(this.input, { sanitize: true })
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value
    }, 300)
  },
  components: {
    UpdateButton,
    MenuButton
  }
}
</script>


<style scoped>
  #editor {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    margin: 30px 50px;
    height: 900px;
    text-align: left;
  }

  #editor #markdown-display {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
    overflow: scroll;
  }

  #editor textarea {
    width: 49%;
    height: 100%;
    overflow: scroll;
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
  }

  pre {
    background-color: #F7F7F6;
  }

  pre .filename {
    display: inline-block;
    padding: 0.25em;
    background: rgba(0,0,0,0.07);
  }

  pre .filename+ * {
    display: block;
  }

  .fade-enter-active {
    transition: all 0.5s
  }

  .fade-enter {
    opacity: 0;
    position: relative;
    top: 30px;
  }

  .fade-leave {
    opacity: 0;
  }
</style>