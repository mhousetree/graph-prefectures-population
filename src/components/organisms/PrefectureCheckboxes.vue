<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import LabeledCheckbox from "../morecules/LabeledCheckbox.vue";

const prefInfos = ref([]);

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

onMounted(async () => {
  prefInfos.value = await getPrefectures();
});
</script>

<template>
  <LabeledCheckbox
    v-for="prefInfo in prefInfos"
    :key="prefInfo.prefCode"
    :id="prefInfo.prefCode"
    :label="prefInfo.prefName"
  />
</template>

<style scoped lang="scss"></style>
