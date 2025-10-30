//import ModelMem from '../model/DAOs/productosMem.js'
//import ModelFile from '../model/DAOs/productosFile.js'

import config from '../config.js'
import ModelFactory from '../model/DAOs/pedidos/pedidosFactory.js'


class Servicio {
    #model = null

    constructor() {
        this.#model = ModelFactory.get(config.MODO_PERSISTENCIA_PEDIDOS)
    }

    obtenerPedidos = async function() {
        const pedidos = await this.#model.obtenerPedidos()
        return pedidos
    }

    guardarPedido = async pedido => {
        const pedidoGuardado = await this.#model.guardarPedido(pedido)
        return pedidoGuardado
    }
}

export default Servicio