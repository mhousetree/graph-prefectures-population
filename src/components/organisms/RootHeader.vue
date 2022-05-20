<script setup>
import H1Heading from "../atoms/H1Heading.vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header>
    <H1Heading :content="title" />
  </header>
</template>

<style scoped lang="scss">
header {
  text-align: center;
}
</style>
