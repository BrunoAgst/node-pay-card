'use strict'

const controller = require('../controller/index.js')

const Router = require('express').Router()

Router.post('/idempotency/create', controller.create)

module.exports = Router