<script setup lang="ts">
import { ref } from "vue";

import LabeledCheckbox from "@/components/morecules/LabeledCheckbox.vue";
import colors from "@/utils/colors";

defineProps<{
  prefNameByPrefCode: Map<number, string>;
}>();

const emit = defineEmits<{
  (e: "updateCheckedPrefs", value: Array<number>): void;
}>();

const checkedPrefs = ref<Array<number>>([]);

const updateEvent = (data: string) => {
  if (!checkedPrefs.value.includes(Number(data))) {
    checkedPrefs.value.push(Number(data));
  } else {
    const index = checkedPrefs.value.indexOf(Number(data));
    checkedPrefs.value.splice(index, 1);
  }

  emit("updateCheckedPrefs", checkedPrefs.value);
};
</script>

<template>
  <section>
    <LabeledCheckbox
      v-for="[prefCode, prefName] in prefNameByPrefCode"
      :key="prefCode"
      :checkboxId="String(prefCode)"
      :checkboxValue="String(prefCode)"
      :labelValue="prefName"
      :color="colors.has(prefCode) ? colors.get(prefCode)! : '#eee'"
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
