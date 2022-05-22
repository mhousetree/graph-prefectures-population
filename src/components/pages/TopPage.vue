<script setup>
import { onMounted, ref } from "vue";

import WithHeader from "@/components/templates/WithHeader.vue";
import PrefectureCheckboxes from "@/components/organisms/PrefectureCheckboxes.vue";
import PopulationGraph from "@/components/organisms/PopulationGraph.vue";

import { getPrefectures } from "@/api/apiClient";
import { debugLog } from "@/utils/log";

const pageTitle = "都道府県別の総人口";

const prefNameByPrefCode = ref({});
const checkedPrefs = ref([]);

const setPrefNameByPrefCode = async () => {
  const response = await getPrefectures();
  response.forEach((e) => {
    prefNameByPrefCode.value[String(e.prefCode)] = e.prefName;
  });
  debugLog("set prefNameByPrefCode: ", prefNameByPrefCode.value);
};

const updateCheckedPrefs = (data) => {
  checkedPrefs.value = data;
};

onMounted(() => {
  setPrefNameByPrefCode();
  document.title = pageTitle;
});
</script>

<template>
  <WithHeader title="都道府県別の総人口">
    <PrefectureCheckboxes
      :prefNameByPrefCode="prefNameByPrefCode"
      @updateCheckedPrefs="updateCheckedPrefs"
    />
    <PopulationGraph
      :prefNameByPrefCode="prefNameByPrefCode"
      :checkedPrefs="checkedPrefs"
    />
  </WithHeader>
</template>
