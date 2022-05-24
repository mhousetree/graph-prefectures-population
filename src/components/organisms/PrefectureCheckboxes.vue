<script setup lang="ts">
import { ref } from "vue";

import LabeledCheckbox from "@/components/morecules/LabeledCheckbox.vue";
import colors from "@/definitions/colors";

defineProps<{
  prefNameByPrefCode: Map<number, string>;
}>();

const emit = defineEmits<{
  (e: "updateCheckedPrefs", value: Array<number>): void;
}>();

const checkedPrefs = ref<Array<number>>([]);

const updateEvent = (data: string) => {
  const checked = !checkedPrefs.value.includes(Number(data));
  if (checked) {
    checkedPrefs.value.push(Number(data));
  } else {
    const index = checkedPrefs.value.indexOf(Number(data));
    checkedPrefs.value.splice(index, 1);
  }

  emit("updateCheckedPrefs", checkedPrefs.value);
};
</script>

<template>
  <section class="prefs-wrapper" v-if="prefNameByPrefCode.size !== 0">
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
  <p v-else>読み込み中</p>
</template>

<style scoped lang="scss">
.prefs-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}
</style>
