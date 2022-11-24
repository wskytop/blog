<template>
  <Header />
  <Search v-if="isHide" />
  <SideBar v-if="isHide" />
  <!-- <Tags /> -->
  <div class="g-main">
    <router-view />
  </div>
  <el-backtop :right="40" :bottom="40" />
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import Header from '@/components/header.vue'
import SideBar from '@/components/sideBar.vue'
import Search from '@/components/search.vue'
// import Tags from '@/components/tags.vue'

const $route = useRoute()
const isHide = computed(() => {
  return !$route.query.hide == true
})
</script>
<style scoped>
.g-main {
  min-height: calc(100vh - 35rem);
}
</style>
