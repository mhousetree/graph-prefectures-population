<script setup>
import { ref, toRefs, watch } from "vue";
import { computed } from "@vue/reactivity";
import axios from "axios";
import { Chart } from "highcharts-vue";

import colors from "@/utils/colors";

const props = defineProps({
  checkedPrefs: {
    type: Array,
    required: true,
  },
  prefNameByPrefCode: {
    type: Object,
    required: true,
  },
});

const populationByPrefCode = ref({});
const series = ref([]);

const { checkedPrefs } = toRefs(props);

const getTotalPopulation = async (prefCode) => {
  const response = await axios.get(
    import.meta.env.VITE_API_URL + "/api/v1/population/composition/perYear",
    {
      params: {
        prefCode: prefCode,
        cityCode: "-",
      },
      headers: {
        "X-API-KEY": import.meta.env.VITE_API_KEY,
      },
    }
  );
  return response.data.result.data.find((v) => v.label === "総人口").data;
};

const updatePopulationByPrefCode = async () => {
  for (const prefCode of checkedPrefs.value) {
    const hasPopulationData = Object.prototype.hasOwnProperty.call(
      populationByPrefCode.value,
      prefCode
    );

    if (!hasPopulationData) {
      const population = await getTotalPopulation(prefCode);
      const data = population.map((x) => [x.year, x.value]);
      populationByPrefCode.value[prefCode] = data;
    }
  }
};

watch(
  checkedPrefs,
  async () => {
    await updatePopulationByPrefCode();

    series.value = checkedPrefs.value.map((prefCode) => {
      return {
        color: colors[prefCode],
        name: props.prefNameByPrefCode[prefCode],
        data: populationByPrefCode.value[prefCode],
      };
    });
  },
  { deep: true }
);

const chartOptions = computed(() => {
  return {
    title: { text: "人口数", align: "left" },
    yAxis: { title: { text: null } },
    series: series.value,
    plotOptions: {
      series: {
        events: {
          legendItemClick: function (e) {
            e.preventDefault();
          },
        },
      },
    },
  };
});
</script>

<template>
  <section>
    <Chart v-if="checkedPrefs.length !== 0" :options="chartOptions"></Chart>
    <p v-else class="graph-placeholder">
      チェックするとここにグラフが表示されます
    </p>
  </section>
</template>

<style scoped lang="scss">
section {
  margin-top: 1rem;
}
p.graph-placeholder {
  text-align: center;
  padding: 3rem 0;
  background-color: #eee;
  border-radius: 0.5rem;
  border: 1px dashed #ccc;
}
</style>
