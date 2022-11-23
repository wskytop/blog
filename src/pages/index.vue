<template>
  <Header />
  <Search />
  <SideBar />
  <Tags />
  <div class="g-main">
    <router-view />
  </div>
  <el-backtop :right="40" :bottom="40" />
</template>
<script setup lang="ts">
import Header from '@/components/header.vue'
import SideBar from '@/components/sideBar.vue'
import Search from '@/components/search.vue'
import Tags from '@/components/tags.vue'
</script>
<style scoped>
.g-main {
  min-height: calc(100vh - 35rem);
}
</style>
