var mongoose = require('mongoose')
var express = require('express')
var app = express();
var body_parser = require('body-parser')
var route = require('../routes/index')
var cookieParser = require('cookie-parser')


app.use(cookieParser())
app.use(route);
app.use('/*', (req, res) => {
    res.status(404).json({
        err: 'la ruta no existe'
    })
})
app.use(body_parser.urlencoded({ extended: false }));
app.use(body_parser.json());

mongoose.connect('mongodb://localhost:27017/GeoMapsUdea', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log(err);
        return console.log('no hay conexion');
    }
    app.listen(process.env.PORT || 3000, function () {
        console.log(`escuchando puerto ${process.env.PORT || 3000}`);

    })

})
