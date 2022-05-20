<script setup>
import AlternativeCheckbox from "../atoms/AlternativeCheckbox.vue";
import DisplayNoneCheckbox from "../atoms/DisplayNoneCheckbox.vue";
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
    <DisplayNoneCheckbox :id="id" />
    <label :for="id">
      <AlternativeCheckbox />
      {{ label }}
    </label>
  </div>
</template>

<style scoped lang="scss">
label {
  display: flex;
  align-items: center;
  gap: 0.5em;
}
</style>
