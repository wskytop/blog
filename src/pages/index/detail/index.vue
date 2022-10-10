<template>
  <ui-article :data="content"></ui-article>
</template>

<script setup>
import { useRouter } from "vue-router";
import article from '@/static/article/article'
import { reactive,ref } from "vue-demi";

const router = useRouter()
const index = router.currentRoute.value.query.id
const content = ref({})
content.value = article[index].content
</script>

<style lang="scss" scoped>

</style>