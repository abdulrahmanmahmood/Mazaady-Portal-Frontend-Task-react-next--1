const { default: axios } = require("axios");


const apiKey = '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16'
const apiUrl = "https://staging.mazaady.com/api/v1/get_all_cats?=";


const axiosClient = axios.create({
  baseURL:apiUrl,
  headers

})