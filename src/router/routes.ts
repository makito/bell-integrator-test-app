import { RouteConfig } from 'vue-router'

import Home from '@/views/Home.vue'
import History from '@/views/History.vue'
import HistoryAdded from '@/views/HistoryAdded.vue'
import HistoryRemoved from '@/views/HistoryRemoved.vue'
import HistoryAll from '@/views/HistoryAll.vue'
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
    component: History,
    children: [
      {
        path: '',
        component: HistoryAll,
        meta: {
          title: 'History all'
        }
      },
      {
        path: 'added',
        component: HistoryAdded,
        meta: {
          title: 'History added'
        }
      },
      {
        path: 'removed',
        component: HistoryRemoved,
        meta: {
          title: 'History removed'
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
