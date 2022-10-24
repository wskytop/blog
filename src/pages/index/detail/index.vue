<template>
  <ui-article
    :text="article[index].content"
    :data="article[index]"
    v-title
    :data-title="article[index].title"
  ></ui-article>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import article from "@/static/article/article";

const router = useRouter();
const index = router.currentRoute.value.query.id;
</script>

<style lang="scss" scoped></style>
