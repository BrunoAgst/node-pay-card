const router = require('express').Router()
const handler = require('../controller')
router.post('/switch/create', handler.create)

module.exports = router