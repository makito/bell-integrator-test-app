import CommonExtendedEntity from '@/common/common-extended-entity.interface'
import { HistoryEvent } from '@/common/history-event.enum'

export interface HistoryItem {
  id: string;
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
export const ALL = 'all'

// mutations
export const SAVE_EVENT = 'saveEvent'

// actions
