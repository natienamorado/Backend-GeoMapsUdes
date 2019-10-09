let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bloqueSchema = new Schema({

    Bloque: {
        type: String
    },
    Aula: {
        type: String
    },
    descripcion: {
        type: String
    },
    imagen: {
        type: String
    }

})

module.exports = mongoose.model('bloque', bloqueSchema)