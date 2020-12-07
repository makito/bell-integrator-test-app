<template>
  <div>
    <BaseListItem
      v-for="item in list"
      :data="item"
      :key="item.uid"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

import { GET_SELECTED, GET_UNSELECTED } from '@/store/types'
import { ListType } from '@/common/list-type.enum'
import CommonExtendedEntity from '@/common/common-extended-entity.interface'
import BaseListItem from '@/components/BaseListItem.vue'

/**
 * компонент списка
 */
@Component({
  components: {
    BaseListItem
  }
})
export default class BaseList extends Vue {

  /**
   * тип отображаемого списка
   */
  @Prop()
  private listType!: ListType

  /**
   * коллекция выбранных элементов
   */
  @Getter(GET_SELECTED)
  private listSelected!: CommonExtendedEntity[]

  /**
   * коллекция не выбранных элементов
   */
  @Getter(GET_UNSELECTED)
  private listUnselected!: CommonExtendedEntity[]

  /**
   * список для отображения
   */
  private get list(): CommonExtendedEntity[] {
    return this.listType === ListType.selected ?
      this.listSelected :
      this.listUnselected
  }
}
</script>
