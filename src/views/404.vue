<template>
  <div>
    <h1>404</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

/**
 * компонент страницы 404
 */
@Component
export default class Page404 extends Vue {}
</script>
