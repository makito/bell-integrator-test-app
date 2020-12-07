<template>
  <div :style="{paddingLeft: offsetLeft, marginTop: offsetTop}">
    <button
      v-on:click="toggle(data.uid)"
      v-text="symbol"
    ></button>&nbsp;<span v-text="data.name"></span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { Mutation } from 'vuex-class'

import { TOGGLE_ITEM_STATE } from '@/store/types'
import CommonExtendedEntity from '@/common/common-extended-entity.interface'
import { SAVE_EVENT } from '@/store/modules/history/types'

/**
 * компонент элемента списка
 */
@Component
export default class BaseListItem extends Vue {

  /**
   * данные объекта списка
   */
  @Prop()
  private data!: CommonExtendedEntity

  /**
   * мутация изменения состояния объекта
   */
  @Mutation(TOGGLE_ITEM_STATE)
  private toggleItemState!: (uid: string) => void

  /**
   * мутация сохранения события изменения состояния объекта
   */
  @Mutation(SAVE_EVENT, { namespace: 'history' })
  private saveEvent!: (payload: CommonExtendedEntity) => void

  /**
   * символ для отобажения в управляющей кнопке
   */
  private get symbol(): string {
    return this.data.selected ?
      '-' :
      '+'
  }

  /**
   * отступ строки элемента списка слева
   */
  private get offsetLeft(): string {
    return this.data.parent ?
      '20px' :
      '0px'
  }

  /**
   * отступ строки элемента списка сверху
   */
  private get offsetTop(): string {
    return this.data.parent ?
      '0px' :
      '20px'
  }

  /**
   * переключение состояния объекта
   */
  private toggle(uid: string): void {
    this.saveEvent({...this.data})
    this.toggleItemState(uid)
  }
}
</script>
