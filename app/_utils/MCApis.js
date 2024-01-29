const { default: axiosClient } = require("./axiosClient");

const getAllCats = ()=>axiosClient.get('/get_all_cats?=');

export default {
  getAllCats
}