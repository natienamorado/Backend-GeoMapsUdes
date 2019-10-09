let express=require('express')

let route=express.Router();
let {GetPiso}=require('../controllers/pisos')

route.get('/pisos/:bloque/:piso',GetPiso);

module.exports=route;