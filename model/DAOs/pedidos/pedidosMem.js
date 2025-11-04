class ModelMem {
    #pedidos = []

    constructor() {
        // recurso de datos
        this.#pedidos = []
    }

    obtenerPedidos = async () => this.#pedidos

    guardarPedido = async pedido => {
        pedido.id = String((parseInt(this.#pedidos[this.#pedidos.length-1]?.id) || 0) + 1)   // ?. optional chaining con || short circuit operator
        this.#pedidos.push(pedido)
        return pedido
    }
}

export default ModelMem