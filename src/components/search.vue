<template>
  <div class="search-dialog">
    <el-input
        v-model="content"
        placeholder="搜索博客"
        :suffix-icon="Search"
        @change="searchBlog"
      />
      <span class="cancel">×</span>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const content = ref('')
const searchBlog = ()=>{

}
</script>

<style lang="scss" scoped>
.search-dialog{
  width: 46rem;
  height: 9.5rem;
  background-color: #fff;
  position: relative;
  .cancel{
    height: 2.2rem;
    width: 2.2rem;
    position: absolute;
    top: 0;
    right: 0;
  }
}
</style>