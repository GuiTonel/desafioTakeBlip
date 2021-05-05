const repositoryRequest = require( '../request/repositoryRequest' )
const RepositoryDTO = require( '../request/DTO/repositoryDTO' )
const RepositoryModel = require( '../model/repositoryModel' )


class RepositoryService {

    async getRepositoriesTakeBlip( sort, qtd = 20, language, order, page = 1 ) {
        var groupedRepositoriesResponseJson = {}
        var repositoryDTO = new RepositoryDTO( { sort: sort, direction: order, per_page: qtd, page: page } )
        var repositoryIndex = 0
        try {
            do {
                let responseRepository = await repositoryRequest.getTakeBlipRepositories( repositoryDTO )
 
                for ( let repository of responseRepository ) {
                    if ( String( repository.language ).toUpperCase() !== language.toUpperCase() && ( typeof language !== 'undefined' ) ) continue
                    
                    let repositoryModel = new RepositoryModel( repository.full_name, repository.description, repository.language )
                    
                    repositoryIndex += 1
                    groupedRepositoriesResponseJson[ `repository${repositoryIndex}` ] = repositoryModel     
                }
                
                repositoryDTO.params.page += 1
                repositoryDTO.params.per_page = qtd - repositoryIndex
    
            } while ( repositoryIndex < qtd )

            return groupedRepositoriesResponseJson 

        } catch ( err ) {
            console.log( err )
            throw Error( "Falha ao recuperar repositorios" )
        }
    }

}   

module.exports = new RepositoryService()
