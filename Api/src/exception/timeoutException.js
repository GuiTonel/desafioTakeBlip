class TimeoutException extends Error {
    constructor() {
        super( "Tempo de processamento da requisição expirado." )
        this.status = 500
    }
}

module.exports = TimeoutException
