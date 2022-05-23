<script setup lang="ts">
defineProps<{
  checkboxId: string;
  checkboxValue: string;
}>();

const emit = defineEmits<{
  (e: "change", value: string): void;
}>();

const updateValue = (e: Event) => {
  const target = e.target as HTMLInputElement;

  emit("change", target.value);
};
</script>

<template>
  <input
    type="checkbox"
    :id="checkboxId"
    :value="checkboxValue"
    @change="updateValue"
  />
</template>

<style scoped lang="scss">
input {
  display: none;
}
</style>
