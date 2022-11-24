<template>
  <div class="demo">
    <div class="cicle" v-for="(item, index) in list" :key="index">
      {{ item.cur ? item.bTtitle : item.aTitle }}
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const list = reactive([
  { bTtitle: '进行中', aTitle: '已结束', cur: false },
  { bTtitle: '进行中', aTitle: '已结束', cur: false },
  { bTtitle: '进行中', aTitle: '已结束', cur: false }
])
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
  width: 40rem;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;

  &:before {
    position: absolute;
    content: ' ';
    z-index: -1;
    width: 100%;
    background-color: #dededf;
    height: 5px;
    left: 0;
    z-index: -1;
    transform: translateY(-50%);
    top: 50%;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .cicle {
    z-index: 2;
    width: 10rem;
    height: 10rem;
    line-height: 10rem;
    text-align: center;
    border: 0.4rem solid #dededf;
    border-radius: 50%;
  }
  .active {
    color: skyblue;
  }
}
</style>
