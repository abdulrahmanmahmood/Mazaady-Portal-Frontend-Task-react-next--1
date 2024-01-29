const { default: axiosClient } = require("./axiosClient");

const getMaincategories = ()=>{
  axiosClient.get('/get_all_cats?=')
}

export default {
  getMaincategories
}