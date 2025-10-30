import fs from 'fs'

class ModelFile {
    #nombreArchivo = ''

    constructor() {
        this.#nombreArchivo = 'productos.json'
    }

    // --------------- Funciones para acceder al sistema de archivo (read/write) -------------
    #leerArchivo = async nombre => {
        let productos = []
        try {
            productos = JSON.parse(await fs.promises.readFile(nombre, 'utf-8'))
            //console.log(productos)
        }
        catch {}

        return productos
    }

    #escribirArchivo = async (nombre, productos) => {
        await fs.promises.writeFile(nombre, JSON.stringify(productos, null, '\t'))
    }
    // ---------------------------------------------------------------------------------------

    obtenerProductos = async () => {
        const productos = await this.#leerArchivo(this.#nombreArchivo)
        return productos
    }

    obtenerProducto = async id => {
        const productos = await this.#leerArchivo(this.#nombreArchivo)
        const producto = productos.find(p => p.id == id)
        return producto || {}
    }

    guardarProducto = async producto => {
        const productos = await this.#leerArchivo(this.#nombreArchivo)
        producto.id = String((parseInt(productos[productos.length-1]?.id) || 0) + 1)   // ?. optional chaining con || short circuit operator
        productos.push(producto)
        await this.#escribirArchivo(this.#nombreArchivo, productos)

        return producto
    }

    actualizarProducto = async (id,producto) => {
        const productos = await this.#leerArchivo(this.#nombreArchivo)
        producto.id = id
        const index = productos.findIndex(p => p.id == id)
        productos.splice(index, 1, producto)
        await this.#escribirArchivo(this.#nombreArchivo, productos)

        return producto
    }

    borrarProducto = async id => {
        const productos = await this.#leerArchivo(this.#nombreArchivo)
        const index = productos.findIndex(p => p.id == id)
        const producto = productos.splice(index, 1)[0]
        await this.#escribirArchivo(this.#nombreArchivo, productos)

        return producto    
    }
}

export default ModelFile