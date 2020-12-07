/**
 * сигнатура данных, возвращаемых сервисом основных данных
 */
export default interface CommonEntity {
  // идентификатор объекта
  id: number;

  // название объекта
  name: string;

  // список потомков объекта
  items?: CommonEntity[];
}
