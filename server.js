import express from 'express'
import RouterProductos from './router/productos.js'
import RouterPedidos from './router/pedidos.js'

import cors from 'cors'

class Server {
    #port = null
    #routerProductos = null
    #routerPedidos = null

    constructor(port) {
        this.#port = port
        this.#routerProductos = new RouterProductos()
        this.#routerPedidos = new RouterPedidos()
    }

    start() {
        const app = express()
        app.use(cors())
        app.use(express.json())

        app.use(express.static('public')) 

        /* --------------------------------------------------------- */
        /*              Servicio API RESTful ECommerce               */
        /* --------------------------------------------------------- */
        app.use('/api/productos', this.#routerProductos.config())
        app.use('/api/pedidos', this.#routerPedidos.config())

        const PORT = this.#port
        const server = app.listen(PORT, () => console.log(`Servidor http express escuchando en http://localhost:${PORT}`))
        server.on('error', error => console.log(`Error en servidor http: ${error.message}`))
    }
}

export default Server