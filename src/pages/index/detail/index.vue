<template>
  <ui-article :text="content"></ui-article>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import article from "@/static/article/article";

const router = useRouter();
const index = router.currentRoute.value.query.id;
const content = ref({});
content.value = article[index].content;
</script>

<style lang="scss" scoped></style>
