<template>
  <div>
    <div class="nav">
      <router-link to="/history">History</router-link>
      <router-link to="/history/added">History added</router-link>
      <router-link to="/history/removed">History removed</router-link>
    </div>
    <div class="content">
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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import BaseList from '@/components/BaseList.vue'
import { ListType } from '@/common/list-type.enum'

@Component({
  components: {
    BaseList
  }
})
export default class Home extends Vue {
  private unselectedData = ListType.unselected
  private selectedData = ListType.selected
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
