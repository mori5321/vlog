import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MarkdownEditor from '@/components/Markdown/Markdown'
import List from '@/components/layouts/List'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'List', component: List },
    { path: '/markdown', name: 'MarkdownEditor', component: MarkdownEditor }
  ]
})
