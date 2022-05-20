<script setup>
import AlternativeCheckbox from "../atoms/AlternativeCheckbox.vue";
defineProps({
  id: {
    type: Number,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div>
    <input type="checkbox" :id="id" :value="id" />
    <label :for="id">
      <AlternativeCheckbox />
      {{ label }}
    </label>
  </div>
</template>

<style scoped lang="scss">
label {
  display: flex;
}

input {
  display: none;
}
</style>
