import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MarkdownEditor from '@/components/Markdown/Markdown'
import List from '@/components/layouts/List'
import Feed from '@/components/layouts/Feed'
import SignIn from '@/components/layouts/SignIn'
import Edit from '@/components/Markdown/Edit'
import Store from '@/store/store.js'

Vue.use(Router)

let router = new Router({
  routes: [
    { path: '/', name: 'List', component: List },
    { path: '/markdown', name: 'MarkdownEditor', component: MarkdownEditor,
      meta: {
        requiresAuth: true
      }
    },
    { path: '/feed/:id', name: 'Feed', component: Feed },
    { path: '/sign_in', name: 'SignIn', component: SignIn },
    { path: '/feed/:id/edit', name: 'Edit', component: Edit,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth) && !Store.state.isUserLoggedIn) {
    next({
      path: '/sign_in'
    })
  } else {
    next()
  }
})

export default router