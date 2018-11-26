const mongoose = require('mongoose');

const DollarEsquema = new mongoose.Schema({
  Valor: String,
  Fecha: String
});

const Dollar = mongoose.model('dollar', DollarEsquema);

const openMongoose = () => {
  mongoose.connect('mongodb://localhost/dollar', { useNewUrlParser: true })
};

const closeMongoose = () => {
  mongoose.connection.close()
};

const guardarDollar = (val, fecha) => {
  openMongoose();

  Dollar.create({
    Valor: val,
    Fecha: fecha
  }).then(function (err, dollar) {
    // console.log(err, dollar);
    closeMongoose();
  });
};

const buscarFecha = (fecha) => {
  openMongoose();

  const x = Dollar.findOne({ Fecha: fecha });
  var promise = x.exec();
  return promise.then((valor) => {
    closeMongoose();
    return valor
  })
};

module.exports = {
  'guardarDollar': guardarDollar,
  'buscarFecha': buscarFecha
};