<script setup>
import RootHeader from "./components/organisms/RootHeader.vue";
import PrefectureCheckboxes from "./components/organisms/PrefectureCheckboxes.vue";
</script>

<template>
  <RootHeader title="Title" />
  <main>
    <PrefectureCheckboxes />
  </main>
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
