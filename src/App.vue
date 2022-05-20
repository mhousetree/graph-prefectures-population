<script setup>
import RootHeader from "./components/organisms/RootHeader.vue";
</script>

<template>
  <RootHeader title="Title" />
  <main></main>
</template>

<style>
@import "./assets/base.css";

#app {
  max-width: 1280px;
  margin: 0 auto;

  font-weight: normal;
}

header {
  line-height: 1.5;
}
</style>
