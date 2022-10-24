<template>
  <div class="content">
    <div class="content-wrap">
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
defineProps({
  text: {
    type: String,
    default: "",
  },
  html: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.content {
  margin: 30px auto;
  max-width: 110rem;

  &-wrap {
    margin: auto 50px;
    list-style: none;
    box-shadow: 1px 2px 3px #ddd;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
}
</style>
