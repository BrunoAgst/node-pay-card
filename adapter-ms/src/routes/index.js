const router = require('express').Router()
const handler = require('../controller')
const middleware = require('../middleware')

router.post('/create', middleware.create, handler.create)

module.exports = router