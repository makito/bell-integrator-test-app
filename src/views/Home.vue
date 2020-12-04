<template>
  <div>
    <div class="nav">
      <router-link to="/history">History</router-link>
    </div>
    <div class="content">
      This is Home page
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {}
</script>
