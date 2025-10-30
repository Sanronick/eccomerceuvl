import express from 'express'

import Controlador from '../controlador/productos.js'


class Router {
    #controlador = null
    constructor() {
        this.#controlador = new Controlador()
    }

    config() {
        const router = express.Router()

        router.get('{/:id}',this.#controlador.obtenerProductos)
        router.post('/', this.#controlador.guardarProducto)
        router.put('/:id', this.#controlador.actualizarProducto)
        router.delete('/:id', this.#controlador.borrarProducto)

        return router
    }
}

export default Router