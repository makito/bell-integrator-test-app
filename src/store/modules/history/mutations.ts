import { MutationTree } from 'vuex'

import { SAVE_EVENT, HistoryState, HistoryItem } from '@/store/modules/history/types'
import CommonExtendedEntity from '@/common/common-extended-entity.interface'
import { HistoryEvent } from '@/common/history-event.enum'
import { uid } from '@/common/helpers'

export const mutations: MutationTree<HistoryState> = {
  [SAVE_EVENT](state: HistoryState, payload: CommonExtendedEntity): void {
    const event = payload.selected ?
      HistoryEvent.removing :
      HistoryEvent.adding

    const historyItem: HistoryItem = { item: payload, eventDate: new Date(), event, id: uid() }
    state.list.push(historyItem)
  }
}
