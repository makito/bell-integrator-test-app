<template>
  <div>
    <div class="nav">
      <router-link to="/">Home</router-link>
    </div>
    <div class="content">
      This is History page
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class History extends Vue {}
</script>
