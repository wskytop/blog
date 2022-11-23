<template>
  <div class="search-dialog" ref="dialog">
    <el-input
      class="search-input"
      ref="search"
      v-model="content"
      placeholder="搜索博客"
      :suffix-icon="Search"
      size="large"
      @change="searchBlog"
      autofocus
    />
    <span class="cancel pointer" @click="cancel">×</span>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { Search } from '@element-plus/icons-vue'
import useStore from '@/store'

const { nav } = useStore()
const search = ref(null)
const content = ref('')
const dialog = ref(null)
watch(
  () => nav.search,
  (n) => {
    if (n) {
      dialog.value.classList.remove('disappear')
      dialog.value.classList.add('appear')
      search.value.focus()
    } else {
      dialog.value.classList.remove('appear')
      dialog.value.classList.add('disappear')
    }
  }
)
const cancel = () => {
  nav.search = false
  content.value = ''
}
const searchBlog = (text) => {
  nav.searchContent = text
  cancel()
}
</script>

<style lang="scss" scoped>
.search-dialog {
  width: 46rem;
  height: 9.5rem;
  background-color: #fff;
  position: fixed;
  box-shadow: 0 0 0 0.05rem #dcdfe6;
  margin: 0 auto;
  left: 0;
  right: 0;
  top: -10rem;
  z-index: 9999;
  .search-input {
    width: 80%;
    height: 40%;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
  .cancel {
    background-color: #e8e8e8;
    line-height: 2.2rem;
    text-align: center;
    width: 2.2rem;
    font-size: 2rem;
    position: absolute;
    top: -0.1rem;
    right: -0.1rem;
    &:hover {
      background-color: #00cccc;
    }
  }
}
.appear {
  animation: drawIn 0.4s linear both;
}
.disappear {
  animation: drawOut 0.4s linear both;
}
@keyframes drawIn {
  from {
    top: -10rem;
  }
  to {
    top: 30rem;
  }
}
@keyframes drawOut {
  from {
    top: 30rem;
  }
  to {
    top: -10rem;
  }
}
</style>
