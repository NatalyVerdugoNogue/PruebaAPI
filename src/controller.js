const sbif = require('./sbif');
const buscarFecha = require('./model').buscarFecha;
const guardarDollar = require('./model').guardarDollar;

const confirmarExistencia = (yyyy, mm, dd, apiKey) => {
  const bFecha = buscarFecha(`${yyyy}-${mm}-${dd}`);
  return bFecha.then((valor) => {
    if (valor === null) {
      const data = sbif(yyyy, mm, dd, apiKey);
      return data.then(sbifData => {
        guardarDollar(sbifData.Dolares[0].Valor, sbifData.Dolares[0].Fecha);
        const respuestaData = {
          "Valor": sbifData.Dolares[0].Valor,
          "Fecha": sbifData.Dolares[0].Fecha
        };
        return respuestaData;
        // console.log('', sbifData.Dolares[0].Valor, sbifData.Dolares[0].Fecha);
      });
    } else {

      const respuestaData = {
        "Valor": valor.Valor,
        "Fecha": valor.Fecha
      };
      // console.log(respuestaData);
      return respuestaData;
    };
  });

};

// const a = confirmarExistencia(2017, 10, 24, '4feac8b1ca6fdeff8e4f866b76b67c7d8f04d9db');
// console.log('---->', a);


module.exports = { 'dollar': confirmarExistencia }