import CommonExtendedEntity from '@/common/common-extended-entity.interface'
import store from '@/store'

export function uid(): string {
  return `-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`
}

export function sortByIndex(a: CommonExtendedEntity, b: CommonExtendedEntity): number {
  return a.index - b.index
}

export function sortByTextReverse(a: CommonExtendedEntity, b: CommonExtendedEntity): number {
  const countInA = a.name.split(store.state.searchText).length
  const countInB = b.name.split(store.state.searchText).length
  return countInB - countInA
}
