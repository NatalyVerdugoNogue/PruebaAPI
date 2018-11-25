const axios = require('axios')
const sbif = (yyyy, mm, dd, apiKey) => {
  return axios.get(`https://api.sbif.cl/api-sbifv3/recursos_api/dolar/${yyyy}/${mm}/dias/${dd}?apikey=${apiKey}&formato=json`)
    .then(function (response) {
      return response.data;
      // console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};


module.exports = sbif;