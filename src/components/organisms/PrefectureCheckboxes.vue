<script setup lang="ts">
import { ref } from "vue";

import LabeledCheckbox from "@/components/morecules/LabeledCheckbox.vue";
import colors from "@/definitions/colors";
import regions from "@/definitions/regions";

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
  <section class="prefs-wrapper pc-none">
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
  <section v-if="prefNameByPrefCode.size !== 0" class="sp-none">
    <section
      v-for="[region, prefs] in regions"
      :key="region"
      class="region-wrapper"
    >
      <h2>{{ region }}</h2>
      <section class="prefs-wrapper">
        <LabeledCheckbox
          v-for="prefCode in prefs"
          :key="prefCode"
          :checkboxId="'pc' + String(prefCode)"
          :checkboxValue="String(prefCode)"
          :labelValue="prefNameByPrefCode.get(prefCode)"
          :color="colors.has(prefCode) ? colors.get(prefCode)! : '#eee'"
          @change="updateEvent"
        />
      </section>
    </section>
  </section>
  <p v-else>読み込み中</p>
</template>

<style scoped lang="scss">
.prefs-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
}

.sp-none {
  display: none;
}

@include mq_pc {
  .sp-none {
    display: block;
  }
  .pc-none {
    display: none;
  }

  .region-wrapper {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-bottom: 0.5em;
    h2 {
      text-align: right;
      font-size: 1rem;
      width: 6em;
    }
  }
}
</style>
