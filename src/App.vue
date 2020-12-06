<template>
  <router-view v-if="!dataIsLoading" />
  <div v-else>data is loading...</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AxiosResponse } from 'axios'
import { State, Action } from 'vuex-class'

import { GET_DATA } from '@/store/types'
import CommonExtendedEntity from '@/common/common-extended-entity.interface'

@Component
export default class App extends Vue {
  @State('isLoading')
  private dataIsLoading!: boolean

  @Action(GET_DATA)
  private getData!: () => Promise<AxiosResponse<CommonExtendedEntity[]>>

  async created() {
    await this.getData()
  }
}
</script>
