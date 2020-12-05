import { AxiosResponse } from 'axios'

import CommonEntity from '@/common/common-entity.interface'

export interface CommonService {
  getAll(): Promise<AxiosResponse<CommonEntity[]>>;
}
