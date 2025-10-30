import Servicio from '../servicio/productos.js'


class Controlador {
    #servicio = null

    constructor() {
        this.#servicio = new Servicio()
        //this.obtenerProductos = this.obtenerProductos.bind(this) // (1)
    }

    obtenerProductos = async (req,res) => {
        try {
            const { id } = req.params
            const productoS = await this.#servicio.obtenerProductos(id)
            res.json(productoS)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    guardarProducto = async (req,res) => {
        try {
            const producto = req.body

            //validación genérica
            if(!Object.keys(producto).length) throw new Error('El producto está vacío')

            const productoGuardado = await this.#servicio.guardarProducto(producto)
            res.json(productoGuardado)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    actualizarProducto = async (req,res) => {
        try {
            const { id } = req.params
            const producto = req.body

            const productoActualizado = await this.#servicio.actualizarProducto(id, producto)
            res.json(productoActualizado)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }            
    }

    borrarProducto = async (req,res) => {
        try {
            const { id } = req.params
            const productoEliminado = await this.#servicio.borrarProducto(id)
            res.json(productoEliminado)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }            
    }
}


export default Controlador