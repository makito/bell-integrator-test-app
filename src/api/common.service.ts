import { axiosInstance } from '@/api'
import { CommonService } from '@/api/common.types'

/**
 * сервис получения основных данных
 */
const commonService: CommonService = {
  getAll: () => axiosInstance.get(''),
}

export default commonService
