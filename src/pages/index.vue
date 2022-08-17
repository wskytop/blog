<template>
  <Header />
  <div class="g-main">
    <router-view />
  </div>
</template>
<script setup lang="ts">
import Header from '@/components/header.vue'
</script>
<style scoped>
.g-main {
  min-height: calc(100vh - 35rem);
}
</style>
