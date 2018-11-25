const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller');
require('dotenv').config()

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/dollars/:yyyy/:mm/:dd', (req, res) => {
  console.log('req', req.params);
  const dollar = controller.dollar(req.params.yyyy, req.params.mm, req.params.dd, process.env.SBIF_API_KEY);
  dollar.then(
    (resp) => {
      res.json(resp);
    });
});

const port = 3000;
app.listen(port, function () {
  console.log('listening on http://localhost:', port);
});