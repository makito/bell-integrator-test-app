import CommonEntity from '@/common/common-entity.interface'

export default interface CommonExtendedEntity extends CommonEntity {
  selected: boolean;
  uid: string;
  index: number;
  parent?: string;
}
