const router = require('express').Router()
const handler = require('../controller')

router.post('/create', handler.create)

module.exports = router