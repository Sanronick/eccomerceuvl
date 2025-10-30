import config from '../config.js'
import ModelFactory from '../model/DAOs/productos/productosFactory.js'
import { validar } from './validaciones/producto.js'

class Servicio {
    #model = null

    constructor() {
        this.#model = ModelFactory.get(config.MODO_PERSISTENCIA_PRODUCTOS)
    }

    obtenerProductos = async function(id) {
        if(id) {
            const producto = await this.#model.obtenerProducto(id)
            return producto
        }
        else {
            const productos = await this.#model.obtenerProductos()
            return productos
        }
    }

    guardarProducto = async producto => {
        //validación específica
        const res = validar(producto)
        if(res.result) {
            const productoGuardado = await this.#model.guardarProducto(producto)
            return productoGuardado
        }
        else {
            //console.log(res.error)
            throw new Error(res.error.details[0].message)
        }
    }

    actualizarProducto = async (id, producto) => {
        const productoActualizado = await this.#model.actualizarProducto(id, producto)
        return productoActualizado
    }

    borrarProducto = async id => {
        const productoEliminado = await this.#model.borrarProducto(id)
        return productoEliminado
    }
}

export default Servicio