<script setup>
defineProps({
  content: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <h1>
    {{ content }}
  </h1>
</template>

<style scoped lang="scss">
h1 {
  background-color: #ccc;
}
</style>
