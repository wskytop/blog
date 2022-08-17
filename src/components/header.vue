<template>
  <div class="header" :style="{ backgroundImage: 'url(' + author.bgImg + ')', backgroundSize: 'cover' }">
    <div class="banner flex-row-b">
      <div class="header-title">
        <div>daydayup</div>
      </div>
      <div class="tab-list flex">
        <div class="tab pointer" @click="goFont">首页</div>
        <div class="tab pointer" @click="goAbout">关于</div>
      </div>
    </div>
    <div class="introduction flex-col-a">
      <div class="avatar">
        <el-avatar :size="128" :src="author.avatar" />
      </div>
      <div class="title">{{ author.name }}</div>
      <div class="description">{{ author.description }}</div>
      <!-- <div class="myOthers"></div> -->
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router"
import { ref } from 'vue'
import { kyt, pmh } from '~/config/author'
const $router = useRouter()
const author = ref({})
author.value = kyt
console.log(author.value);
const goFont = () => {
  $router.push('/')
}
const goAbout = () => {
  $router.push('/about')
}
</script>

<style lang="scss" scoped>
.header {
  height: 42rem;

  .banner {
    box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.112);
    width: 100vw;
    height: 4.5rem;
    background-color: transparent;

    .header-title {
      color: white;
      margin-left: 10%;
      font-weight: bold;
      font-size: 1.8rem;
      transition: 0.2s;

      &:hover {
        letter-spacing: 0.2rem;
      }
    }

    .tab-list {
      color: white;
      font-size: 1.6rem;
      width: 20rem;
      margin-right: 10%;

      .tab {
        margin-right: 1rem;
      }
    }
  }

  .introduction {
    height: 25rem;

    .title {
      font-size: 4.4rem;
      font-weight: bold;
      color: white;
      transition: 0.2s;

      &:hover {
        letter-spacing: 0.4rem;
      }
    }

    .description {
      font-size: 2.4rem;
      color: #666666;
    }
  }
}
</style>
