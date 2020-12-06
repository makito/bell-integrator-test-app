import CommonExtendedEntity from '@/common/common-extended-entity.interface'
import { HistoryEvent } from '@/common/history-event.enum'

export interface HistoryItem {
  item: CommonExtendedEntity;
  eventDate: Date;
  event: HistoryEvent;
}

export interface HistoryState {
  list: HistoryItem[];
}

// getters
export const REMOVED = 'removed'
export const ADDED = 'added'

// mutations
export const SAVE_EVENT = 'saveEvent'

// actions
