import { axiosInstance } from '@/api'
import { CommonService } from '@/api/common.types'

const commonService: CommonService = {
  getAll: () => axiosInstance.get(''),
}

export default commonService
