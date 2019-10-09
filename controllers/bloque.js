let Bloque = require('../models/bloques')


let GetBloque = async function (req, res) {
    let { bloque, aula } = req.params;
    try {

        let findBLoque = await Bloque.findOne({ Bloque: bloque, Aula: aula });
        if (!findBLoque) {
            return res.status(404).json({
                message: 'el bloque no existe'
            })
        }

        return res.status(200).json({
            findBLoque
        })
    } catch (error) {
        return res.status(500).json({
            error
        })
    }
}

module.exports = {
    GetBloque
}