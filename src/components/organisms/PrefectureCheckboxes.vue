<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { debugLog } from "@/utils/log.js";

import LabeledCheckbox from "../morecules/LabeledCheckbox.vue";

const prefInfos = ref([]);
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

const updateEvent = (data) => {
  if (!checkedPrefs.value.includes(data)) {
    checkedPrefs.value.push(data);
  } else {
    const index = checkedPrefs.value.indexOf(data);
    checkedPrefs.value.splice(index, 1);
  }

  debugLog(checkedPrefs.value);
};

onMounted(async () => {
  prefInfos.value = await getPrefectures();
});
</script>

<template>
  <LabeledCheckbox
    v-for="prefInfo in prefInfos"
    name="checkedPrefs"
    :key="prefInfo.prefCode"
    :id="prefInfo.prefCode"
    :label="prefInfo.prefName"
    @change="updateEvent"
  />
</template>

<style scoped lang="scss"></style>
