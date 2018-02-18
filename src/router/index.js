import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MarkdownEditor from '@/components/Markdown/Markdown'
import List from '@/components/layouts/List'
import Feed from '@/components/layouts/Feed'
import SignIn from '@/components/layouts/SignIn'
import Edit from '@/components/Markdown/Edit'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'List', component: List },
    { path: '/markdown', name: 'MarkdownEditor', component: MarkdownEditor },
    { path: '/feed/:id', name: 'Feed', component: Feed },
    { path: '/sign_in', name: 'SignIn', component: SignIn },
    { path: '/feed/:id/edit', name: 'Edit', component: Edit }
  ]
})
