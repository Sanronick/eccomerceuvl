class Servicio {

    constructor() {}

    recibirArchivo = async function(file) {
        const url = 'http://localhost:8080/tmp/mis-uploads/' + file.filename
        return url
    }
}

export default Servicio