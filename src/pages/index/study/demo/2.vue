<template>
  <div class="date">
    <el-icon class="icon"><Calendar /></el-icon>2022/11/24
  </div>
  <div class="demo">
    <div class="process">
      <div class="line"></div>
      <div
        class="cicle"
        v-for="(item, index) in list"
        :key="index"
        :class="item.cur ? 'active' : ''"
      >
        {{ !item.cur ? item.bTtitle : item.aTitle }}
      </div>
    </div>
    <div class="flex-center footer">
      <span class="pointer" @click="handleChange(false)">上一步</span
      ><span class="pointer" @click="handleChange(true)">下一步</span>
    </div>
  </div>
</template>

<script setup>
import { Calendar } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'

const current = ref(0)
const list = reactive([
  { bTtitle: '进行中', aTitle: '已结束', cur: false },
  { bTtitle: '进行中', aTitle: '已结束', cur: false },
  { bTtitle: '进行中', aTitle: '已结束', cur: false }
])
const process = ref('0')
const handleChange = (bool) => {
  const pre = current.value
  list[pre].cur = bool
  current.value = bool
    ? current.value + 1 < list.length
      ? current.value + 1
      : current.value
    : current.value - 1 > 0
    ? current.value - 1
    : 0
  process.value = `${(bool ? current.value - 1 : current.value) * 15}rem`
  if (bool && pre + 1 == list.length) process.value = `${current.value * 15}rem`
}
</script>

<style lang="scss" scoped>
.date {
  margin: 3rem auto;
  margin-top: 0;
  color: #999;
  text-align: center;
  font-size: 1.6rem;
  .icon {
    margin-right: 1rem;
  }
}
.demo {
  margin: 0 auto;
  width: 40rem;

  .process {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    &:before {
      position: absolute;
      content: ' ';
      z-index: -2;
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
    .line {
      position: absolute;
      z-index: -1;
      transition: 1s;
      width: v-bind(process);
      background-color: skyblue;
      height: 5px;
      left: 0;
      z-index: -1;
      transform: translateY(-50%);
      top: 50%;
      border-radius: 5px;
      box-sizing: border-box;
    }
    .cicle {
      transition: 1s;
      background-color: #fff;
      width: 10rem;
      height: 10rem;
      line-height: 10rem;
      text-align: center;
      border: 0.4rem solid #dededf;
      border-radius: 50%;
    }
    .active {
      border: 0.4rem solid skyblue;
    }
  }
  .footer {
    margin: 3rem auto;
    span {
      width: 8rem;
      text-align: center;
      line-height: 4rem;
      border: 0.2rem solid black;
      border-radius: 1rem;
      margin: 0 2rem;
    }
  }
}
</style>
