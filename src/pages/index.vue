<template>
  <Header />
  <SideBar v-if="isSideBar"/>
  <div class="g-main">
    <router-view />
  </div>
  <el-backtop :right="100" :bottom="100" />
</template>
<script setup lang="ts">
import Header from '@/components/header.vue'
import SideBar from '@/components/sideBar.vue'
import { nextTick, onMounted, onUnmounted,ref } from 'vue';
const isSideBar = ref(false)
const changeHeight = () => {
  let scrollHeight = document.documentElement.scrollTop || document.body.scrollTop; //滚动高度
  if (scrollHeight > 30) {
    isSideBar.value = true
  } else {
    isSideBar.value = false
}
}
onMounted(() => {
  nextTick(() => {
    window.addEventListener("scroll", changeHeight); // 监听（绑定）滚轮滚动事件
  })
})
onUnmounted(() => {
  nextTick(() => {
    window.removeEventListener("scroll", changeHeight); // 监听（绑定）滚轮滚动事件
  })
})
</script>
<style scoped>
.g-main {
  min-height: calc(100vh - 35rem);
}
</style>
