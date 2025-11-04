import Servicio from '../servicio/upload.js'


class Controlador {
    #servicio = null

    constructor() {
        this.#servicio = new Servicio()
    }

    recibirArchivo = async (req,res) => {
        try {
            const file = req.file
            const urlFoto = await this.#servicio.recibirArchivo(file)
            res.json({urlFoto})     // es igual a -> { urlFoto: urlFoto }
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }
}


export default Controlador