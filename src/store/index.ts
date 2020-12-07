import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { getters } from '@/store/getters'
import { actions } from '@/store/actions'
import { mutations } from '@/store/mutations'
import { RootState } from '@/store/types'

import history from '@/store/modules/history'

Vue.use(Vuex)

/**
 * сигнатура корневого хранилища
 */
const store: StoreOptions<RootState> = {
  state: {
    list: [],
    isLoading: true,
    searchText: '',
  },
  getters,
  actions,
  mutations,
  modules: {
    history,
  }
}

export default new Vuex.Store<RootState>(store)
