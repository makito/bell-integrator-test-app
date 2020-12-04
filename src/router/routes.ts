import { RouteConfig } from 'vue-router'

import Home from '@/views/Home.vue'
import History from '@/views/History.vue'
import Page404 from '@/views/404.vue'

export const routes: Array<RouteConfig> = [
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
