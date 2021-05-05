class InternalException {
    constructor() {
        this.message = "Erro interno."
        this.status = 500
    }
}

module.exports = new InternalException()
