import { MutationTree } from 'vuex'

import { SAVE_EVENT, HistoryItem, HistoryState } from '@/store/modules/history/types'

export const mutations: MutationTree<HistoryState> = {
  [SAVE_EVENT](state: HistoryState, payload: HistoryItem): void {
    state.list.push(payload)
  }
}
