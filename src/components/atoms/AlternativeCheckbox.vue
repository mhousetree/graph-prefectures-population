<script setup>
import CheckboxMarkedIcon from "vue-material-design-icons/CheckBoxMarked.vue";
import CheckboxBlankOutlineIcon from "vue-material-design-icons/CheckBoxBlankOutline.vue";
</script>

<template>
  <CheckboxMarkedIcon :title="'checked checkbox for ' + label" />
  <CheckboxBlankOutlineIcon :title="'blank checkbox for ' + label" />
</template>

<style scoped lang="scss">
.checkbox-marked-icon {
  display: none;
}

input:checked + label {
  .checkbox-blank-outline-icon {
    display: none;
  }
  .checkbox-marked-icon {
    display: inline;
  }
}
</style>
