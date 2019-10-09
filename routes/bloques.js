let express = require('express')

let route = express.Router();
let { GetBloque } = require('../controllers/bloque')

route.get('/bloque/:bloque/:aula', GetBloque);

module.exports = route;