import { CommonEntity } from '@/api/common.types'

export interface RootState {
  data: CommonEntity[] | null;
  isLoading: boolean;
}

// mutations
export const SAVE_DATA = 'saveData'
export const LOAD_STATE = 'loadState'

// actions
export const GET_DATA = 'getData'
