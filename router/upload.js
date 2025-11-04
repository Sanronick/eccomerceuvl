import express from 'express'

import Controlador from '../controlador/upload.js'

import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/tmp/mis-uploads')
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

const upload = multer({storage: storage})


class Router {
    #controlador = null
    constructor() {
        this.#controlador = new Controlador()
    }

    config() {
        const router = express.Router()

        router.post('/', upload.single('archivo'), this.#controlador.recibirArchivo)

        return router
    }
}

export default Router