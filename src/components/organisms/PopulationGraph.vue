<script setup lang="ts">
import { ref, toRefs, watch } from "vue";
import { computed } from "@vue/reactivity";
import { Chart } from "highcharts-vue";

import { getTotalPopulation } from "@/api/apiClient";

import colors from "@/utils/colors";

type SeriesElement = {
  color?: string;
  name?: string;
  data?: Array<Array<number>>;
};

const props = defineProps<{
  checkedPrefs: Array<number>;
  prefNameByPrefCode: Map<number, string>;
}>();

const populationByPrefCode = ref(new Map<number, Array<Array<number>>>());
const series = ref(new Array<SeriesElement>());

const { checkedPrefs } = toRefs(props);

const updatePopulationByPrefCode = async () => {
  for (const prefCode of checkedPrefs.value) {
    const hasPopulationData = populationByPrefCode.value.has(prefCode);

    if (!hasPopulationData) {
      const population = await getTotalPopulation(prefCode);
      const data = population.map((x) => [x.year, x.value]);
      populationByPrefCode.value.set(prefCode, data);
    }
  }
};

watch(
  checkedPrefs,
  async () => {
    await updatePopulationByPrefCode();

    series.value = checkedPrefs.value.map((prefCode) => {
      return {
        color: colors.get(prefCode),
        name: props.prefNameByPrefCode.get(prefCode),
        data: populationByPrefCode.value.get(prefCode),
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
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          legendItemClick: function (e: any) {
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
