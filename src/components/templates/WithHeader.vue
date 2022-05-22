<script setup>
import RootHeader from "@/components/organisms/RootHeader.vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <RootHeader :title="title" />
  <main>
    <slot></slot>
  </main>
</template>

<style scoped lang="scss">
main {
  padding: 0.5rem;
}
</style>
