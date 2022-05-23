<script setup lang="ts">
import RootHeader from "@/components/organisms/RootHeader.vue";

defineProps<{
  title: string;
}>();
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
