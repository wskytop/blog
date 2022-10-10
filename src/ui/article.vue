<template>
  <div class="content">
    <div class="content-wrap">
      <v-md-preview :text="data"></v-md-preview>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  data:{
    type:String,
    default:''
  }
})
</script>

<style lang="scss" scoped>
.content {
  margin: 30px auto;
  max-width: 110rem;
  &-wrap {
    margin:  auto 50px;
    list-style: none;
    box-shadow: 1px 2px 3px #ddd;
    border: 1px solid #ddd;
    border-radius: 3px;
  }
}
</style>
