<template>
  <div
    class="header"
    :style="
      isHide
        ? {
            backgroundImage: 'url(' + author.bgImg + ')',
            backgroundSize: 'cover',
            height: '42rem'
          }
        : { height: '8rem' }
    "
  >
    <div v-if="isHide">
      <div class="banner flex-row-b" ref="banner">
        <div class="header-title pointer">
          <div>Blog</div>
        </div>
        <div class="tab-list flex">
          <div class="tab pointer" @click="goFont">首页</div>
          <div class="tab pointer" @click="goDemo">项目</div>
          <div class="tab pointer" @click="goAbout">关于</div>
        </div>
      </div>
      <div class="introduction flex-col-e">
        <div class="avatar pointer">
          <img class="avatar-img" :src="author.avatar" />
        </div>
        <div class="title pointer">{{ author.name }}</div>
        <div v-if="!isMobile" class="description pointer">
          {{ author.description }}
        </div>
        <!-- <div class="myOthers"></div> -->
      </div>
      <div class="quotation">
        <span class="quotation-msg">{{ quotation }}</span>
      </div>
    </div>
    <div v-else class="banner flex-row-b black" ref="banner">
      <div class="header-title pointer">
        <div>Blog</div>
      </div>
      <div class="tab-list flex">
        <div class="tab pointer" @click="goFont">首页</div>
        <div class="tab pointer" @click="goDemo">项目</div>
        <div class="tab pointer" @click="goAbout">关于</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref, nextTick, onUnmounted, computed } from 'vue'
import axios from 'axios'
import { kyt } from '@/config/author'

defineProps({
  isMobile: {
    type: Boolean,
    default: false
  }
})
const quotation = ref('')
const getQuotation = async () => {
  axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then((result) => {
    if (result.status == 200) quotation.value = result.data
  })
}
// getQuotation()
const $router = useRouter()
const author = ref({})
author.value = kyt
const goFont = () => {
  $router.push('/')
}
const $route = useRoute()
const isHide = computed(() => {
  return !$route.query.hide == true
})
const goDemo = () => {
  $router.push('/study?hide=true')
}
const goAbout = () => {
  $router.push('/about')
}
const banner = ref(null)
const changeHeight = () => {
  const scrollHeight =
    document.documentElement.scrollTop || document.body.scrollTop // 滚动高度
  if (scrollHeight > 10) {
    banner.value.classList.remove('open')
    banner.value.classList.add('close')
  } else {
    banner.value.classList.remove('close')
    banner.value.classList.add('open')
  }
}
onMounted(() => {
  nextTick(() => {
    if (isHide.value) window.addEventListener('scroll', changeHeight) // 监听（绑定）滚轮滚动事件
  })
})
onUnmounted(() => {
  nextTick(() => {
    if (isHide.value) window.removeEventListener('scroll', changeHeight) // 监听（绑定）滚轮滚动事件
  })
})
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  .introduction {
    height: 36rem;
    padding-top: 6rem;

    .avatar {
      transition: 1s;

      &:hover {
        transform: rotateZ(360deg);
      }
      &-img {
        width: 12.8rem;
        border-radius: 50%;
      }
    }

    .title {
      font-size: 4.4rem;
      font-weight: 400;
      color: white;
      transition: 0.2s;

      &:hover {
        letter-spacing: 0.4rem;
      }
    }

    .description {
      font-size: 2.4rem;
      color: #666666;
      letter-spacing: 1rem;
    }
  }
}
.banner {
  position: fixed;
  width: 100vw;
  height: 4.5rem;
  box-shadow: 0 0.1rem 0.1rem rgba(0, 0, 0, 0.112);
  color: white;

  .header-title {
    margin-left: 10%;
    font-weight: 500;
    font-size: 18px;
    transition: 0.4s;

    &:hover {
      letter-spacing: 0.2rem;
    }
  }

  .tab-list {
    font-size: 1.6rem;
    width: 20rem;
    margin-right: 10%;

    .tab {
      margin-right: 1rem;
    }
  }
}
.quotation {
  position: absolute;
  bottom: 0;
  width: 100vw;
  line-height: 4.5rem;
  border-top: 0.1rem solid rgba(0, 0, 0, 0.112);
  color: white;
  font-size: 16px;
  text-align: center;
  overflow: hidden;
  &-msg {
    width: 100%;
    white-space: nowrap;
    padding-left: 105%;
    letter-spacing: 0.4rem;
    padding-right: 100%;
    display: block;
    animation: autoScroll 8s infinite linear;
    transition: 3s;
  }
}

/* 显示或关闭动画*/
.open {
  animation: slideContentUp 0.5s linear both;
}

.close {
  animation: slideContentDown 0.5s linear both;
}

/* 动态设置高度 */
@keyframes slideContentUp {
  from {
    top: -4.5rem;
  }

  to {
    top: 0;
  }
}

@keyframes slideContentDown {
  from {
    top: 0;
  }

  to {
    top: -4.5rem;
  }
}

@keyframes slideContentUp {
  from {
    top: -4.5rem;
  }

  to {
    top: 0;
  }
}

@keyframes autoScroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
}
.black {
  color: black;
}
</style>
