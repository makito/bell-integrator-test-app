import { ActionTree } from 'vuex'
import { AxiosResponse } from 'axios'

import { RootState, SAVE_DATA, GET_DATA, LOAD_STATE } from '@/store/types'
import commonService from '@/api/common.service'
import { CommonEntity } from '@/api/common.types'


export const actions: ActionTree<RootState, RootState> = {
  async [GET_DATA]({ commit }): Promise<AxiosResponse<CommonEntity[]>> {
    commit(LOAD_STATE, true)
    const responce = await commonService.getAll()
    commit(SAVE_DATA, responce.data)
    commit(LOAD_STATE, false)
    return responce
  },
}
