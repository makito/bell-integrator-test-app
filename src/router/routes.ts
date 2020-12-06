import { RouteConfig } from 'vue-router'

import Home from '@/views/Home.vue'
import History from '@/views/History.vue'
import HistoryByType from '@/views/HistoryByType.vue'
import Page404 from '@/views/404.vue'
import { ADDED, ALL, REMOVED } from '@/store/modules/history/types'

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
    component: History,
    children: [
      {
        path: '',
        component: HistoryByType,
        meta: {
          title: 'History all',
          type: ALL
        }
      },
      {
        path: 'added',
        component: HistoryByType,
        meta: {
          title: 'History added',
          type: ADDED
        }
      },
      {
        path: 'removed',
        component: HistoryByType,
        meta: {
          title: 'History removed',
          type: REMOVED
        }
      },
    ]
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
