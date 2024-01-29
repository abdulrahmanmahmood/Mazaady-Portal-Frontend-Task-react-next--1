const { default: axiosClient } = require("./axiosClient");

const getMaincategries = ()=>{
  axiosClient.get('/get_all_cats?=')
}

export default {
  getMaincategries
}