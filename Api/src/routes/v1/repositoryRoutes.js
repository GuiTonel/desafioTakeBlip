const router = require('express').Router()
const repositoryController = require('../../controller/repositoryController')

router.get( '/repos', repositoryController.getRepository )

module.exports = router
