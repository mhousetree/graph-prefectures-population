<script setup>
import { ref } from "vue";

import LabeledCheckbox from "@/components/morecules/LabeledCheckbox.vue";
import colors from "@/utils/colors";

const checkedPrefs = ref([]);

defineProps({
  prefNameByPrefCode: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["updateCheckedPrefs"]);

const updateEvent = (data) => {
  if (!checkedPrefs.value.includes(data)) {
    checkedPrefs.value.push(data);
  } else {
    const index = checkedPrefs.value.indexOf(data);
    checkedPrefs.value.splice(index, 1);
  }

  emit("updateCheckedPrefs", checkedPrefs.value);
};
</script>

<template>
  <section>
    <LabeledCheckbox
      v-for="(prefName, prefCode) in prefNameByPrefCode"
      :key="prefCode"
      :checkboxId="prefCode"
      :checkboxValue="prefCode"
      :labelValue="prefName"
      :color="colors[prefCode]"
      @change="updateEvent"
    />
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}
</style>
