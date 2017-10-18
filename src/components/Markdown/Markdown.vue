<template>
  <div id="editor">
  <textarea :value="input" @input="update"></textarea>
  <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>
export default {
  name: 'Markdown',
  data () {
    return {
      input: "# HelloWorld"
    }
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
  }
}
</script>


<style scoped>
  #editor {
    font-family: 'Helvetica Neue', Arial, sans-serif;
    margin: 30px 50px;
    height: 300px;
    text-align: left;
  }

  #editor div {
    display: inline-block;
    width: 49%;
    height: 100%;
    vertical-align: top;
    box-sizing: border-box;
    padding: 0 20px;
  }

  textarea {
    width: 49%;
    height: 100%;
    border: none;
    border-right: 1px solid #ccc;
    resize: none;
    outline: none;
  }
</style>