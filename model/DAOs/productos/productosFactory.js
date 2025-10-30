import ModelFile from "./productosFile.js"
import ModelMem from "./productosMem.js"
import ModelMongoDB from "./productosMongoDB.js"


class ModelFactory {
    static get(tipo) {
        switch(tipo) {
            case 'MEM':
                console.log('*** Persistiendo en Memoria (productos) ***')
                return new ModelMem()
            
            case 'FILE':
                console.log('*** Persistiendo en File System (productos) ***')
                return new ModelFile()

            case 'MONGODB':
                console.log('*** Persistiendo en Base de Datos MongoDB (productos) ***')
                return new ModelMongoDB()

            default:
                console.log('*** Persistiendo en Memoria (default) (productos) ***')
                return new ModelMem()
        }
    }
}

export default ModelFactory