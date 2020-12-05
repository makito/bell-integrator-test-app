import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { getters } from '@/store/getters'
import { actions } from '@/store/actions'
import { mutations } from '@/store/mutations'
import { RootState } from '@/store/types'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
  state: {
    list: [],
    isLoading: true,
  },
  getters,
  actions,
  mutations,
}

export default new Vuex.Store<RootState>(store)
