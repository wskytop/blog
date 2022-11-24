<template>
  <div class="demo flex">
    <div
      v-for="(item, index) in imgs"
      :key="index"
      class="item"
      :class="index === current ? 'active' : ''"
      @click="current = index"
    >
      <img class="imgs" :src="item" alt="" />
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'

const imgs = reactive([
  '/w-blog/imgs/demo/1/demo1_1.jpg',
  '/w-blog/imgs/demo/1/demo1_2.jpg',
  '/w-blog/imgs/demo/1/demo1_3.jpg',
  '/w-blog/imgs/demo/1/demo1_4.jpg'
])
const current = ref(0)
</script>

<style lang="scss" scoped>
.demo {
  margin: auto 5rem;
  .item {
    border-radius: 1rem;
    transition: 0.5s;
    width: 10rem;
    height: 70rem;
    overflow: hidden;
    .imgs {
      height: 100%;
    }
  }
  .active {
    overflow: hidden;
    width: 32rem;
  }
}
</style>
