const axios = require('axios')

class RepositoryRequest {
    TAKE_URL = 'https://api.github.com/users/takenet'
    HEADER = {
        'Accept': 'application/vnd.github.v3+json'
    }
    TIMEOUT = 3000

    constructor() {
        this.axios = axios.create( {
            baseURL: this.TAKE_URL,
            timeout: this.TIMEOUT,
            headers: this.HEADER
        } )
    }

    async getTakeBlipRepositories( repositoryDTO ) {
        try {
            const response = await this.axios.get( repositoryDTO.REPO_PATH, {
                params: repositoryDTO.params
            } )

            return response.data

        } catch ( err ) {
            console.log( err )

            throw Error( "Erro ao realizar requisição ao github." )
        }
            
    }

}

module.exports = new RepositoryRequest()
