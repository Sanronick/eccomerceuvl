import config from '../config.js'
import ModelFactory from '../model/DAOs/pedidos/pedidosFactory.js'

class Service {
    #model = null

    constructor() {
        //this.#model = config.MODO_PERSISTENCIA == 'FILE'? new ModelFile() : new ModelMem()
        this.#model = ModelFactory.get(config.MODO_PERSISTENCIA_PEDIDOS)
    }
        
        obtenerPedidos = async function() {      //function
            const pedido = await this.#model.obtenerPedidos()
            return pedido
        }
        
        
        guardarPedido = async pedido => {
            const pedidoGuardado = await this.#model.guardarProducto(pedido)
            return pedidoGuardado
        }
    }

export default Service