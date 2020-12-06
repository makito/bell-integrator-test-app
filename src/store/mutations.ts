import { MutationTree } from 'vuex'

import {
  RootState,
  SAVE_DATA,
  LOAD_STATE,
  TOGGLE_ITEM_STATE,
  SAVE_TEXT
} from '@/store/types'
import CommonEntity from '@/common/common-entity.interface'
import { uid } from '@/common/helpers'
import CommonExtendedEntity from '@/common/common-extended-entity.interface'

export const mutations: MutationTree<RootState> = {
  [SAVE_DATA](state: RootState, payload: CommonEntity[]): void {
    let i = 0
    state.list = payload.reduce<CommonExtendedEntity[]>((acc, item) => {
      const copyItem: CommonExtendedEntity = {...item, index: i, selected: false, uid: uid()}
      delete copyItem.items
      acc.push(copyItem)
      i++
      if (item.items) {
        item.items.forEach(subitem => {
          acc.push({...subitem, index: i, selected: false, uid: uid(), parent: copyItem.uid})
          i++
        })
      }
      return acc
    }, [])
  },

  [LOAD_STATE](state: RootState, payload: boolean): void {
    state.isLoading = payload
  },

  [TOGGLE_ITEM_STATE](state: RootState, uid: string): void {
    state.list = state.list.map(item => {
      return item.uid === uid ?
        {...item, selected: !item.selected} :
        {...item}
    })
  },

  [SAVE_TEXT](state: RootState, text: string): void {
    state.searchText = text
  },
}
