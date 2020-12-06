<template>
  <div class="content">
    <HistoryListItem
      v-for="item in list"
      :data="item"
      :key="item.uid"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { State } from 'vuex-class'

import { HistoryItem } from '@/store/modules/history/types'
import HistoryListItem from '@/components/HistoryListItem.vue'

@Component({
  components: {
    HistoryListItem,
  }
})
export default class HistoryAll extends Vue {
  @State('list', { namespace: 'history' })
  private list!: HistoryItem[]
}
</script>
