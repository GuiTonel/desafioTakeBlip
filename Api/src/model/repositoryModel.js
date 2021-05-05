class RepositoryModel {
    nomeCompleto = ''
    descricao = ''
    language = ''

    constructor( nomeCompleto, descricao, language ) {
        this.nomeCompleto = nomeCompleto
        this.descricao = descricao
        this.language = language
    }

}

module.exports = RepositoryModel
