<template>
  <div>
    <div class="nav">
      <router-link to="/history">History</router-link>
    </div>
    <div class="content" v-if="!dataIsLoading">
      <table>
        <tr>
          <td>
            <BaseList :list-type="unselectedData" />
          </td>
          <td>
            <BaseList :list-type="selectedData" />
          </td>
        </tr>
      </table>
    </div>
    <div v-else>data is loading...</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AxiosResponse } from 'axios'
import { State, Action } from 'vuex-class'

import { GET_DATA } from '@/store/types'
import BaseList from '@/components/BaseList.vue'
import { ListType } from '@/common/list-type.enum'
import CommonExtendedEntity from '@/common/common-extended-entity.interface'

@Component({
  components: {
    BaseList
  }
})
export default class Home extends Vue {
  @State('data')
  private data!: CommonExtendedEntity[]

  @State('isLoading')
  private dataIsLoading!: boolean

  @Action(GET_DATA)
  private getData!: () => Promise<AxiosResponse<CommonExtendedEntity[]>>

  private unselectedData = ListType.unselected

  private selectedData = ListType.selected

  async created() {
    await this.getData()
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
</style>
