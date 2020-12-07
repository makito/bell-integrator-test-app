import { GetterTree } from 'vuex'

import { RootState, GET_SELECTED, GET_UNSELECTED } from '@/store/types'
import CommonExtendedEntity from '@/common/common-extended-entity.interface'
import { sortByTextReverse } from '@/common/helpers'

/**
 * герреты корневого хранилища
 */
export const getters: GetterTree<RootState, RootState> = {

  /**
   * геттер возвращает список объектов в стостоянии "выбран"
   * @param state корневое хранилище
   */
  [GET_SELECTED](state: RootState): CommonExtendedEntity[] {
    return state.list.filter(item => item.selected)
  },

  /**
   * геттер возвращает список объектов в состоянии "не выбран"
   * @param state корневое хранилище
   */
  [GET_UNSELECTED](state: RootState): CommonExtendedEntity[] {
    const filtered = state.list
      .filter(item => {
        // возвращаем объект, если он не выбран, или если введен текст поиска
        // и поле name объекта содержит введенную подстроку
        return !state.searchText ?
          !item.selected :
          !item.selected && new RegExp(state.searchText, 'i').test(item.name)
      })
    
    // если нет текста для поиска, возвращаем отфильтрованную коллекцию
    if (!state.searchText) {
      return filtered
    }

    // иначе сортируем список согласно количеству вхождений подстроки в обратном порядке
    return filtered.sort(sortByTextReverse)
  }
}
