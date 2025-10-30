import Server from "./server.js";

import config from './config.js'
import CnxMongoDB from "./model/DBMongo.js";

if(
    config.MODO_PERSISTENCIA_PRODUCTOS == 'MONGODB' ||
    config.MODO_PERSISTENCIA_PEDIDOS == 'MONGODB'
) {
    await CnxMongoDB.conectar()
}

const server = new Server(config.PORT)
server.start()
