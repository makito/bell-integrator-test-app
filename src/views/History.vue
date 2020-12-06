<template>
  <div>
    <AppHeader>
      <router-link to="/">Home</router-link>
    </AppHeader>
    <AppContent>
      <router-view />
    </AppContent>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import AppHeader from '@/components/AppHeader.vue'
import AppContent from '@/components/AppContent.vue'

@Component({
  components: {
    AppHeader,
    AppContent,
  }
})
export default class History extends Vue {}
</script>
