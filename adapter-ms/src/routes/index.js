'use strict'

const Router = require('express').Router()
const controller = require('../controller')
const middleware = require('../middleware')

Router.post('/adapter/create', middleware.create, controller.create)

module.exports = Router