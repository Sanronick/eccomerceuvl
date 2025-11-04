import CnxMongoDB from "../../DBMongo.js"

class ModelMongoDB {
    constructor() {}

    obtenerPedidos = async () => {
        if(!CnxMongoDB.connectionOK) throw new Error('ERROR CNX BASE DE DATOS') 

        const pedidos = await CnxMongoDB.db.collection('pedidos').find({}).toArray()
        //console.log(pedidos)
        return pedidos
    }

    guardarPedido = async pedido => {
        if(!CnxMongoDB.connectionOK) throw new Error('ERROR CNX BASE DE DATOS') 
        
        await CnxMongoDB.db.collection('pedidos').insertOne(pedido)
        return pedido
    }
}

export default ModelMongoDB