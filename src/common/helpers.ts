import CommonExtendedEntity from '@/common/common-extended-entity.interface'
import store from '@/store'

/**
 * генерирует уникальный строковый идентификатор
 */
export function uid(): string {
  return `-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`
}

/**
 * сортирует массив по полю index
 * @param a объект основной сущности
 * @param b объект основной сущности
 */
export function sortByIndex(a: CommonExtendedEntity, b: CommonExtendedEntity): number {
  return a.index - b.index
}

/**
 * сортирует массив по количеству вхождений подстроки в строку name объекта (в обратном порядке)
 * @param a объект основной сущности
 * @param b объект основной сущности
 */
export function sortByTextReverse(a: CommonExtendedEntity, b: CommonExtendedEntity): number {
  const countInA = a.name.split(store.state.searchText).length
  const countInB = b.name.split(store.state.searchText).length
  return countInB - countInA
}
