const axios = require('axios')
const sbif = (yyyy, mm, dd, apiKey) => {
  return axios.get(`https://api.sbif.cl/api-sbifv3/recursos_api/dolar/${yyyy}/${mm}/dias/${dd}?apikey=${apiKey}&formato=json`)
    .then((response) => {
      console.log('sbif:', response.data);
      return response.data;
    })
    .catch((error) => {
      console.log('error:', error.response.data);
      return {
        "Dolares": [{
          "Valor": "-",
          "Fecha": `${yyyy}-${mm}-${dd}`
        }]
      };
    });
};


module.exports = sbif;