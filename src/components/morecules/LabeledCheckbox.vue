<script setup>
import AlternativeCheckbox from "../atoms/AlternativeCheckbox.vue";
import DisplayNoneCheckbox from "../atoms/DisplayNoneCheckbox.vue";
defineProps({
  checkboxId: {
    type: String,
    required: true,
  },
  checkboxValue: {
    type: String,
    required: true,
  },
  labelValue: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["change"]);

const updateValue = (e) => {
  emit("change", e);
};
</script>

<template>
  <div>
    <DisplayNoneCheckbox
      :checkboxId="checkboxId"
      :checkboxValue="checkboxValue"
      @change="updateValue"
    />
    <label :for="checkboxId">
      <AlternativeCheckbox />
      <span>
        {{ labelValue }}
      </span>
    </label>
  </div>
</template>

<style scoped lang="scss">
div {
  width: fit-content;
  color: v-bind(color);
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

input:checked + label {
  border: 1px solid currentColor;
  background-color: currentColor;
  span {
    color: white;
  }
}
</style>
