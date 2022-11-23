<template>
  <div class="tags-menu" ref="tags">
    <div class="tags-list flex">
      <div class="item pointer">vue</div>
      <div class="item pointer">js</div>
      <div class="item pointer">css</div>
    </div>
    <span class="cancel pointer" @click="cancel">×</span>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import useStore from '@/store'

const { nav } = useStore()
const tags = ref(null)
watch(
  () => nav.tags,
  (n) => {
    if (n) {
      tags.value.classList.remove('down')
      tags.value.classList.add('up')
    } else {
      tags.value.classList.remove('up')
      tags.value.classList.add('down')
    }
  }
)
const cancel = () => {
  nav.tags = false
}
</script>

<style lang="scss" scoped>
.tags-menu {
  background: rgba(0, 0, 0, 0.17);
  width: 99.8%;
  height: 16rem;
  position: fixed;
  z-index: 2;
  left: 0;
  right: 0;
  bottom: -16rem;
  .tags-list {
    margin: 1rem 2rem;
    color: #fff;
    .item {
      font-size: 1.6rem;
      border-radius: 0.4rem;
      background-color: #00cccc;
      line-height: 3rem;
      padding: 0 0.5rem;
      &:not(:last-child) {
        margin-right: 2rem;
      }
    }
  }
  .cancel {
    color: #777777;
    line-height: 4rem;
    text-align: center;
    width: 4.8rem;
    font-size: 4.8rem;
    position: absolute;
    top: -0.1rem;
    right: -0.1rem;
    &:hover {
      color: #00cccc;
    }
  }
}
.up {
  animation: drawUp 0.2s linear both;
}
.down {
  animation: drawDown 0.2s linear both;
}
@keyframes drawUp {
  from {
    bottom: -16rem;
  }
  to {
    bottom: 0rem;
  }
}
@keyframes drawDown {
  from {
    bottom: 0rem;
  }
  to {
    bottom: -16rem;
  }
}
</style>
