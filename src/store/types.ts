import CommonExtendedEntity from '@/common/common-extended-entity.interface'

/**
 * сигнатура корневого хранилища
 */
export interface RootState {
  // список объектов
  list: CommonExtendedEntity[];

  // состояние загрузки данных
  isLoading: boolean;

  // текст строки поиска
  searchText: string;
}

// mutations
export const SAVE_DATA = 'saveData'
export const LOAD_STATE = 'loadState'
export const TOGGLE_ITEM_STATE = 'toggleItemState'
export const SAVE_TEXT = 'saveText'

// actions
export const GET_DATA = 'getData'

// getters
export const GET_SELECTED = 'getSelected'
export const GET_UNSELECTED = 'getUnselected'
