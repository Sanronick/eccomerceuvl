//import ModelMem from '../model/DAOs/productosMem.js'
//import ModelFile from '../model/DAOs/productosFile.js'
import config from '../config.js'
import ModelFactory from '../model/DAOs/productos/productosFactory.js'
import { validar } from './validaciones/producto.js'

class Service {
    #model = null

    constructor() {
        //this.#model = config.MODO_PERSISTENCIA == 'FILE'? new ModelFile() : new ModelMem()
        this.#model = ModelFactory.get(config.MODO_PERSISTENCIA_PRODUCTOS)
    }

    //obtenerProductos = async id => {           //arrow function
    //async obtenerProductos (id) {              //function
    obtenerProductos = async function(id) {      //function
        if(id) {
            const producto = await this.#model.obtenerProducto(id)
            return producto
        }
        else{
            const productos = await this.#model.obtenerProductos()
            return productos
        }
    }
    
    guardarProducto = async producto => {
        //Validacion especifica
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
        const productoActualizado = await this.#model.actualizarProducto(id,producto)
        return productoActualizado
        
    }
    
    borrarProducto = async (id) => {
        const borrarProducto = await this.#model.borrarProducto(id)
        return borrarProducto
    }
}

export default Service