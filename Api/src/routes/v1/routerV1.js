const routerV1 = require('express').Router()

const repositoryRoutes = require('./repositoryRoutes')
routerV1.use( repositoryRoutes )

module.exports = routerV1
