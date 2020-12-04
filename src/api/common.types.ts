import { AxiosResponse } from 'axios'

export interface CommonEntity {
  id: number;
  name: string;
  items?: CommonEntity[];
}

export interface CommonService {
  getAll(): Promise<AxiosResponse<CommonEntity[]>>;
}
