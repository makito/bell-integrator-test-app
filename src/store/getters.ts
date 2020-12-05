import { GetterTree } from 'vuex'

import { RootState, GET_SELECTED, GET_UNSELECTED } from '@/store/types'
import CommonExtendedEntity from '@/common/common-extended-entity.interface'

export const getters: GetterTree<RootState, RootState> = {
  [GET_SELECTED](state: RootState): CommonExtendedEntity[] {
    return state.list.filter(item => item.selected)
  },

  [GET_UNSELECTED](state: RootState): CommonExtendedEntity[] {
    return state.list.filter(item => !item.selected)
  }
}
