<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";

import WithHeader from "@/components/templates/WithHeader.vue";
import PrefectureCheckboxes from "@/components/organisms/PrefectureCheckboxes.vue";
import PopulationGraph from "@/components/organisms/PopulationGraph.vue";
import { debugLog } from "@/utils/log";

const prefNameByPrefCode = ref({});
const checkedPrefs = ref([]);

const getPrefectures = async () => {
  const response = await axios.get(
    import.meta.env.VITE_API_URL + "/api/v1/prefectures",
    {
      headers: {
        "X-API-KEY": import.meta.env.VITE_API_KEY,
      },
    }
  );
  return response.data.result;
};

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

onMounted(async () => {
  setPrefNameByPrefCode();
});
</script>

<template>
  <WithHeader>
    <PrefectureCheckboxes
      :prefNameByPrefCode="this.prefNameByPrefCode"
      @updateCheckedPrefs="updateCheckedPrefs"
    />
    <PopulationGraph
      :prefNameByPrefCode="this.prefNameByPrefCode"
      :checkedPrefs="this.checkedPrefs"
    />
  </WithHeader>
</template>

<style></style>
