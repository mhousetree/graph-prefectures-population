<script setup>
import AlternativeCheckbox from "../atoms/AlternativeCheckbox.vue";
// TODO: コンポーネントごと削除するか、孫コンポーネントから値を取ってくる
// import DisplayNoneCheckbox from "../atoms/DisplayNoneCheckbox.vue";
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

const emit = defineEmits(["change"]);

const updateValue = (e) => {
  emit("change", e.target.value);
};
</script>

<template>
  <div>
    <!-- <DisplayNoneCheckbox :id="id" /> -->
    <input type="checkbox" :id="id" :value="id" @change="updateValue" />
    <label :for="id">
      <AlternativeCheckbox />
      {{ label }}
    </label>
  </div>
</template>

<style scoped lang="scss">
div {
  width: fit-content;
}

label {
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0 0.5em;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: 0.2s;

  &:hover {
    border: 1px solid transparent;
    box-shadow: 0 3px 5px #cccc;
    transform: translateY(-1px);
  }
}

input {
  display: none;
}
</style>
