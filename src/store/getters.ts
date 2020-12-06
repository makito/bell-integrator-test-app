import { GetterTree } from 'vuex'

import { RootState, GET_SELECTED, GET_UNSELECTED } from '@/store/types'
import CommonExtendedEntity from '@/common/common-extended-entity.interface'
import { sortByTextReverse } from '@/common/helpers'

export const getters: GetterTree<RootState, RootState> = {
  [GET_SELECTED](state: RootState): CommonExtendedEntity[] {
    return state.list.filter(item => item.selected)
  },

  [GET_UNSELECTED](state: RootState): CommonExtendedEntity[] {
    const filtered = state.list.filter(item => {
      return !state.searchText ?
        !item.selected :
        !item.selected && new RegExp(state.searchText, 'i').test(item.name)
    })
    
    // если нет поиска, отдаем структуру какая была при загрузке
    if (!state.searchText) {
      return filtered
    }

    const sortedByText = filtered.sort(sortByTextReverse)
    // восстанавливаем иерархию после реверсивной сортировки по name
    return sortedByText.reduce<Array<Array<CommonExtendedEntity>>>((acc, item: CommonExtendedEntity) => {
      if (!item.parent) {
        const position = acc.push([item])
        sortedByText.forEach(subitem => {
          if (subitem.parent && subitem.parent === item.uid) {
            acc[position - 1].push(subitem)
          }
        })
      }
      return acc
    }, []).flat()
  }
}
