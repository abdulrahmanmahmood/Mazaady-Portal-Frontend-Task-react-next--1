const { default: axiosClient } = require("./axiosClient");


const getCarBrand = ()=>axiosClient.get('/properties?cat=13 (2)')

export default{}