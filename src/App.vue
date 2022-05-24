<script setup lang="ts">
import TopPage from "@/components/pages/TopPage.vue";
</script>

<template>
  <component :is="TopPage" />
</template>

<style lang="scss">
@import "@/assets/scss/_base.scss";
#app {
  max-width: 1280px;
  margin: 0 auto;

  font-weight: normal;
}
</style>
