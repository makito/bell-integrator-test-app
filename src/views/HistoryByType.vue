<template>
  <div>
    <HistoryListItem
      v-for="item in list"
      :data="item"
      :key="item.uid"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

import { ADDED, ALL, HistoryItem, REMOVED } from '@/store/modules/history/types'
import HistoryListItem from '@/components/HistoryListItem.vue'

/**
 * компонент страницы истории событий по типу
 */
@Component({
  components: {
    HistoryListItem,
  }
})
export default class HistoryByType extends Vue {

  /**
   * список событий добавления
   */
  @Getter(ADDED, { namespace: 'history' })
  private listAdded!: HistoryItem[]

  /**
   * список событий удаления
   */
  @Getter(REMOVED, { namespace: 'history' })
  private listRemoved!: HistoryItem[]

  /**
   * список всех событий истории
   */
  @Getter(ALL, { namespace: 'history' })
  private listAll!: HistoryItem[]

  /**
   * список для отображения
   */
  private get list(): HistoryItem[] {
    // в зависимости от переданных в route метаданных выбираем какой список отобразить
    switch (this.$route.meta.type) {
      case ADDED:
        return this.listAdded

      case REMOVED:
        return this.listRemoved
    
      default:
        return this.listAll
    }
  }
}
</script>
