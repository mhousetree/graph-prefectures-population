<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
});
</script>

<template>
  <input type="checkbox" :id="id" :value="id" />
</template>

<style scoped lang="scss">
input {
  display: none;
}
</style>
