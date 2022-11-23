<template>
  <div class="content">
    <div class="content-wrap">
      <div v-if="data" class="header">
        <h3 class="title">{{ data.title }}</h3>
        <div class="msg flex-center">
          <!-- <div class="tags mg-r-12">
            <el-icon class="icon"><Notebook /></el-icon>{{ data.tags }}
          </div> -->
          <div class="date">
            <el-icon class="icon"><Calendar /></el-icon>{{ data.date }}
          </div>
        </div>
      </div>
      <v-md-preview v-if="text" :text="text"></v-md-preview>
      <v-md-preview-html
        v-else
        :html="html"
        preview-class="vuepress-markdown-body"
      ></v-md-preview-html>
    </div>
  </div>
</template>
<script setup>
import { Notebook, Calendar } from '@element-plus/icons-vue'

defineProps({
  text: {
    type: String,
    default: ''
  },
  html: {
    type: String,
    default: ''
  },
  data: {
    type: Object,
    default: () => {}
  }
})
</script>

<style lang="scss" scoped>
.content {
  margin: 3rem auto;
  max-width: 130rem;
  @media screen and (max-width: 750px) {
    margin: 0;
  }
  &-wrap {
    margin: auto 5rem;
    list-style: none;
    box-shadow: 1px 2px 3px #ddd;
    border: 1px solid #ddd;
    border-radius: 3px;
    @media screen and (max-width: 750px) {
      margin: auto 0;
    }
    .header {
      text-align: center;
      border-bottom: 1px solid #e8e8e8;
      .title {
        color: #555;
        font-size: 26px;
        margin-top: 20px;
        margin-bottom: 15px;
      }
      .msg {
        font-size: 13px;
        color: #999;
        margin-bottom: 15px;
      }
      .icon {
        vertical-align: -0.1em;
        margin-right: 5px;
      }
    }
  }
}
</style>
