import { Module } from 'vuex'

import { getters } from '@/store/modules/history/getters'
import { actions } from '@/store/modules/history/actions'
import { mutations } from '@/store/modules/history/mutations'
import { HistoryState } from '@/store/modules/history/types'
import { RootState } from '@/store/types'

/**
 * состояние хранилища истории событий
 */
export const state: HistoryState = {
  list: [],
}

/**
 * модуль хранилида истории событий
 */
const history: Module<HistoryState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

export default history
