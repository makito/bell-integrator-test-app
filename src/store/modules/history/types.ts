import CommonExtendedEntity from '@/common/common-extended-entity.interface'
import { HistoryEvent } from '@/common/history-event.enum'

/**
 * сигнатура объекта коллекции истории событий
 */
export interface HistoryItem {
  // уникальный идентификатор элемента
  id: string;

  // объект списка, у которого изменилось состояние
  item: CommonExtendedEntity;

  // дата события
  eventDate: Date;

  // тип события
  event: HistoryEvent;
}

/**
 * сигнатура хранилища истории
 */
export interface HistoryState {
  // коллекция событий истории
  list: HistoryItem[];
}

// getters
export const REMOVED = 'removed'
export const ADDED = 'added'
export const ALL = 'all'

// mutations
export const SAVE_EVENT = 'saveEvent'

// actions
