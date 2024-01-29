const { default: axios } = require("axios");


const apiKey = '3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16'
const apiUrl = "https://staging.mazaady.com/api/v1";


const axiosClient = axios.create({
  baseURL:apiUrl,
  headers:{
    'private-key':apiKey
  }

});

export default axiosClient;