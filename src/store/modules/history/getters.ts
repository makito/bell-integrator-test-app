import { GetterTree } from 'vuex'

import { RootState } from '@/store/types'
import {
  ADDED,
  ALL,
  HistoryItem,
  HistoryState,
  REMOVED
} from '@/store/modules/history/types'
import { HistoryEvent } from '@/common/history-event.enum'

/**
 * геттеры хранилища истории событий
 */
export const getters: GetterTree<HistoryState, RootState> = {

  /**
   * геттер отдает коллекцию событий добавления
   * @param state хранилище истории
   */
  [ADDED](state: HistoryState): HistoryItem[] {
    return state.list.filter(item => item.event === HistoryEvent.adding)
  },

  /**
   * геттер отдает коллекцию событий удаления
   * @param state хранилище истории
   */
  [REMOVED](state: HistoryState): HistoryItem[] {
    return state.list.filter(item => item.event === HistoryEvent.removing)
  },

  /**
   * геттер отдает всю коллекцию событий
   * @param state хранилище истории
   */
  [ALL](state: HistoryState): HistoryItem[] {
    return state.list
  }
}
