const repositoryService = require( '../service/repositoryService' )


class RepositoryController {
    async getRepository( req, res ) {
        try {
            const { sort, qtd, language, order, page } = req.query
            
            const response = await repositoryService.getRepositoriesTakeBlip( sort, qtd, language, order, page )

            return res.status(200).json( response ).end()

        } catch ( err ) {
            return res.status( err.status ).json( err.message ).end()
        }
            
    }
}

module.exports = new RepositoryController()
