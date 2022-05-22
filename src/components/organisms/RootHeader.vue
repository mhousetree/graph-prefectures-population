<script setup>
import CenteredH1 from "../atoms/CenteredH1.vue";
defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <header>
    <CenteredH1 :content="title" />
  </header>
</template>
