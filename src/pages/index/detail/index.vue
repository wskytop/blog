<template>
  <ui-article
    :text="data.content"
    :data="data"
    v-title
    :data-title="data.title"
  ></ui-article>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import article from '@/static/article/article'

const router = useRouter()
const index = router.currentRoute.value.query.id
const data = ref()
data.value = article.find((i) => i.id == index)
</script>

<style lang="scss" scoped></style>
