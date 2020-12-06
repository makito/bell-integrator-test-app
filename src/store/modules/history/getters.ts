import { GetterTree } from 'vuex'

import { RootState } from '@/store/types'
import {
  ADDED,
  HistoryItem,
  HistoryState,
  REMOVED
} from '@/store/modules/history/types'
import { HistoryEvent } from '@/common/history-event.enum'

export const getters: GetterTree<HistoryState, RootState> = {
  [ADDED](state: HistoryState): HistoryItem[] {
    return state.list.filter(item => item.event === HistoryEvent.adding)
  },

  [REMOVED](state: HistoryState): HistoryItem[] {
    return state.list.filter(item => item.event === HistoryEvent.removing)
  },
}
