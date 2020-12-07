import CommonEntity from '@/common/common-entity.interface'

/**
 * сигнатура данных, с которой работает приложение
 */
export default interface CommonExtendedEntity extends CommonEntity {
  // признак выбранного объекта
  selected: boolean;

  // уникальный идентификатор
  uid: string;

  // порядковый номер объекта исходя из изначальной структуры
  index: number;

  // идентификатор родителя
  parent?: string;
}
