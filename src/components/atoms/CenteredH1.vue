<script setup lang="ts">
defineProps<{
  content: string;
}>();
</script>

<template>
  <h1>
    {{ content }}
  </h1>
</template>

<style scoped lang="scss">
h1 {
  background-color: #ccc;
  font-size: 1.5rem;
  line-height: 2;
  text-align: center;
}
</style>
