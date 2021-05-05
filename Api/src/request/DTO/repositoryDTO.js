class RepositoryDTO {
    REPO_PATH = '/repos'
    params = {
        type: '',
        sort: '',
        direction: '',
        per_page: null,
        page: 1
    } 

    constructor( params ) {
        this.params.type = params.type
        this.params.sort = params.sort
        this.params.direction = params.direction
        this.params.per_page = params.per_page || 20
        this.params.page = params.page || 1
    }

}

module.exports = RepositoryDTO
    