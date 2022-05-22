import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_URL + "/api/v1/",
  headers: {
    "X-API-KEY": import.meta.env.VITE_API_KEY,
  },
});

export const getPrefectures = async () => {
  const response = await instance.get("prefectures");
  return response.data.result;
};

export const getTotalPopulation = async (prefCode) => {
  const response = await instance.get("population/composition/perYear", {
    params: {
      prefCode: prefCode,
      cityCode: "-",
    },
  });
  return response.data.result.data.find((v) => v.label === "総人口").data;
};
