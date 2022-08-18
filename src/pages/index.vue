<template>
  <Header />
  <Search />
  <SideBar />
  <div class="g-main">
    <router-view />
  </div>
  <el-backtop :right="100" :bottom="100" />
</template>
<script setup lang="ts">
import Header from '@/components/header.vue'
import SideBar from '@/components/sideBar.vue'
import Search from '@/components/search.vue'
</script>
<style scoped>
.g-main {
  min-height: calc(100vh - 35rem);
}
</style>
