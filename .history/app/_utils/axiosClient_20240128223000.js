const { default: axios } = require("axios");


const apiUrl = "https://staging.mazaady.com/api/v1";
const headers = {
  "private-key": "3%o8i}_;3D4bF]G5@22r2)Et1&mLJ4?$@+16"
};

const axiosClient = axios.create({
  baseURL:apiUrl,
  headers:headers

});

export default axiosClient;