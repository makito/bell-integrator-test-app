import Vue from 'vue'
import VueRouter, { Route, RawLocation } from 'vue-router'

import { routes } from '@/router/routes'

Vue.use(VueRouter)

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
