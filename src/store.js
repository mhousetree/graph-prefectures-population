import { reactive } from "vue";
import axios from "axios";
import { debugLog, errorLog } from "@/utils/log.js";

const store = {
  state: reactive({
    checkedPrefs: [],
    populationByPrefCode: {},
  }),

  setCheckedPrefs(newValue) {
    this.state.checkedPrefs = newValue;
  },

  async setPopulationByPrefCode(prefCode) {
    const hasPopulationData = Object.prototype.hasOwnProperty.call(
      this.state.populationByPrefCode,
      prefCode
    );

    const getTotalPopulation = async (prefCode) => {
      try {
        const response = await axios.get(
          import.meta.env.VITE_API_URL +
            "/api/v1/population/composition/perYear?prefCode=" +
            prefCode +
            "&cityCode=-",
          {
            headers: {
              "X-API-KEY": import.meta.env.VITE_API_KEY,
            },
          }
        );
        return response.data.result.data[0].data;
      } catch (error) {
        errorLog(error);
        return undefined;
      }
    };

    if (!hasPopulationData) {
      const population = await getTotalPopulation(prefCode);
      this.state.populationByPrefCode[prefCode] = population;
    }

    debugLog(this.state.populationByPrefCode);
  },
};

export default store;
