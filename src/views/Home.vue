<template>
  <div>
    <div class="nav">
      <router-link to="/history">History</router-link>
    </div>
    <div class="content" v-if="!dataIsLoading">
      This is Home page
    </div>
    <div v-else>data is loading...</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AxiosResponse } from 'axios'
import { State, Action } from 'vuex-class'

import { CommonEntity } from '@/api/common.types'
import { GET_DATA } from '@/store/types'

@Component
export default class Home extends Vue {
  @State('data')
  data!: CommonEntity[]

  @State('isLoading')
  dataIsLoading!: boolean

  @Action(GET_DATA)
  getData!: () => Promise<AxiosResponse<CommonEntity[]>>

  async created() {
    await this.getData()
    console.log(this.data)
  }
}
</script>
