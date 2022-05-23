<script setup lang="ts">
import { onMounted, ref } from "vue";

import WithHeader from "@/components/templates/WithHeader.vue";
import PrefectureCheckboxes from "@/components/organisms/PrefectureCheckboxes.vue";
import PopulationGraph from "@/components/organisms/PopulationGraph.vue";

import { getPrefectures } from "@/api/apiClient";

type Prefecture = {
  prefCode: number;
  prefName: string;
};

const pageTitle = "都道府県別の総人口";

const prefNameByPrefCode = ref(new Map<number, string>());
const checkedPrefs = ref<Array<number>>([]);

const setPrefNameByPrefCode = async () => {
  const response = await getPrefectures();
  response.forEach((e: Prefecture) => {
    prefNameByPrefCode.value.set(e.prefCode, e.prefName);
  });
};

const updateCheckedPrefs = (data: Array<number>) => {
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
