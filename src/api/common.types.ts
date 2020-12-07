import { AxiosResponse } from 'axios'

import CommonEntity from '@/common/common-entity.interface'

/**
 * сигнатура сервиса получения основных данных
 */
export interface CommonService {

  /**
   * метод получения основных данных
   */
  getAll(): Promise<AxiosResponse<CommonEntity[]>>;
}
