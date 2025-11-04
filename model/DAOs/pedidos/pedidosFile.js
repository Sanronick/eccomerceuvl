import fs from 'fs'

class ModelFile {
    #nombreArchivo = ''

    constructor() {
        this.#nombreArchivo = 'pedidos.json'
    }

    // --------------- Funciones para acceder al sistema de archivo (read/write) -------------
    #leerArchivo = async nombre => {
        let pedidos = []
        try {
            pedidos = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
        }
        catch {}

        return pedidos
    }

    #escribirArchivo = async (nombre, pedidos) => {
        await fs.promises.writeFile(nombre, JSON.stringify(pedidos, null, '\t'))
    }
    // ---------------------------------------------------------------------------------------

    obtenerPedidos = async () => {
        const pedidos = await this.#leerArchivo(this.#nombreArchivo)
        return pedidos
    }

    guardarPedido = async pedido => {
        const pedidos = await this.#leerArchivo(this.#nombreArchivo)
        pedido.id = String((parseInt(pedidos[pedidos.length-1]?.id) || 0) + 1)   // ?. optional chaining con || short circuit operator
        pedidos.push(pedido)
        await this.#escribirArchivo(this.#nombreArchivo, pedidos)

        return pedido
    }
}

export default ModelFile