import { MutationTree } from 'vuex'

import { RootState, SAVE_DATA, LOAD_STATE } from '@/store/types'
import { CommonEntity } from '@/api/common.types'

export const mutations: MutationTree<RootState> = {
  [SAVE_DATA](state, payload: CommonEntity[]): void {
    state.data = payload
  },

  [LOAD_STATE](state, payload: boolean): void {
    state.isLoading = payload
  },
}
