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

/**
 * мутации корневого хранилища
 */
export const mutations: MutationTree<RootState> = {

  /**
   * мутация сохранения коллекции объетов, полученных по api
   * @param state корневое хранилище
   * @param payload список объектов для сохранения
   */
  [SAVE_DATA](state: RootState, payload: CommonEntity[]): void {
    let i = 0
    // разворачиваем список в плоскую структуру
    state.list = payload.reduce<CommonExtendedEntity[]>((acc, item) => {
      const copyItem: CommonExtendedEntity = {...item, index: i, selected: false, uid: uid()}
      delete copyItem.items
      acc.push(copyItem)
      i++
      // если есть дочерние элементы - то разворачиваем их список
      if (item.items) {
        item.items.forEach(subitem => {
          acc.push({...subitem, index: i, selected: false, uid: uid(), parent: copyItem.uid})
          i++
        })
      }
      return acc
    }, [])
  },

  /**
   * мутация изменения состояния загрузки данных по api
   * @param state корневое хранилище
   * @param payload состояние
   */
  [LOAD_STATE](state: RootState, payload: boolean): void {
    state.isLoading = payload
  },

  /**
   * мутация изменения состояния выбранности объекта
   * @param state корневое хранилище
   * @param uid уникальный идентификатор объекта
   */
  [TOGGLE_ITEM_STATE](state: RootState, uid: string): void {
    state.list = state.list.map(item => {
      // копируем объект
      return item.uid === uid ?
        {...item, selected: !item.selected} :
        {...item}
    })
  },

  /**
   * мутация сохранения текста, введенного в поле поиска
   * @param state корневое хранилище
   * @param text текст из поля поиска
   */
  [SAVE_TEXT](state: RootState, text: string): void {
    state.searchText = text
  },
}
