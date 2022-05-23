<script setup lang="ts">
import CenteredH1 from "@/components/atoms/CenteredH1.vue";
defineProps<{
  title: string;
}>();
</script>

<template>
  <header>
    <CenteredH1 :content="title" />
  </header>
</template>
