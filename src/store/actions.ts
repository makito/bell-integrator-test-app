import { ActionTree } from 'vuex'
import { AxiosResponse } from 'axios'

import { RootState, SAVE_DATA, GET_DATA, LOAD_STATE } from '@/store/types'
import commonService from '@/api/common.service'
import CommonEntity from '@/common/common-entity.interface'


export const actions: ActionTree<RootState, RootState> = {
  async [GET_DATA]({ commit }): Promise<AxiosResponse<CommonEntity[]>> {
    commit(LOAD_STATE, true)
    const response = await commonService.getAll()
    commit(SAVE_DATA, response.data)
    commit(LOAD_STATE, false)
    return response
  },
}
