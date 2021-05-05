const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use( bodyParser.json() )
app.use( express.urlencoded( { extended: true} ) );

const router = require('./routes/router')
app.use( router )

const apicache = require('apicache').middleware
const CACHE_DURATION = '5 minutes'

app.use( apicache( CACHE_DURATION ) )

module.exports = app
