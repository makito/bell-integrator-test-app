import { GetterTree } from 'vuex'

import { RootState, GET_SELECTED, GET_UNSELECTED } from '@/store/types'
import CommonExtendedEntity from '@/common/common-extended-entity.interface'
import { sortByIndex, sortByTextReverse } from '@/common/helpers'

export const getters: GetterTree<RootState, RootState> = {
  [GET_SELECTED](state: RootState): CommonExtendedEntity[] {
    return state.list
      .filter(item => item.selected)
      .sort(sortByIndex)
  },

  [GET_UNSELECTED](state: RootState): CommonExtendedEntity[] {
    return state.list
      .filter(item => {
        return !state.searchText ?
          !item.selected :
          !item.selected && new RegExp(state.searchText, 'i').test(item.name)
      })
      .sort(!state.searchText ? sortByIndex : sortByTextReverse)
  }
}
