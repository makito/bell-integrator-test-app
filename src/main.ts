import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { default as format } from 'date-fns/format'

Vue.config.productionTip = false
Vue.filter('date', (date: Date): string => {
  return format(date, 'HH:mm:ss')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
