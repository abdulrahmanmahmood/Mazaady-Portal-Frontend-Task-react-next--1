const { default: axiosClient } = require("./axiosClient");

const getCarBrand = () => axiosClient.get("/properties?cat=13 (2)");
const getCarModel = () => axiosClient.get("get-options-child/22");
const getCAr

export default {
  getCarBrand,
  getCarModel,
};
