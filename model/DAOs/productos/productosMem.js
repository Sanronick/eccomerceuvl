class ModelMem {
    #productos = []

    constructor() {
        // recurso de datos
        this.#productos = [
            {
                nombre: "Computadora",
                precio: 200,
                stock: 15,
                marca: "Outdoors",
                categoria: "Bespoke Rubber Keyboard",
                detalles: "The sleek and wasteful Pizza comes with azure LED lighting for smart functionality",
                foto: "https://avatars.githubusercontent.com/u/78468257",
                envio: true,
                id: "1"
            },
            {
                nombre: "Salad",
                precio: "484.69",
                stock: 11,
                marca: "Games",
                categoria: "Practical Cotton Chips",
                detalles: "Savor the sweet essence in our Salad, designed for evil culinary adventures",
                foto: "https://avatars.githubusercontent.com/u/34868546",
                envio: false,
                id: "4"
            },
            {
                nombre: "Pizza",
                precio: 12345,
                stock: 46,
                marca: "Tools",
                categoria: "Incredible Metal Soap",
                detalles: "The sleek and rectangular Bike comes with lime LED lighting for smart functionality",
                foto: "https://avatars.githubusercontent.com/u/81885631",
                envio: false,
                id: "6"
            }
        ]
    }

    obtenerProductos = async () => this.#productos

    obtenerProducto = async id => {
        const producto = this.#productos.find(p => p.id == id)
        return producto || {}
    }

    guardarProducto = async producto => {
        producto.id = String((parseInt(this.#productos[this.#productos.length-1]?.id) || 0) + 1)   // ?. optional chaining con || short circuit operator
        this.#productos.push(producto)
        return producto
    }

    actualizarProducto = async (id,producto) => {
        producto.id = id

        const index = this.#productos.findIndex(p => p.id == id)
        this.#productos.splice(index, 1, producto)

        return producto
    }

    borrarProducto = async id => {
        const index = this.#productos.findIndex(p => p.id == id)
        const producto = this.#productos.splice(index, 1)[0]

        return producto    
    }
}

export default ModelMem