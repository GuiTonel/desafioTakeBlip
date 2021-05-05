class InternalException extends Error {
    constructor() {
        super( "Erro interno." )
        this.status = 500
    }
}

module.exports = InternalException
