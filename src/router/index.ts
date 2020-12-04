import Vue from 'vue'
import VueRouter, { RouteConfig, Route, RawLocation } from 'vue-router'

import Home from '@/views/Home.vue'
import History from '@/views/History.vue'
import Page404 from '@/views/404.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/history',
    name: 'History',
    component: History,
    meta: {
      title: 'History'
    }
  },
  {
    path: '*',
    name: '404',
    component: Page404,
    meta: {
      title: '404'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to: Route, from: Route, next: (to?: RawLocation | false | ((vm: Vue) => any) | void) => void) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title
  }
  next()
})

export default router
