import Servicio from '../servicio/pedidos.js'


class Controlador {
    #servicio = null

    constructor() {
        this.#servicio = new Servicio()
    }

    obtenerPedidos = async (req,res) => {
        try {
            const pedidos = await this.#servicio.obtenerPedidos()
            res.json(pedidos)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }

    guardarPedido = async (req,res) => {
        try {
            const pedido = req.body

            //validación genérica
            if(!Object.keys(pedido).length) throw new Error('El pedido está vacío')

            const pedidoGuardado = await this.#servicio.guardarPedido(pedido)
            res.json(pedidoGuardado)
        }
        catch(error) {
            res.status(500).json({error: error.message})
        }
    }
}


export default Controlador