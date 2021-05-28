const repositoryRequest = require('../request/repositoryRequest')
const RepositoryDTO = require('../request/DTO/repositoryDTO')
const RepositoryModel = require('../model/repositoryModel')
const InternalException = require('../exception/internalException')
const TimeoutException = require('../exception/timeoutException')



class RepositoryService {

    TIMEOUT = 5000

    async getRepositoriesTakeBlip(sort, qtd = 20, language, order, page = 1) {
        var groupedRepositoriesResponseJson = {}
        var repositoryDTO = new RepositoryDTO({
            sort: sort,
            direction: order,
            per_page: qtd,
            page: page
        })
        var repositoryIndex = 0
        let startTime = Date.now();

        try {
            do {
                if (Date.now() - startTime >= this.TIMEOUT) {
                    throw new TimeoutException()
                }
                let responseRepository = await repositoryRequest.getTakeBlipRepositories(repositoryDTO)

                for (let repository of responseRepository) {
                    if (String(repository.language).toUpperCase() !== language.toUpperCase() && (typeof language !== 'undefined')) continue

                    let repositoryModel = new RepositoryModel(repository.full_name, repository.description, repository.language)

                    repositoryIndex += 1
                    groupedRepositoriesResponseJson[`repository${ repositoryIndex }`] = repositoryModel

                    if (repositoryIndex == qtd) break
                }

                repositoryDTO.params.page += 1

            } while (repositoryIndex < qtd)

            return groupedRepositoriesResponseJson

        } catch (err) {
            console.log(err)
            if (err instanceof TimeoutException) {
                throw new TimeoutException()
            } else {
                throw new InternalException()
            }
        }
    }

}

module.exports = new RepositoryService()