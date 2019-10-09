let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let pisosSchema = new Schema({

    Bloque: {
        type: String
    },
    Piso: {
        type: String
    },
    Imagen: {
        type: String
    }

})

module.exports=mongoose.model('Piso',pisosSchema)