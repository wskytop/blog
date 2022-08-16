<template>
  <div class="header flex-row-b">
    <div class="header-title">
      <div>daydayup</div>
    </div>
    <div class="banner flex">
      <div class="tab pointer" @click="goFont">首页</div>
      <div class="tab pointer" @click="goAbout">关于</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
const $router = useRouter()
const goFont = () => {
  $router.push('/')
}
const goAbout = () => {
  $router.push('/about')
}
</script>

<style lang="scss" scoped>
.header {
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.112);
  width: 100vw;
  height: 4.5rem;
  background-color: transparent;

  &-title {
    margin-left: 10%;
    font-weight: bold;
    font-size: 1.8rem;
    transition: 0.2s;

    &:hover {
      letter-spacing: 0.2rem;
    }
  }

  .banner {
    font-size: 1.6rem;
    width: 20rem;
    margin-right: 10%;

    .tab {
      margin-right: 1rem;
    }
  }
}
</style>
