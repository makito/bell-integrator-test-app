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

@Component({
  components: {
    HistoryListItem,
  }
})
export default class HistoryByType extends Vue {
  @Getter(ADDED, { namespace: 'history' })
  private listAdded!: HistoryItem[]

  @Getter(REMOVED, { namespace: 'history' })
  private listRemoved!: HistoryItem[]

  @Getter(ALL, { namespace: 'history' })
  private listAll!: HistoryItem[]

  private get list(): HistoryItem[] {
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
