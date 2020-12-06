<template>
  <div>
    <AppHeader>
      <router-link to="/history">History</router-link>
      <router-link to="/history/added">History added</router-link>
      <router-link to="/history/removed">History removed</router-link>
    </AppHeader>
    <AppContent>
      <table>
        <tr>
          <td>
            <input type="text" v-model="text">
            <BaseList :list-type="unselectedData" />
          </td>
          <td>
            <BaseList :list-type="selectedData" />
          </td>
        </tr>
      </table>
    </AppContent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Mutation, State } from 'vuex-class'

import BaseList from '@/components/BaseList.vue'
import AppHeader from '@/components/AppHeader.vue'
import AppContent from '@/components/AppContent.vue'
import { ListType } from '@/common/list-type.enum'
import { SAVE_TEXT } from '@/store/types'

@Component({
  components: {
    BaseList,
    AppHeader,
    AppContent,
  }
})
export default class Home extends Vue {
  @State('searchText')
  private searchText!: string

  @Mutation(SAVE_TEXT)
  private saveText!: (text: string) => void

  private unselectedData = ListType.unselected

  private selectedData = ListType.selected

  private get text(): string {
    return this.searchText
  }
  private set text(val: string) {
    this.saveText(val)
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 100%;
  
  td {
    width: 50%;
    vertical-align: top;
  }
}

input {
  display: block;
  margin-bottom: 20px;
}
</style>
