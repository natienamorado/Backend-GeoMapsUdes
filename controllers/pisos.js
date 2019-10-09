let Piso = require('../models/pisos')



let SetPiso = async function (req, res) {

    try {
        let newpiso = new Piso();
        newpiso.Bloque = 1;
        newpiso.Piso = 2;
        newpiso.Imagen = 'url';

        let pisss = await newpiso.save();
        let piso = await Piso.find();
        return res.status(200).json({
            pisss
        })





    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}


let GetPiso = async function (req, res) {
    let { bloque, piso } = req.params;
    try {

        let findPiso = await Piso.findOne({ Bloque: bloque, Piso: piso });
        if (!findPiso) {
            return res.status(404).json({
                message: 'el piso no existe'
            })
        }
        return res.status(200).json({
            findPiso
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

module.exports = {
    GetPiso
}