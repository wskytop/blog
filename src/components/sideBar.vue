<template>
  <div class="side-bar flex-col">
    <div class="search bar flex-center pointer" @click="goSearch">
      <i class="iconfont icon-sousuo bar-icon"></i>
    </div>
    <!-- <div class="tags bar flex-center pointer" @click="goTags">
      <i class="iconfont icon-biaoqian bar-icon"></i>
    </div> -->
    <div class="tags bar flex-center pointer" @click="reset">
      <i class="iconfont icon-chongzhi bar-icon"></i>
    </div>
    <div class="font bar flex-center pointer" @click="goFont">
      <i class="iconfont icon-shouye bar-icon"></i>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import useStore from '@/store'

const { nav } = useStore()
const $router = useRouter()
const goSearch = () => {
  nav.updateSearch()
}
const goTags = () => {
  nav.updateTags()
}
const reset = () => {
  nav.searchContent = ''
}
const goFont = () => {
  $router.push('/w-blog/')
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 750px) {
  .side-bar {
    display: none;
  }
}
.side-bar {
  position: fixed;
  right: 4rem;
  top: 35rem;
  width: 4.8rem;
  height: 15.9rem;
  z-index: 200;
  .bar {
    width: 4.8rem;
    height: 4.8rem;
    border-radius: 50%;
    background-color: #00cccc;
    color: #fff;
    &:not(:last-child) {
      margin-bottom: 0.4rem;
    }
    &-icon {
      font-size: 2.5rem;
      font-weight: 500;
    }
  }
}
</style>
