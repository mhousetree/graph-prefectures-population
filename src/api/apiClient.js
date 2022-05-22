import axios from "axios";

export const getPrefectures = async () => {
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

export const getTotalPopulation = async (prefCode) => {
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
