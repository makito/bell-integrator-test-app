<template>
  <div>
    (<strong v-text="data.event"></strong>)&nbsp;&nbsp;
    <span>{{data.eventDate | date}}</span>&nbsp;&nbsp;
    <span>[id={{data.item.id}}] name="{{data.item.name}}"</span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { HistoryItem } from '@/store/modules/history/types'

/**
 * компонент списка истории действий
 */
@Component
export default class HistoryListItem extends Vue {

  /**
   * данные события истории изменения состояния объекта
   */
  @Prop()
  private data!: HistoryItem
}
</script>

<style lang="scss" scoped>
div {
  padding-bottom: 10px;
}
</style>
