const repositoryService = require( '../service/repositoryService' )
const InternalException = require('../exception/internalException')


class RepositoryController {
    async getRepository( req, res ) {
        try {
            const { sort, qtd, language, order, page } = req.query
            
            const response = await repositoryService.getRepositoriesTakeBlip( sort, qtd, language, order, page )

            return res.status(200).json( response ).end()

        } catch ( err ) {
            console.log( err )

            return res.status( InternalException.status ).json( InternalException.message ).end()
        }
            
    }
}

module.exports = new RepositoryController()
