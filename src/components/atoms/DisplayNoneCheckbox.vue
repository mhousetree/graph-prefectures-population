<script setup>
defineProps({
  checkboxId: {
    type: String,
    required: true,
  },
  checkboxValue: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["change"]);

const updateValue = (e) => {
  emit("change", e.target.value);
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
